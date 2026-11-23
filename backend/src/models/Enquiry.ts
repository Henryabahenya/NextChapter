import mongoose, { Schema } from "mongoose";

const enquirySchema = new Schema(
  {
    type: {
      type: String,
      enum: ["contact", "join", "partnership", "project"],
      required: true,
    },
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, lowercase: true },
    organization: { type: String, trim: true },
    subject: { type: String, trim: true },
    interest: { type: String, trim: true },
    message: { type: String, required: true, trim: true },
    status: {
      type: String,
      enum: ["new", "reviewed", "resolved"],
      default: "new",
    },
  },
  { timestamps: true },
);

export const Enquiry =
  mongoose.models.Enquiry || mongoose.model("Enquiry", enquirySchema);
