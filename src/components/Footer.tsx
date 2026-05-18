import Link from "next/link";

const links = [
  ["About", "/about/"],
  ["Contact", "/contact/"],
  ["Affiliate Disclosure", "/affiliate-disclosure/"],
  ["Privacy Policy", "/privacy-policy/"],
  ["Terms of Use", "/terms/"]
];

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-white">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-10 md:grid-cols-[1fr_auto]">
        <div>
          <p className="font-black">© Dink Gear Guide</p>
          <p className="mt-2 max-w-xl text-sm text-slate-300">Beginner-friendly pickleball gear without the guesswork.</p>
          <p className="mt-2 text-sm text-slate-300">As an Amazon Associate I earn from qualifying purchases.</p>
        </div>
        <nav className="flex flex-wrap gap-3 text-sm" aria-label="Footer navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="rounded-md px-2 py-1 text-slate-200 hover:text-white focus:outline-none focus:ring-4 focus:ring-emerald-300">
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
