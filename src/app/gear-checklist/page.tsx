import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistSection } from "@/components/ChecklistSection";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Pickleball Gear Checklist for Beginners: What to Buy First",
  "New to pickleball? Use this beginner gear checklist to choose paddles, balls, bags, starter sets, and accessories — plus what to skip at first.",
  "/gear-checklist/"
);

export default function GearChecklistPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Gear Checklist", path: "/gear-checklist/" }])} />
      <Breadcrumbs items={[{ label: "Gear Checklist", href: "/gear-checklist/" }]} />
      <h1 className="text-4xl font-black text-ink">Pickleball Gear Checklist for Beginners</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">Start with gear that helps you play more comfortably and consistently. Leave specialized upgrades until you know your habits.</p>
      <section className="mt-8 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-ink">A simple way to buy your first kit</h2>
        <div className="mt-4 grid gap-5 leading-8 text-slate-700 md:grid-cols-2">
          <p>Most new players need fewer items than they think. A comfortable paddle, the right balls for the court, water, and a basic way to carry gear will cover most first games, clinics, and open-play sessions.</p>
          <p>Use your first month to learn what actually bothers you. If your paddle feels awkward, upgrade the paddle. If you keep losing balls, buy a larger ball pack. If your gear ends up scattered in the car, add a bag.</p>
        </div>
      </section>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <ChecklistSection title="Must-have gear" items={["Beginner-friendly paddle", "Indoor or outdoor balls for your main court type", "Water bottle", "Comfortable court-safe shoes", "Small bag or tote"]} />
        <ChecklistSection title="Nice-to-have gear" items={["Paddle cover", "Extra overgrip", "Small towel", "Ball holder clip", "Practice cones"]} />
        <ChecklistSection title="Gear you can skip at first" items={["Premium tournament paddle", "Large rolling bag", "Advanced training gadgets", "Multiple specialty paddles", "Live-price hunting tools"]} />
        <ChecklistSection title="Upgrade path after 30 days of playing" items={["Replace shared starter paddle with a personal paddle", "Add extra balls", "Choose a better bag if you play weekly", "Refresh grip tape", "Consider a portable net for home practice"]} />
        <ChecklistSection title="Common buying mistakes" items={["Buying for power before control", "Ignoring indoor versus outdoor balls", "Choosing a bag that is too large to use", "Assuming a set paddle is always the best long-term paddle", "Treating price as proof of fit"]} />
        <ChecklistSection title="Recommended beginner kit" items={["One comfortable paddle per regular player", "One ball pack for your main court type", "Simple bag", "Overgrip pack", "Towel and water bottle"]} />
      </div>
      <div className="mt-8"><CTASection title="Browse the full gear list" text="Filter by category, skill level, price tier, and best use." href="/gear/" label="View beginner gear" /></div>
    </main>
  );
}
