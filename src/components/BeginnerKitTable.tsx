import Link from "next/link";

export type BeginnerKitRow = {
  playerType: string;
  setup: string;
  skip: string;
  guideLabel: string;
  guideHref: string;
};

export function BeginnerKitTable({ rows }: { rows: BeginnerKitRow[] }) {
  return (
    <div className="mt-5 overflow-x-auto rounded-lg border border-slate-200 bg-white">
      <table className="w-full min-w-[720px] border-collapse text-left text-sm">
        <thead className="bg-slate-100 text-ink">
          <tr>
            <th className="p-4 font-black">Player type</th>
            <th className="p-4 font-black">Best starting setup</th>
            <th className="p-4 font-black">What to skip</th>
            <th className="p-4 font-black">Related guide</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.playerType} className="border-t border-slate-200 align-top">
              <td className="p-4 font-bold text-ink">{row.playerType}</td>
              <td className="p-4 text-slate-700">{row.setup}</td>
              <td className="p-4 text-slate-700">{row.skip}</td>
              <td className="p-4">
                <Link href={row.guideHref} className="font-bold text-court underline">
                  {row.guideLabel}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
