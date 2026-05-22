export function PrintableChecklist({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-slate-700 print-checklist-item">
          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-court bg-white" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
