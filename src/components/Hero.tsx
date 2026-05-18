import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-court">Dink Gear Guide</p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-ink md:text-6xl">New to pickleball? Find the gear worth buying first.</h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-650">Simple beginner-friendly guides for paddles, starter sets, balls, bags, accessories, and gifts — without the hype.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/gear/" className="inline-flex min-h-12 items-center justify-center rounded-md bg-court px-6 py-3 font-bold text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200">
              View Beginner Gear
            </Link>
            <Link href="/gear-checklist/" className="inline-flex min-h-12 items-center justify-center rounded-md border border-slate-300 px-6 py-3 font-bold text-ink hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-emerald-200">
              Read the Gear Checklist
            </Link>
          </div>
        </div>
        <div className="rounded-lg border border-slate-200 bg-gradient-to-br from-emerald-50 via-white to-blue-50 p-6 shadow-soft">
          <div className="grid grid-cols-2 gap-3">
            {["Paddles", "Balls", "Bags", "Starter sets"].map((item) => (
              <div key={item} className="rounded-lg bg-white p-5 text-center font-bold text-slate-800 shadow-sm">
                {item}
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-slate-600">Practical picks for casual courts, clinics, neighborhood games, and first-time players.</p>
        </div>
      </div>
    </section>
  );
}
