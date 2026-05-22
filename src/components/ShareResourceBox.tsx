"use client";

import { useState } from "react";

export function ShareResourceBox({ title = "Share this beginner resource" }: { title?: string }) {
  const [message, setMessage] = useState("");

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setMessage("Link copied.");
    } catch {
      setMessage("Copy failed. You can copy the URL from your browser address bar.");
    }
  }

  return (
    <section className="no-print rounded-lg border border-blue-100 bg-blue-50 p-5">
      <h2 className="text-xl font-black text-ink">{title}</h2>
      <p className="mt-2 text-sm leading-6 text-slate-700">Useful for beginner groups, clubs, rec centers, and new-player emails.</p>
      <button
        type="button"
        onClick={copyLink}
        className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-ink px-4 py-3 text-sm font-bold text-white hover:bg-slate-700 focus:outline-none focus:ring-4 focus:ring-blue-200"
      >
        Copy link
      </button>
      {message ? <p className="mt-3 text-sm font-semibold text-slate-700" role="status">{message}</p> : null}
    </section>
  );
}
