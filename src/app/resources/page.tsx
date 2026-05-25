import Link from "next/link";
import { BeginnerNextSteps } from "@/components/BeginnerNextSteps";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { ResourceCard, type ResourceCardItem } from "@/components/ResourceCard";
import { breadcrumbJsonLd, collectionPageJsonLd, pageMetadataWithImage } from "@/lib/seo";

const title = "Beginner Pickleball Resources | Dink Gear Guide";
const description = "Beginner pickleball resources including gear checklists, buying guides, starter set advice, ball guides, bag checklists, and printable handouts.";
const path = "/resources/";

export const metadata = pageMetadataWithImage(title, description, path, "/og/resources.svg");

const startHere: ResourceCardItem[] = [
  { title: "Pickleball Gear Checklist for Beginners", description: "The main beginner gear guide for what to buy first, what can wait, and how to avoid overbuying.", category: "Start here", href: "/gear-checklist/" },
  { title: "Free Printable Gear Checklist", description: "A print-friendly checklist for first games, shopping decisions, and new-player packing.", category: "Printable", href: "/pickleball-gear-checklist-printable/" },
  { title: "What to Buy Before Your First Pickleball Game", description: "A simple first-game checklist for paddles, balls, shoes, water, and gear you can skip.", category: "First game", href: "/guides/what-to-buy-before-your-first-pickleball-game/" },
  { title: "Starter Set vs. Single Paddle", description: "Learn whether a starter set or one better beginner paddle makes more sense.", category: "Buying decision", href: "/guides/pickleball-starter-set-vs-single-paddle/" }
];

const buyingGuides: ResourceCardItem[] = [
  { title: "Best Pickleball Starter Sets", description: "Starter set advice for couples, families, casual groups, and backyard play.", category: "Starter sets", href: "/starter-sets/" },
  { title: "Best Beginner Pickleball Paddles", description: "Beginner-friendly paddle guidance focused on control, grip, comfort, and value.", category: "Paddles", href: "/beginner-paddles/" },
  { title: "Indoor vs Outdoor Pickleball Balls", description: "Understand ball type differences and choose the right pack for your court.", category: "Balls", href: "/guides/indoor-vs-outdoor-pickleball-balls/" },
  { title: "Best Pickleball Bags for Beginners", description: "Compare slings, backpacks, and totes for simple court carry.", category: "Bags", href: "/bags/" }
];

const checklists: ResourceCardItem[] = [
  { title: "What to Keep in Your Pickleball Bag", description: "A simple bag checklist for paddles, balls, water, towel, keys, and grip tape.", category: "Checklist", href: "/guides/what-to-keep-in-your-pickleball-bag/" },
  { title: "What Gear Beginners Can Skip", description: "A money-saving guide to gear that can wait until after real court time.", category: "Skip list", href: "/guides/what-pickleball-gear-can-beginners-skip/" },
  { title: "Backyard Pickleball Setup", description: "Beginner setup advice for nets, outdoor balls, paddles, and temporary markers.", category: "Backyard", href: "/guides/backyard-pickleball-setup-for-beginners/" },
  { title: "Club Beginner Gear Handout", description: "A clean handout clubs, instructors, and rec centers can share with new players.", category: "Handout", href: "/pickleball-club-beginner-gear-handout/" }
];

const allResources = [...startHere, ...buyingGuides, ...checklists];

export default function ResourcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Resources", path }])} />
      <JsonLd data={collectionPageJsonLd(title, description, path, allResources.map((resource) => ({ name: resource.title, path: resource.href })))} />
      <Breadcrumbs items={[{ label: "Resources", href: path }]} />
      <h1 className="text-4xl font-black text-ink">Beginner Pickleball Resources</h1>
      <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-700">
        Simple beginner pickleball resources for first games, gear decisions, club handouts, and practical buying questions. Start with the checklist, then choose the guide that matches the decision in front of you.
      </p>

      <ResourceSection title="Start here" resources={startHere} />
      <ResourceSection title="Buying guides" resources={buyingGuides} />
      <ResourceSection title="Practical checklists" resources={checklists} />

      <section className="mt-12 rounded-lg border border-emerald-100 bg-emerald-50 p-6">
        <h2 className="text-2xl font-black text-ink">New player next steps</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {[
            ["First game", "Use the printable checklist.", "/pickleball-gear-checklist-printable/"],
            ["Buying gear", "Read the gear checklist.", "/gear-checklist/"],
            ["Buying for two people", "Compare starter sets.", "/starter-sets/"],
            ["Buying one paddle", "Read beginner paddles.", "/beginner-paddles/"],
            ["Playing at home", "Read the backyard setup guide.", "/guides/backyard-pickleball-setup-for-beginners/"]
          ].map(([label, text, href]) => (
            <li key={href} className="rounded-lg bg-white p-4 shadow-sm">
              <p className="font-black text-ink">{label}</p>
              <Link href={href} className="mt-2 inline-flex font-bold text-court underline">{text}</Link>
            </li>
          ))}
        </ul>
      </section>

      <BeginnerNextSteps />
    </main>
  );
}

function ResourceSection({ title, resources }: { title: string; resources: ResourceCardItem[] }) {
  return (
    <section className="mt-12">
      <h2 className="text-3xl font-black text-ink">{title}</h2>
      <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => <ResourceCard key={resource.href} resource={resource} />)}
      </div>
    </section>
  );
}
