import mongoose, { Document, Schema, Model } from "mongoose";

export interface IOfficeRental extends Document {
  name: string;
  email: string;
  officeSize: number;
  comments: string;
  status: "Pending" | "Approved" | "Rejected";
}

const OfficeRentalSchema: Schema<IOfficeRental> = new mongoose.Schema(
  {
    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    officeSize: {
      type: Number,
      required: true,
    },
    comments: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },
  },
  { timestamps: true }
);

const OfficeRental: Model<IOfficeRental> = mongoose.model("OfficeRental", OfficeRentalSchema);

export default OfficeRental;
