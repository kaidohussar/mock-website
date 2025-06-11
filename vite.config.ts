import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({})],
  server: {
    allowedHosts: ["784b-87-119-182-245.ngrok-free.app"],
  },
});
