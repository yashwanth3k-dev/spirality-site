import { ROUTES } from "~/lib/content/home";
import type { UseCaseFlowStep } from "~/lib/content/use-cases";

export type CaseStudy = {
  slug: string;
  pattern: string;
  name: string;
  client: string;
  status: string;
  promise: string;
  situation: string;
  building: string;
  situationTitle: string;
  buildingTitle: string;
  situationPoints: string[];
  buildingPoints: string[];
  contrastKicker: string;
  contrastHeading: string;
  approach: string;
  human: string;
  scope: string;
  image: string;
  imageAlt: string;
  specs: Array<{ label: string; value: string; note: string }>;
  flowLabel: string;
  flow: UseCaseFlowStep[];
  ctaHeading: string;
  related: Array<{ label: string; href: string }>;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "electrical-contractor",
    pattern: "01",
    name: "Operations software for a large electrical contractor",
    client: "One of the larger electrical contractors in the region",
    status: "Work in progress",
    promise:
      "A custom application to run the work — from the pain points, not from a template.",
    situation:
      "Jobs, paper, and follow-ups lived in too many places. People spent the day stitching the process together by hand.",
    building:
      "A system built around how they actually work. We started with consulting, then the build. It is being deployed now.",
    situationTitle: "The process lived in people’s heads",
    buildingTitle: "One application, built for their jobs",
    situationPoints: [
      "Work jumped between files, chats, and memory.",
      "Simple follow-ups depended on who remembered.",
      "The pain was the process — not a missing chatbot.",
    ],
    buildingPoints: [
      "We sat with the real pain first, then designed the software around it.",
      "The application is custom — made to fit their jobs, not a generic pack.",
      "It is going in now. This study will grow as the rollout finishes.",
    ],
    contrastKicker: "Before and what we’re putting in",
    contrastHeading: "Start with the jobs. Then build the system.",
    approach:
      "Consulting first: map the pain, agree what to change, then build and deploy. We are in the deploy stage.",
    human:
      "Supervisors and office staff still own the calls that need judgement. The software takes the retyping and chasing.",
    scope: "Custom application · Process consulting · Deployment",
    image: "/case-studies/electrical.png",
    imageAlt:
      "Industrial electrical workshop with switchgear and cable trays, used as a stand-in for this engagement — client not named.",
    specs: [
      {
        label: "Who",
        value: "Electrical contractor",
        note: "Large, regional, industrial work",
      },
      {
        label: "What",
        value: "Custom application",
        note: "Built around their process",
      },
      { label: "Now", value: "Deploying", note: "Work in progress" },
    ],
    flowLabel: "How this engagement runs",
    flow: [
      {
        title: "Pain first",
        note: "Consulting",
        icon: "search",
        detail:
          "We started with how the work actually happens — where it stalls, what people retype, what gets lost.",
      },
      {
        title: "Then we build",
        note: "Custom software",
        icon: "layout",
        detail:
          "The application is designed for their jobs, not a generic operations pack dropped on top.",
      },
      {
        title: "Now we deploy",
        note: "Still rolling out",
        icon: "send",
        detail:
          "It is going into use. We do not publish results until the work is far enough along to stand behind.",
      },
    ],
    ctaHeading: "Have a process that looks like this?",
    related: [
      { label: "Business Systems", href: ROUTES.automation },
      { label: "Digital Services", href: ROUTES.digitalProducts },
    ],
  },
  {
    slug: "ca-practice",
    pattern: "02",
    name: "Practice systems for a large CA firm",
    client: "A large chartered accountancy firm",
    status: "Work in progress",
    promise:
      "Documents, client records, and alerts in one process — so the practice does not run on folders and memory.",
    situation:
      "Files lived in too many places. Deadlines depended on someone noticing. Client notes were a hunt.",
    building:
      "Document management, a CRM, and AI alerts built for how this practice actually works. Still in progress.",
    situationTitle: "Files, clients, and dates lived in too many heads",
    buildingTitle: "Docs, CRM, and alerts — one system",
    situationPoints: [
      "Client files sat in shared drives and email attachments.",
      "The CRM, if it existed, was out of date because nobody had time to fill it.",
      "Deadlines and follow-ups depended on someone noticing in time.",
    ],
    buildingPoints: [
      "Documents and client records sit in one place people can actually find.",
      "AI flags the easy-to-miss items. People still decide what to do.",
      "This is being built now. No finished numbers yet.",
    ],
    contrastKicker: "Before and what we’re putting in",
    contrastHeading: "A practice this size needs a system, not a shared drive.",
    approach:
      "We started from the filing, the client list, and the dates that slip — then designed around that. Not a generic pack.",
    human:
      "Partners and managers still own advice, sign-off, and anything that must stay with a person. Alerts do not file or advise on their own.",
    scope: "Document management · CRM · AI alerts",
    image: "/case-studies/ca-practice.png",
    imageAlt:
      "A large chartered-accountancy practice at night: client files, tax volumes, and a practice system on screen — stand-in for this engagement, client not named.",
    specs: [
      {
        label: "Who",
        value: "Large CA firm",
        note: "Chartered accountancy practice",
      },
      {
        label: "What",
        value: "Docs, CRM, alerts",
        note: "One process, not three tools",
      },
      { label: "Now", value: "In progress", note: "Still being built" },
    ],
    flowLabel: "How this engagement runs",
    flow: [
      {
        title: "See the pain",
        note: "How work happens today",
        icon: "search",
        detail:
          "We looked at how documents, client notes, and deadlines actually move — not how a brochure says they should.",
      },
      {
        title: "Docs and CRM",
        note: "Files next to clients",
        icon: "database",
        detail:
          "One place for files and client records, designed for a practice this size.",
      },
      {
        title: "AI alerts",
        note: "Flags, not auto-filing",
        icon: "flag",
        detail:
          "The alert system watches the easy-to-miss items and flags what needs a person. It does not send work to the client on its own.",
      },
      {
        title: "Still underway",
        note: "Work in progress",
        icon: "workflow",
        detail:
          "The build is in progress. We will write the outcome when there is one we can stand behind.",
      },
    ],
    ctaHeading: "Is your practice still living in folders?",
    related: [
      { label: "Business Systems", href: ROUTES.automation },
      { label: "AI Agents", href: ROUTES.aiAgents },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((item) => item.slug === slug);
}

export function caseStudyPath(slug: string): string {
  return `${ROUTES.caseStudies}/${slug}`;
}

export function siblingCaseStudies(slug: string, limit = 2): CaseStudy[] {
  return CASE_STUDIES.filter((item) => item.slug !== slug).slice(0, limit);
}
