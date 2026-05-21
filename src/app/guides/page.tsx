import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BeginnerNextSteps } from "@/components/BeginnerNextSteps";
import { GuideCard } from "@/components/GuideCard";
import { JsonLd } from "@/components/JsonLd";
import { guides } from "@/data/guides";
import { breadcrumbJsonLd, guideItemListJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Beginner Pickleball Gear Guides | Dink Gear Guide",
  "Simple beginner pickleball gear guides covering paddles, starter sets, balls, bags, gifts, backyard setups, and what new players can skip.",
  "/guides/"
);

export default function GuidesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides/" }])} />
      <JsonLd data={guideItemListJsonLd("Beginner Pickleball Gear Guides", "/guides/", guides)} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides/" }]} />
      <h1 className="text-4xl font-black text-ink">Beginner Pickleball Gear Guides</h1>
      <p className="mt-4 max-w-3xl leading-8 text-slate-700">
        Practical gear guides for new and recreational pickleball players. Start with what you need for the first few games, then upgrade only when your playing habits and preferences are clearer.
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {guides.map((guide) => <GuideCard key={guide.slug} guide={guide} />)}
      </div>
      <BeginnerNextSteps />
    </main>
  );
}
