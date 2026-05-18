"use client";

import { useMemo, useState } from "react";
import type { Product } from "@/types/product";
import { EmptyState } from "@/components/EmptyState";
import { ProductGrid } from "@/components/ProductGrid";
import { categories, priceTiers, skillLevels } from "@/data/products";

const all = "All";

export function ProductFilters({ products }: { products: Product[] }) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(all);
  const [skillLevel, setSkillLevel] = useState(all);
  const [priceTier, setPriceTier] = useState(all);
  const [bestFor, setBestFor] = useState(all);
  const bestForOptions = Array.from(new Set(products.map((product) => product.bestFor)));

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return products.filter((product) => {
      const text = [product.name, product.category, product.shortDescription, product.bestFor, ...product.features].join(" ").toLowerCase();
      return (
        (!term || text.includes(term)) &&
        (category === all || product.category === category) &&
        (skillLevel === all || product.skillLevel === skillLevel) &&
        (priceTier === all || product.priceTier === priceTier) &&
        (bestFor === all || product.bestFor === bestFor)
      );
    });
  }, [bestFor, category, priceTier, products, query, skillLevel]);

  return (
    <div className="space-y-6">
      <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm">
        <label className="block text-sm font-bold text-ink" htmlFor="gear-search">Search gear</label>
        <input id="gear-search" value={query} onChange={(event) => setQuery(event.target.value)} className="mt-2 min-h-11 w-full rounded-md border border-slate-300 px-3 focus:outline-none focus:ring-4 focus:ring-emerald-200" placeholder="Search paddles, balls, bags, features..." />
        <div className="mt-4 grid gap-3 md:grid-cols-4">
          <Filter label="Category" value={category} options={[all, ...categories]} onChange={setCategory} />
          <Filter label="Skill level" value={skillLevel} options={[all, ...skillLevels]} onChange={setSkillLevel} />
          <Filter label="Price tier" value={priceTier} options={[all, ...priceTiers]} onChange={setPriceTier} />
          <Filter label="Best for" value={bestFor} options={[all, ...bestForOptions]} onChange={setBestFor} />
        </div>
      </div>
      {filtered.length ? <ProductGrid products={filtered} /> : <EmptyState />}
    </div>
  );
}

function Filter({ label, value, options, onChange }: { label: string; value: string; options: string[]; onChange: (value: string) => void }) {
  return (
    <label className="text-sm font-bold text-ink">
      {label}
      <select value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 font-normal focus:outline-none focus:ring-4 focus:ring-emerald-200">
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
    </label>
  );
}
