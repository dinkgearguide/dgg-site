import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Best Pickleball Starter Sets for New Players",
  "Compare beginner pickleball starter sets, learn when a set makes sense, and see what new players should check before buying.",
  "/starter-sets/"
);

export default function StarterSetsPage() {
  return <CategoryGuide title="Best Pickleball Starter Sets" category="Starter Sets" />;
}

function CategoryGuide({ title, category }: { title: string; category: "Starter Sets" }) {
  const categoryProducts = getProductsByCategory(category);
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: title, path: "/starter-sets/" }])} />
      <JsonLd data={itemListJsonLd(title, "/starter-sets/", categoryProducts)} />
      <Breadcrumbs items={[{ label: title, href: "/starter-sets/" }]} />
      <h1 className="text-4xl font-black text-ink">{title}</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">Starter sets are best when several people need basic gear at once. If you already play weekly, one better personal paddle may be a smarter first upgrade.</p>
      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-ink">How to judge a starter set</h2>
        <div className="mt-4 grid gap-5 leading-8 text-slate-700 md:grid-cols-2">
          <p>A starter set should make it easy to get on court, not lock you into advanced preferences before you understand them. Look first at the number of paddles, whether the balls match your court type, and whether the set includes a bag that keeps everything together.</p>
          <p>The paddles in many starter sets are fine for casual games but may not be what you use forever. That is not a failure if the set helps a household or group start playing. Treat the set as shared gear, then upgrade individual paddles later if someone starts playing regularly.</p>
        </div>
      </section>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <ChecklistSection title="Who should buy a starter set" items={["Couples learning together", "Families sharing gear", "Hosts who want guests to play", "Backyard or driveway players"]} />
        <ChecklistSection title="Who should buy one better paddle instead" items={["Players attending clinics weekly", "Players who already know their preferred grip feel", "Anyone replacing a cheap shared paddle"]} />
        <ChecklistSection title="What to look for" items={["Enough paddles for regular players", "Indoor or outdoor balls that match your court", "A storage bag", "Clear return policy"]} />
        <ChecklistSection title="Common mistakes" items={["Buying the largest set only because it looks like value", "Ignoring ball type", "Expecting starter paddles to feel like premium paddles"]} />
      </div>
      <h2 className="mt-10 text-3xl font-black text-ink">Starter set picks</h2>
      <div className="mt-5"><ProductGrid products={categoryProducts} /></div>
    </main>
  );
}
