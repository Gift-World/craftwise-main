import { writeFileSync } from "fs";

const domain = "https://craftwiseacademy.com"; // Your domain

const routes = [
  "/",
  "/benefits",
  "/programs",
  "/talent",
  "/blogs",
  // Add more routes here
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `<url>
  <loc>${domain}${route}</loc>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>`
  )
  .join("\n")}
</urlset>`;

writeFileSync("public/sitemap.xml", sitemap);
console.log("✅ sitemap.xml generated!");
