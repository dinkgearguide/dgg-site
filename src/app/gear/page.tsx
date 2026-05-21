import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BeginnerNextSteps } from "@/components/BeginnerNextSteps";
import { JsonLd } from "@/components/JsonLd";
import { ProductFilters } from "@/components/ProductFilters";
import { products } from "@/data/products";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Beginner Pickleball Gear Guide | Dink Gear Guide",
  "Browse beginner-friendly pickleball paddles, starter sets, balls, bags, nets, grip tape, court accessories, and gift ideas.",
  "/gear/"
);

export default function GearPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "All Gear", path: "/gear/" }])} />
      <JsonLd data={itemListJsonLd("All Pickleball Gear", "/gear/", products)} />
      <Breadcrumbs items={[{ label: "All Gear", href: "/gear/" }]} />
      <h1 className="text-4xl font-black text-ink">All Pickleball Gear</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">Search and filter beginner-friendly gear. Product data is static and manually editable, with price tiers instead of live prices.</p>
      <div className="mt-8"><ProductFilters products={products} /></div>
      <BeginnerNextSteps />
    </main>
  );
}
