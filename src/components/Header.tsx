import Link from "next/link";

const nav = [
  ["Gear Checklist", "/gear-checklist/"],
  ["Resources", "/resources/"],
  ["Guides", "/guides/"],
  ["Starter Sets", "/starter-sets/"],
  ["Paddles", "/beginner-paddles/"],
  ["Bags", "/bags/"],
  ["Balls", "/balls/"],
  ["All Gear", "/gear/"]
];

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center md:justify-between" aria-label="Main navigation">
        <Link href="/" className="text-lg font-black tracking-tight text-ink focus:outline-none focus:ring-4 focus:ring-emerald-200">
          Dink Gear Guide
        </Link>
        <div className="flex gap-2 overflow-x-auto pb-1 text-sm font-semibold md:flex-wrap md:justify-end md:overflow-visible md:pb-0">
          {nav.map(([label, href]) => (
            <Link key={href} href={href} className="whitespace-nowrap rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100 focus:outline-none focus:ring-4 focus:ring-emerald-200">
              {label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
