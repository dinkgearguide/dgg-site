import type { Product } from "@/types/product";
import { getProductById } from "@/data/products";
import { ProductGrid } from "@/components/ProductGrid";

export function RelatedProducts({ product }: { product: Product }) {
  const related = product.relatedProductIds.map(getProductById).filter((item): item is Product => Boolean(item));
  if (!related.length) return null;
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-black text-ink">Related products</h2>
      <div className="mt-4"><ProductGrid products={related} /></div>
    </section>
  );
}
