import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("About Dink Gear Guide", "Learn about Dink Gear Guide and its practical beginner-friendly approach to pickleball gear recommendations.", "/about/");

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "About", path: "/about/" }])} />
      <Breadcrumbs items={[{ label: "About", href: "/about/" }]} />
      <h1 className="text-4xl font-black text-ink">About Dink Gear Guide</h1>
      <div className="mt-6 space-y-4 leading-8 text-slate-700">
        <p>Dink Gear Guide helps new and recreational pickleball players find beginner-friendly paddles, starter sets, balls, bags, and court accessories without overcomplicating the buying process.</p>
        <p>The site uses practical product categories, price tiers, and plain-English guidance. It is an affiliate recommendation site, not an ecommerce checkout store.</p>
        <p>Product details should always be checked with the retailer before purchase because prices, availability, specifications, and approval status can change.</p>
      </div>
      <section className="mt-10 rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-2xl font-black text-ink">How we choose gear</h2>
        <div className="mt-4 space-y-4 leading-8 text-slate-700">
          <p>Dink Gear Guide prioritizes beginner-friendly gear that solves common first-month problems: getting on court, choosing the right ball for the surface, carrying the basics, and avoiding expensive upgrades before preferences are clear.</p>
          <p>Products are organized by practical use case rather than hype. We look for simple setup, understandable specs, comfort, reasonable price tiers, return-policy awareness, and whether the item helps a new or recreational player play more confidently without overbuying.</p>
          <p>We do not publish fake reviews, fake star ratings, live price claims, or personal-testing claims unless testing actually happened. For paddle purchases, players who expect to enter sanctioned tournaments should verify approval with the relevant governing body before buying.</p>
        </div>
      </section>
    </main>
  );
}
