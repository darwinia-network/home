import legacy from "@vitejs/plugin-legacy";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";
import packageJson from "./package.json" with { type: "json" };

export default defineConfig({
  plugins: [react(), legacy({ targets: packageJson.browserslist.production })],
  server: { port: 3003 },
  build: { outDir: "build" },
  test: { environment: "jsdom", maxWorkers: 2 },
});
