export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="footerInner">
        <div className="footerBrand">
          <div className="footerLogo">DE</div>
          <h3>David Ezieshi</h3>
          <p>Operations & Business Systems Analyst</p>
          <span>
            Building systems that improve operational clarity, workflow design,
            and business execution.
          </span>
        </div>

        <div className="footerColumn">
          <h4>Navigation</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/work">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footerColumn">
          <h4>Resources</h4>
          <a href="/resume.pdf">Resume</a>
          <a href="https://linkedin.com/in/YOUR-LINKEDIN">LinkedIn</a>
          <a href="mailto:YOUR-EMAIL">Email Me</a>
          <a href="https://github.com/YOUR-GITHUB">GitHub</a>
        </div>

        <div className="footerColumn">
          <h4>Connect</h4>
          <p>
            Open to opportunities in operations, systems analysis, process
            improvement, and business analysis.
          </p>
          <a href="/contact">Get in Touch</a>
        </div>
      </div>

      <div className="footerBottom">
        <span>
          © {new Date().getFullYear()} David Ezieshi. All rights reserved.
        </span>
        <span>Built with care.</span>
      </div>
    </footer>
  );
}
