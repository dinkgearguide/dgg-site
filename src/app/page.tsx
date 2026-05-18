import { CategoryCard } from "@/components/CategoryCard";
import { EmailSignup } from "@/components/EmailSignup";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { products } from "@/data/products";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Dink Gear Guide | Beginner Pickleball Gear Guides",
  "Beginner-friendly pickleball gear guides for paddles, starter sets, balls, bags, accessories, and gifts.",
  "/"
);

const start = [
  ["Beginner Gear Checklist", "/gear-checklist/", "Start with the gear that matters for first games and skip the extras until later."],
  ["Best Starter Sets", "/starter-sets/", "Good fits for couples, families, and casual groups who need several basics at once."],
  ["Best Beginner Paddles", "/beginner-paddles/", "Simple paddle guidance focused on control, comfort, and beginner-friendly value."]
];

export default function Home() {
  return (
    <main>
      <Hero />
      <Section title="Start Here">
        <div className="grid gap-5 md:grid-cols-3">
          {start.map(([title, href, description]) => <CategoryCard key={href} title={title} href={href} description={description} />)}
        </div>
      </Section>
      <Section title="Featured Categories">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <CategoryCard title="Paddles" href="/beginner-paddles/" description="Control-first paddles for newer players." />
          <CategoryCard title="Balls" href="/balls/" description="Indoor and outdoor ball packs explained simply." />
          <CategoryCard title="Bags" href="/bags/" description="Sling, backpack, and tote options for court gear." />
          <CategoryCard title="Gifts" href="/gifts/" description="Practical gift ideas for brand-new players." />
        </div>
      </Section>
      <Section title="What New Players Actually Need">
        <div className="grid gap-4 md:grid-cols-3">
          {["A comfortable paddle", "The right ball for your court", "A simple way to carry and protect gear"].map((item) => <p key={item} className="rounded-lg border border-slate-200 bg-white p-5 text-slate-700">{item}</p>)}
        </div>
      </Section>
      <Section title="Featured Products">
        <ProductGrid products={products.filter((product) => product.featured).slice(0, 6)} />
      </Section>
      <Section title="Gear You Can Skip at First">
        <p className="max-w-3xl leading-8 text-slate-700">Most beginners do not need advanced training gadgets, expensive tournament bags, multiple premium paddles, or specialized shoes before they know how often they will play. Start useful, then upgrade after real court time.</p>
      </Section>
      <section className="mx-auto max-w-6xl px-4 py-10"><EmailSignup /></section>
      <section className="mx-auto max-w-6xl px-4 py-6">
        <p className="rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-950">Affiliate reminder: This site may earn from qualifying purchases. Recommendations are informational and should be independently reviewed before purchase.</p>
      </section>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <h2 className="mb-5 text-3xl font-black text-ink">{title}</h2>
      {children}
    </section>
  );
}
