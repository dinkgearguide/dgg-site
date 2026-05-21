import Link from "next/link";
import { BeginnerNextSteps } from "@/components/BeginnerNextSteps";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { breadcrumbJsonLd, itemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Indoor vs Outdoor Pickleball Balls: Beginner Buying Guide",
  "Learn the difference between indoor and outdoor pickleball balls and choose the right ball pack for your first games.",
  "/balls/"
);

export default function BallsPage() {
  const categoryProducts = getProductsByCategory("Balls");
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Balls", path: "/balls/" }])} />
      <JsonLd data={itemListJsonLd("Best Pickleball Balls", "/balls/", categoryProducts)} />
      <Breadcrumbs items={[{ label: "Balls", href: "/balls/" }]} />
      <h1 className="text-4xl font-black text-ink">Best Pickleball Balls</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">Beginners should buy balls for the court they actually use most. Indoor and outdoor balls feel different because they are built for different surfaces and conditions.</p>
      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-ink">Indoor vs outdoor is the key decision</h2>
        <div className="mt-4 grid gap-5 leading-8 text-slate-700 md:grid-cols-2">
          <p>Outdoor balls are usually harder and built to handle wind, sun, and rougher court surfaces. Indoor balls tend to feel softer and are designed for gym floors or smoother indoor courts. Mixing them up can make the game feel inconsistent for beginners.</p>
          <p>If you only know one thing before buying, know where you will play most often. A small pack that matches your main court is better than a large pack of the wrong ball. Add a mixed pack only if you regularly switch between indoor and outdoor play.</p>
          <p>Ball type matters because bounce, speed, and feel change across surfaces. Outdoor balls often use smaller holes to fly more predictably in wind. Indoor balls often use larger holes and softer plastic for smoother floors. Beginners who switch between both court types may want separate packs clearly labeled in their bag.</p>
          <p>Choose visibility over novelty. Bright balls are easier for groups to track, especially on busy public courts. For a deeper comparison, read the <Link href="/guides/indoor-vs-outdoor-pickleball-balls/" className="font-bold text-court underline">indoor vs. outdoor pickleball balls guide</Link>.</p>
        </div>
      </section>
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        <ChecklistSection title="Indoor balls" items={["Softer feel", "Larger holes", "Made for gym-style surfaces"]} />
        <ChecklistSection title="Outdoor balls" items={["Harder feel", "Smaller holes", "Built for wind and rougher courts"]} />
        <ChecklistSection title="Which to buy first" items={["Match your main court", "Choose high visibility", "Keep extras because balls crack or disappear"]} />
      </div>
      <h2 className="mt-10 text-3xl font-black text-ink">Ball picks</h2>
      <div className="mt-5"><ProductGrid products={categoryProducts} /></div>
      <BeginnerNextSteps />
    </main>
  );
}
