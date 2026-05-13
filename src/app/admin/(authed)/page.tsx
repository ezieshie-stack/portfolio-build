"use client";

import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";

export default function AdminDashboardPage() {
  const articles = useQuery(api.articles.list, {}) ?? [];
  const total = articles.length;
  const featured = articles.filter(
    (a: { featured?: boolean }) => a.featured,
  ).length;

  return (
    <div className="admin-page">
      <header className="admin-page-head">
        <span className="admin-eyebrow">// DASHBOARD</span>
        <h1 className="admin-page-title">Welcome back.</h1>
        <p className="admin-page-sub">
          Manage articles, page copy, and media for the portfolio.
        </p>
      </header>

      <section className="admin-stat-row">
        <div className="admin-stat">
          <span className="admin-stat-label">Published articles</span>
          <strong className="admin-stat-value">{total}</strong>
        </div>
        <div className="admin-stat">
          <span className="admin-stat-label">Featured</span>
          <strong className="admin-stat-value">{featured}</strong>
        </div>
        <div className="admin-stat">
          <span className="admin-stat-label">Site sections</span>
          <strong className="admin-stat-value">5</strong>
        </div>
      </section>

      <section className="admin-quick-grid">
        <Link href="/admin/articles" className="admin-quick-card">
          <span className="admin-eyebrow">ARTICLES</span>
          <h3>Write &amp; publish insights</h3>
          <p>Create new articles, edit existing posts, toggle featured/published.</p>
          <span className="admin-link-arrow">Manage →</span>
        </Link>

        <Link href="/admin/content" className="admin-quick-card">
          <span className="admin-eyebrow">SITE CONTENT</span>
          <h3>Edit page copy</h3>
          <p>Override the text on Home, About, Work, Process, and Insights pages.</p>
          <span className="admin-link-arrow">Manage →</span>
        </Link>

        <Link href="/admin/images" className="admin-quick-card">
          <span className="admin-eyebrow">IMAGES</span>
          <h3>Swap photos &amp; media</h3>
          <p>Upload new portraits, replace section visuals, manage media slots.</p>
          <span className="admin-link-arrow">Manage →</span>
        </Link>
      </section>
    </div>
  );
}
