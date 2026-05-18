export function EmptyState() {
  return (
    <div className="rounded-lg border border-dashed border-slate-300 bg-white p-8 text-center">
      <h2 className="text-xl font-black text-ink">No matching gear found</h2>
      <p className="mt-2 text-slate-600">Try a broader search or clear one of the filters.</p>
    </div>
  );
}
