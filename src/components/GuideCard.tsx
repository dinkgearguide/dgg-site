import Link from "next/link";
import type { Guide } from "@/data/guides";

export function GuideCard({ guide }: { guide: Guide }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-widest text-court">{guide.category}</p>
      <h2 className="mt-3 text-xl font-black text-ink">{guide.title}</h2>
      <p className="mt-3 text-sm leading-6 text-slate-600">{guide.description}</p>
      <dl className="mt-4 grid gap-2 text-xs text-slate-500">
        <div>
          <dt className="inline font-bold">Reading time: </dt>
          <dd className="inline">{guide.readingTime}</dd>
        </div>
        <div>
          <dt className="inline font-bold">Last reviewed: </dt>
          <dd className="inline">{guide.lastReviewedAt}</dd>
        </div>
      </dl>
      <Link href={`/guides/${guide.slug}/`} className="mt-auto inline-flex min-h-11 items-center justify-center rounded-md bg-court px-4 py-3 text-sm font-bold text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200">
        Read guide
      </Link>
    </article>
  );
}
