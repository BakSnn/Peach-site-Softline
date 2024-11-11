import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/Peach-site-Softline/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
