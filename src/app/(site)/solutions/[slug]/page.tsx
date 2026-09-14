import { type Metadata } from "next";
import { notFound } from "next/navigation";
import Subpage from "~/components/sections/subpage";
import { SOLUTION_PILLARS } from "~/lib/content/home";
import { getSolutionPage } from "~/lib/content/subpages";
import { pageMetadata } from "~/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SOLUTION_PILLARS.map((pillar) => ({ slug: pillar.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) return {};
  const title = `${page.title.split("—")[0]?.trim() ?? page.eyebrow} | Spirality Solutions`;
  return pageMetadata({
    title,
    description: page.lead,
    path: `/solutions/${slug}`,
  });
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) notFound();
  return <Subpage page={page} />;
}
