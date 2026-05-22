"use client";

export function PrintButton({ children = "Print" }: { children?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex min-h-11 items-center justify-center rounded-md bg-court px-5 py-3 text-sm font-black text-white shadow-sm hover:bg-emerald-800 focus:outline-none focus:ring-4 focus:ring-emerald-200"
    >
      {children}
    </button>
  );
}
