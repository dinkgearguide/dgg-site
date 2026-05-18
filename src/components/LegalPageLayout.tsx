import type { ReactNode } from "react";

export function LegalPageLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-4xl font-black text-ink">{title}</h1>
      <div className="prose prose-slate mt-6 max-w-none leading-8">{children}</div>
    </main>
  );
}
