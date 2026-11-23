import express from "express";
import cors from "cors";
import { resolve } from "node:path";
import mongoose from "mongoose";
import { env } from "./config/env";
import { connectDB } from "./config/db";
import { seedTeam } from "./config/seedTeam";
import { apiRouter } from "./routes/apiRoutes";

const app = express();
const staticRoot = resolve(__dirname, "../..");

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
  app.listen(env.PORT, () => {
    console.log(`Server listening on http://localhost:${env.PORT}`);
  });
}

void startServer().catch((error) => {
  console.error(
    "Server startup failed:",
    error instanceof Error ? error.message : error,
  );
  mongoose.disconnect().finally(() => process.exit(1));
});
