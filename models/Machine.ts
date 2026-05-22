import mongoose, { Schema, Document, Model } from "mongoose";

export interface IMachine extends Document {
  name: string;
  type: string;
  status: "Active" | "Running Job" | "Maintenance" | "Offline";
  availability: number; // 0 to 100%
  capacity: string;
  runningJob?: string;
  maintenanceSchedule?: string;
}

const MachineSchema: Schema = new Schema<IMachine>(
  {
    name: { type: String, required: [true, "Machine name is required"] },
    type: { type: String, required: [true, "Machine type is required"] },
    status: {
      type: String,
      enum: ["Active", "Running Job", "Maintenance", "Offline"],
      default: "Active",
    },
    availability: { type: Number, default: 100, min: 0, max: 100 },
    capacity: { type: String, required: [true, "Production capacity is required"] },
    runningJob: { type: String },
    maintenanceSchedule: { type: String },
  },
  { timestamps: true }
);

const Machine: Model<IMachine> =
  mongoose.models.Machine || mongoose.model<IMachine>("Machine", MachineSchema);

export default Machine;
