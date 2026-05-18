export type IconName =
  | "bag"
  | "ball"
  | "checklist"
  | "gift"
  | "paddle"
  | "shield"
  | "spark"
  | "target";

const paths: Record<IconName, string[]> = {
  bag: [
    "M7 10h10l1 9H6l1-9Z",
    "M9 10V8a3 3 0 0 1 6 0v2"
  ],
  ball: [
    "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
    "M7.5 7.5c3.2.8 5.2 2.8 6 6",
    "M16.5 16.5c-3.2-.8-5.2-2.8-6-6"
  ],
  checklist: [
    "M8 6h12",
    "M8 12h12",
    "M8 18h12",
    "m3 6 1 1 2-2",
    "m3 12 1 1 2-2",
    "m3 18 1 1 2-2"
  ],
  gift: [
    "M4 11h16v9H4v-9Z",
    "M4 11h16",
    "M12 8v12",
    "M7 8c-1.5-2 .2-4 2-2 1.4 0 3 2 3 2s1.6-2 3-2c1.8 0 3.5 2 2 4"
  ],
  paddle: [
    "M12 4a5 5 0 0 0-2 9.6V21h4v-7.4A5 5 0 0 0 12 4Z",
    "M10 17h4"
  ],
  shield: [
    "M12 3 19 6v5c0 4.4-2.8 8.3-7 10-4.2-1.7-7-5.6-7-10V6l7-3Z",
    "m9 12 2 2 4-5"
  ],
  spark: [
    "M12 3v5",
    "M12 16v5",
    "M3 12h5",
    "M16 12h5",
    "m6 6 2.5-2.5",
    "m15.5 8.5 2.5-2.5",
    "m6 6 2.5 2.5",
    "m15.5 15.5 2.5 2.5"
  ],
  target: [
    "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",
    "M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
    "M12 12h.01"
  ]
};

export function IconBadge({ icon, className = "" }: { icon: IconName; className?: string }) {
  return (
    <span className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-court ring-1 ring-emerald-100 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {paths[icon].map((path) => (
          <path key={path} d={path} />
        ))}
      </svg>
    </span>
  );
}
