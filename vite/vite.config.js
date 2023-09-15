import { defineConfig } from "vite";
import path from 'path'
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    devSourcemap: true,
  },
  server: {
    hmr: {
      protocol: "ws",
    },
  },
  build: {
    rollupOptions: {
      input: path.join(__dirname, "src", "main.js"),
    },
  },
});
