import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import Machine from "@/models/Machine";

const DEFAULT_MACHINES = [
  {
    name: "Heidelberg Speedmaster XL 106",
    type: "Offset Printing",
    status: "Running Job",
    availability: 85,
    capacity: "18,000 sheets/hour",
    runningJob: "High-Volume Garment Hangtags (Vanguard Brand)",
    maintenanceSchedule: "Weekly Routine - Sunday 8 AM",
  },
  {
    name: "Gallus ECS 340 Granit",
    type: "Rotary Label Printing",
    status: "Active",
    availability: 100,
    capacity: "50,000 labels/hour",
    runningJob: "Ready for Next Batch (Self-Adhesive Stickers)",
    maintenanceSchedule: "Bi-weekly Service - Tuesday 10 PM",
  },
  {
    name: "Industrial Digital Printing Press",
    type: "Digital Printing",
    status: "Running Job",
    availability: 90,
    capacity: "30,000 premium labels/hour",
    runningJob: "Premium Foil-Stamped FMCG Food Labels (Aura Foods)",
    maintenanceSchedule: "Monthly Calibration - 1st Monday",
  },
  {
    name: "Sanki Rotary Letterpress",
    type: "Stickers & Die-Cutting",
    status: "Maintenance",
    availability: 0,
    capacity: "40,000 labels/hour",
    runningJob: "Undergoing Cylinder Calibration & Cleaning",
    maintenanceSchedule: "Under Maintenance - Estimated Completion 4 Hours",
  },
  {
    name: "Sakurai Cylinder Screen Press",
    type: "Screen Printing",
    status: "Active",
    availability: 100,
    capacity: "5,000 prints/hour",
    runningJob: "Idle - Standby for High-Gloss Spot UV Jobs",
    maintenanceSchedule: "Weekly Screen Cleaning - Wednesday 9 PM",
  },
  {
    name: "Daco DF350SR Die Cutter",
    type: "Finishing & Stickers",
    status: "Running Job",
    availability: 95,
    capacity: "150 meters/minute",
    runningJob: "Slitting & Rewinding Textile barcode sticker rolls",
    maintenanceSchedule: "Blade sharpening - Every 100,000 meters",
  },
];

export async function GET() {
  try {
    let machines = [];
    try {
      await dbConnect();
      machines = await Machine.find().lean();
      
      // Auto-seed database if empty
      if (machines.length === 0) {
        await Machine.insertMany(DEFAULT_MACHINES);
        machines = await Machine.find().lean();
      }
    } catch (dbError) {
      console.warn("Database failed to respond. Serving high-fidelity static fallback data.", dbError);
      machines = DEFAULT_MACHINES;
    }

    return NextResponse.json({
      success: true,
      data: machines,
    });
  } catch (error: any) {
    console.error("Machines API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal Server Error", data: DEFAULT_MACHINES },
      { status: 500 }
    );
  }
}

// Support updating machine status (future administrative dashboard capability)
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, status, availability, runningJob } = body;

    if (!id) {
      return NextResponse.json({ success: false, message: "Machine ID is required" }, { status: 400 });
    }

    await dbConnect();
    const updated = await Machine.findByIdAndUpdate(
      id,
      { status, availability, runningJob },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ success: false, message: "Machine not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Machine status updated successfully", data: updated });
  } catch (error) {
    console.error("Machines API Update Error:", error);
    return NextResponse.json({ success: false, message: "Failed to update machine" }, { status: 500 });
  }
}
