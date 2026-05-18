"use client";

import { FormEvent, useState } from "react";

export function EmailSignup() {
  const [done, setDone] = useState(false);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }
  return (
    <section className="rounded-lg bg-slate-950 p-6 text-white md:p-8">
      <h2 className="text-2xl font-black">Get the beginner pickleball gear checklist.</h2>
      {done ? (
        <p className="mt-4 text-emerald-100">Thanks — email integration can be added later.</p>
      ) : (
        <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="email">Email</label>
          <input id="email" type="email" required placeholder="Email address" className="min-h-12 flex-1 rounded-md border border-white/20 px-4 text-ink focus:outline-none focus:ring-4 focus:ring-emerald-300" />
          <button className="min-h-12 rounded-md bg-court px-5 py-3 font-bold text-white hover:bg-emerald-700 focus:outline-none focus:ring-4 focus:ring-emerald-300">Send me the checklist</button>
        </form>
      )}
      <p className="mt-3 text-sm text-slate-300">Placeholder only. No email is transmitted or stored.</p>
    </section>
  );
}
