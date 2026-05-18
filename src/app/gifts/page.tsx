import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Best Pickleball Gifts | Dink Gear Guide", "Practical pickleball gift ideas for brand-new and recreational players using price tiers instead of live prices.", "/gifts/");

export default function GiftsPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Gifts", path: "/gifts/" }])} />
      <Breadcrumbs items={[{ label: "Gifts", href: "/gifts/" }]} />
      <h1 className="text-4xl font-black text-ink">Best Pickleball Gifts</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">Good pickleball gifts are useful, easy to understand, and do not require guessing a player&apos;s advanced preferences.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ChecklistSection title="Gifts under $25" items={["Overgrips", "Paddle cover", "Ball holder clip", "Court towel"]} />
        <ChecklistSection title="Gifts under $50" items={["Ball packs", "Compact sling bag", "Practice cones", "New player kit"]} />
        <ChecklistSection title="Practical gifts" items={["Balls", "Bag", "Grip tape", "Towel and bottle kit"]} />
        <ChecklistSection title="Fun gifts" items={["Accessory bundle", "Scorekeeping wristband", "Gift kit"]} />
        <ChecklistSection title="Gifts for brand-new players" items={["Starter set", "Beginner paddle", "Mixed ball pack", "Simple court bag"]} />
      </div>
      <h2 className="mt-10 text-3xl font-black text-ink">Gift picks</h2>
      <div className="mt-5"><ProductGrid products={getProductsByCategory("Gifts")} /></div>
    </main>
  );
}
