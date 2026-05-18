import Link from "next/link";

export function Breadcrumbs({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <nav className="mb-6 text-sm" aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-2 text-slate-600">
        <li><Link href="/" className="hover:text-court">Home</Link></li>
        {items.map((item) => (
          <li key={item.href} className="before:mr-2 before:content-['/']">
            <Link href={item.href} className="hover:text-court">{item.label}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
