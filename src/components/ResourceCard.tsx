import Link from "next/link";

export type ResourceCardItem = {
  title: string;
  description: string;
  category: string;
  href: string;
};

export function ResourceCard({ resource }: { resource: ResourceCardItem }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-black uppercase tracking-widest text-court">{resource.category}</p>
      <h3 className="mt-3 text-xl font-black text-ink">{resource.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{resource.description}</p>
      <Link href={resource.href} className="mt-auto inline-flex min-h-11 items-center justify-center rounded-md bg-slate-100 px-4 py-3 text-sm font-bold text-ink hover:bg-slate-200 focus:outline-none focus:ring-4 focus:ring-emerald-200">
        View resource
      </Link>
    </article>
  );
}
