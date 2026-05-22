import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Appointment from "@/models/Appointment";

// Pre-seeded mock appointments for offline mode
let mockAppointments = [
  {
    _id: "mock-apt-1",
    name: "Dinesh Kumar",
    company: "Tiruppur Apparel Hub",
    email: "dinesh@tiruppurapparel.com",
    phone: "+91 98944 56789",
    date: "2026-05-25",
    timeSlot: "10:00 AM - 11:00 AM",
    purpose: "OEM Tag Labeling Discussion",
    createdAt: new Date("2026-05-22T09:30:00Z").toISOString(),
  },
  {
    _id: "mock-apt-2",
    name: "Anitha Srinivasan",
    company: "Nila Cosmetics Ltd",
    email: "anitha@nilacosmetics.in",
    phone: "+91 97865 43210",
    date: "2026-05-26",
    timeSlot: "02:00 PM - 03:00 PM",
    purpose: "Waterproof Sticker Samples Proofing",
    createdAt: new Date("2026-05-21T16:45:00Z").toISOString(),
  },
];

export async function GET() {
  try {
    await dbConnect();
    const appointments = await Appointment.find().sort({ date: 1, timeSlot: 1 });
    return NextResponse.json({
      success: true,
      appointments,
      offline: false,
    });
  } catch (error) {
    console.warn("Database connection failed in appointments admin API. Serving mock data.", error);
    return NextResponse.json({
      success: true,
      appointments: mockAppointments,
      offline: true,
    });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, message: "Missing appointment ID" }, { status: 400 });
    }

    try {
      await dbConnect();
      const deleted = await Appointment.findByIdAndDelete(id);
      if (deleted) {
        return NextResponse.json({ success: true, message: "Appointment cancelled successfully", offline: false });
      }
    } catch (dbError) {
      console.warn("Database connection offline during DELETE. Modifying mock appointments.", dbError);
    }

    // Mock delete fallback
    const index = mockAppointments.findIndex((apt) => apt._id === id);
    if (index !== -1) {
      mockAppointments.splice(index, 1);
      return NextResponse.json({ success: true, message: "Appointment cancelled successfully (mock)", offline: true });
    }

    return NextResponse.json({ success: false, message: "Appointment not found" }, { status: 404 });
  } catch (error) {
    console.error("DELETE Appointment Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
