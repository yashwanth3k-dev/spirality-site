import { redirect } from "next/navigation";
import { ROUTES } from "~/lib/content/site";

export default function SolutionsPage() {
  redirect(ROUTES.aiAgents);
}
