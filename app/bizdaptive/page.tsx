import type { Metadata } from "next";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LogoMark } from "@/components/logo-mark";
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
  CardIcon,
  CardTitle
} from "@/components/ui/card";
import { ButtonLink } from "@/components/ui/button";
import { bizdaptiveLayers, governancePrinciples } from "@/lib/content";

export const metadata: Metadata = {
  title: "Bizdaptive",
  description:
    "Bizdaptive is the future governance and coordination platform coming from Spirality Solutions."
};

export default function BizdaptivePage() {
  return (
    <main>
      <PageHero
        dark
        eyebrow="Coming from Spirality"
        title="Bizdaptive"
        description="A governance and coordination platform for the next generation of AI-powered organizations."
        actions={
          <>
            <ButtonLink href="#early-access" variant="dark">
              Join Early Access
            </ButtonLink>
            <ButtonLink
              href="/how-we-work#responsible-ai"
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              Responsible AI
            </ButtonLink>
          </>
        }
        media={
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 md:p-8">
            <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-white">
              <LogoMark className="h-14 w-14" />
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {bizdaptiveLayers.map((layer) => (
                <div
                  key={layer}
                  className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-white/75"
                >
                  {layer}
                </div>
              ))}
            </div>
          </div>
        }
      />

      <Section>
        <Container size="wide">
          <SectionHeader
            eyebrow="Platform direction"
            title="Control agents, coordinate work, preserve memory, and verify action."
            description="Bizdaptive should not overpower Spirality today. It should show where the company is going: from consulting and managed operations into proprietary governance infrastructure."
          />
          <SectionGrid cols={3} className="mt-10 md:mt-12">
            {governancePrinciples.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title}>
                  <CardIcon>
                    <Icon className="h-5 w-5" />
                  </CardIcon>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </Card>
              );
            })}
          </SectionGrid>
        </Container>
      </Section>

      <Section id="early-access" variant="paper">
        <Container size="narrow">
          <div className="flex flex-col items-center rounded-3xl border border-line bg-white px-6 py-12 text-center shadow-soft sm:px-10 sm:py-14">
            <CheckCircle2 className="h-10 w-10 text-brand" />
            <h2 className="mt-5 text-h2 font-bold tracking-tight">Join the early access list.</h2>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-muted">
              Early partners help shape the governance layer for AI-powered work:
              policies, approvals, memory, verification, and execution history.
            </p>
            <ButtonLink href="/start-diagnostic" className="mt-8">
              Start With Spirality
              <ArrowRight className="ml-2 h-4 w-4" />
            </ButtonLink>
          </div>
        </Container>
      </Section>
    </main>
  );
}
