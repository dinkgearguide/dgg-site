import Link from "next/link";

export function CTASection({ title, text, href, label }: { title: string; text: string; href: string; label: string }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black text-ink">{title}</h2>
      <p className="mt-3 text-slate-600">{text}</p>
      <Link href={href} className="mt-5 inline-flex min-h-11 items-center rounded-md bg-court px-5 py-3 font-bold text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200">{label}</Link>
    </section>
  );
}
