import { redirect } from "next/navigation";
import { ROUTES } from "~/lib/content/home";

export default function BizdaptivePage() {
  redirect(ROUTES.aiAgents);
}
