"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import type { ReactNode } from "react";

const nav = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/articles", label: "Articles" },
  { href: "/admin/content", label: "Site Content" },
  { href: "/admin/images", label: "Images" },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  async function logout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <span className="admin-brand-mark">DE</span>
          <div>
            <span className="admin-brand-line1">Portfolio Admin</span>
            <span className="admin-brand-line2">David Ezieshi</span>
          </div>
        </div>

        <nav className="admin-nav">
          {nav.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname?.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`admin-nav-item ${isActive ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="admin-sidebar-footer">
          <Link href="/" className="admin-sidebar-link">
            ← View site
          </Link>
          <button type="button" className="admin-sidebar-link" onClick={logout}>
            Logout
          </button>
        </div>
      </aside>

      <main className="admin-main">{children}</main>
    </div>
  );
}
