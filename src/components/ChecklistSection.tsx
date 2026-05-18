import { IconBadge, type IconName } from "@/components/IconBadge";

export function ChecklistSection({ title, items }: { title: string; items: string[] }) {
  const icon = getChecklistIcon(title);

  return (
    <section className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-start gap-4">
        <IconBadge icon={icon} className="bg-blue-50 text-paddle ring-blue-100" />
        <h2 className="pt-1 text-2xl font-black text-ink">{title}</h2>
      </div>
      <ul className="mt-4 space-y-3 text-slate-700">
        {items.map((item) => <li key={item}>• {item}</li>)}
      </ul>
    </section>
  );
}

function getChecklistIcon(title: string): IconName {
  const normalized = title.toLowerCase();
  if (normalized.includes("must") || normalized.includes("recommended")) return "checklist";
  if (normalized.includes("skip") || normalized.includes("mistake")) return "shield";
  if (normalized.includes("upgrade") || normalized.includes("nice")) return "spark";
  if (normalized.includes("ball")) return "ball";
  if (normalized.includes("bag")) return "bag";
  if (normalized.includes("gift")) return "gift";
  return "target";
}
