import mongoose, { Schema } from "mongoose";

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    source: { type: String, default: "insights", trim: true },
  },
  { timestamps: true },
);

export const Subscriber =
  mongoose.models.Subscriber || mongoose.model("Subscriber", subscriberSchema);
