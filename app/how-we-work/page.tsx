import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { OpportunityChart } from "@/components/opportunity-chart";
import {
  Container,
  PageHero,
  Section,
  SectionGrid,
  SectionHeader
} from "@/components/layout";
import {
  Card,
  CardDescription,
  CardEyebrow,
  CardHeader,
  CardIcon,
  CardTitle
} from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { diagnosticSteps, governancePrinciples } from "@/lib/content";

export const metadata: Metadata = {
  title: "How We Work",
  description:
    "Spirality starts with an AI readiness diagnostic, then builds or operates the right AI-powered business system."
};

const deliveryModels = [
  {
    step: "A",
    title: "Managed Outcome",
    path: "You → Spirality → Outcome",
    description:
      "Spirality operates the process under an agreed SLA and continuously improves the system."
  },
  {
    step: "B",
    title: "Build & Transfer",
    path: "You → Spirality → Your Team",
    description:
      "We design, build, test, and deploy the system, then transfer it with documentation, controls, and training."
  }
];

export default function HowWeWorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="How we work"
        title="Start with the diagnostic. Then choose the right delivery model."
        description="Before investing in AI, understand where it can actually create value, what data is ready, what risk exists, and what should happen first."
        media={
          <div className="overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-soft md:p-5">
            <OpportunityChart />
          </div>
        }
      />

      <Section variant="paper" className="pt-0">
        <Container size="wide">
          <SectionHeader
            eyebrow="AI Readiness & Opportunity Diagnostic"
            title="Discover, assess, prioritize, and roadmap before building."
          />
          <SectionGrid cols={3} className="mt-10 md:mt-12">
            {diagnosticSteps.map((step) => {
              const Icon = step.icon;
              return (
                <Card key={step.step}>
                  <CardHeader>
                    <CardIcon>
                      <Icon className="h-5 w-5" />
                    </CardIcon>
                    <CardEyebrow>{step.step}</CardEyebrow>
                  </CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                  <CardDescription>{step.description}</CardDescription>
                </Card>
              );
            })}
          </SectionGrid>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeader
            eyebrow="Delivery models"
            title="Build it. Or let us run it."
            description="The diagnostic ends with a practical recommendation: Spirality runs the process for you, or builds the system and transfers ownership."
          />
          <SectionGrid cols={2} className="mt-10 md:mt-12">
            {deliveryModels.map((model) => (
              <Card key={model.title}>
                <CardHeader>
                  <CardEyebrow>{model.step}</CardEyebrow>
                </CardHeader>
                <CardTitle className="mt-2">{model.title}</CardTitle>
                <p className="mt-4 rounded-xl bg-paper px-4 py-3 text-sm font-bold text-brand">
                  {model.path}
                </p>
                <CardDescription className="mt-4">{model.description}</CardDescription>
              </Card>
            ))}
          </SectionGrid>
        </Container>
      </Section>

      <Section id="responsible-ai" variant="dark">
        <Container size="wide">
          <SectionHeader
            dark
            eyebrow="Responsible AI by design"
            title="Governance is part of the system, not a policy PDF after launch."
          />
          <SectionGrid cols={3} className="mt-10 md:mt-12">
            {governancePrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} variant="dark">
                  <CardIcon dark>
                    <Icon className="h-5 w-5" />
                  </CardIcon>
                  <CardTitle dark>{item.title}</CardTitle>
                  <CardDescription dark>{item.description}</CardDescription>
                </Card>
              );
            })}
          </SectionGrid>
          <div className="mt-10">
            <ButtonLink href="/start-diagnostic" variant="dark">
              Start Diagnostic
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
