import Link from "next/link";
import { BeginnerNextSteps } from "@/components/BeginnerNextSteps";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Best Pickleball Bags for Beginners",
  "Compare pickleball sling bags, backpacks, and totes for new players carrying paddles, balls, water, keys, and court accessories.",
  "/bags/"
);

export default function BagsPage() {
  const categoryProducts = getProductsByCategory("Bags");
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Bags", path: "/bags/" }])} />
      <JsonLd data={itemListJsonLd("Best Pickleball Bags", "/bags/", categoryProducts)} />
      <Breadcrumbs items={[{ label: "Bags", href: "/bags/" }]} />
      <h1 className="text-4xl font-black text-ink">Best Pickleball Bags</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">A good beginner bag should make it easier to bring your paddle, balls, water, and small accessories without becoming a bulky chore.</p>
      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-ink">Choose the smallest bag that solves the problem</h2>
        <div className="mt-4 grid gap-5 leading-8 text-slate-700 md:grid-cols-2">
          <p>Bag choice depends on how often you play and how much you bring. A sling bag can be perfect for one paddle and a few balls. A backpack starts to make sense when you carry shoes, layers, water, snacks, or gear for more than one person.</p>
          <p>A beginner bag should be easy to grab and easy to put away. If it is too large or too specialized, it may stay home. Look for practical pockets, comfortable straps, and enough structure to protect your paddle without turning every court trip into packing for travel.</p>
          <p>Sling bags are usually enough for a single casual player. Backpacks work better for weekly players carrying water, towel, grip tape, extra balls, and layers. Tote-style bags are simple and easy to load, but they may offer less structure for paddle protection.</p>
          <p>New players usually need to carry less than they think: paddle, balls, water, towel, keys, phone, and maybe overgrip. Use the <Link href="/guides/what-to-keep-in-your-pickleball-bag/" className="font-bold text-court underline">pickleball bag checklist</Link> before buying a bigger bag.</p>
        </div>
      </section>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <ChecklistSection title="Sling bags" items={["Best for one paddle", "Light and easy to carry", "Limited extra storage"]} />
        <ChecklistSection title="Backpacks" items={["Best for regular players", "More room for layers and water", "Can be more bag than a casual player needs"]} />
        <ChecklistSection title="Tote-style bags" items={["Simple open access", "Good for casual court trips", "Less structured organization"]} />
      </div>
      <h2 className="mt-10 text-3xl font-black text-ink">Bag picks</h2>
      <div className="mt-5"><ProductGrid products={categoryProducts} /></div>
      <BeginnerNextSteps />
    </main>
  );
}
