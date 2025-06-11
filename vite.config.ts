import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({})],
  server: {
    allowedHosts: ["b25e-87-119-178-33.ngrok-free.app"],
  },
});
