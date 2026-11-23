import { Router, type Request, type Response } from "express";
import mongoose from "mongoose";
import { z } from "zod";
import { Enquiry } from "../models/Enquiry";
import { Subscriber } from "../models/Subscriber";
import { TeamMember } from "../models/TeamMember";
import { env } from "../config/env";

export const apiRouter = Router();

apiRouter.get("/health", (_request: Request, response: Response) => {
  response.json({
    status: "ok",
    database:
      mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

apiRouter.get("/team", async (_request: Request, response: Response) => {
  try {
    const team = await TeamMember.find({ isActive: true }).sort({
      displayOrder: 1,
      fullName: 1,
    });
    response.json(team);
  } catch {
    response.status(500).json({ message: "Failed to load team members" });
  }
});

const enquirySchema = z.object({
  type: z.enum(["contact", "join", "partnership", "project"]),
  fullName: z.string().trim().min(1, "Full name is required"),
  email: z.string().trim().email("A valid email is required"),
  organization: z.string().trim().optional(),
  subject: z.string().trim().optional(),
  interest: z.string().trim().optional(),
  message: z.string().trim().min(1, "Message is required"),
});

apiRouter.post("/enquiries", async (request: Request, response: Response) => {
  const parsed = enquirySchema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({
      message: parsed.error.issues
        .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
        .join("; "),
    });
    return;
  }

  try {
    const data = await Enquiry.create(parsed.data);
    response.status(201).json({
      success: true,
      message: "Thank you. Your submission has been received.",
      data,
    });
  } catch {
    response.status(500).json({ message: "Failed to save enquiry" });
  }
});

apiRouter.get("/enquiries", async (request: Request, response: Response) => {
  if (env.ADMIN_KEY) {
    const key = request.header("x-admin-key");
    if (!key || key !== env.ADMIN_KEY) {
      response.status(401).json({ message: "Unauthorized" });
      return;
    }
  }

  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    response.json(enquiries);
  } catch {
    response.status(500).json({ message: "Failed to load enquiries" });
  }
});

const subscriberSchema = z.object({
  email: z
    .string()
    .trim()
    .email("A valid email is required")
    .transform((email) => email.toLowerCase()),
  source: z.string().trim().optional(),
});

apiRouter.post("/subscribers", async (request: Request, response: Response) => {
  const parsed = subscriberSchema.safeParse(request.body);
  if (!parsed.success) {
    response.status(400).json({ message: parsed.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`).join('; ') });
    return;
  }

  try {
    const existing = await Subscriber.findOne({ email: parsed.data.email });
    if (existing) {
      response.status(200).json({
        success: true,
        message: "You are already subscribed to NextChapter updates.",
      });
      return;
    }

    await Subscriber.create({
      email: parsed.data.email,
      source: parsed.data.source ?? "insights",
    });
    response.status(201).json({
      success: true,
      message: "Subscribed successfully!",
    });
  } catch {
    response.status(500).json({ message: "Failed to subscribe" });
  }
});
