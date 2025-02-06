import mongoose, { Document, Schema, Model } from "mongoose";

export interface IInternshipApplication extends Document {
  name: string;
  email: string;
  cvLink: string;
  status: "Pending" | "Approved" | "Rejected";
}

const InternshipApplicationSchema: Schema<IInternshipApplication> = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    cvLink: { type: String, required: true },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const InternshipApplication: Model<IInternshipApplication> = mongoose.model(
  "InternshipApplication",
  InternshipApplicationSchema
);

export default InternshipApplication;
