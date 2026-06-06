import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || "https://dra-nayara-tofoli.pages.dev",
  integrations: [
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // Otimizações de imagem nativas do Astro
  image: {
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  // Compressão e performance
  compressHTML: true,
  build: {
    inlineStylesheets: "auto",
  },
});
