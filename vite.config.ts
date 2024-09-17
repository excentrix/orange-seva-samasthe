import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv } from "vite";
import Sitemap from "vite-plugin-sitemap";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env variables based on the mode
  const env = loadEnv(mode, process.cwd());

  return {
    define: {
      "process.env": env,
    },
    plugins: [
      react(),
      Sitemap({
        hostname: env.VITE_HOSTNAME || "https://www.orangeseva.in",
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
  };
});
