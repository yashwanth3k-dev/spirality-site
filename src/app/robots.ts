import { type MetadataRoute } from "next";
import { siteUrl } from "~/config/site";

const origin = siteUrl.replace(/\/$/, "");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/maintenance"],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
  };
}
