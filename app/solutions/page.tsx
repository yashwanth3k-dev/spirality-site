import type { Metadata } from "next";
import { ArchitectureFlow } from "@/components/architecture-flow";
import { PillarCard } from "@/components/pillar-card";
import {
  Container,
  PageHero,
  Section,
  SectionGrid,
  SectionHeader,
  SplitAside,
  SplitLayout,
  SplitMain
} from "@/components/layout";
import {
  Card,
  CardIcon,
  CardTitle
} from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { solutionPillars, systemLayers } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "AI strategy, agent systems, digital infrastructure, and managed business operations from Spirality Solutions."
};

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="What we do"
        title="Four capabilities. One operating model."
        description="Spirality combines consulting clarity, engineering discipline, and operational ownership so AI becomes a working business system."
      />

      <Section className="pt-0">
        <Container size="wide">
          <SectionGrid cols={2}>
            {solutionPillars.map((pillar) => (
              <PillarCard key={pillar.slug} pillar={pillar} />
            ))}
          </SectionGrid>
        </Container>
      </Section>

      <Section variant="paper">
        <Container size="wide">
          <SplitLayout>
            <SplitAside>
              <SectionHeader
                eyebrow="AI systems"
                title="The agent is only one layer."
                description="The work becomes valuable when the agent is connected to process, knowledge, integrations, people, approvals, and governance."
              />
            </SplitAside>
            <SplitMain>
              <div className="overflow-hidden rounded-3xl border border-line bg-white p-4 shadow-soft md:p-5">
                <div className="diagram-grid rounded-2xl border border-line bg-paper p-4">
                  <ArchitectureFlow />
                </div>
              </div>
            </SplitMain>
          </SplitLayout>
        </Container>
      </Section>

      <Section>
        <Container size="wide">
          <SectionHeader
            eyebrow="Technology approach"
            title="Architecture before tools."
            description="We avoid starting with a model choice. We define the business architecture first, then select tools that fit the workflow."
            action={
              <ButtonLink href="/how-we-work" variant="secondary">
                See how we work
              </ButtonLink>
            }
          />
          <SectionGrid cols={3} className="mt-10 md:mt-12">
            {systemLayers.map((layer) => {
              const Icon = layer.icon;
              return (
                <Card key={layer.label}>
                  <CardIcon>
                    <Icon className="h-5 w-5" />
                  </CardIcon>
                  <CardTitle>{layer.label}</CardTitle>
                </Card>
              );
            })}
          </SectionGrid>
        </Container>
      </Section>
    </main>
  );
}
