import Link from "next/link";
import { IconBadge, type IconName } from "@/components/IconBadge";

export function CategoryCard({ title, href, description }: { title: string; href: string; description: string }) {
  const icon = getCategoryIcon(title);

  return (
    <Link href={href} className="block rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft focus:outline-none focus:ring-4 focus:ring-emerald-200">
      <div className="flex items-start gap-4">
        <IconBadge icon={icon} />
        <h3 className="pt-2 text-xl font-black text-ink">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </Link>
  );
}

function getCategoryIcon(title: string): IconName {
  const normalized = title.toLowerCase();
  if (normalized.includes("checklist")) return "checklist";
  if (normalized.includes("set")) return "spark";
  if (normalized.includes("paddle")) return "paddle";
  if (normalized.includes("ball")) return "ball";
  if (normalized.includes("bag")) return "bag";
  if (normalized.includes("gift")) return "gift";
  return "target";
}
