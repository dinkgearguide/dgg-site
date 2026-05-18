export function ChecklistSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="text-2xl font-black text-ink">{title}</h2>
      <ul className="mt-4 space-y-3 text-slate-700">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </section>
  );
}
