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
        <p>Dink Gear Guide helps new and recreational pickleball players find beginner-friendly paddles, starter sets, balls, bags, gifts, and court accessories without overcomplicating the buying process.</p>
        <p>The site uses practical product categories, price tiers, and plain-English guidance. It is an affiliate recommendation site, not an ecommerce checkout store.</p>
        <p>Product details should always be checked with the retailer before purchase because prices, availability, specifications, and approval status can change.</p>
      </div>
    </main>
  );
}
