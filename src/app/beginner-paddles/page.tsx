import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { getProductsByCategory } from "@/data/products";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Best Beginner Pickleball Paddles | Dink Gear Guide", "Simple beginner paddle guidance for weight, grip size, control, durability, price tier, comfort, and beginner friendliness.", "/beginner-paddles/");

export default function BeginnerPaddlesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Beginner Paddles", path: "/beginner-paddles/" }])} />
      <Breadcrumbs items={[{ label: "Beginner Paddles", href: "/beginner-paddles/" }]} />
      <h1 className="text-4xl font-black text-ink">Best Beginner Pickleball Paddles</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">New players usually benefit from control, comfort, and forgiving paddle shape before chasing advanced power specs.</p>
      <p className="mt-4 rounded-lg border border-blue-100 bg-blue-50 p-4 text-sm text-blue-950">If you plan to play in sanctioned tournaments, verify that your paddle is approved by the relevant governing body before buying.</p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <ChecklistSection title="Weight" items={["Lighter can feel easier to maneuver", "Heavier can feel steadier but may be tiring", "Beginners should prioritize comfort"]} />
        <ChecklistSection title="Grip size" items={["A comfortable grip helps control", "Too large can feel awkward", "Overgrip can fine-tune feel"]} />
        <ChecklistSection title="Control" items={["Look for a forgiving shape", "Power matters less at first", "Dinking and resets reward control"]} />
        <ChecklistSection title="Durability" items={["Shared paddles need sturdy edges", "Check return policies", "Avoid fragile novelty picks"]} />
        <ChecklistSection title="Price tier" items={["Budget is fine for casual starts", "Mid-range can be a good first personal paddle", "Premium is optional for beginners"]} />
        <ChecklistSection title="Comfort" items={["Handle feel matters", "Avoid claims about treating pain", "Try to match how often you play"]} />
      </div>
      <h2 className="mt-10 text-3xl font-black text-ink">Beginner paddle picks</h2>
      <div className="mt-5"><ProductGrid products={getProductsByCategory("Beginner Paddles")} /></div>
    </main>
  );
}
