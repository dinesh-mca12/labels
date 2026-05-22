import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Inquiry from "@/models/Inquiry";

// Pre-seeded mock inquiries for offline mode
let mockInquiries = [
  {
    _id: "mock-inq-1",
    name: "Karthik Raja",
    email: "karthik@fmcgproducts.in",
    phone: "+91 98432 12345",
    service: "Digital Printing",
    message: "We need 5,000 custom vinyl labels for our new soap dispenser line. High gloss and water-resistant. Please provide quotes.",
    status: "Pending",
    createdAt: new Date("2026-05-22T08:12:00Z").toISOString(),
  },
  {
    _id: "mock-inq-2",
    name: "Priyanka Subramanian",
    email: "priyanka.s@garmentsexport.com",
    phone: "+91 94421 98765",
    service: "Rotary Label Printing",
    message: "Looking for cotton satin neck labels for export quality knitwear. Must comply with OEKO-TEX standard.",
    status: "Contacted",
    createdAt: new Date("2026-05-21T14:35:00Z").toISOString(),
  },
  {
    _id: "mock-inq-3",
    name: "Madhavan Pillai",
    email: "madhavan@organicspices.co.in",
    phone: "+91 90033 44556",
    service: "Offset Printing",
    message: "Need premium gold foil embossed carton tags for our organic spices line. Initial batch of 10,000 tags.",
    status: "Resolved",
    createdAt: new Date("2026-05-20T10:00:00Z").toISOString(),
  },
];

export async function GET() {
  try {
    await dbConnect();
    const inquiries = await Inquiry.find().sort({ createdAt: -1 });
    return NextResponse.json({
      success: true,
      inquiries,
      offline: false,
    });
  } catch (error) {
    console.warn("Database connection failed in admin API. Serving mock inquiries.", error);
    return NextResponse.json({
      success: true,
      inquiries: mockInquiries,
      offline: true,
    });
  }
}

export async function PUT(req: Request) {
  try {
    const { id, status } = await req.json();
    if (!id || !status) {
      return NextResponse.json({ success: false, message: "Missing id or status" }, { status: 400 });
    }

    try {
      await dbConnect();
      const inquiry = await Inquiry.findByIdAndUpdate(id, { status }, { new: true });
      if (inquiry) {
        return NextResponse.json({ success: true, inquiry, offline: false });
      }
    } catch (dbError) {
      console.warn("Database connection offline during PUT. Updating mock inquiries.", dbError);
    }

    // Mock update fallback
    const mockInquiry = mockInquiries.find((inq) => inq._id === id);
    if (mockInquiry) {
      mockInquiry.status = status;
      return NextResponse.json({ success: true, inquiry: mockInquiry, offline: true });
    }

    return NextResponse.json({ success: false, message: "Inquiry not found" }, { status: 404 });
  } catch (error) {
    console.error("PUT Inquiry Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) {
      return NextResponse.json({ success: false, message: "Missing inquiry ID" }, { status: 400 });
    }

    try {
      await dbConnect();
      const deleted = await Inquiry.findByIdAndDelete(id);
      if (deleted) {
        return NextResponse.json({ success: true, message: "Inquiry deleted successfully", offline: false });
      }
    } catch (dbError) {
      console.warn("Database connection offline during DELETE. Modifying mock inquiries.", dbError);
    }

    // Mock delete fallback
    const index = mockInquiries.findIndex((inq) => inq._id === id);
    if (index !== -1) {
      mockInquiries.splice(index, 1);
      return NextResponse.json({ success: true, message: "Inquiry deleted successfully (mock)", offline: true });
    }

    return NextResponse.json({ success: false, message: "Inquiry not found" }, { status: 404 });
  } catch (error) {
    console.error("DELETE Inquiry Error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
