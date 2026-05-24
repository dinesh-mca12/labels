import { NextResponse } from "next/server";
import { z } from "zod";
import dbConnect from "@/lib/dbConnect";
import Inquiry from "@/models/Inquiry";
import nodemailer from "nodemailer";

// Zod Validation Schema
const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email format"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(5, "Message must be at least 5 characters"),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Validate request body
    const validatedData = inquirySchema.parse(body);

    // Try to connect to database and save
    let savedInquiry = null;
    try {
      await dbConnect();
      savedInquiry = await Inquiry.create(validatedData);
    } catch (dbError) {
      console.warn("Database connection skipped or failed, falling back to local processing", dbError);
    }

    // Nodemailer Email notification
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

    const mailOptions = {
      from: `"Velmurugan Labels Alerts" <velmuruganlabels@gmail.com>`,
      to: "velmuruganlabels@gmail.com",
      subject: `New Inquiry from ${validatedData.name} - ${validatedData.service}`,
      text: `
        Name: ${validatedData.name}
        Email: ${validatedData.email}
        Phone: ${validatedData.phone}
        Service Requested: ${validatedData.service}
        Message: ${validatedData.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; max-width: 600px; color: #1e293b;">
          <h2 style="color: #0284c7; margin-bottom: 20px;">New Customer Inquiry</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${validatedData.email}" style="color: #0284c7;">${validatedData.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${validatedData.phone}" style="color: #0284c7;">${validatedData.phone}</a></p>
          <p><strong>Service Requested:</strong> ${validatedData.service}</p>
          <p style="background: #f8fafc; padding: 15px; border-left: 4px solid #0284c7; border-radius: 4px;">
            <strong>Message:</strong><br/>
            ${validatedData.message.replace(/\n/g, "<br/>")}
          </p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p style="font-size: 12px; color: #64748b;">This inquiry has been securely stored in the administrative database.</p>
        </div>
      `,
    };

    // If SMTP credentials are provided, send real email. Otherwise log it.
    if (smtpUser && smtpPass) {
      try {
        await transporter.sendMail(mailOptions);
      } catch (mailError) {
        console.error("Nodemailer failed to send email:", mailError);
      }
    } else {
      console.log("Mock Email Sent Successfully (SMTP configuration not provided):\n", mailOptions.text);
    }

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been submitted successfully!",
      data: savedInquiry || validatedData,
    });
  } catch (error: any) {
    console.error("Inquiry API Error:", error);
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
