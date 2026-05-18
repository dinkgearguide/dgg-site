import type { ReactNode } from "react";

export function LegalPageLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-black text-ink">{title}</h1>
      <div className="mt-8 space-y-5 text-lg leading-8 text-slate-700">{children}</div>
    </main>
  );
}
