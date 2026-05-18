import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Best Pickleball Bags | Dink Gear Guide", "Compare beginner-friendly pickleball sling bags, backpacks, and tote-style bags.", "/bags/");

export default function BagsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Bags", path: "/bags/" }])} />
      <Breadcrumbs items={[{ label: "Bags", href: "/bags/" }]} />
      <h1 className="text-4xl font-black text-ink">Best Pickleball Bags</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">A good beginner bag should make it easier to bring your paddle, balls, water, and small accessories without becoming a bulky chore.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <ChecklistSection title="Sling bags" items={["Best for one paddle", "Light and easy to carry", "Limited extra storage"]} />
        <ChecklistSection title="Backpacks" items={["Best for regular players", "More room for layers and water", "Can be more bag than a casual player needs"]} />
        <ChecklistSection title="Tote-style bags" items={["Simple open access", "Good for casual court trips", "Less structured organization"]} />
      </div>
      <h2 className="mt-10 text-3xl font-black text-ink">Bag picks</h2>
      <div className="mt-5"><ProductGrid products={getProductsByCategory("Bags")} /></div>
    </main>
  );
}
