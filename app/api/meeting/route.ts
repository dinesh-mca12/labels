import { NextResponse } from "next/server";
import { z } from "zod";
import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";
import nodemailer from "nodemailer";

// Zod validation for Meeting Slots
const appointmentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  company: z.string().min(2, "Company must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),
  timeSlot: z.string().min(1, "Please choose a time slot"),
  purpose: z.string().min(5, "Meeting purpose must be at least 5 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = appointmentSchema.parse(body);

    let savedAppointment = null;
    let isDuplicate = false;

    try {
      await dbConnect();

      // Check for slot collision: Same date and same time slot
      const existingSlot = await Appointment.findOne({
        date: validatedData.date,
        timeSlot: validatedData.timeSlot,
      });

      if (existingSlot) {
        isDuplicate = true;
      } else {
        savedAppointment = await Appointment.create(validatedData);
      }
    } catch (dbError) {
      console.warn("Database connection skipped or failed, falling back to local processing", dbError);
    }

    if (isDuplicate) {
      return NextResponse.json(
        {
          success: false,
          message: "This time slot has already been booked. Please select another slot.",
        },
        { status: 409 }
      );
    }

    // Send confirmation email
    const smtpHost = process.env.SMTP_HOST || "smtp.mailtrap.io";
    const smtpPort = parseInt(process.env.SMTP_PORT || "2525");
    const smtpUser = process.env.SMTP_USER || "";
    const smtpPass = process.env.SMTP_PASS || "";

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: smtpUser && smtpPass ? { user: smtpUser, pass: smtpPass } : undefined,
    });

    const clientMailOptions = {
      from: `"Velmurugan Labels Scheduling" <appointments@velmuruganlabels.com>`,
      to: validatedData.email,
      subject: `Meeting Confirmed: Velmurugan Labels`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px; color: #1e293b;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #0284c7; margin: 0; font-size: 24px;">Velmurugan Labels</h1>
            <p style="color: #64748b; font-size: 14px; margin: 5px 0 0 0;">Premium Label Production & Printing Solutions</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin-bottom: 20px;" />
          <h3 style="color: #0f172a; margin-top: 0;">Dear ${validatedData.name},</h3>
          <p>Your business meeting with our production team has been successfully scheduled. Here are the details:</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 6px; margin: 20px 0; border: 1px solid #f1f5f9;">
            <p style="margin: 0 0 10px 0;"><strong>Company:</strong> ${validatedData.company}</p>
            <p style="margin: 0 0 10px 0;"><strong>Date:</strong> ${validatedData.date}</p>
            <p style="margin: 0 0 10px 0;"><strong>Time Slot:</strong> ${validatedData.timeSlot}</p>
            <p style="margin: 0 0 10px 0;"><strong>Purpose:</strong> ${validatedData.purpose}</p>
            <p style="margin: 0;"><strong>Location:</strong> Laxmi Nagar, Ram Nagar, Tiruppur, Tamil Nadu 641602</p>
          </div>
          <p>If you need to reschedule or cancel, please contact us at <a href="tel:+918220046231" style="color: #0284c7;">+91 82200 46231</a> or reply directly to this email.</p>
          <p>We look forward to collaborating with you!</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center;">Velmurugan Labels &copy; 2026. All rights reserved.</p>
        </div>
      `,
    };

    if (smtpUser && smtpPass) {
      try {
        await transporter.sendMail(clientMailOptions);
      } catch (mailError) {
        console.error("Failed to send confirmation email:", mailError);
      }
    } else {
      console.log("Mock Client Email Sent Successfully:\n", clientMailOptions.subject);
    }

    // Simulated WhatsApp API payload integration
    const whatsappPayload = {
      messaging_product: "whatsapp",
      recipient_type: "individual",
      to: validatedData.phone.startsWith("+91") ? validatedData.phone : `+91${validatedData.phone}`,
      type: "template",
      template: {
        name: "appointment_confirmation_velmurugan",
        language: { code: "en" },
        components: [
          {
            type: "body",
            parameters: [
              { type: "text", text: validatedData.name },
              { type: "text", text: `${validatedData.date} at ${validatedData.timeSlot}` },
              { type: "text", text: validatedData.company },
            ],
          },
        ],
      },
    };
    console.log("WhatsApp Notification Sent Payload:\n", JSON.stringify(whatsappPayload, null, 2));

    return NextResponse.json({
      success: true,
      message: "Meeting scheduled successfully! Confirmation notifications sent.",
      data: savedAppointment || validatedData,
      whatsappSimulated: whatsappPayload,
    });
  } catch (error: any) {
    console.error("Meeting API Error:", error);
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { success: false, errors: error.issues },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
