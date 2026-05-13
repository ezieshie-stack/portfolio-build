"use client";

import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import type { Id } from "../../../../../convex/_generated/dataModel";

type ImageRow = {
  _id: Id<"websiteImages">;
  slot: string;
  label: string;
  page: string;
  imageUrl?: string;
  videoUrl?: string;
  altText: string;
  active: boolean;
  updatedAt: number;
};

type FormState = {
  slot: string;
  label: string;
  page: string;
  altText: string;
  active: boolean;
};

const emptyForm = (): FormState => ({
  slot: "",
  label: "",
  page: "home",
  altText: "",
  active: true,
});

const pages = ["home", "about", "work", "process", "insights", "global"];

const suggestedSlots = [
  { slot: "home-portrait", label: "Homepage portrait", page: "home" },
  { slot: "about-portrait", label: "About page portrait", page: "about" },
  { slot: "work-featured-cover", label: "Featured work cover", page: "work" },
];

export default function AdminImagesPage() {
  const images = useQuery(api.images.list, { activeOnly: false }) as
    | ImageRow[]
    | undefined;
  const generateUploadUrl = useMutation(api.images.generateUploadUrl);
  const upsertBySlot = useMutation(api.images.upsertBySlot);
  const removeImage = useMutation(api.images.remove);

  const [editTarget, setEditTarget] = useState<ImageRow | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState<FormState>(emptyForm());
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [pendingStorageId, setPendingStorageId] = useState<Id<"_storage"> | null>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; text: string } | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), 2500);
    return () => clearTimeout(t);
  }, [status]);

  function openAdd(suggested?: { slot: string; label: string; page: string }) {
    setEditTarget(null);
    setForm({
      ...emptyForm(),
      slot: suggested?.slot ?? "",
      label: suggested?.label ?? "",
      page: suggested?.page ?? "home",
    });
    setPreviewUrl(null);
    setPendingStorageId(null);
    setShowModal(true);
  }

  function openEdit(img: ImageRow) {
    setEditTarget(img);
    setForm({
      slot: img.slot,
      label: img.label,
      page: img.page,
      altText: img.altText,
      active: img.active,
    });
    setPreviewUrl(img.imageUrl ?? null);
    setPendingStorageId(null);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
    setEditTarget(null);
    setForm(emptyForm());
    setPreviewUrl(null);
    setPendingStorageId(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function handleUpload(file: File) {
    setUploading(true);
    try {
      const uploadUrl = await generateUploadUrl();
      const res = await fetch(uploadUrl, {
        method: "POST",
        headers: { "Content-Type": file.type },
        body: file,
      });
      if (!res.ok) throw new Error(`Upload failed: ${res.status}`);
      const { storageId } = (await res.json()) as { storageId: Id<"_storage"> };
      setPendingStorageId(storageId);
      setPreviewUrl(URL.createObjectURL(file));
      setStatus({ type: "ok", text: "Upload ready — save to apply" });
    } catch (err) {
      setStatus({
        type: "err",
        text: err instanceof Error ? err.message : "Upload failed",
      });
    } finally {
      setUploading(false);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      await upsertBySlot({
        slot: form.slot.trim(),
        label: form.label.trim(),
        page: form.page,
        altText: form.altText.trim(),
        storageId: pendingStorageId ?? undefined,
        active: form.active,
      });
      setStatus({ type: "ok", text: editTarget ? "Image updated" : "Image saved" });
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

  async function onDelete(img: ImageRow) {
    if (!confirm(`Delete the "${img.label}" image slot? The site will fall back to its static default.`))
      return;
    try {
      await removeImage({ slot: img.slot });
      setStatus({ type: "ok", text: "Image deleted" });
    } catch (err) {
      setStatus({
        type: "err",
        text: err instanceof Error ? err.message : "Delete failed",
      });
    }
  }

  const knownSlots = new Set((images ?? []).map((i) => i.slot));

  return (
    <div className="admin-page">
      <header className="admin-page-head">
        <div className="admin-page-head-row">
          <div>
            <span className="admin-eyebrow">// IMAGES</span>
            <h1 className="admin-page-title">Images</h1>
            <p className="admin-page-sub">
              {images === undefined
                ? "Loading…"
                : `${images.length} slot${images.length === 1 ? "" : "s"} configured`}
            </p>
          </div>
          <button type="button" className="admin-button" onClick={() => openAdd()}>
            + New Slot
          </button>
        </div>
      </header>

      {status && (
        <div className={`admin-toast admin-toast-${status.type}`}>{status.text}</div>
      )}

      {/* Suggested slots — quick-create rows for the slots the site code references */}
      {images && suggestedSlots.some((s) => !knownSlots.has(s.slot)) && (
        <section className="admin-suggested">
          <h3 className="admin-suggested-title">Suggested slots</h3>
          <p className="admin-suggested-sub">
            These slot keys are referenced by site code. Click to pre-fill the upload form.
          </p>
          <div className="admin-suggested-row">
            {suggestedSlots
              .filter((s) => !knownSlots.has(s.slot))
              .map((s) => (
                <button
                  key={s.slot}
                  type="button"
                  className="admin-suggested-card"
                  onClick={() => openAdd(s)}
                >
                  <code>{s.slot}</code>
                  <span>{s.label}</span>
                </button>
              ))}
          </div>
        </section>
      )}

      {images && images.length === 0 && (
        <div className="admin-empty">
          <p>No image slots yet. Use a suggested slot above or click &ldquo;New Slot&rdquo;.</p>
        </div>
      )}

      {images && images.length > 0 && (
        <div className="admin-image-grid">
          {images.map((img) => (
            <article key={img._id} className="admin-image-card">
              <div className="admin-image-preview">
                {img.imageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={img.imageUrl} alt={img.altText} />
                ) : (
                  <span className="admin-image-empty">No image</span>
                )}
              </div>
              <div className="admin-image-info">
                <strong>{img.label}</strong>
                <code className="admin-image-slot">{img.slot}</code>
                <span className="admin-image-meta">
                  {img.page} ·{" "}
                  <span className={`admin-pill ${img.active ? "is-on" : "is-off"}`}>
                    {img.active ? "Active" : "Inactive"}
                  </span>
                </span>
              </div>
              <div className="admin-image-actions">
                <button
                  type="button"
                  className="admin-row-btn"
                  onClick={() => openEdit(img)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="admin-row-btn admin-row-btn-danger"
                  onClick={() => onDelete(img)}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}
        </div>
      )}

      {showModal && (
        <div className="admin-modal-overlay" onClick={closeModal}>
          <div className="admin-modal" onClick={(e) => e.stopPropagation()}>
            <header className="admin-modal-head">
              <h2 className="admin-modal-title">
                {editTarget ? "Edit image slot" : "New image slot"}
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
              <label className="admin-field">
                <span className="admin-label">Slot key (machine identifier)</span>
                <input
                  type="text"
                  className="admin-input"
                  required
                  placeholder="home-portrait"
                  value={form.slot}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, slot: e.target.value }))
                  }
                  disabled={!!editTarget}
                />
              </label>

              <div className="admin-form-row admin-form-row-2">
                <label className="admin-field">
                  <span className="admin-label">Label (human-readable)</span>
                  <input
                    type="text"
                    className="admin-input"
                    required
                    placeholder="Homepage portrait"
                    value={form.label}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, label: e.target.value }))
                    }
                  />
                </label>
                <label className="admin-field">
                  <span className="admin-label">Page</span>
                  <select
                    className="admin-select"
                    value={form.page}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, page: e.target.value }))
                    }
                  >
                    {pages.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="admin-field">
                <span className="admin-label">Alt text (accessibility)</span>
                <input
                  type="text"
                  className="admin-input"
                  required
                  value={form.altText}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, altText: e.target.value }))
                  }
                />
              </label>

              <div className="admin-field">
                <span className="admin-label">Image</span>
                {previewUrl ? (
                  <div className="admin-upload-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={previewUrl} alt="Preview" />
                  </div>
                ) : (
                  <div className="admin-upload-empty">No image uploaded yet</div>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="admin-file-input"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (file) handleUpload(file);
                  }}
                  disabled={uploading}
                />
                {uploading && (
                  <p className="admin-content-editor-status">Uploading…</p>
                )}
              </div>

              <label className="admin-checkbox">
                <input
                  type="checkbox"
                  checked={form.active}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, active: e.target.checked }))
                  }
                />
                <span>Active (visible on site)</span>
              </label>

              <footer className="admin-modal-foot">
                <button
                  type="button"
                  className="admin-button admin-button-secondary"
                  onClick={closeModal}
                  disabled={saving || uploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="admin-button"
                  disabled={saving || uploading}
                >
                  {saving ? "Saving…" : editTarget ? "Save changes" : "Create slot"}
                </button>
              </footer>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
