import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInquiry extends Document {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: "Pending" | "Contacted" | "Resolved";
  createdAt: Date;
}

const InquirySchema: Schema = new Schema<IInquiry>(
  {
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    phone: { type: String, required: [true, "Phone number is required"] },
    service: { type: String, required: [true, "Service type is required"] },
    message: { type: String, required: [true, "Message is required"] },
    status: {
      type: String,
      enum: ["Pending", "Contacted", "Resolved"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const Inquiry: Model<IInquiry> =
  mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);

export default Inquiry;
