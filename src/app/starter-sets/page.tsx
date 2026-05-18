import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Best Pickleball Starter Sets | Dink Gear Guide", "Beginner-friendly pickleball starter sets for couples, families, casual groups, and backyard games.", "/starter-sets/");

export default function StarterSetsPage() {
  return <CategoryGuide title="Best Pickleball Starter Sets" category="Starter Sets" />;
}

function CategoryGuide({ title, category }: { title: string; category: "Starter Sets" }) {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: title, path: "/starter-sets/" }])} />
      <Breadcrumbs items={[{ label: title, href: "/starter-sets/" }]} />
      <h1 className="text-4xl font-black text-ink">{title}</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">Starter sets are best when several people need basic gear at once. If you already play weekly, one better personal paddle may be a smarter first upgrade.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <ChecklistSection title="Who should buy a starter set" items={["Couples learning together", "Families sharing gear", "Hosts who want guests to play", "Backyard or driveway players"]} />
        <ChecklistSection title="Who should buy one better paddle instead" items={["Players attending clinics weekly", "Players who already know their preferred grip feel", "Anyone replacing a cheap shared paddle"]} />
        <ChecklistSection title="What to look for" items={["Enough paddles for regular players", "Indoor or outdoor balls that match your court", "A storage bag", "Clear return policy"]} />
        <ChecklistSection title="Common mistakes" items={["Buying the largest set only because it looks like value", "Ignoring ball type", "Expecting starter paddles to feel like premium paddles"]} />
      </div>
      <h2 className="mt-10 text-3xl font-black text-ink">Starter set picks</h2>
      <div className="mt-5"><ProductGrid products={getProductsByCategory(category)} /></div>
    </main>
  );
}
