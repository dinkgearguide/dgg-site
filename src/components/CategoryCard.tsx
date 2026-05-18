import Link from "next/link";

export function CategoryCard({ title, href, description }: { title: string; href: string; description: string }) {
  return (
    <Link href={href} className="block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-emerald-200">
      <h3 className="text-xl font-black text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}
