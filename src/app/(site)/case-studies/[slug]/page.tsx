import { type Metadata } from "next";
import { notFound } from "next/navigation";
import SubpageNav from "~/components/sections/subpage-nav";
import FooterLegal from "~/components/sections/footer-legal";
import CaseStudyDetail from "~/components/sections/case-study-detail";
import { FOOTER } from "~/lib/content/home";
import {
  CASE_STUDIES,
  caseStudyPath,
  getCaseStudy,
} from "~/lib/content/case-studies";
import { pageMetadata } from "~/lib/seo";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/use-cases-hub.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return CASE_STUDIES.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return {};
  return pageMetadata({
    title: `${study.name} | Case Studies | Spirality Solutions`,
    description: study.promise,
    path: caseStudyPath(study.slug),
  });
}

export default async function CaseStudyDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  return (
    <div className="il-page uch-page">
      <SubpageNav />
      <CaseStudyDetail item={study} />
      <footer className="il-footer">
        <div className="il-inner il-footer-grid">
          <div className="il-footer-brand">
            <p className="il-footer-mark">Spirality Solutions</p>
            <p>AI Systems & Managed Operations</p>
            <a href={`mailto:${FOOTER.email}`}>{FOOTER.email}</a>
          </div>
          {FOOTER.groups.map((group) => (
            <nav
              key={group.title}
              className="il-footer-col"
              aria-label={group.title}
            >
              <p className="il-footer-label">{group.title}</p>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href + link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <FooterLegal />
      </footer>
    </div>
  );
}
