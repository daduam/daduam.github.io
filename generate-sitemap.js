const fs = require("fs");
const globby = require("globby");
const baseURL = "https://kwadjo.me";

const generateSitemap = async () => {
  const pages = await globby([
    "src/pages/**/*.{ts,tsx}",
    "!src/pages/_*.{ts,tsx}",
  ]);

  const urlSet = pages
    .map((page) => {
      const path = page.replace("src/pages", "").replace(/(.tsx|.ts)/, "");
      const route = path == "/index" ? "" : path;
      return `<url><loc>${baseURL}${route}</loc></url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

  fs.writeFileSync("public/sitemap.xml", sitemap);
};

module.exports = generateSitemap;
