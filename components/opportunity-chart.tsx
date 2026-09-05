"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { opportunityRows } from "@/lib/content";

export function OpportunityChart() {
  return (
    <div className="rounded-4xl border border-line bg-white p-5 shadow-soft">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-brand">
            Sample output
          </p>
          <h3 className="mt-2 text-2xl font-extrabold text-ink">
            AI Opportunity Portfolio
          </h3>
        </div>
        <span className="rounded-full bg-brandSoft/20 px-3 py-1 text-xs font-bold text-brand">
          Example
        </span>
      </div>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={opportunityRows} margin={{ left: -20, right: 8 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5ebf7" />
            <XAxis dataKey="name" tick={{ fontSize: 11 }} interval={0} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip
              cursor={{ fill: "rgba(43, 92, 255, 0.06)" }}
              contentStyle={{
                borderRadius: 16,
                border: "1px solid #dfe6f3",
                boxShadow: "0 16px 48px -30px rgba(16, 19, 29, 0.35)"
              }}
            />
            <Bar dataKey="value" name="Value" fill="#1E3A8A" radius={[8, 8, 0, 0]} />
            <Bar
              dataKey="complexity"
              name="Complexity"
              fill="#1A8A82"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
