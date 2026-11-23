import dotenv from "dotenv";
import { resolve } from "node:path";
import { z } from "zod";

const backendDirectory = resolve(__dirname, "../..");
dotenv.config({ path: resolve(backendDirectory, ".env") });

const envSchema = z.object({
  PORT: z.preprocess((value) => {
    if (
      value === undefined ||
      value === null ||
      (typeof value === "string" && value.trim() === "")
    )
      return 5000;
    return typeof value === "string" ? Number(value) : value;
  }, z.number().int().positive().default(5000)),
  MONGO_URI: z.string().trim().min(1, "MONGO_URI is required"),
  ADMIN_KEY: z.string().trim().min(1).optional(),
  NODE_ENV: z
    .enum(["development", "test", "production"])
    .default("development"),
});

const parsed = envSchema.safeParse(process.env);
if (!parsed.success) {
  console.error(
    "Invalid environment configuration:",
    parsed.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("; "),
  );
  process.exit(1);
}

export const env = parsed.data;
