import express from "express";
import cors from "cors";
import { existsSync } from "node:fs";
import { resolve } from "node:path";
import mongoose from "mongoose";
import { env } from "./config/env";
import { connectDB } from "./config/db";
import { seedTeam } from "./config/seedTeam";
import { apiRouter } from "./routes/apiRoutes";

const app = express();

// When running dist/server.js: __dirname is backend/dist.
// When running src/server.ts via tsx: __dirname is backend/src.
// Prefer the directory containing the repository frontend, but keep a safe
// fallback for repository layouts that differ during deployment.
const staticCandidates = [
  resolve(__dirname, "../.."),
  resolve(process.cwd(), ".."),
  resolve(process.cwd()),
];
const staticRoot = staticCandidates.find((candidate) =>
  existsSync(resolve(candidate, "index.html")),
) ?? resolve(__dirname, "../..");

app.use(cors());
app.use(express.json());

app.use("/api", apiRouter);

app.use("/api", (_request, response) => {
  response.status(404).json({ message: "Route not found" });
});

app.use(
  express.static(staticRoot, {
    setHeaders(response, filePath) {
      if (/\.(html?)$/i.test(filePath)) {
        response.setHeader("Cache-Control", "no-cache");
      } else if (/\.(css|js|png|jpe?g|gif|webp|svg|ico)$/i.test(filePath)) {
        response.setHeader("Cache-Control", "public, max-age=3600");
      }
    },
  }),
);

app.get("*", (_request, response) => {
  response.sendFile(resolve(staticRoot, "index.html"));
});

async function startServer(): Promise<void> {
  await connectDB();
  await seedTeam();
  const port = Number(process.env.PORT) || env.PORT || 5000;
  app.listen(port, "0.0.0.0", () => {
    console.log(`Server listening on http://0.0.0.0:${port}`);
  });
}

void startServer().catch((error) => {
  console.error(
    "Server startup failed:",
    error instanceof Error ? error.message : error,
  );
  mongoose.disconnect().finally(() => process.exit(1));
});
