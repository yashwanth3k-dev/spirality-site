"use client";

import { useMemo, useState } from "react";
import { ArrowIcon, BlogIcon } from "~/components/sections/use-case-icons";
import {
  BLOG_CATEGORY_ICON,
  BLOG_CATEGORY_LABEL,
  BLOG_FILTER_ICON,
  BLOG_FILTERS,
  BLOG_INDEX,
  BLOG_POSTS,
  blogPath,
  blogReadMinutes,
  countBlogPosts,
  formatBlogDate,
  type BlogCategory,
  type BlogPost,
} from "~/lib/content/blog";
import { ROUTES } from "~/lib/content/site";
import { cn } from "~/lib/utils";
import "~/styles/blog-hub.css";

type FilterId = (typeof BLOG_FILTERS)[number]["id"];

const PILL_CLASS: Record<BlogCategory, string> = {
  buying: "uch-pill-systems",
  agents: "uch-pill-ai",
  delivery: "uch-pill-bpo",
  context: "uch-pill-digital",
};

function NoteCard({ item }: { item: BlogPost }) {
  return (
    <article className="blg-card">
      <div className="blg-card-body">
        <div className="blg-card-meta">
          <div className="uch-pills">
            <span className={`uch-pill ${PILL_CLASS[item.category]}`}>
              <BlogIcon name={BLOG_CATEGORY_ICON[item.category]} size={13} />
              {BLOG_CATEGORY_LABEL[item.category]}
            </span>
          </div>
        </div>
        <p className="blg-card-date">
          <span className="blg-inline-icon">
            <BlogIcon name="calendar" size={12} />
            <time dateTime={item.date}>{formatBlogDate(item.date)}</time>
          </span>
          <span aria-hidden>·</span>
          <span className="blg-inline-icon">
            <BlogIcon name="clock" size={12} />
            {blogReadMinutes(item)} min read
          </span>
        </p>
        <h2 className="blg-card-name">
          <a href={blogPath(item.slug)}>{item.title}</a>
        </h2>
        <p className="blg-card-lead">{item.lead}</p>
        <div className="blg-card-foot">
          <span className="uch-systems blg-inline-icon">
            <BlogIcon name={item.icon} size={14} />
            {BLOG_CATEGORY_LABEL[item.category]} · first cluster
          </span>
          <a className="uch-more" href={blogPath(item.slug)}>
            Read the note <ArrowIcon />
          </a>
        </div>
      </div>
      <a
        className="blg-card-media"
        href={blogPath(item.slug)}
        aria-label={item.title}
      >
        <img src={item.image} alt={item.imageAlt} />
      </a>
    </article>
  );
}

export default function BlogHub() {
  const [filter, setFilter] = useState<FilterId>("all");

  const items = useMemo(() => {
    const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
    if (filter === "all") return sorted;
    return sorted.filter((item) => item.category === filter);
  }, [filter]);

  return (
    <main>
      <header className="uch-hero">
        <div className="uch-halo" aria-hidden />
        <div className="uch-inner uch-hero-row">
          <div className="uch-hero-copy">
            <div className="uch-badge">
              <span className="uch-badge-dot" aria-hidden />
              <span className="uch-badge-label">Insights</span>
            </div>
            <h1 className="uch-h1 blg-hub-h1">{BLOG_INDEX.title}</h1>
            <p className="uch-lead">{BLOG_INDEX.lead}</p>
            <div className="uch-actions">
              <a className="uch-btn uch-btn-solid" href={ROUTES.contact}>
                Talk to Us <ArrowIcon />
              </a>
              <a className="uch-btn uch-btn-ghost" href={ROUTES.useCases}>
                See use cases
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="blg-catalog" aria-label="Blog notes">
        <div className="uch-inner">
          <div className="uch-filters">
            <div className="uch-tabs" role="tablist" aria-label="Filter notes">
              {BLOG_FILTERS.map((tab) => {
                const active = filter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    className={cn("uch-tab", active && "uch-tab-active")}
                    onClick={() => setFilter(tab.id)}
                  >
                    <BlogIcon name={BLOG_FILTER_ICON[tab.id]} size={14} />
                    <span>{tab.label}</span>
                    <span className="uch-count">{countBlogPosts(tab.id)}</span>
                  </button>
                );
              })}
            </div>
            <p className="uch-filter-note">First cluster · five notes</p>
          </div>

          <div className="blg-list">
            {items.map((item) => (
              <NoteCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
