import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Best Pickleball Balls | Dink Gear Guide", "Learn the difference between indoor and outdoor pickleball balls and find beginner-friendly ball packs.", "/balls/");

export default function BallsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Balls", path: "/balls/" }])} />
      <Breadcrumbs items={[{ label: "Balls", href: "/balls/" }]} />
      <h1 className="text-4xl font-black text-ink">Best Pickleball Balls</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">Beginners should buy balls for the court they actually use most. Indoor and outdoor balls feel different because they are built for different surfaces and conditions.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <ChecklistSection title="Indoor balls" items={["Softer feel", "Larger holes", "Made for gym-style surfaces"]} />
        <ChecklistSection title="Outdoor balls" items={["Harder feel", "Smaller holes", "Built for wind and rougher courts"]} />
        <ChecklistSection title="Which to buy first" items={["Match your main court", "Choose high visibility", "Keep extras because balls crack or disappear"]} />
      </div>
      <h2 className="mt-10 text-3xl font-black text-ink">Ball picks</h2>
      <div className="mt-5"><ProductGrid products={getProductsByCategory("Balls")} /></div>
    </main>
  );
}
