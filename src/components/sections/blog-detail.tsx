import { type ReactNode } from "react";
import { ArrowIcon, BlogIcon } from "~/components/sections/use-case-icons";
import {
  BLOG_CATEGORY_ICON,
  BLOG_CATEGORY_LABEL,
  blogPath,
  blogReadMinutes,
  formatBlogDate,
  groupBlogBody,
  siblingBlogPosts,
  type BlogBlock,
  type BlogCategory,
  type BlogPost,
} from "~/lib/content/blog";
import { ROUTES } from "~/lib/content/home";
import "~/styles/use-case-detail.css";
import "~/styles/case-studies-hub.css";
import "~/styles/blog-hub.css";

const PILL_CLASS: Record<BlogCategory, string> = {
  buying: "uch-pill-systems",
  agents: "uch-pill-ai",
  delivery: "uch-pill-bpo",
  context: "uch-pill-digital",
};

const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

function LinkedText({ text }: { text: string }) {
  const nodes: ReactNode[] = [];
  let last = 0;
  const re = new RegExp(LINK_RE.source, "g");
  let match: RegExpExecArray | null;
  while ((match = re.exec(text))) {
    if (match.index > last) nodes.push(text.slice(last, match.index));
    nodes.push(
      <a key={`${match.index}-${match[2]}`} href={match[2]}>
        {match[1]}
      </a>
    );
    last = match.index + match[0].length;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function Block({ block }: { block: BlogBlock }) {
  if (block.type === "h2") {
    return <h2>{block.text}</h2>;
  }
  if (block.type === "ul") {
    return (
      <ul>
        {block.items.map((item) => (
          <li key={item}>
            <LinkedText text={item} />
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "callout") {
    return (
      <aside className="blg-callout">
        <p className="ucd-kicker blg-inline-icon">
          <BlogIcon name="flag" size={14} />
          {block.title}
        </p>
        <p>
          <LinkedText text={block.text} />
        </p>
      </aside>
    );
  }
  return (
    <p>
      <LinkedText text={block.text} />
    </p>
  );
}

export default function BlogDetail({ item }: { item: BlogPost }) {
  const related = siblingBlogPosts(item.slug, item.related);
  const minutes = blogReadMinutes(item);
  const { intro, sections } = groupBlogBody(item.body);

  return (
    <article>
      <header className="ucd-hero">
        <div className="uch-halo" aria-hidden />
        <div className="uch-inner ucd-hero-grid">
          <div className="ucd-hero-copy">
            <nav className="ucd-crumb" aria-label="Breadcrumb">
              <a href={ROUTES.blog}>Blog</a>
              <span aria-hidden>/</span>
              <span>{BLOG_CATEGORY_LABEL[item.category]}</span>
              <span aria-hidden>/</span>
              <span>{item.title}</span>
            </nav>

            <div className="uch-pills">
              <span className={`uch-pill ${PILL_CLASS[item.category]}`}>
                <BlogIcon name={BLOG_CATEGORY_ICON[item.category]} size={13} />
                {BLOG_CATEGORY_LABEL[item.category]}
              </span>
            </div>

            <h1 className="blg-h1">{item.title}</h1>
            <p className="ucd-lead">{item.lead}</p>

            <div className="ucd-actions">
              <a className="uch-btn uch-btn-solid" href={ROUTES.contact}>
                Talk to Us <ArrowIcon />
              </a>
              <a className="uch-btn uch-btn-ghost" href={ROUTES.blog}>
                All notes
              </a>
            </div>

            <div className="ucd-specs blg-specs">
              <div className="ucd-spec">
                <span className="ucd-spec-label blg-inline-icon">
                  <BlogIcon name="calendar" size={12} />
                  Published
                </span>
                <strong>
                  <time dateTime={item.date}>{formatBlogDate(item.date)}</time>
                </strong>
                <span className="ucd-spec-note">First cluster</span>
              </div>
              <div className="ucd-spec">
                <span className="ucd-spec-label blg-inline-icon">
                  <BlogIcon
                    name={BLOG_CATEGORY_ICON[item.category]}
                    size={12}
                  />
                  For
                </span>
                <strong>{BLOG_CATEGORY_LABEL[item.category]}</strong>
                <span className="ucd-spec-note">How buyers decide</span>
              </div>
              <div className="ucd-spec">
                <span className="ucd-spec-label blg-inline-icon">
                  <BlogIcon name="clock" size={12} />
                  Length
                </span>
                <strong>{minutes} min</strong>
                <span className="ucd-spec-note">No trend roundup</span>
              </div>
            </div>
          </div>

          <aside className="csd-hero-image">
            <img src={item.image} alt={item.imageAlt} />
          </aside>
        </div>
      </header>

      <section className="blg-body-section">
        <div className="uch-inner">
          {intro.length ? (
            <div className="blg-intro">
              {intro.map((block, index) => (
                <Block key={`intro-${index}`} block={block} />
              ))}
            </div>
          ) : null}
          {sections.length ? (
            <div className="blg-sections">
              {sections.map((section, index) => {
                const heading = section.find((block) => block.type === "h2");
                const title =
                  heading && heading.type === "h2"
                    ? heading.text
                    : `Section ${index + 1}`;
                return (
                  <article
                    key={title}
                    className="ucd-card blg-section-card"
                    aria-labelledby={`blg-sec-${index}`}
                  >
                    {section.map((block, blockIndex) =>
                      block.type === "h2" ? (
                        <h2
                          key={`${block.text}-${blockIndex}`}
                          id={`blg-sec-${index}`}
                        >
                          {block.text}
                        </h2>
                      ) : (
                        <Block
                          key={`${block.type}-${blockIndex}`}
                          block={block}
                        />
                      )
                    )}
                  </article>
                );
              })}
            </div>
          ) : null}
        </div>
      </section>

      {related.length ? (
        <section className="ucd-section" aria-labelledby="blg-more-heading">
          <div className="uch-inner">
            <div className="ucd-section-head">
              <p className="ucd-kicker blg-inline-icon">
                <BlogIcon name="layers" size={14} />
                In this cluster
              </p>
              <h2 id="blg-more-heading">Keep reading.</h2>
            </div>
            <div className="ucd-more">
              {related.map((other) => (
                <a
                  key={other.slug}
                  className="ucd-card ucd-more-card blg-more-card"
                  href={blogPath(other.slug)}
                >
                  <span className="blg-more-media">
                    <img src={other.image} alt="" />
                  </span>
                  <div className="uch-pills">
                    <span className={`uch-pill ${PILL_CLASS[other.category]}`}>
                      <BlogIcon
                        name={BLOG_CATEGORY_ICON[other.category]}
                        size={13}
                      />
                      {BLOG_CATEGORY_LABEL[other.category]}
                    </span>
                  </div>
                  <h3>{other.title}</h3>
                  <p>{other.lead}</p>
                  <span className="ucd-more-link">
                    Read the note <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
