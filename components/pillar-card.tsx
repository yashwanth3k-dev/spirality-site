import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardEyebrow,
  CardFooter,
  CardHeader,
  CardIcon,
  CardTitle
} from "@/components/ui/card";
import { SolutionPillar } from "@/lib/content";

type PillarCardProps = {
  pillar: SolutionPillar;
};

export function PillarCard({ pillar }: PillarCardProps) {
  const Icon = pillar.icon;

  return (
    <Card className="group transition hover:-translate-y-0.5 hover:border-brand/30">
      <CardHeader>
        <CardIcon>
          <Icon className="h-5 w-5" />
        </CardIcon>
        <CardEyebrow>{pillar.eyebrow}</CardEyebrow>
      </CardHeader>
      <CardTitle>{pillar.title}</CardTitle>
      <CardDescription>{pillar.summary}</CardDescription>
      <CardContent>
        <ul className="grid gap-2.5">
          {pillar.items.map((item) => (
            <li key={item} className="flex gap-2.5 text-sm leading-6 text-slate-700">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Link
          href="/start-diagnostic"
          className="inline-flex items-center gap-2 text-sm font-bold text-brand"
        >
          {pillar.cta}
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </Link>
      </CardFooter>
    </Card>
  );
}
