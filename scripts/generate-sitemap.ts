import { writeFileSync } from "node:fs";
import { guides } from "../src/data/guides";
import { products } from "../src/data/products";
import { absoluteUrl, isProductIndexable } from "../src/lib/seo";

type SitemapEntry = {
  path: string;
  lastmod: string;
  changefreq: "weekly" | "monthly" | "yearly";
  priority: string;
};

const today = new Date().toISOString().slice(0, 10);

const staticEntries: SitemapEntry[] = [
  { path: "/", lastmod: today, changefreq: "weekly", priority: "1.0" },
  { path: "/gear-checklist/", lastmod: today, changefreq: "monthly", priority: "0.9" },
  { path: "/pickleball-gear-checklist-printable/", lastmod: today, changefreq: "monthly", priority: "0.85" },
  { path: "/starter-sets/", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { path: "/beginner-paddles/", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { path: "/bags/", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { path: "/balls/", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { path: "/gifts/", lastmod: today, changefreq: "monthly", priority: "0.8" },
  { path: "/guides/", lastmod: today, changefreq: "weekly", priority: "0.8" },
  { path: "/resources/", lastmod: today, changefreq: "weekly", priority: "0.75" },
  { path: "/pickleball-club-beginner-gear-handout/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { path: "/gear/", lastmod: today, changefreq: "weekly", priority: "0.7" },
  { path: "/gear-decision-framework/", lastmod: today, changefreq: "monthly", priority: "0.7" },
  { path: "/about/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { path: "/contact/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { path: "/affiliate-disclosure/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { path: "/privacy-policy/", lastmod: today, changefreq: "yearly", priority: "0.3" },
  { path: "/terms/", lastmod: today, changefreq: "yearly", priority: "0.3" }
];

const productEntries: SitemapEntry[] = products.filter(isProductIndexable).map((product) => ({
  path: `/gear/${product.slug}/`,
  lastmod: product.lastReviewedAt ?? today,
  changefreq: "monthly",
  priority: "0.6"
}));

const guideEntries: SitemapEntry[] = guides.map((guide) => ({
  path: `/guides/${guide.slug}/`,
  lastmod: guide.lastReviewedAt,
  changefreq: "monthly",
  priority: "0.7"
}));

const entries = [...staticEntries, ...guideEntries, ...productEntries];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${absoluteUrl(entry.path)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync("public/sitemap.xml", xml);
