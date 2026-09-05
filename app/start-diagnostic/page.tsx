import type { Metadata } from "next";
import { DiagnosticForm } from "@/components/diagnostic-form";
import { OpportunityChart } from "@/components/opportunity-chart";
import {
  Container,
  PageHero,
  Section,
  SectionHeader,
  SplitAside,
  SplitLayout,
  SplitMain
} from "@/components/layout";
import { diagnosticSteps, opportunityRows } from "@/lib/content";

export const metadata: Metadata = {
  title: "Start Diagnostic",
  description:
    "Start the AI Readiness & Opportunity Diagnostic with Spirality Solutions."
};

export default function StartDiagnosticPage() {
  return (
    <main>
      <PageHero
        eyebrow="AI Readiness & Opportunity Diagnostic"
        title="Before investing in AI, understand where it can actually create value."
        description="Tell us what you are trying to improve. The diagnostic turns that starting point into a ranked opportunity portfolio and delivery recommendation."
        media={<DiagnosticForm />}
      />

      <Section variant="paper" className="pt-0">
        <Container size="wide">
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {diagnosticSteps.slice(0, 3).map((step) => (
              <div
                key={step.step}
                className="rounded-xl border border-line bg-white px-4 py-3 text-sm font-semibold text-slate-700"
              >
                <span className="text-brand">{step.step}</span> {step.title}
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section variant="paper">
        <Container size="wide">
          <SplitLayout className="items-start">
            <SplitMain>
              <div className="overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-soft md:p-5">
                <OpportunityChart />
              </div>
            </SplitMain>
            <SplitAside>
              <SectionHeader
                eyebrow="What you receive"
                title="A practical report, not a generic AI deck."
                description="The output ranks opportunities by value, complexity, risk, and delivery path so the first build is commercially grounded."
              />
              <div className="mt-8 overflow-hidden rounded-3xl border border-line bg-white shadow-soft">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[32rem] text-left text-sm">
                    <thead className="bg-night text-white">
                      <tr>
                        <th className="px-5 py-3.5 font-semibold">Opportunity</th>
                        <th className="px-5 py-3.5 font-semibold">Value</th>
                        <th className="px-5 py-3.5 font-semibold">Complexity</th>
                        <th className="px-5 py-3.5 font-semibold">Priority</th>
                      </tr>
                    </thead>
                    <tbody>
                      {opportunityRows.map((row) => (
                        <tr key={row.name} className="border-t border-line">
                          <td className="px-5 py-3.5 font-semibold text-ink">{row.name}</td>
                          <td className="px-5 py-3.5 text-muted">{row.value}</td>
                          <td className="px-5 py-3.5 text-muted">{row.complexity}</td>
                          <td className="px-5 py-3.5 font-bold text-brand">{row.priority}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </SplitAside>
          </SplitLayout>
        </Container>
      </Section>
    </main>
  );
}
