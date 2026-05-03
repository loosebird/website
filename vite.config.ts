import { defineConfig } from "vite-plus";
import Sitemap from "vite-plugin-sitemap";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt: {},
  lint: { options: { typeAware: true, typeCheck: true } },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        community: resolve(__dirname, "community.html"),
        donate: resolve(__dirname, "donate.html"),
        faq: resolve(__dirname, "faq.html"),
        news: resolve(__dirname, "news.html"),
        projects: resolve(__dirname, "projects.html"),
      },
    },
  },

  plugins: [
    Sitemap({
      hostname: "https://loosebird.org",
      dynamicRoutes: ["/", "/community", "/donate", "/faq", "/news", "/projects"],
      generateRobotsTxt: true,
      robots: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
    }),
  ],
});
