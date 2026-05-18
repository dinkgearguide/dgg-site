import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductDetail } from "@/components/ProductDetail";
import { getProductBySlug, products } from "@/data/products";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return pageMetadata("Product Not Found | Dink Gear Guide", "Pickleball product not found.", "/gear/");
  return pageMetadata(`${product.name} | Dink Gear Guide`, product.shortDescription, `/gear/${product.slug}/`);
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "All Gear", path: "/gear/" }, { name: product.name, path: `/gear/${product.slug}/` }];
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <Breadcrumbs items={[{ label: "All Gear", href: "/gear/" }, { label: product.name, href: `/gear/${product.slug}/` }]} />
      <ProductDetail product={product} />
    </main>
  );
}
