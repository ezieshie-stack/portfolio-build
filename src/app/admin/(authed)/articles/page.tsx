"use client";

import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import type { Id } from "../../../../../convex/_generated/dataModel";

type ArticleRow = {
  _id: Id<"articles">;
  slug: string;
  title: string;
  subtitle?: string;
  category: string;
  excerpt: string;
  body: string;
  date: string;
  readTime: string;
  published: boolean;
  featured?: boolean;
  pills?: string[];
  publishedAt?: number;
};

type FormState = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  excerpt: string;
  body: string;
  date: string;
  readTime: string;
  pillsCsv: string;
  published: boolean;
  featured: boolean;
};

const emptyForm = (): FormState => ({
  slug: "",
  title: "",
  subtitle: "",
  category: "Process Design",
  excerpt: "",
  body: "",
  date: "",
  readTime: "5 min read",
  pillsCsv: "",
  published: false,
  featured: false,
});

const categories = [
  "Process Design",
  "Business Analysis",
  "Analytics",
  "Systems",
  "Tools",
];

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export default function AdminArticlesPage() {
  const articles = useQuery(api.articles.list, { includeUnpublished: true }) as
    | ArticleRow[]
    | undefined;
  const upsert = useMutation(api.articles.upsert);
  const remove = useMutation(api.articles.remove);

  const [editTarget, setEditTarget] = useState<ArticleRow | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm());
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), 2500);
    return () => clearTimeout(t);
  }, [status]);

  const counts = useMemo(() => {
    if (!articles) return { total: 0, published: 0, drafts: 0 };
    return {
      total: articles.length,
      published: articles.filter((a) => a.published).length,
      drafts: articles.filter((a) => !a.published).length,
    };
  }, [articles]);

  function openAdd() {
    setEditTarget(null);
    setForm({
      ...emptyForm(),
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      }),
    });
    setShowModal(true);
  }

  function openEdit(a: ArticleRow) {
    setEditTarget(a);
    setForm({
      slug: a.slug,
      title: a.title,
      subtitle: a.subtitle ?? "",
      category: a.category,
      excerpt: a.excerpt,
      body: a.body,
      date: a.date,
      readTime: a.readTime,
      pillsCsv: (a.pills ?? []).join(", "),
      published: a.published,
      featured: a.featured ?? false,
    });
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setEditTarget(null);
    setForm(emptyForm());
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const pills = form.pillsCsv
        .split(",")
        .map((p) => p.trim())
        .filter(Boolean);
      await upsert({
        slug: form.slug.trim(),
        title: form.title.trim(),
        subtitle: form.subtitle.trim() || undefined,
        category: form.category,
        excerpt: form.excerpt.trim(),
        body: form.body,
        date: form.date.trim(),
        readTime: form.readTime.trim(),
        published: form.published,
        featured: form.featured || undefined,
        pills: pills.length > 0 ? pills : undefined,
      });
      setStatus({ type: "ok", text: editTarget ? "Article updated" : "Article created" });
      closeModal();
    } catch (err) {
      setStatus({
        type: "err",
        text: err instanceof Error ? err.message : "Save failed",
      });
    } finally {
      setSaving(false);
    }
  }

  async function onDelete(a: ArticleRow) {
    if (!confirm(`Delete "${a.title}"? This cannot be undone.`)) return;
    try {
      await remove({ id: a._id });
      setStatus({ type: "ok", text: "Article deleted" });
    } catch (err) {
      setStatus({
        type: "err",
        text: err instanceof Error ? err.message : "Delete failed",
      });
    }
  }

  async function togglePublished(a: ArticleRow) {
    try {
      await upsert({
        slug: a.slug,
        title: a.title,
        subtitle: a.subtitle,
        category: a.category,
        body: a.body,
        date: a.date,
        readTime: a.readTime,
        excerpt: a.excerpt,
        published: !a.published,
        featured: a.featured,
        pills: a.pills,
      });
      setStatus({
        type: "ok",
        text: a.published ? "Unpublished" : "Published",
      });
    } catch (err) {
      setStatus({
        type: "err",
        text: err instanceof Error ? err.message : "Update failed",
      });
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-page-head">
        <div className="admin-page-head-row">
          <div>
            <span className="admin-eyebrow">// ARTICLES</span>
            <h1 className="admin-page-title">Articles</h1>
            <p className="admin-page-sub">
              {counts.total} total · {counts.published} published · {counts.drafts} drafts
            </p>
          </div>
          <button type="button" className="admin-button" onClick={openAdd}>
            + New Article
          </button>
        </div>
      </header>

      {status && (
        <div className={`admin-toast admin-toast-${status.type}`}>{status.text}</div>
      )}

      {articles === undefined && (
        <div className="admin-empty">
          <p>Loading…</p>
        </div>
      )}

      {articles && articles.length === 0 && (
        <div className="admin-empty">
          <p>No articles yet. Click &ldquo;New Article&rdquo; to create your first post.</p>
        </div>
      )}

      {articles && articles.length > 0 && (
        <div className="admin-table">
          <div className="admin-table-head">
            <div>Title</div>
            <div>Category</div>
            <div>Status</div>
            <div>Date</div>
            <div className="admin-table-actions-header">Actions</div>
          </div>
          {articles.map((a) => (
            <div key={a._id} className="admin-table-row">
              <div className="admin-table-cell-title">
                <strong>{a.title}</strong>
                <span className="admin-table-slug">/{a.slug}</span>
              </div>
              <div className="admin-table-cell-muted">{a.category}</div>
              <div>
                <span
                  className={`admin-pill ${a.published ? "is-on" : "is-off"}`}
                >
                  {a.published ? "Published" : "Draft"}
                </span>
                {a.featured && <span className="admin-pill is-feat">Featured</span>}
              </div>
              <div className="admin-table-cell-muted">{a.date}</div>
              <div className="admin-table-actions">
                <button
                  type="button"
                  className="admin-row-btn"
                  onClick={() => togglePublished(a)}
                >
                  {a.published ? "Unpublish" : "Publish"}
                </button>
                <button
                  type="button"
                  className="admin-row-btn"
                  onClick={() => openEdit(a)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="admin-row-btn admin-row-btn-danger"
                  onClick={() => onDelete(a)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {showModal && (
        <div className="admin-modal-overlay" onClick={closeModal}>
          <div
            className="admin-modal admin-modal-wide"
            onClick={(e) => e.stopPropagation()}
          >
            <header className="admin-modal-head">
              <h2 className="admin-modal-title">
                {editTarget ? "Edit article" : "New article"}
              </h2>
              <button
                type="button"
                className="admin-modal-close"
                onClick={closeModal}
                aria-label="Close"
              >
                ×
              </button>
            </header>

            <form className="admin-form" onSubmit={onSubmit}>
              <div className="admin-form-row admin-form-row-2">
                <label className="admin-field">
                  <span className="admin-label">Title</span>
                  <input
                    type="text"
                    className="admin-input"
                    required
                    value={form.title}
                    onChange={(e) => {
                      const title = e.target.value;
                      setForm((f) => ({
                        ...f,
                        title,
                        slug: editTarget ? f.slug : slugify(title),
                      }));
                    }}
                  />
                </label>
                <label className="admin-field">
                  <span className="admin-label">Slug</span>
                  <input
                    type="text"
                    className="admin-input"
                    required
                    value={form.slug}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, slug: slugify(e.target.value) }))
                    }
                  />
                </label>
              </div>

              <label className="admin-field">
                <span className="admin-label">Subtitle (optional)</span>
                <input
                  type="text"
                  className="admin-input"
                  value={form.subtitle}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, subtitle: e.target.value }))
                  }
                />
              </label>

              <div className="admin-form-row admin-form-row-3">
                <label className="admin-field">
                  <span className="admin-label">Category</span>
                  <select
                    className="admin-select"
                    value={form.category}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, category: e.target.value }))
                    }
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="admin-field">
                  <span className="admin-label">Date</span>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="May 2026"
                    value={form.date}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, date: e.target.value }))
                    }
                  />
                </label>
                <label className="admin-field">
                  <span className="admin-label">Read time</span>
                  <input
                    type="text"
                    className="admin-input"
                    placeholder="5 min read"
                    value={form.readTime}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, readTime: e.target.value }))
                    }
                  />
                </label>
              </div>

              <label className="admin-field">
                <span className="admin-label">Excerpt</span>
                <textarea
                  className="admin-textarea admin-textarea-short"
                  required
                  value={form.excerpt}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, excerpt: e.target.value }))
                  }
                />
              </label>

              <label className="admin-field">
                <span className="admin-label">
                  Body — Markdown supported (headings with ##, lists, **bold**, *italic*, [links](url))
                </span>
                <textarea
                  className="admin-textarea"
                  required
                  value={form.body}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, body: e.target.value }))
                  }
                />
              </label>

              <label className="admin-field">
                <span className="admin-label">
                  Pills (comma-separated, e.g. &ldquo;Process, Systems, Tools&rdquo;)
                </span>
                <input
                  type="text"
                  className="admin-input"
                  value={form.pillsCsv}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, pillsCsv: e.target.value }))
                  }
                />
              </label>

              <div className="admin-form-row admin-form-row-2">
                <label className="admin-checkbox">
                  <input
                    type="checkbox"
                    checked={form.published}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, published: e.target.checked }))
                    }
                  />
                  <span>Published</span>
                </label>
                <label className="admin-checkbox">
                  <input
                    type="checkbox"
                    checked={form.featured}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, featured: e.target.checked }))
                    }
                  />
                  <span>Featured</span>
                </label>
              </div>

              <footer className="admin-modal-foot">
                <button
                  type="button"
                  className="admin-button admin-button-secondary"
                  onClick={closeModal}
                  disabled={saving}
                >
                  Cancel
                </button>
                <button type="submit" className="admin-button" disabled={saving}>
                  {saving ? "Saving…" : editTarget ? "Save changes" : "Create article"}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
