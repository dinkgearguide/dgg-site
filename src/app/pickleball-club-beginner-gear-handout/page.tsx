import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { PrintButton } from "@/components/PrintButton";
import { PrintableChecklist } from "@/components/PrintableChecklist";
import { ShareResourceBox } from "@/components/ShareResourceBox";
import { breadcrumbJsonLd, pageMetadataWithImage, webPageJsonLd } from "@/lib/seo";

const title = "Beginner Pickleball Gear Handout for Clubs and Rec Centers";
const description = "A simple beginner pickleball gear handout clubs, instructors, and rec centers can share with new players.";
const path = "/pickleball-club-beginner-gear-handout/";

export const metadata = pageMetadataWithImage(title, description, path, "/og/club-handout.svg");

const checklistItems = [
  "Paddle or borrowed paddle",
  "Indoor or outdoor balls for the court",
  "Court-friendly shoes",
  "Water bottle",
  "Small bag or tote",
  "Towel",
  "Optional extra grip tape",
  "Outdoor sun or weather items when needed"
];

export default function ClubHandoutPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Club Handout", path }])} />
      <JsonLd data={webPageJsonLd(title, description, path)} />
      <div className="print-only mb-6 border-b border-slate-300 pb-3">
        <p className="text-lg font-black">Dink Gear Guide</p>
        <p>dinkgearguide.com</p>
      </div>
      <div className="no-print">
        <Breadcrumbs items={[{ label: "Club Handout", href: path }]} />
      </div>
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
        <div>
          <p className="text-sm font-black uppercase tracking-widest text-court">Shareable handout</p>
          <h1 className="mt-3 text-4xl font-black leading-tight text-ink">{title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
            This handout helps new players understand what to bring, what to buy first, and what to skip. It is designed for clubs, instructors, beginner sessions, and rec centers that want a simple, non-hype gear explanation for first-time players.
          </p>
        </div>
        <PrintButton>Print handout</PrintButton>
      </div>

      <section className="mt-10 rounded-lg border border-emerald-100 bg-emerald-50 p-6 print-avoid-break">
        <h2 className="text-2xl font-black text-ink">Short version for new players</h2>
        <p className="mt-3 text-lg leading-8 text-slate-700">
          To start playing pickleball, bring a paddle, the correct indoor or outdoor balls, court-friendly shoes, water, and a small bag or tote. You do not need premium paddles, training gadgets, or a large accessory kit for your first few games.
        </p>
      </section>

      <section className="mt-10 print-avoid-break">
        <h2 className="text-3xl font-black text-ink">New player checklist</h2>
        <div className="mt-5"><PrintableChecklist items={checklistItems} /></div>
      </section>

      <section className="mt-10 print-avoid-break">
        <h2 className="text-3xl font-black text-ink">What clubs can tell beginners</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            "Borrow gear before buying expensive equipment.",
            "Start with the right ball type for the court.",
            "A starter set is fine for couples, families, and casual play.",
            "Weekly players may prefer one better beginner paddle.",
            "Verify paddle approval before sanctioned tournaments."
          ].map((item) => (
            <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 leading-7 text-slate-700">{item}</li>
          ))}
        </ul>
      </section>

      <section className="no-print mt-10">
        <h2 className="text-3xl font-black text-ink">Suggested links for new players</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            ["Free Printable Checklist", "/pickleball-gear-checklist-printable/"],
            ["Gear Checklist", "/gear-checklist/"],
            ["Starter Sets", "/starter-sets/"],
            ["Beginner Paddles", "/beginner-paddles/"],
            ["Balls Guide", "/balls/"],
            ["Bags Guide", "/bags/"]
          ].map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md bg-slate-100 px-4 py-3 text-sm font-bold text-ink hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-200">{label}</Link>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 print-avoid-break">
        <h2 className="text-2xl font-black text-ink">Sharing note</h2>
        <p className="mt-3 leading-8 text-slate-700">Clubs, instructors, and rec centers may link to this page as a beginner resource.</p>
        <p className="mt-3 leading-8 text-slate-700">Last reviewed: May 22, 2026. Product details, prices, availability, and approval status may change, so players should verify current details before buying.</p>
      </section>

      <div className="mt-8">
        <ShareResourceBox title="Share this club handout" />
      </div>
    </main>
  );
}
