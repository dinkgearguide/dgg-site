import { existsSync, readFileSync } from "node:fs";
import { products } from "../src/data/products";
import { absoluteUrl, isPlaceholderAffiliateUrl, isProductIndexable } from "../src/lib/seo";

function fail(message: string): never {
  throw new Error(`SEO validation failed: ${message}`);
}

if (!existsSync("public/sitemap.xml")) fail("public/sitemap.xml is missing");
if (!existsSync("public/robots.txt")) fail("public/robots.txt is missing");

const sitemap = readFileSync("public/sitemap.xml", "utf8");
const robots = readFileSync("public/robots.txt", "utf8");

if (!sitemap.includes("https://dinkgearguide.com/")) fail("sitemap does not contain the root domain URL");
if (!robots.includes("https://dinkgearguide.com/sitemap.xml")) fail("robots.txt does not reference the sitemap");

const sitemapUrls = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g)).map((match) => match[1]);
const duplicateSitemapUrls = sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index);
if (duplicateSitemapUrls.length) fail(`duplicate sitemap URLs: ${Array.from(new Set(duplicateSitemapUrls)).join(", ")}`);

for (const url of sitemapUrls) {
  if (url.includes("#")) fail(`sitemap URL contains a hash: ${url}`);
  if (url.includes("localhost")) fail(`sitemap URL contains localhost: ${url}`);
  if (url.includes("github.io/dgg-site") || url.includes("/dgg-site/")) fail(`sitemap URL contains a GitHub Pages basePath: ${url}`);
}

const slugs = products.map((product) => product.slug);
const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
if (duplicateSlugs.length) fail(`duplicate product slugs: ${Array.from(new Set(duplicateSlugs)).join(", ")}`);

for (const product of products) {
  if (!product.slug) fail(`product is missing a slug: ${product.name}`);

  const productUrl = absoluteUrl(`/gear/${product.slug}/`);
  if (isPlaceholderAffiliateUrl(product.affiliateUrl) && sitemap.includes(productUrl)) {
    fail(`placeholder affiliate product appears in sitemap: ${product.slug}`);
  }

  if (isProductIndexable(product) && isPlaceholderAffiliateUrl(product.affiliateUrl)) {
    fail(`indexable product has a placeholder affiliate URL: ${product.slug}`);
  }
}

console.log(`SEO validation passed for ${sitemapUrls.length} sitemap URLs and ${products.length} products.`);
