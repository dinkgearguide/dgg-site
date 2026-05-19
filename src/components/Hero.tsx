import Link from "next/link";

export function Hero() {
  const heroLinks = [
    { label: "Paddles", href: "/beginner-paddles/" },
    { label: "Balls", href: "/balls/" },
    { label: "Bags", href: "/bags/" },
    { label: "Starter sets", href: "/starter-sets/" }
  ];

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-slate-950 md:min-h-[680px]">
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_42%]"
        style={{ backgroundImage: "url('/images/hero-pickleball-players.png')" }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/75 to-slate-950/20" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-transparent to-slate-950/10" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[620px] max-w-6xl items-center px-4 py-16 md:min-h-[680px]">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-emerald-200">Dink Gear Guide</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">New to pickleball? Find the gear worth buying first.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-100">Simple beginner-friendly guides for paddles, starter sets, balls, bags, accessories, and gifts — without the hype.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/gear/" className="inline-flex min-h-12 items-center justify-center rounded-md bg-emerald-300 px-6 py-3 font-bold text-slate-950 hover:bg-emerald-200 focus:outline-none focus:ring-4 focus:ring-emerald-200">
              View Beginner Gear
            </Link>
            <Link href="/gear-checklist/" className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/70 bg-white/10 px-6 py-3 font-bold text-white backdrop-blur hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-emerald-200">
              Read the Gear Checklist
            </Link>
          </div>
          <div className="mt-8 grid max-w-2xl gap-3 text-sm font-bold text-white sm:grid-cols-4">
            {heroLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md border border-white/25 bg-slate-950/35 px-4 py-3 backdrop-blur transition hover:border-emerald-200 hover:bg-white/15 focus:outline-none focus:ring-4 focus:ring-emerald-200"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
