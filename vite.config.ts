import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { URL, fileURLToPath } from "node:url";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/WarhammerKemerovo/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      components: fileURLToPath(new URL("./src/components", import.meta.url)),
      constants: fileURLToPath(new URL("./src/constants", import.meta.url)),
      types: fileURLToPath(new URL("./src/types", import.meta.url)),
      pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
      assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
      navigation: fileURLToPath(new URL("./src/navigation", import.meta.url)),
    },
  },
});
