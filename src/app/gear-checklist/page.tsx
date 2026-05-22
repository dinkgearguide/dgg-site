import Link from "next/link";
import type { ReactNode } from "react";
import { BeginnerNextSteps } from "@/components/BeginnerNextSteps";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistTable } from "@/components/ChecklistTable";
import { JsonLd } from "@/components/JsonLd";
import { ProductGrid } from "@/components/ProductGrid";
import { RelatedGuides } from "@/components/RelatedGuides";
import { getProductBySlug } from "@/data/products";
import { breadcrumbJsonLd, isProductIndexable, pageMetadata } from "@/lib/seo";
import type { Product } from "@/types/product";

export const metadata = pageMetadata(
  "Pickleball Gear Checklist for Beginners: What to Buy First",
  "New to pickleball? Use this beginner gear checklist to choose paddles, balls, bags, starter sets, and accessories — plus what to skip at first.",
  "/gear-checklist/"
);

const checklistRows = [
  ["Paddle", "Yes", "Every player", "Weight, grip size, shape, approval status", "Start with a comfortable beginner paddle."],
  ["Correct ball type", "Yes", "Indoor or outdoor courts", "Indoor vs outdoor label, visibility, quantity", "Buy balls for the court you use most."],
  ["Court access", "Yes", "First games", "Public court rules, open-play schedule, reservation needs", "Know where and when you can play."],
  ["Court-friendly shoes", "Yes", "Movement and comfort", "Non-marking soles, lateral support, fit", "Use stable court shoes you can move in comfortably."],
  ["Water", "Yes", "All players", "Bottle size and easy access", "Bring more than you think you need."],
  ["Basic bag or tote", "Optional", "Keeping gear together", "Paddle space, ball pocket, strap comfort", "Start simple; upgrade if you play weekly."],
  ["Paddle cover", "No", "Protecting a personal paddle", "Fit, material, zipper", "Nice after you own a paddle you want to protect."],
  ["Grip tape", "No", "Refreshing handle feel", "Texture, thickness, quantity", "Useful spare once you play regularly."]
];

const playerSetupRows = [
  ["Trying pickleball once", "Borrow a paddle if possible, bring water, use the correct court ball.", "Avoid buying a full kit before you know you enjoy it."],
  ["Casual weekend player", "Budget paddle or simple starter set, outdoor or indoor balls, small tote.", "Keep the setup easy to grab."],
  ["Weekly beginner", "One better personal paddle, spare balls, compact bag, overgrip.", "Prioritize comfort and consistency."],
  ["Couple/family", "Starter set with enough paddles and balls for the group.", "Check the exact set contents before buying."],
  ["Backyard player", "Portable net, outdoor balls, paddles, court markers.", "Measure the play space first."],
  ["Gift buyer", "Balls, bag, towel, overgrip, or starter kit.", "Avoid guessing advanced paddle preferences."]
];

const faqs = [
  ["What equipment do you need to start playing pickleball?", "You need a paddle, the right ball for your court, court access, comfortable court-friendly shoes, water, and optionally a simple bag."],
  ["Do beginners need their own paddle?", "Not for a first try if you can borrow one, but regular beginners should eventually get a comfortable personal paddle."],
  ["Should I buy a pickleball starter set?", "A starter set is useful for couples, families, guests, and uncertain beginners. A single better paddle is usually smarter for someone who expects to play weekly."],
  ["What kind of balls should I buy first?", "Buy balls for your main court. Outdoor courts need outdoor balls. Gym-style indoor courts usually need indoor balls."],
  ["Do I need a pickleball bag?", "No, but a small bag or tote helps keep paddles, balls, water, keys, and a towel together."],
  ["Can I use tennis shoes for pickleball?", "Court-friendly tennis shoes can work for many beginners if they fit well and support side-to-side movement. Avoid shoes that feel unstable on court."],
  ["How much gear should a beginner buy?", "Buy the basics first, then upgrade after several games. Most beginners can skip premium paddles, training gadgets, and duplicate bags at first."],
  ["Do I need an approved paddle?", "Only if sanctioned tournaments are part of your plan. If you plan to play in sanctioned tournaments, verify that your paddle is approved by the relevant governing body before buying."]
];

