import Link from "next/link";

export const metadata = { title: "Not Found — Admin" };

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="gradient-text text-[clamp(72px,14vw,160px)] font-extrabold leading-none tracking-tight mb-4">
          404
        </div>
        <h1 className="text-2xl font-semibold mb-2">Page not found</h1>
        <p className="text-[color:var(--text-dim)] mb-6">
          That route doesn&apos;t exist in this admin panel.
        </p>
        <Link href="/admin" className="btn-pill btn-primary">
          Back to dashboard
        </Link>
      </div>
    </div>
  );
}
