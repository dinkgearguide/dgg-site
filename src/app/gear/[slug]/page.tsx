import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ProductDetail } from "@/components/ProductDetail";
import { getProductBySlug, products } from "@/data/products";
import { breadcrumbJsonLd, pageMetadata, productJsonLd } from "@/lib/seo";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return pageMetadata("Product Not Found | Dink Gear Guide", "Pickleball product not found.", "/gear/");
  return pageMetadata(`${product.name} | Dink Gear Guide`, product.shortDescription, `/gear/${product.slug}/`);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const crumbs = [{ name: "Home", path: "/" }, { name: "All Gear", path: "/gear/" }, { name: product.name, path: `/gear/${product.slug}/` }];
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd(crumbs)} />
      <JsonLd data={productJsonLd(product)} />
      <Breadcrumbs items={[{ label: "All Gear", href: "/gear/" }, { label: product.name, href: `/gear/${product.slug}/` }]} />
      <ProductDetail product={product} />
    </main>
  );
}
