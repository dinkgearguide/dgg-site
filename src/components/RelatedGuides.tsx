import Link from "next/link";
import { getGuideBySlug, type Guide } from "@/data/guides";

export function RelatedGuides({ slugs }: { slugs: string[] }) {
  const related = slugs.map(getGuideBySlug).filter((guide): guide is Guide => Boolean(guide));
  if (!related.length) return null;

  return (
    <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black text-ink">Related beginner guides</h2>
      <ul className="mt-4 grid gap-3 md:grid-cols-2">
        {related.map((guide) => (
          <li key={guide.slug}>
            <Link href={`/guides/${guide.slug}/`} className="font-bold text-court underline-offset-4 hover:underline focus:outline-none focus:ring-4 focus:ring-emerald-200">
              {guide.title}
            </Link>
            <p className="mt-1 text-sm leading-6 text-slate-600">{guide.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
