import { type Metadata } from "next";
import JsonLd from "~/components/json-ld";
import BlogHub from "~/components/sections/blog-hub";
import SubpageNav from "~/components/sections/subpage-nav";
import FooterLegal from "~/components/sections/footer-legal";
import { BLOG_INDEX, BLOG_POSTS, blogPath } from "~/lib/content/blog";
import { FOOTER, ROUTES } from "~/lib/content/home";
import { absoluteUrl, breadcrumbJsonLd, collectionJsonLd } from "~/lib/seo";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/use-cases-hub.css";
import "~/styles/blog-hub.css";

const pageUrl = absoluteUrl(ROUTES.blog);

export const metadata: Metadata = {
  title: "Blog | Spirality Solutions",
  description: BLOG_INDEX.description,
  alternates: { canonical: pageUrl },
  openGraph: {
    type: "website",
    url: pageUrl,
    title: "Blog | Spirality Solutions",
    description: BLOG_INDEX.description,
    siteName: "Spirality Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Spirality Solutions",
    description: BLOG_INDEX.description,
  },
};

export default function BlogPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="il-page uch-page">
      <JsonLd
        data={[
          collectionJsonLd({
            url: pageUrl,
            name: "Spirality Solutions Blog",
            description: BLOG_INDEX.description,
            items: sorted.map((post) => ({
              name: post.title,
              path: blogPath(post.slug),
            })),
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: ROUTES.blog },
          ]),
        ]}
      />
      <SubpageNav />
      <BlogHub />
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
