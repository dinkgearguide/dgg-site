import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { AffiliateButton } from "@/components/AffiliateButton";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
      <Image src={product.image} alt="" width={520} height={320} className="mb-4 aspect-[13/8] w-full rounded-md bg-slate-50 object-cover" />
      <div className="flex flex-wrap gap-2 text-xs font-bold">
        <span className="rounded-full bg-emerald-50 px-3 py-1 text-court">{product.category}</span>
        <span className="rounded-full bg-blue-50 px-3 py-1 text-paddle">{product.priceTier}</span>
      </div>
      <h3 className="mt-4 text-xl font-black text-ink">{product.name}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{product.shortDescription}</p>
      <dl className="mt-4 grid gap-2 text-sm">
        <div><dt className="inline font-bold text-slate-800">Best for: </dt><dd className="inline text-slate-600">{product.bestFor}</dd></div>
        <div><dt className="inline font-bold text-slate-800">Skill level: </dt><dd className="inline text-slate-600">{product.skillLevel}</dd></div>
      </dl>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {product.features.slice(0, 3).map((feature) => <li key={feature}>• {feature}</li>)}
      </ul>
      <div className="mt-auto flex flex-col gap-3 pt-5">
        <Link href={`/gear/${product.slug}/`} className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 px-4 py-3 text-sm font-bold text-ink hover:bg-slate-50 focus:outline-none focus:ring-4 focus:ring-emerald-200">
          View details
        </Link>
        <AffiliateButton product={product} />
      </div>
    </article>
  );
}
