import { redirect } from "next/navigation";
import { caseStudyPath } from "~/lib/content/case-studies";

export default function CaAlertsRedirectPage() {
  redirect(caseStudyPath("ca-practice"));
}
