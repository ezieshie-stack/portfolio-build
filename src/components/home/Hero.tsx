import Link from "next/link";
import Image from "next/image";
import { Mail, FileText } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BrandIcon } from "@/components/ui/BrandIcon";

export function Hero() {
  return (
    <section className="pf-hero">
      <div className="pf-shell">
        <div className="pf-hero-grid">
          <div className="pf-hero-copy">
            <Badge tone="subtle" className="mb-[26px] whitespace-nowrap">
              Business Analyst · Toronto, Canada
            </Badge>
            <h1 className="pf-hero-title">
              I work the full lifecycle, from requirements{" "}
              <em>to live operation.</em>
            </h1>
            <p className="pf-hero-sub">
              My current engagement is with FIIT Co. I led the analyst team
              through requirements, modeling, and delivery on two production
              systems. After the team rolled off, I was retained as the sole
              administrator. I now operate and improve the live platform myself.
            </p>
            <div className="pf-btnrow">
              <Button variant="primary" size="lg" pill href="/work">
                View My Work
              </Button>
              <Button variant="secondary" size="lg" pill href="/contact">
                Let&rsquo;s Connect
              </Button>
            </div>
            <div className="pf-social">
              <a
                href="https://www.linkedin.com/in/david-ezieshi/"
                target="_blank"
                rel="noreferrer"
              >
                <BrandIcon name="linkedin" size={18} /> LinkedIn
              </a>
              <a href="mailto:ezieshie@gmail.com">
                <Mail size={18} aria-hidden /> Email
              </a>
              <Link href="/resume">
                <FileText size={18} aria-hidden /> Resume
              </Link>
              <a
                href="https://github.com/ezieshie-stack"
                target="_blank"
                rel="noreferrer"
              >
                <BrandIcon name="github" size={18} /> GitHub
              </a>
            </div>
          </div>

          <div className="pf-portrait">
            <div className="pf-portrait-frame">
              <Image
                src="/portrait-home.png"
                alt="David Ezieshi portrait"
                width={1040}
                height={1300}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "34% 26%" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
