import type { Metadata } from "next";
import type { Product } from "@/types/product";

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

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dink Gear Guide",
    url: siteUrl,
    description: "Beginner-friendly pickleball gear without the guesswork.",
    email: "info@dinkgearguide.com"
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

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${siteUrl}/gear/${product.slug}/#product`,
    name: product.name,
    description: product.longDescription,
    image: `${siteUrl}${product.image}`,
    category: product.category,
    url: `${siteUrl}/gear/${product.slug}/`,
    brand: {
      "@type": "Brand",
      name: "Dink Gear Guide"
    },
    audience: {
      "@type": "Audience",
      audienceType: `${product.skillLevel} pickleball players`
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Best for",
        value: product.bestFor
      },
      {
        "@type": "PropertyValue",
        name: "Skill level",
        value: product.skillLevel
      },
      {
        "@type": "PropertyValue",
        name: "Price tier",
        value: product.priceTier
      },
      {
        "@type": "PropertyValue",
        name: "Personally tested",
        value: product.personallyTested ? "Yes" : "No"
      }
    ]
  };
}

export function itemListJsonLd(name: string, path: string, items: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: `${siteUrl}${path}`,
    itemListElement: items.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: `${siteUrl}/gear/${product.slug}/`
    }))
  };
}
