import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleAISync } from "./routes/ai-sync";

export async function createServer() {
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

  // Lazy-load Supabase-dependent routes
  const { handlePublish, handleGetProducts } = await import("./routes/publish");
  const { handleAgentLoop, startAgentLoopScheduler } = await import("./routes/agent-loop");

  app.post("/api/publish", handlePublish);
  app.get("/api/products", handleGetProducts);
  app.post("/api/agent-loop", handleAgentLoop);
  app.get("/api/agent-loop", handleAgentLoop);

  // Start scheduled agent loop in production
  if (process.env.NODE_ENV !== "development") {
    startAgentLoopScheduler();
  }

  return app;
}
