import mongoose, { Schema, Document, Model } from "mongoose";

export interface IAppointment extends Document {
  name: string;
  company: string;
  email: string;
  phone: string;
  date: string; // ISO date string (YYYY-MM-DD)
  timeSlot: string; // e.g., '10:00 AM - 11:00 AM'
  purpose: string;
  createdAt: Date;
}

const AppointmentSchema: Schema = new Schema<IAppointment>(
  {
    name: { type: String, required: [true, "Name is required"] },
    company: { type: String, required: [true, "Company name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    phone: { type: String, required: [true, "Phone number is required"] },
    date: { type: String, required: [true, "Date is required"] },
    timeSlot: { type: String, required: [true, "Time slot is required"] },
    purpose: { type: String, required: [true, "Purpose of meeting is required"] },
  },
  { timestamps: true }
);

const Appointment: Model<IAppointment> =
  mongoose.models.Appointment ||
  mongoose.model<IAppointment>("Appointment", AppointmentSchema);

export default Appointment;
