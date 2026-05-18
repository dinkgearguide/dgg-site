"use client";

import type { Product } from "@/types/product";
import { trackAffiliateClick } from "@/lib/affiliate";

export function AffiliateButton({ product }: { product: Product }) {
  const isPlaceholder = product.affiliateUrl === "#replace-with-affiliate-link";

  if (isPlaceholder) {
    return (
      <div className="space-y-1">
        <button
          type="button"
          disabled
          className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-md bg-slate-200 px-5 py-3 text-sm font-bold text-slate-500"
        >
          Check current price
        </button>
        <p className="text-xs font-medium text-slate-500">Link will be added after affiliate approval</p>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <a
        href={product.affiliateUrl}
        onClick={() => trackAffiliateClick(product)}
        className="inline-flex min-h-11 items-center justify-center rounded-md bg-court px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
        rel="sponsored nofollow"
      >
        Check current price
      </a>
      <p className="text-xs font-medium text-slate-500">Affiliate link</p>
    </div>
  );
}
