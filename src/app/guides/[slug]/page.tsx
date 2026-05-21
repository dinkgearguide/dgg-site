import Link from "next/link";
import { notFound } from "next/navigation";
import { BeginnerNextSteps } from "@/components/BeginnerNextSteps";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ChecklistTable } from "@/components/ChecklistTable";
import { JsonLd } from "@/components/JsonLd";
import { RelatedGuides } from "@/components/RelatedGuides";
import { getGuideBySlug, guides } from "@/data/guides";
import { articleJsonLd, breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return pageMetadata("Guide Not Found | Dink Gear Guide", "Beginner pickleball gear guide not found.", "/guides/", true);
  return pageMetadata(guide.title, guide.description, `/guides/${guide.slug}/`);
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Guides", path: "/guides/" }, { name: guide.title, path: `/guides/${guide.slug}/` }])} />
      <JsonLd data={articleJsonLd(guide)} />
      <Breadcrumbs items={[{ label: "Guides", href: "/guides/" }, { label: guide.title, href: `/guides/${guide.slug}/` }]} />
      <p className="text-sm font-black uppercase tracking-widest text-court">{guide.category}</p>
      <h1 className="mt-3 text-4xl font-black leading-tight text-ink">{guide.title}</h1>
      <p className="mt-4 text-sm text-slate-500">Last reviewed: {guide.lastReviewedAt} • {guide.readingTime}</p>
      <p className="mt-6 text-lg leading-8 text-slate-700">{guide.intro}</p>

      <div className="mt-8 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-950">
        Disclosure: Some product links may be affiliate links. If you buy through those links, I may earn a commission at no extra cost to you.
      </div>

      <div className="mt-8 space-y-10">
        {guide.sections.map((section) => (
          <section key={section.title}>
            <h2 className="text-2xl font-black text-ink">{section.title}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph} className="mt-4 leading-8 text-slate-700">{paragraph}</p>)}
            {section.checklist ? (
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {section.checklist.map((item) => <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">{item}</li>)}
              </ul>
            ) : null}
            {section.table ? <ChecklistTable headers={section.table.headers} rows={section.table.rows} /> : null}
          </section>
        ))}
      </div>

      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-ink">Useful next pages</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link href="/gear-checklist/" className="rounded-md bg-slate-100 px-4 py-3 text-sm font-bold text-ink hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-200">
            Gear Checklist
          </Link>
          {guide.categoryLinks.map((link) => (
            <Link key={link.href} href={link.href} className="rounded-md bg-slate-100 px-4 py-3 text-sm font-bold text-ink hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-200">
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg border border-slate-200 bg-slate-50 p-6">
        <h2 className="text-2xl font-black text-ink">Editorial note</h2>
        <p className="mt-3 leading-8 text-slate-700">
          This guide is designed for beginner and recreational players. Product details, prices, availability, and approval status may change, so verify current details before buying.
        </p>
      </section>

      <RelatedGuides slugs={guide.relatedGuideSlugs} />
      <BeginnerNextSteps />
    </main>
  );
}
