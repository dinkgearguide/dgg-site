"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [done, setDone] = useState(false);
  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDone(true);
  }
  if (done) return <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-5 text-emerald-950">Thanks — contact form integration can be added later.</div>;
  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <label className="font-bold text-ink">Name<input required className="mt-2 min-h-11 w-full rounded-md border border-slate-300 px-3 font-normal focus:outline-none focus:ring-4 focus:ring-emerald-200" /></label>
      <label className="font-bold text-ink">Email<input type="email" required className="mt-2 min-h-11 w-full rounded-md border border-slate-300 px-3 font-normal focus:outline-none focus:ring-4 focus:ring-emerald-200" /></label>
      <label className="font-bold text-ink">Message<textarea required rows={6} className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 font-normal focus:outline-none focus:ring-4 focus:ring-emerald-200" /></label>
      <button className="min-h-11 rounded-md bg-court px-5 py-3 font-bold text-white hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200">Send message</button>
      <p className="text-sm text-slate-600">Placeholder only. No message is transmitted or stored.</p>
    </form>
  );
}
