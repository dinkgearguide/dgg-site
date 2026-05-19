import Image from "next/image";
import type { Product } from "@/types/product";
import { AffiliateButton } from "@/components/AffiliateButton";
import { RelatedProducts } from "@/components/RelatedProducts";

export function ProductDetail({ product }: { product: Product }) {
  return (
    <article className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
      <Image src={product.image} alt={`${product.name} product photo`} width={720} height={460} className="aspect-[13/8] w-full rounded-lg border border-slate-200 bg-white object-cover shadow-sm" priority />
      <div>
        <p className="text-sm font-bold uppercase tracking-widest text-court">{product.category}</p>
        <h1 className="mt-3 text-4xl font-black leading-tight text-ink">{product.name}</h1>
        <dl className="mt-5 grid gap-2 text-sm sm:grid-cols-3">
          <Badge label="Best for" value={product.bestFor} />
          <Badge label="Skill level" value={product.skillLevel} />
          <Badge label="Price tier" value={product.priceTier} />
        </dl>
        <p className="mt-6 leading-8 text-slate-700">{product.longDescription}</p>
        <div className="mt-6 rounded-lg border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-950">
          Disclosure: Product links may be affiliate links when active. If you buy through an affiliate link, I may earn a commission at no extra cost to you.
        </div>
        <div className="mt-5"><AffiliateButton product={product} /></div>
      </div>
      <div className="lg:col-span-2">
        <Info title="Features" items={product.features} />
        <Info title="Pros" items={product.pros} />
        <Info title="Cons" items={product.cons} />
        <Info title="Buying tips" items={product.buyingTips} />
        <RelatedProducts product={product} />
      </div>
    </article>
  );
}

function Badge({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-3">
      <dt className="font-bold text-slate-800">{label}</dt>
      <dd className="mt-1 text-slate-600">{value}</dd>
    </div>
  );
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-black text-ink">{title}</h2>
      <ul className="mt-3 grid gap-3 sm:grid-cols-2">
        {items.map((item) => <li key={item} className="rounded-lg border border-slate-200 bg-white p-4 text-slate-700">{item}</li>)}
      </ul>
    </section>
  );
}
