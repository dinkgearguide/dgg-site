import Link from "next/link";

export function DecisionFrameworkCallout() {
  return (
    <section className="rounded-lg border border-blue-100 bg-blue-50 p-5 text-blue-950">
      <h2 className="text-xl font-black">Beginner gear decision framework</h2>
      <p className="mt-3 leading-7">
        We judge beginner pickleball gear by five practical checks: fit the first-month use case, choose comfort over hype, match the court surface, keep the price tier reasonable, and avoid upgrades before preferences are clear.
      </p>
      <Link href="/gear-decision-framework/" className="mt-4 inline-flex min-h-11 items-center rounded-md bg-blue-900 px-4 py-3 text-sm font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-200">
        See the framework
      </Link>
    </section>
  );
}
