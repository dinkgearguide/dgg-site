"use client";

import type { Product } from "@/types/product";

export function trackAffiliateClick(product: Product) {
  console.info("affiliate_click", {
    productId: product.id,
    productName: product.name,
    category: product.category,
    timestamp: new Date().toISOString(),
    affiliateNetwork: product.affiliateNetwork
  });
}
