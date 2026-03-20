import { createServer } from "./index";

async function start() {
  const app = await createServer();
  const port = process.env.PORT || 3001;

  app.listen(port, () => {
    console.log(`🚀 Dev API server running on port ${port}`);
  });

  // Graceful shutdown
  process.on("SIGTERM", () => {
    console.log("🛑 Received SIGTERM, shutting down gracefully");
    process.exit(0);
  });

  process.on("SIGINT", () => {
    console.log("🛑 Received SIGINT, shutting down gracefully");
    process.exit(0);
  });
}

start().catch((error) => {
  console.error("Failed to start dev server:", error);
  process.exit(1);
});
