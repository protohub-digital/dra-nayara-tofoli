import type { APIRoute } from "astro";
import { SITE } from "../data/site";

export const GET: APIRoute = () => {
  const robotsTxt = `
User-agent: *
Allow: /

# Bloquear paths de admin ou privados (ajuste conforme necessário)
Disallow: /api/
Disallow: /_astro/

# Sitemap
Sitemap: ${SITE.url}/sitemap-index.xml

# Crawl delay (opcional — remova se não quiser)
Crawl-delay: 10
`.trim();

  return new Response(robotsTxt, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
