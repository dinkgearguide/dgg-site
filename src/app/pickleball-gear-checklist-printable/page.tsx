import Link from "next/link";
import { BeginnerKitTable, type BeginnerKitRow } from "@/components/BeginnerKitTable";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistTable } from "@/components/ChecklistTable";
import { JsonLd } from "@/components/JsonLd";
import { PrintButton } from "@/components/PrintButton";
import { PrintableChecklist } from "@/components/PrintableChecklist";
import { ShareResourceBox } from "@/components/ShareResourceBox";
import { breadcrumbJsonLd, pageMetadataWithImage, resourceArticleJsonLd } from "@/lib/seo";

const title = "Free Printable Pickleball Gear Checklist for Beginners";
const description = "Print this beginner pickleball gear checklist to see what to bring, what to buy first, and what new players can skip.";
const path = "/pickleball-gear-checklist-printable/";
const reviewed = "2026-05-22";

export const metadata = pageMetadataWithImage(title, description, path, "/og/printable-checklist.svg");

const checklistItems = [
  "Pickleball paddle",
  "Indoor or outdoor pickleballs",
  "Court-friendly shoes",
  "Water bottle",
  "Small bag or tote",
  "Towel",
  "Extra grip tape",
  "Paddle cover",
  "Sunscreen or hat for outdoor play",
  "Portable net, only if playing at home",
  "Court markers, only if setting up a temporary court"
];

const buyRows = [
  ["Paddle", "Yes", "Every player needs one unless borrowing.", "Choose comfort, control, and manageable weight first."],
  ["Ball pack", "Yes", "Balls must match the court type.", "Outdoor balls for outdoor courts; indoor balls for gyms."],
  ["Starter set", "Maybe", "Useful when two or more people need shared basics.", "Check the number of paddles, balls, and bag contents."],
  ["Bag", "Optional", "Keeps paddle, balls, water, and keys together.", "A simple tote is fine for first games."],
  ["Grip tape", "Later", "Refreshes handle feel after regular play.", "Buy once you know your grip preference."],
  ["Premium paddle", "Skip for now", "Preferences change after real court time.", "Upgrade after you know your playing habits."],
  ["Portable net", "Only at home", "Needed for temporary home or driveway play.", "Measure your space before buying."],
  ["Training aid", "Skip for now", "Useful only after you know what to practice.", "Start with games and simple drills."],
  ["Duplicate accessories", "Skip for now", "Extra gear often goes unused.", "Buy replacements when you actually need them."],
  ["Tournament-focused gear", "Only if needed", "Approval status matters for sanctioned events.", "Verify approval with the relevant governing body."]
];

const kitRows: BeginnerKitRow[] = [
  { playerType: "Trying pickleball once", setup: "Borrow a paddle, bring water, and use the court’s ball type.", skip: "Full starter kits and premium accessories.", guideLabel: "First game checklist", guideHref: "/guides/what-to-buy-before-your-first-pickleball-game/" },
  { playerType: "Casual weekend player", setup: "Budget paddle or starter set, ball pack, towel, and tote.", skip: "Training aids and extra bags.", guideLabel: "Gear checklist", guideHref: "/gear-checklist/" },
  { playerType: "Weekly beginner", setup: "One comfortable beginner paddle, spare balls, compact bag, and overgrip.", skip: "Multiple cheap paddles you will replace quickly.", guideLabel: "Choose your first paddle", guideHref: "/guides/how-to-choose-your-first-pickleball-paddle/" },
  { playerType: "Couple or family", setup: "Starter set with enough paddles and balls for the group.", skip: "Single-player specialty gear.", guideLabel: "Starter set vs paddle", guideHref: "/guides/pickleball-starter-set-vs-single-paddle/" },
  { playerType: "Backyard player", setup: "Portable net, outdoor balls, paddles, and temporary court markers.", skip: "Indoor-only balls and unused accessories.", guideLabel: "Backyard setup", guideHref: "/guides/backyard-pickleball-setup-for-beginners/" },
  { playerType: "Gift buyer", setup: "Balls, bag, towel, overgrips, paddle cover, or a simple starter kit.", skip: "Advanced paddle choices unless requested.", guideLabel: "Beginner gifts", guideHref: "/guides/pickleball-gifts-for-beginners/" }
];

