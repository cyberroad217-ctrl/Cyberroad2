import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleAISync } from "./routes/ai-sync";
import { handlePublish, handleGetProducts } from "./routes/publish";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json({ limit: '50mb' }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.get("/api/ai-sync", handleAISync);
  app.post("/api/publish", handlePublish);
  app.get("/api/products", handleGetProducts);

  return app;
}
