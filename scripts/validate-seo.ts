import { existsSync, readFileSync } from "node:fs";
import { guides } from "../src/data/guides";
import { products } from "../src/data/products";
import { siteConfig } from "../src/lib/site";
import { absoluteUrl, isPlaceholderAffiliateUrl, isProductIndexable } from "../src/lib/seo";

function fail(message: string): never {
  throw new Error(`SEO validation failed: ${message}`);
}

if (!existsSync("public/sitemap.xml")) fail("public/sitemap.xml is missing");
if (!existsSync("public/robots.txt")) fail("public/robots.txt is missing");

const sitemap = readFileSync("public/sitemap.xml", "utf8");
const robots = readFileSync("public/robots.txt", "utf8");

const sitemapUrls = Array.from(sitemap.matchAll(/<loc>(.*?)<\/loc>/g)).map((match) => match[1]);
const sitemapUrlSet = new Set(sitemapUrls);
const duplicateSitemapUrls = sitemapUrls.filter((url, index) => sitemapUrls.indexOf(url) !== index);
if (duplicateSitemapUrls.length) fail(`duplicate sitemap URLs: ${Array.from(new Set(duplicateSitemapUrls)).join(", ")}`);

const siteOrigin = new URL(siteConfig.domain).origin;
const rootUrl = new URL("/", siteOrigin).toString();
const sitemapUrl = new URL("/sitemap.xml", siteOrigin).toString();
const requiredResourceUrls = [
  "/pickleball-gear-checklist-printable/",
  "/pickleball-club-beginner-gear-handout/",
  "/resources/"
].map((path) => new URL(path, siteOrigin).toString());
const robotsSitemapUrls = Array.from(robots.matchAll(/^Sitemap:\s*(\S+)\s*$/gim)).map((match) => match[1]);

if (!sitemapUrlSet.has(rootUrl)) fail("sitemap does not contain the root domain URL");
if (!robotsSitemapUrls.some((url) => new URL(url).toString() === sitemapUrl)) fail("robots.txt does not reference the sitemap");
for (const url of requiredResourceUrls) {
  if (!sitemapUrlSet.has(url)) fail(`resource page is missing from sitemap: ${url}`);
}

for (const url of sitemapUrls) {
  const parsedUrl = new URL(url);
  if (parsedUrl.hash) fail(`sitemap URL contains a hash: ${url}`);
  if (parsedUrl.hostname === "localhost") fail(`sitemap URL contains localhost: ${url}`);
  if (parsedUrl.hostname === "github.io" && parsedUrl.pathname.startsWith("/dgg-site/")) {
    fail(`sitemap URL contains a GitHub Pages basePath: ${url}`);
  }
  if (parsedUrl.pathname.startsWith("/dgg-site/")) fail(`sitemap URL contains a GitHub Pages basePath: ${url}`);
}

const slugs = products.map((product) => product.slug);
const duplicateSlugs = slugs.filter((slug, index) => slugs.indexOf(slug) !== index);
if (duplicateSlugs.length) fail(`duplicate product slugs: ${Array.from(new Set(duplicateSlugs)).join(", ")}`);

for (const product of products) {
  if (!product.slug) fail(`product is missing a slug: ${product.name}`);

  const productUrl = absoluteUrl(`/gear/${product.slug}/`);
  if (isPlaceholderAffiliateUrl(product.affiliateUrl) && sitemapUrlSet.has(productUrl)) {
    fail(`placeholder affiliate product appears in sitemap: ${product.slug}`);
  }

  if (isProductIndexable(product) && isPlaceholderAffiliateUrl(product.affiliateUrl)) {
    fail(`indexable product has a placeholder affiliate URL: ${product.slug}`);
  }
}

for (const guide of guides) {
  const guideUrl = absoluteUrl(`/guides/${guide.slug}/`);
  if (!sitemapUrlSet.has(guideUrl)) fail(`published guide is missing from sitemap: ${guide.slug}`);
}

console.log(`SEO validation passed for ${sitemapUrls.length} sitemap URLs and ${products.length} products.`);
