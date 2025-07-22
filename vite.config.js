import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// ✅ Corrected Vercel-compatible config
export default defineConfig({
  base: "./",
  plugins: [react(), tailwindcss()],
  build: { outDir: "dist" },
  assetsInclude: ["**/*.ttf", "**/*.woff", "**/*.woff2"],
});
