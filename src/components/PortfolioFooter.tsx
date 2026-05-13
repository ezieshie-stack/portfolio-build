import Link from "next/link";
import { ArrowUpRight, FileText, Mail } from "lucide-react";

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.89 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.4v6.34zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.01c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.04 11.04 0 015.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.67.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

export function PortfolioFooter() {
  return (
    <footer className="portfolioFooter">
      <section className="footerCTA">
        <div>
          <p className="footerEyebrow">Have a project in mind?</p>
          <h2>
            Let’s Build
            <br />
            Better Systems.
          </h2>
        </div>

        <div className="footerCTARight">
          <p>
            Open to opportunities in operations, systems analysis, workflow
            optimization, and business process improvement.
          </p>

          <div className="footerCTAButtons">
            <a href="/contact" className="footerPrimaryBtn">
              Let’s Connect <ArrowUpRight size={18} />
            </a>

            <a href="/resume.pdf" className="footerSecondaryBtn">
              View Resume
            </a>
          </div>
        </div>
      </section>

      <section className="footerMain">
        <div className="footerBrand">
          <div className="footerLogo">DE</div>
          <h3>David Ezieshi</h3>
          <p>Operations & Business Systems Analyst</p>
          <span>
            Building systems that improve clarity, workflow design, and
            operational execution.
          </span>
        </div>

        <div className="footerColumn">
          <h4>Navigation</h4>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/work">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="footerColumn">
          <h4>Resources</h4>
          <Link href="/resume">
            <FileText size={16} /> Resume
          </Link>
          <a href="https://www.linkedin.com/in/david-ezieshi/" target="_blank" rel="noreferrer">
            <LinkedInIcon size={16} /> LinkedIn
          </a>
          <a href="mailto:Ezieshie@gmail.com">
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/ezieshie-stack" target="_blank" rel="noreferrer">
            <GitHubIcon size={16} /> GitHub
          </a>
        </div>

        <div className="footerColumn">
          <h4>Availability</h4>
          <p>
            Open to roles and projects across operations, systems analysis,
            process improvement, and business analysis.
          </p>

          <a href="/contact" className="footerInlineCTA">
            Get In Touch <ArrowUpRight size={16} />
          </a>
        </div>
      </section>

      <div className="footerBottom">
        <span>
          © {new Date().getFullYear()} David Ezieshi. All rights reserved.
        </span>
        <span>Built with clarity and purpose.</span>
      </div>
    </footer>
  );
}
