import type { Metadata } from "next";
import type { Guide } from "@/data/guides";
import type { Product } from "@/types/product";
import { siteConfig } from "@/lib/site";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
  image?: string;
};

export function absoluteUrl(path: string): string {
  if (!path || path === "/") return `${siteConfig.domain}/`;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.domain}${cleanPath}`;
}

export function isPlaceholderAffiliateUrl(url?: string): boolean {
  return !url || url.trim() === "" || url === "#" || url === "#replace-with-affiliate-link";
}

export function isProductIndexable(product: Product): boolean {
  if (product.seoIndexable === false) return false;
  if (isPlaceholderAffiliateUrl(product.affiliateUrl)) return false;
  return Boolean(
    product.name.trim() &&
      product.slug.trim() &&
      product.shortDescription.trim() &&
      product.longDescription.trim() &&
      product.category.trim() &&
      !isPlaceholderAffiliateUrl(product.affiliateUrl)
  );
}

export function buildPageMetadata({ title, description, path, noIndex = false, image }: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);
  const images = image ? [{ url: absoluteUrl(image), alt: title }] : undefined;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      type: "website",
      images
    },
    twitter: {
      card: "summary",
      title,
      description
    },
    robots: {
      index: !noIndex,
      follow: true,
      googleBot: {
        index: !noIndex,
        follow: true
      }
    }
  };
}

export function pageMetadata(title: string, description: string, path = "/", noIndex = false): Metadata {
  return buildPageMetadata({ title, description, path, noIndex });
}

export function pageMetadataWithImage(title: string, description: string, path: string, image: string, noIndex = false): Metadata {
  return buildPageMetadata({ title, description, path, image, noIndex });
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: `${siteConfig.domain}/`,
    description: siteConfig.description
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: `${siteConfig.domain}/`,
    description: siteConfig.tagline,
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
      item: absoluteUrl(item.path)
    }))
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${absoluteUrl(`/gear/${product.slug}/`)}#product`,
    name: product.name,
    description: product.longDescription,
    image: absoluteUrl(product.image),
    category: product.category,
    url: absoluteUrl(`/gear/${product.slug}/`),
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
    url: absoluteUrl(path),
    itemListElement: items.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: product.name,
      url: absoluteUrl(`/gear/${product.slug}/`)
    }))
  };
}

export function guideItemListJsonLd(name: string, path: string, items: Guide[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    url: absoluteUrl(path),
    itemListElement: items.map((guide, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: guide.title,
      url: absoluteUrl(`/guides/${guide.slug}/`)
    }))
  };
}

export function webPageJsonLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    }
  };
}

export function collectionPageJsonLd(name: string, description: string, path: string, items: Array<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(path),
    hasPart: items.map((item) => ({
      "@type": "WebPage",
      name: item.name,
      url: absoluteUrl(item.path)
    }))
  };
}

export function resourceArticleJsonLd(title: string, description: string, path: string, lastReviewedAt: string) {
  const url = absoluteUrl(path);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    datePublished: lastReviewedAt,
    dateModified: lastReviewedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.author
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };
}

export function articleJsonLd(guide: Guide) {
  const url = absoluteUrl(`/guides/${guide.slug}/`);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.lastReviewedAt,
    dateModified: guide.lastReviewedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.author
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url
    }
  };
}