export default function PrintableChecklistPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Printable Checklist", path }])} />
      <JsonLd data={resourceArticleJsonLd(title, description, path, reviewed)} />
      <div className="print-only mb-6 border-b border-slate-300 pb-3">
        <p className="text-lg font-black">Dink Gear Guide</p>
        <p>dinkgearguide.com</p>
      </div>
      <div className="no-print">
        <Breadcrumbs items={[{ label: "Printable Checklist", href: path }]} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-court">Printable resource</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-ink">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            Beginners do not need a huge pickleball gear setup. Start with a simple paddle, the correct ball type for your court, court-friendly shoes, water, and a few optional accessories. Use this checklist to prepare for your first few games without overbuying.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <PrintButton>Print checklist</PrintButton>
          <p className="no-print max-w-xs text-sm leading-6 text-slate-600">To save as a PDF, use your browser’s Print option and choose “Save as PDF.”</p>
        </div>
      </div>

      <section className="mt-10 print-avoid-break">
        <h2 className="text-3xl font-black text-ink">Quick checklist</h2>
        <div className="mt-5"><PrintableChecklist items={checklistItems} /></div>
      </section>

      <section className="mt-10 print-avoid-break">
        <h2 className="text-3xl font-black text-ink">First-game packing list</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Paddle", "2 to 4 balls", "Water", "Towel", "Keys/phone/wallet", "Comfortable shoes", "Weather-appropriate outdoor items"].map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-10 print-avoid-break">
        <h2 className="text-3xl font-black text-ink">Buy now vs. skip for now</h2>
        <ChecklistTable headers={["Item", "Buy now?", "Why", "Beginner note"]} rows={buyRows} />
      </section>

      <section className="mt-10 print-avoid-break">
        <h2 className="text-3xl font-black text-ink">Beginner kit by player type</h2>
        <BeginnerKitTable rows={kitRows} />
      </section>

      <section className="mt-10 grid gap-5 md:grid-cols-2">
        <div className="rounded-lg border border-emerald-100 bg-emerald-50 p-6">
          <h2 className="text-2xl font-black text-ink">Starter set decision</h2>
          <p className="mt-3 leading-8 text-slate-700">Buy a starter set if you need two paddles, balls, and a simple shared setup. Buy one better paddle if you expect to play weekly and want a longer-lasting first paddle.</p>
          <Link href="/guides/pickleball-starter-set-vs-single-paddle/" className="no-print mt-4 inline-flex font-bold text-court underline">Compare starter sets and single paddles</Link>
        </div>
        <div className="rounded-lg border border-blue-100 bg-blue-50 p-6">
          <h2 className="text-2xl font-black text-ink">Ball type reminder</h2>
          <p className="mt-3 leading-8 text-slate-700">Indoor balls usually feel softer on gym floors. Outdoor balls are usually firmer and built for wind and rougher courts. Match the ball to where you play most.</p>
          <div className="no-print mt-4 flex flex-wrap gap-3">
            <Link href="/balls/" className="font-bold text-court underline">Browse balls</Link>
            <Link href="/guides/indoor-vs-outdoor-pickleball-balls/" className="font-bold text-court underline">Read the ball guide</Link>
          </div>
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 print-avoid-break">
        <h2 className="text-2xl font-black text-ink">Tournament note</h2>
        <p className="mt-3 leading-8 text-slate-700">If you plan to play in sanctioned tournaments, verify that your paddle is approved by the relevant governing body before buying.</p>
      </section>

      <section className="no-print mt-10">
        <h2 className="text-3xl font-black text-ink">Related resources</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            ["Gear Checklist", "/gear-checklist/"],
            ["Starter Sets", "/starter-sets/"],
            ["Beginner Paddles", "/beginner-paddles/"],
            ["Balls", "/balls/"],
            ["Bags", "/bags/"],
            ["First Game Guide", "/guides/what-to-buy-before-your-first-pickleball-game/"],
            ["Starter Set vs Paddle", "/guides/pickleball-starter-set-vs-single-paddle/"]
          ].map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md bg-slate-100 px-4 py-3 text-sm font-bold text-ink hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-200">{label}</Link>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6 print-avoid-break">
        <h2 className="text-2xl font-black text-ink">Last reviewed / editorial note</h2>
        <p className="mt-3 leading-8 text-slate-700">Last reviewed: May 22, 2026</p>
        <p className="mt-3 leading-8 text-slate-700">This checklist is designed for beginner and recreational pickleball players. Product details, prices, availability, and approval status may change, so verify current details before buying.</p>
      </section>

      <div className="mt-8">
        <ShareResourceBox />
      </div>
    </main>
  );
}
