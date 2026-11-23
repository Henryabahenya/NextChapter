import mongoose, { Schema } from "mongoose";

const teamMemberSchema = new Schema(
  {
    fullName: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    bio: { type: String, trim: true },
    photoUrl: { type: String, required: true, trim: true },
    displayOrder: { type: Number, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true },
);

export const TeamMember =
  mongoose.models.TeamMember || mongoose.model("TeamMember", teamMemberSchema);
