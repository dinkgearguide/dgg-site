import type { MetadataRoute } from "next";
import { products } from "@/data/products";

export const dynamic = "force-static";

const siteUrl = "https://dinkgearguide.com";

const staticPages = [
  "/",
  "/gear-checklist/",
  "/starter-sets/",
  "/beginner-paddles/",
  "/bags/",
  "/balls/",
  "/gifts/",
  "/gear/",
  "/gear-decision-framework/",
  "/about/",
  "/contact/",
  "/affiliate-disclosure/",
  "/privacy-policy/",
  "/terms/"
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-05-19");

  return [
    ...staticPages.map((path) => ({
      url: `${siteUrl}${path}`,
      lastModified,
      changeFrequency: path === "/" ? "weekly" as const : "monthly" as const,
      priority: path === "/" ? 1 : 0.8
    })),
    ...products.map((product) => ({
      url: `${siteUrl}/gear/${product.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: product.featured ? 0.7 : 0.6
    }))
  ];
}
