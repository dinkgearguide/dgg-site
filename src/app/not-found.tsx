import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="text-4xl font-black text-ink">Page not found</h1>
      <p className="mt-4 text-slate-600">The page you are looking for may have moved or does not exist.</p>
      <Link href="/gear/" className="mt-6 inline-flex min-h-11 items-center rounded-md bg-court px-5 py-3 font-bold text-white">Browse beginner gear</Link>
    </main>
  );
}
