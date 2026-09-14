import { type Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "~/components/json-ld";
import BlogDetail from "~/components/sections/blog-detail";
import SubpageNav from "~/components/sections/subpage-nav";
import FooterLegal from "~/components/sections/footer-legal";
import {
  BLOG_CATEGORY_LABEL,
  BLOG_POSTS,
  blogPath,
  getBlogPost,
} from "~/lib/content/blog";
import { FOOTER, ROUTES } from "~/lib/content/home";
import { absoluteUrl, articleJsonLd, breadcrumbJsonLd } from "~/lib/seo";
import "~/styles/home-sections.css";
import "~/styles/subpage.css";
import "~/styles/use-cases-hub.css";
import "~/styles/blog-hub.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  const url = absoluteUrl(blogPath(post.slug));
  const title = `${post.seoTitle} | Spirality Solutions`;
  return {
    title,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      url,
      title,
      description: post.description,
      siteName: "Spirality Solutions",
      publishedTime: post.date,
      modifiedTime: post.date,
      section: BLOG_CATEGORY_LABEL[post.category],
      images: [
        {
          url: absoluteUrl(post.image),
          alt: post.imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.description,
      images: [absoluteUrl(post.image)],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const url = absoluteUrl(blogPath(post.slug));

  return (
    <div className="il-page uch-page">
      <JsonLd
        data={[
          articleJsonLd({
            url,
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            section: BLOG_CATEGORY_LABEL[post.category],
            image: post.image,
          }),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: ROUTES.blog },
            { name: post.title, path: blogPath(post.slug) },
          ]),
        ]}
      />
      <SubpageNav />
      <BlogDetail item={post} />
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
