import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: "https://www.orangeseva.in",
      exclude: ["/404"],
      dynamicRoutes: [
        "/",
        "/about",
        "/gallery",
        "/testimonials",
        "/about/mission",
        "/about/team",
        "/about/history",
        "/about/impact",
        "/projects",
        "/donate",
        "/contact",
      ],
      changefreq: "weekly",
      priority: 0.8,
      lastmod: new Date(),
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
