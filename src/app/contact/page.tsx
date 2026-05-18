import { Breadcrumbs } from "@/components/Breadcrumbs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact Dink Gear Guide", "Contact Dink Gear Guide by email.", "/contact/");

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }])} />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact/" }]} />
      <h1 className="text-4xl font-black text-ink">Contact Dink Gear Guide</h1>
      <p className="mt-4 leading-8 text-slate-700">Questions, corrections, or product suggestions can be sent by email.</p>
      <div className="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-bold uppercase tracking-widest text-court">Email</p>
        <a href="mailto:info@dinkgearguide.com" className="mt-2 inline-block text-lg font-black text-ink underline hover:text-court focus:outline-none focus:ring-4 focus:ring-emerald-200">
          info@dinkgearguide.com
        </a>
      </div>
    </main>
  );
}
