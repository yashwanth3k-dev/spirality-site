import { type MetadataRoute } from "next";
import { siteUrl } from "~/config/site";
import { BLOG_POSTS, blogPath } from "~/lib/content/blog";
import { CASE_STUDIES, caseStudyPath } from "~/lib/content/case-studies";
import { ROUTES } from "~/lib/content/home";
import { USE_CASES, getUseCasePath } from "~/lib/content/use-cases";

const origin = siteUrl.replace(/\/$/, "");

function entry(
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
): MetadataRoute.Sitemap[number] {
  return {
    url: path.startsWith("http") ? path : `${origin}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    entry("/", 1, "weekly"),
    entry(ROUTES.blog, 0.8, "weekly"),
    ...BLOG_POSTS.map((post) => entry(blogPath(post.slug), 0.7, "monthly")),
    entry(ROUTES.useCases, 0.8, "weekly"),
    ...USE_CASES.map((item) =>
      entry(getUseCasePath(item.slug), 0.6, "monthly")
    ),
    entry(ROUTES.caseStudies, 0.7, "weekly"),
    ...CASE_STUDIES.map((item) =>
      entry(caseStudyPath(item.slug), 0.6, "monthly")
    ),
    entry(ROUTES.aiStrategy, 0.6, "monthly"),
    entry(ROUTES.aiAgents, 0.6, "monthly"),
    entry(ROUTES.automation, 0.6, "monthly"),
    entry(ROUTES.digitalProducts, 0.6, "monthly"),
    entry(ROUTES.managedOperations, 0.6, "monthly"),
    entry(ROUTES.howWeWork, 0.6, "monthly"),
    entry(ROUTES.contact, 0.7, "monthly"),
    entry(ROUTES.about, 0.5, "monthly"),
    entry(ROUTES.instinct, 0.5, "monthly"),
    entry(ROUTES.privacy, 0.3, "yearly"),
    entry(ROUTES.terms, 0.3, "yearly"),
    entry(ROUTES.cookies, 0.3, "yearly"),
  ];
}
