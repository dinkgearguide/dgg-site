import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Beginner Pickleball Gear Decision Framework | Dink Gear Guide",
  "The beginner-first framework Dink Gear Guide uses to evaluate pickleball paddles, starter sets, balls, bags, and accessories.",
  "/gear-decision-framework/"
);

export default function GearDecisionFrameworkPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Gear Decision Framework", path: "/gear-decision-framework/" }])} />
      <Breadcrumbs items={[{ label: "Gear Decision Framework", href: "/gear-decision-framework/" }]} />
      <div className="max-w-3xl">
        <p className="text-sm font-bold uppercase tracking-widest text-court">Dink Gear Guide framework</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-ink">Beginner Pickleball Gear Decision Framework</h1>
        <p className="mt-5 leading-8 text-slate-700">
          New pickleball players do not need the most technical gear on the market. They need gear that helps them get on court, learn the basics, and avoid overbuying before they know how often they will play.
        </p>
      </div>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-ink">The five checks</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <ChecklistSection title="1. First-month fit" items={["Solves an immediate beginner problem", "Useful for casual games, clinics, or practice", "Does not require advanced preferences to understand"]} />
          <ChecklistSection title="2. Comfort before hype" items={["Prioritizes control and ease of use", "Avoids exaggerated power claims", "Does not make medical or injury-prevention promises"]} />
          <ChecklistSection title="3. Court match" items={["Balls match indoor or outdoor play", "Nets and line kits fit the practice space", "Bags carry the gear a player actually brings"]} />
          <ChecklistSection title="4. Reasonable price tier" items={["Budget gear is fine for trying the sport", "Mid-range can make sense for weekly play", "Premium is optional until preferences are clear"]} />
          <ChecklistSection title="5. Upgrade timing" items={["Start with essentials", "Upgrade after repeated court time", "Do not buy specialized extras before there is a real use case"]} />
          <ChecklistSection title="Always verify" items={["Current specs and included items", "Return policy and availability", "Tournament approval if sanctioned play matters"]} />
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-ink">For paddles</h2>
          <p className="mt-3 leading-7 text-slate-700">A beginner paddle should be comfortable, forgiving, and easy to control. Weight, grip size, and shape matter more at first than advanced power or spin claims.</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-ink">For starter sets</h2>
          <p className="mt-3 leading-7 text-slate-700">A starter set should match the number of players, the court type, and the storage need. Bigger bundles are not automatically better if the basics are weak.</p>
        </div>
        <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-black text-ink">For accessories</h2>
          <p className="mt-3 leading-7 text-slate-700">Accessories should solve a real court problem: carrying gear, replacing worn grips, marking practice space, keeping score, or protecting a paddle.</p>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-emerald-100 bg-emerald-50 p-6 text-emerald-950">
        <h2 className="text-2xl font-black">What this framework avoids</h2>
        <p className="mt-3 leading-8">
          We avoid fake rankings, fake reviews, fake star ratings, unverified live prices, scraped retailer images, and claims that gear prevents injuries or fixes pain. Product recommendations are informational and should be checked against current retailer details before purchase.
        </p>
      </section>
    </main>
  );
}
