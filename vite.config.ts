import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { TanStackRouterVite } from '@tanstack/router-vite-plugin';

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
