import Link from "next/link";
import { ArrowUpRight, FileText, Mail } from "lucide-react";
import { site } from "@/lib/content";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function PortfolioFooter() {
  return (
    <footer className="pf-footer">
      <div className="pf-shell">
        {/* CTA band */}
        <section className="pf-cta">
          <div>
            <Eyebrow className="mb-4">Working on something I can help with?</Eyebrow>
            <h2 className="pf-cta-title">
              Let&rsquo;s talk
              <br />
              through it.
            </h2>
          </div>
          <div>
            <p className="pf-cta-body">
              Open to business analyst roles in Toronto. I take initiatives from
              the first stakeholder interview through to the system people use
              every day.
            </p>
            <div className="pf-btnrow">
              <Button
                variant="primary"
                size="lg"
                href={site.cta.href}
                iconRight={<ArrowUpRight size={18} aria-hidden />}
              >
                {site.cta.label}
              </Button>
              <Button variant="secondary" size="lg" href="/resume">
                View Resume
              </Button>
            </div>
          </div>
        </section>

        {/* 4-column row */}
        <section className="pf-footcols">
          <div className="pf-footbrand">
            <span className="pf-tile" style={{ marginBottom: 18 }}>
              {site.brand.initials}
            </span>
            <h3>{site.brand.name}</h3>
            <p className="pf-footrole">{site.brand.role}</p>
            <p className="pf-footblurb">
              Full-lifecycle business analyst. Requirements, modeling, delivery,
              and live operation.
            </p>
          </div>

          <div className="pf-footcol">
            <p className="pf-mono-h">Navigation</p>
            <ul>
              {site.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="pf-footcol">
            <p className="pf-mono-h">Resources</p>
            <ul>
              <li>
                <Link href="/resume">
                  <FileText size={15} aria-hidden /> Resume
                </Link>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/david-ezieshi/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BrandIcon name="linkedin" size={15} /> LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:ezieshie@gmail.com">
                  <Mail size={15} aria-hidden /> Email
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ezieshie-stack"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BrandIcon name="github" size={15} /> GitHub
                </a>
              </li>
            </ul>
          </div>

          <div className="pf-footcol">
            <p className="pf-mono-h">Availability</p>
            <p className="pf-footblurb">
              Toronto-based, eligible to work in Canada. Open to business analyst
              roles.
            </p>
            <Link href="/contact" className="pf-textlink" style={{ marginTop: 14 }}>
              Get In Touch <ArrowUpRight size={15} aria-hidden />
            </Link>
          </div>
        </section>

        {/* Bottom bar */}
        <div className="pf-footbar">
          <span>
            © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
          </span>
          <span>Built with clarity and purpose.</span>
        </div>
      </div>
    </footer>
  );
}
