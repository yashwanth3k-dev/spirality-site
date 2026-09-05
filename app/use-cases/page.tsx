import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import {
  Container,
  PageHero,
  Section,
  SectionGrid,
  SectionHeader
} from "@/components/layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardIcon,
  CardTitle
} from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { applications } from "@/lib/content";

export const metadata: Metadata = {
  title: "Use Cases",
  description:
    "Where Spirality applies AI across support, finance, operations, knowledge, and marketing workflows."
};

const caseStudies = [
  {
    title: "AI-Powered Support Operations",
    challenge: "High volume of repetitive support requests and slow manual triage.",
    intervention: "AI agent, knowledge system, CRM integration, and escalation workflow.",
    model: "Managed Outcome",
    result: "Faster response, lower manual load, and 24/7 first-line handling."
  },
  {
    title: "Invoice Processing & Reconciliation",
    challenge: "Finance teams spend time checking documents, routing approvals, and reconciling records.",
    intervention: "Document extraction, rules engine, exception review, and ERP updates.",
    model: "Build & Transfer",
    result: "Cleaner queues, traceable approvals, and fewer repetitive checks."
  },
  {
    title: "Lead Qualification System",
    challenge: "Inbound leads are inconsistent, slow to qualify, and difficult to prioritize.",
    intervention: "AI triage, CRM enrichment, scoring rules, and human handoff.",
    model: "Managed Outcome",
    result: "Better response speed and clearer prioritization for sales teams."
  }
];

export default function UseCasesPage() {
  return (
    <main>
      <PageHero
        eyebrow="Where we apply AI"
        title="Concrete workflows, not abstract use cases."
        description="These categories show where Spirality can identify, build, or operate AI-powered systems. Each one begins with a diagnostic, not a tool demo."
      />

      <Section className="pt-0">
        <Container size="wide">
          <SectionGrid cols={3}>
            {applications.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.category}>
                  <CardIcon>
                    <Icon className="h-5 w-5" />
                  </CardIcon>
                  <CardTitle>{item.category}</CardTitle>
                  <CardDescription>{item.impact}</CardDescription>
                  <CardContent>
                    <div className="grid gap-2">
                      {item.examples.map((example) => (
                        <div
                          key={example}
                          className="flex items-center justify-between rounded-xl bg-paper px-4 py-2.5 text-sm font-semibold text-slate-700"
                        >
                          {example}
                          <ArrowRight className="h-4 w-4 text-slate-300" />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </SectionGrid>
        </Container>
      </Section>

      <Section variant="paper">
        <Container size="wide">
          <SectionHeader
            eyebrow="Example case studies"
            title="Problem, intervention, operating model, outcome."
          />
          <SectionGrid cols={3} className="mt-10 md:mt-12">
            {caseStudies.map((study) => (
              <Card key={study.title}>
                <CardTitle>{study.title}</CardTitle>
                <CardContent className="mt-6">
                  <dl className="grid gap-4 text-sm">
                    <div>
                      <dt className="font-bold text-ink">Challenge</dt>
                      <dd className="mt-1 leading-6 text-muted">{study.challenge}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-ink">Spirality intervention</dt>
                      <dd className="mt-1 leading-6 text-muted">{study.intervention}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-ink">Operating model</dt>
                      <dd className="mt-1 font-semibold text-brand">{study.model}</dd>
                    </div>
                    <div>
                      <dt className="font-bold text-ink">Outcome</dt>
                      <dd className="mt-1 leading-6 text-muted">{study.result}</dd>
                    </div>
                  </dl>
                </CardContent>
              </Card>
            ))}
          </SectionGrid>
          <div className="mt-10">
            <ButtonLink href="/start-diagnostic">
              Find Your First Opportunity
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
