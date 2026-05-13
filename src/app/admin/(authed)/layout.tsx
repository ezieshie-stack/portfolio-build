import type { ReactNode } from "react";
import { AdminShell } from "@/components/admin/AdminShell";

export const metadata = { title: "Admin — Portfolio" };

// Auth-gated pages must run on every request (cookie check, Convex client).
export const dynamic = "force-dynamic";

export default function AuthedAdminLayout({ children }: { children: ReactNode }) {
  return <AdminShell>{children}</AdminShell>;
}