const recommendedSlugs = [
  "two-paddle-beginner-starter-set",
  "lightweight-control-paddle",
  "outdoor-pickleball-ball-pack",
  "backyard-pickleball-starter-kit"
];

export default function GearChecklistPage() {
  const recommendedProducts = recommendedSlugs
    .map(getProductBySlug)
    .filter((product): product is Product => product ? isProductIndexable(product) : false);

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Gear Checklist", path: "/gear-checklist/" }])} />
      <Breadcrumbs items={[{ label: "Gear Checklist", href: "/gear-checklist/" }]} />
      <h1 className="text-4xl font-black text-ink">Pickleball Gear Checklist for Beginners</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
        New pickleball players need a paddle, the right ball for the court, court access, comfortable court-friendly shoes, water, and optionally a simple bag. That is enough to start. Most other gear can wait until you know how often you play, where you play, and what feels inconvenient after a few real games.
      </p>
      <div className="mt-6 rounded-lg border border-blue-100 bg-blue-50 p-5">
        <p className="text-lg font-black text-ink">Want a quick version?</p>
        <Link href="/pickleball-gear-checklist-printable/" className="mt-2 inline-flex font-bold text-court underline">
          Print the free beginner pickleball gear checklist.
        </Link>
      </div>

      <section className="mt-8 rounded-lg border border-emerald-100 bg-emerald-50 p-6">
        <h2 className="text-2xl font-black text-ink">Quick Answer: What Do You Need to Play Pickleball?</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {["Paddle", "Correct ball type", "Court access", "Comfortable court-friendly shoes", "Water", "Optional bag"].map((item) => (
            <li key={item} className="rounded-md bg-white p-4 font-bold text-slate-700 shadow-sm">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-black text-ink">Beginner Pickleball Gear Checklist</h2>
        <p className="mt-3 max-w-3xl leading-8 text-slate-700">Use this table to separate must-haves from nice-to-haves. The best beginner setup is usually smaller than a full shopping cart.</p>
        <ChecklistTable headers={["Gear item", "Needed right away?", "Best for", "What to check before buying", "Beginner recommendation"]} rows={checklistRows} />
      </section>

      <GuideSection title="Must-Have Gear for New Players">
        <p>A pickleball paddle is the main personal item. Beginners should look for comfort, manageable weight, and control before chasing advanced power. If you plan to play in sanctioned tournaments, verify that your paddle is approved by the relevant governing body before buying.</p>
        <p>You also need balls that match your court. Outdoor balls are usually firmer and built for wind and rougher surfaces. Indoor balls usually feel softer and suit gym-style courts. Add court-friendly shoes, a water bottle, and a basic bag or tote if you want to keep everything together.</p>
      </GuideSection>

      <GuideSection title="Nice-to-Have Gear">
        <p>Paddle covers, extra grip tape, compact bags, towels, portable nets, and court markers can be useful, but they are not all first-day purchases. Add them when you notice a real problem: your paddle needs protection, your grip feels worn, your gear is scattered, or you want to practice at home.</p>
      </GuideSection>

      <GuideSection title="Gear Beginners Can Skip at First">
        <p>Most beginners can skip premium paddles, training gadgets, multiple bags, advanced accessories, duplicate paddle sets, and tournament-focused gear unless there is a specific reason to buy them. Early games teach you more about your preferences than product descriptions do.</p>
        <p>See the detailed guide to <Link href="/guides/what-pickleball-gear-can-beginners-skip/" className="font-bold text-court underline">pickleball gear beginners can skip</Link>.</p>
      </GuideSection>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-3xl font-black text-ink">What to Buy Before Your First Game</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Paddle or borrowed paddle", "Indoor or outdoor ball pack", "Court-friendly shoes", "Water bottle", "Small towel", "Simple bag or tote", "Court address and open-play time"].map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 p-4 text-slate-700">{item}</li>
          ))}
        </ul>
      </section>

      <GuideSection title="Starter Set vs. One Better Paddle">
        <p>A starter set is good for couples, families, casual backyard play, guests, and uncertain beginners who need several basics at once. One better paddle is better for a player who expects to play weekly and wants a comfortable personal paddle.</p>
        <p>Compare both paths in the <Link href="/guides/pickleball-starter-set-vs-single-paddle/" className="font-bold text-court underline">starter set vs. single paddle guide</Link>.</p>
      </GuideSection>

      <GuideSection title="Indoor vs. Outdoor Pickleball Balls">
        <p>Ball type matters because indoor and outdoor balls are built differently. Outdoor balls usually have smaller holes and a firmer feel. Indoor balls often feel softer and are made for smoother gym surfaces. If you only buy one pack first, match your main court.</p>
        <p>Read the full <Link href="/guides/indoor-vs-outdoor-pickleball-balls/" className="font-bold text-court underline">indoor vs. outdoor pickleball balls guide</Link> or browse the <Link href="/balls/" className="font-bold text-court underline">Balls page</Link>.</p>
      </GuideSection>

      <GuideSection title="What to Keep in Your Pickleball Bag">
        <p>A beginner bag can stay simple: paddle, two to four balls, water, towel, extra overgrip, keys, phone, and a light layer for outdoor play. A sling bag or tote is often enough unless you play weekly and carry more gear.</p>
        <p>See the <Link href="/guides/what-to-keep-in-your-pickleball-bag/" className="font-bold text-court underline">pickleball bag checklist</Link> for a more detailed packing list.</p>
      </GuideSection>

      <section className="mt-10">
        <h2 className="text-3xl font-black text-ink">Beginner Gear Setups by Player Type</h2>
        <ChecklistTable headers={["Player type", "Suggested setup", "Beginner note"]} rows={playerSetupRows} />
      </section>

      <GuideSection title="Common Beginner Buying Mistakes">
        <ul className="grid gap-3 sm:grid-cols-2">
          {["Buying too much too soon", "Buying only by color", "Ignoring ball type", "Assuming every paddle is tournament approved", "Buying the cheapest set without checking contents", "Buying premium gear before knowing playing style"].map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">{item}</li>
          ))}
        </ul>
      </GuideSection>

      <section className="mt-10">
        <h2 className="text-3xl font-black text-ink">Recommended Beginner Starting Point</h2>
        <p className="mt-3 max-w-3xl leading-8 text-slate-700">These are active, non-placeholder picks from the current catalog. Bag and accessory picks should be added here after real destination links are available.</p>
        <div className="mt-5"><ProductGrid products={recommendedProducts} /></div>
      </section>

      <section className="mt-10">
        <h2 className="text-3xl font-black text-ink">FAQ</h2>
        <div className="mt-5 space-y-4">
          {faqs.map(([question, answer]) => (
            <details key={question} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
              <summary className="cursor-pointer text-lg font-black text-ink">{question}</summary>
              <p className="mt-3 leading-8 text-slate-700">{answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-black text-ink">Last Reviewed / Editorial Note</h2>
        <p className="mt-3 leading-8 text-slate-700">Last reviewed: 2026-05-21</p>
        <p className="mt-3 leading-8 text-slate-700">This guide is designed for beginner and recreational players. Product details, prices, availability, and approval status may change, so verify current details before buying.</p>
      </section>

      <RelatedGuides slugs={["what-to-buy-before-your-first-pickleball-game", "pickleball-starter-set-vs-single-paddle", "indoor-vs-outdoor-pickleball-balls", "what-pickleball-gear-can-beginners-skip"]} />
      <BeginnerNextSteps />
    </main>
  );
}

function GuideSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-10">
      <h2 className="text-3xl font-black text-ink">{title}</h2>
      <div className="mt-4 space-y-4 leading-8 text-slate-700">{children}</div>
    </section>
  );
}
