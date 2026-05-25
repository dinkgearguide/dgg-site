import Link from "next/link";

const links = [
  ["Gear Checklist", "/gear-checklist/"],
  ["Starter Sets", "/starter-sets/"],
  ["Beginner Paddles", "/beginner-paddles/"],
  ["Balls", "/balls/"],
  ["Bags", "/bags/"],
  ["Guides", "/guides/"],
  ["Resources", "/resources/"]
];

export function BeginnerNextSteps() {
  return (
    <section className="mt-12 rounded-lg border border-emerald-100 bg-emerald-50 p-6">
      <h2 className="text-2xl font-black text-ink">Next steps for new players</h2>
      <div className="mt-4 flex flex-wrap gap-3">
        {links.map(([label, href]) => (
          <Link key={href} href={href} className="rounded-md bg-white px-4 py-3 text-sm font-bold text-court shadow-sm hover:text-emerald-900 focus:outline-none focus:ring-4 focus:ring-emerald-200">
            {label}
          </Link>
        ))}
      </div>
    </section>
  );
}
