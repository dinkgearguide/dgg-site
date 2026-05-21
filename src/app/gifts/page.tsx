import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Pickleball Gifts for Beginners: Practical Ideas They’ll Use",
  "Find practical pickleball gifts for new players, including starter gear, balls, bags, accessories, and simple court essentials.",
  "/gifts/"
);

export default function GiftsPage() {
  const categoryProducts = getProductsByCategory("Gifts");
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Gifts", path: "/gifts/" }])} />
      <JsonLd data={itemListJsonLd("Best Pickleball Gifts", "/gifts/", categoryProducts)} />
      <Breadcrumbs items={[{ label: "Gifts", href: "/gifts/" }]} />
      <h1 className="text-4xl font-black text-ink">Best Pickleball Gifts</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">Good pickleball gifts are useful, easy to understand, and do not require guessing a player&apos;s advanced preferences.</p>
      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-ink">Safer gift choices for new players</h2>
        <div className="mt-4 grid gap-5 leading-8 text-slate-700 md:grid-cols-2">
          <p>The easiest pickleball gifts are the ones players will use even if they already own a paddle. Balls, overgrips, towels, paddle covers, and simple court accessories are low-risk because they support regular play without requiring exact preference matching.</p>
          <p>If you want to give a bigger gift, think about the recipient&apos;s situation. A brand-new player may appreciate a starter set. Someone who already attends open play may prefer a better bag, extra balls, or a practical bundle of small items they can keep in the car.</p>
        </div>
      </section>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ChecklistSection title="Gifts under $25" items={["Overgrips", "Paddle cover", "Ball holder clip", "Court towel"]} />
        <ChecklistSection title="Gifts under $50" items={["Ball packs", "Compact sling bag", "Practice cones", "New player kit"]} />
        <ChecklistSection title="Practical gifts" items={["Balls", "Bag", "Grip tape", "Towel and bottle kit"]} />
        <ChecklistSection title="Fun gifts" items={["Accessory bundle", "Scorekeeping wristband", "Gift kit"]} />
        <ChecklistSection title="Gifts for brand-new players" items={["Starter set", "Beginner paddle", "Mixed ball pack", "Simple court bag"]} />
      </div>
      <h2 className="mt-10 text-3xl font-black text-ink">Gift picks</h2>
      <div className="mt-5"><ProductGrid products={categoryProducts} /></div>
    </main>
  );
}
