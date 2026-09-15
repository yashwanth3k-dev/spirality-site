import { type Metadata } from "next";
import StubPage from "~/components/sections/stub-page";
import { ENGAGEMENT, METHOD, ROUTES } from "~/lib/content/home";
import { pageMetadata } from "~/lib/seo";

export const metadata: Metadata = {
  ...pageMetadata({
    title: "How We Work | Spirality Solutions",
    description: METHOD.intro,
    path: ROUTES.howWeWork,
  }),
  robots: { index: false, follow: true },
};

export default function HowWeWorkPage() {
  return (
    <StubPage
      eyebrow={METHOD.eyebrow}
      title={METHOD.heading}
      lead={METHOD.intro}
      items={METHOD.stages.map((stage) => ({
        term: stage.title,
        line: stage.line,
      }))}
    >
      <div className="il-stub-block" id="deliver">
        <h2 className="il-h2">{ENGAGEMENT.heading}</h2>
        <dl className="il-domains">
          {ENGAGEMENT.models.map((model) => (
            <div className="il-domain" key={model.title}>
              <dt>{model.title}</dt>
              <dd>
                <span className="il-path">{model.path}</span>
                {model.line}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </StubPage>
  );
}
