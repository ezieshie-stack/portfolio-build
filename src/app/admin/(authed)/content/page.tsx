"use client";

import { useEffect, useMemo, useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import {
  about,
  home,
  insights,
  processPage,
  work,
} from "@/lib/content";

type Section = {
  key: string;
  label: string;
  description: string;
  defaultData: unknown;
};

const sections: Section[] = [
  {
    key: "home",
    label: "Home",
    description: "Hero copy, CTAs, capabilities, featured project.",
    defaultData: home,
  },
  {
    key: "about",
    label: "About",
    description: "About page heading, body, stats, what drives me, education.",
    defaultData: about,
  },
  {
    key: "work",
    label: "Work",
    description: "Selected work intro, featured case study, cards, philosophy flow.",
    defaultData: work,
  },
  {
    key: "processPage",
    label: "Process",
    description: "Process page hero, execution model steps, metrics.",
    defaultData: processPage,
  },
  {
    key: "insights",
    label: "Insights",
    description: "Insights index hero copy, intro, filters, featured callout.",
    defaultData: insights,
  },
];

export default function AdminContentPage() {
  const [activeKey, setActiveKey] = useState<string>(sections[0].key);
  const active = useMemo(
    () => sections.find((s) => s.key === activeKey) ?? sections[0],
    [activeKey],
  );

  const override = useQuery(api.content.get, { section: activeKey });
  const setContent = useMutation(api.content.set);
  const removeContent = useMutation(api.content.remove);

  const [draft, setDraft] = useState<string>("");
  const [parseError, setParseError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [status, setStatus] = useState<{ type: "ok" | "err"; text: string } | null>(null);

  // Re-seed draft whenever the section changes or the override resolves
  useEffect(() => {
    if (override === undefined) return; // still loading
    const data = override ?? active.defaultData;
    setDraft(JSON.stringify(data, null, 2));
    setParseError(null);
  }, [override, active.defaultData, activeKey]);

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), 2500);
    return () => clearTimeout(t);
  }, [status]);

  const hasOverride = override != null;

  function validate(text: string): { ok: boolean; value?: unknown } {
    try {
      const value = JSON.parse(text);
      setParseError(null);
      return { ok: true, value };
    } catch (err) {
      setParseError(err instanceof Error ? err.message : "Invalid JSON");
      return { ok: false };
    }
  }

  async function onSave() {
    const result = validate(draft);
    if (!result.ok) return;
    setSaving(true);
    try {
      await setContent({ section: activeKey, data: result.value });
      setStatus({ type: "ok", text: "Saved" });
    } catch (err) {
      setStatus({
        type: "err",
        text: err instanceof Error ? err.message : "Save failed",
      });
    } finally {
      setSaving(false);
    }
  }

  function onResetToDefault() {
    if (!confirm("Discard your edits and reload the static default for this section?")) return;
    setDraft(JSON.stringify(active.defaultData, null, 2));
    setParseError(null);
  }

  async function onRevertOverride() {
    if (!hasOverride) return;
    if (
      !confirm(
        "Remove this section's override entirely? The live site will fall back to the static default.",
      )
    )
      return;
    try {
      await removeContent({ section: activeKey });
      setStatus({ type: "ok", text: "Override removed" });
    } catch (err) {
      setStatus({
        type: "err",
        text: err instanceof Error ? err.message : "Revert failed",
      });
    }
  }

  return (
    <div className="admin-page">
      <header className="admin-page-head">
        <span className="admin-eyebrow">// SITE CONTENT</span>
        <h1 className="admin-page-title">Site Content</h1>
        <p className="admin-page-sub">
          Override page copy per section. Live site falls back to the static default in{" "}
          <code>lib/content.ts</code> when no override exists.
        </p>
      </header>

      {status && (
        <div className={`admin-toast admin-toast-${status.type}`}>{status.text}</div>
      )}

      <div className="admin-content-grid">
        <aside className="admin-content-list">
          {sections.map((s) => (
            <button
              key={s.key}
              type="button"
              className={`admin-content-item ${s.key === activeKey ? "is-active" : ""}`}
              onClick={() => setActiveKey(s.key)}
            >
              <strong>{s.label}</strong>
              <span>{s.description}</span>
            </button>
          ))}
        </aside>

        <section className="admin-content-editor">
          <header className="admin-content-editor-head">
            <div>
              <h2 className="admin-content-editor-title">{active.label}</h2>
              <p className="admin-content-editor-status">
                {override === undefined
                  ? "Loading…"
                  : hasOverride
                    ? "Override active — overrides the static default."
                    : "No override — showing static default. Edit + save to override."}
              </p>
            </div>
            <div className="admin-content-editor-actions">
              <button
                type="button"
                className="admin-button admin-button-secondary"
                onClick={onResetToDefault}
                disabled={saving}
              >
                Reset to default
              </button>
              {hasOverride && (
                <button
                  type="button"
                  className="admin-row-btn admin-row-btn-danger"
                  onClick={onRevertOverride}
                  disabled={saving}
                >
                  Remove override
                </button>
              )}
              <button
                type="button"
                className="admin-button"
                onClick={onSave}
                disabled={saving || parseError !== null}
              >
                {saving ? "Saving…" : "Save override"}
              </button>
            </div>
          </header>

          <textarea
            className="admin-textarea admin-textarea-json"
            value={draft}
            onChange={(e) => {
              setDraft(e.target.value);
              validate(e.target.value);
            }}
            spellCheck={false}
          />

          {parseError && (
            <p className="admin-error">JSON parse error: {parseError}</p>
          )}

          <p className="admin-content-editor-hint">
            Tip: edit any text fields directly. Don&apos;t rename keys or change array shapes —
            the page components expect a specific structure. If you break something, use{" "}
            <strong>Reset to default</strong> to recover.
          </p>
        </section>
      </div>
    </div>
  );
}
