import { spawn } from "child_process";
import path from "path";

const __dirname = path.dirname(new URL(import.meta.url).pathname);

console.log("🚀 Starting dev environment...\n");

// Start Vite dev server
const vite = spawn("pnpm", ["exec", "vite"], {
  cwd: __dirname,
  stdio: "inherit",
  shell: true,
});

// Start Express dev server
const server = spawn("pnpm", ["exec", "tsx", "server/dev.ts"], {
  cwd: __dirname,
  stdio: "inherit",
  env: { ...process.env, PORT: "3001" },
  shell: true,
});

// Handle exit signals
const cleanup = () => {
  console.log("\n🛑 Shutting down servers...");
  vite.kill("SIGTERM");
  server.kill("SIGTERM");
  process.exit(0);
};

process.on("SIGINT", cleanup);
process.on("SIGTERM", cleanup);

// Handle process errors
vite.on("error", (error) => {
  console.error("Vite error:", error);
  cleanup();
});

server.on("error", (error) => {
  console.error("Server error:", error);
  cleanup();
});

// Handle process exit
vite.on("exit", (code) => {
  if (code !== 0) {
    console.error("Vite exited with code:", code);
    cleanup();
  }
});

server.on("exit", (code) => {
  if (code !== 0) {
    console.error("Server exited with code:", code);
    cleanup();
  }
});
