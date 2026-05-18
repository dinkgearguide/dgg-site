import type { Metadata } from "next";

const siteUrl = "https://dinkgearguide.com";

export function pageMetadata(title: string, description: string, path = "/"): Metadata {
  const canonical = `${siteUrl}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Dink Gear Guide",
      type: "website"
    }
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dink Gear Guide",
    url: siteUrl,
    description: "Beginner-friendly pickleball gear guides for paddles, starter sets, balls, bags, accessories, and gifts."
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteUrl}${item.path}`
    }))
  };
}
