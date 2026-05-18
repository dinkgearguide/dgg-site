import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata("Contact Dink Gear Guide", "Contact Dink Gear Guide using a placeholder form that can be connected later.", "/contact/");

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd data={breadcrumbJsonLd([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact/" }])} />
      <Breadcrumbs items={[{ label: "Contact", href: "/contact/" }]} />
      <h1 className="text-4xl font-black text-ink">Contact Dink Gear Guide</h1>
      <p className="mt-4 leading-8 text-slate-700">This form is a static UI placeholder. It does not transmit or store personal information until a form provider is connected later.</p>
      <div className="mt-6"><ContactForm /></div>
    </main>
  );
}
