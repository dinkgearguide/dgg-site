import { CategoryCard } from "@/components/CategoryCard";
import { DecisionFrameworkCallout } from "@/components/DecisionFrameworkCallout";
import { Hero } from "@/components/Hero";
import { IconBadge, type IconName } from "@/components/IconBadge";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { GuideCard } from "@/components/GuideCard";
import { guides } from "@/data/guides";
import { products } from "@/data/products";
import { organizationJsonLd, pageMetadata, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata = pageMetadata(
  "Dink Gear Guide | Beginner Pickleball Gear Guides",
  siteConfig.description,
  "/"
);

const start = [
  ["Beginner Gear Checklist", "/gear-checklist/", "Start with the gear that matters for first games and skip the extras until later."],
  ["Best Starter Sets", "/starter-sets/", "Good fits for couples, families, and casual groups who need several basics at once."],
  ["Best Beginner Paddles", "/beginner-paddles/", "Simple paddle guidance focused on control, comfort, and beginner-friendly value."]
];

const essentials: Array<{ icon: IconName; text: string }> = [
  { icon: "paddle", text: "A comfortable paddle" },
  { icon: "ball", text: "The right ball for your court" },
  { icon: "bag", text: "A simple way to carry and protect gear" }
];

const homepageGuideSlugs = [
  "what-to-buy-before-your-first-pickleball-game",
  "pickleball-starter-set-vs-single-paddle",
  "indoor-vs-outdoor-pickleball-balls"
];

export default function Home() {
  return (
    <main>
      <JsonLd data={websiteJsonLd()} />
      <JsonLd data={organizationJsonLd()} />
      <Hero />
      <Section title="Start Here">
        <div className="grid gap-5 md:grid-cols-3">
          {start.map(([title, href, description]) => <CategoryCard key={href} title={title} href={href} description={description} />)}
        </div>
      </Section>
      <Section title="Beginner Gear Guides">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <CategoryCard title="Pickleball Gear Checklist for Beginners" href="/gear-checklist/" description="The main checklist for what to buy first, what can wait, and how to avoid overbuying." />
          {homepageGuideSlugs.map((slug) => {
            const guide = guides.find((item) => item.slug === slug);
            return guide ? <GuideCard key={guide.slug} guide={guide} /> : null;
          })}
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
          {essentials.map((item) => (
            <div key={item.text} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <IconBadge icon={item.icon} />
              <p className="mt-4 font-bold leading-6 text-slate-700">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section title="How We Choose Gear">
        <DecisionFrameworkCallout />
      </Section>
      <Section title="Featured Products">
        <ProductGrid products={products.filter((product) => product.featured).slice(0, 6)} />
      </Section>
      <Section title="Gear You Can Skip at First">
        <p className="max-w-3xl leading-8 text-slate-700">Most beginners do not need advanced training gadgets, expensive tournament bags, multiple premium paddles, or specialized shoes before they know how often they will play. Start useful, then upgrade after real court time.</p>
      </Section>
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
