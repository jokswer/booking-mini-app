import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { URL, fileURLToPath } from "node:url";
import { defineConfig, loadEnv } from "vite";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: "/WarhammerKemerovo/",
    plugins: [react(), tailwindcss()],
    define: {
      __TOKEN__: JSON.stringify(env.TOKEN),
    },
    resolve: {
      alias: {
        components: fileURLToPath(new URL("./src/components", import.meta.url)),
        constants: fileURLToPath(new URL("./src/constants", import.meta.url)),
        types: fileURLToPath(new URL("./src/types", import.meta.url)),
        pages: fileURLToPath(new URL("./src/pages", import.meta.url)),
        assets: fileURLToPath(new URL("./src/assets", import.meta.url)),
        navigation: fileURLToPath(new URL("./src/navigation", import.meta.url)),
        services: fileURLToPath(new URL("./src/services", import.meta.url)),
      },
    },
  };
});
