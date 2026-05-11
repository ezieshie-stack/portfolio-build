export function Footer() {
  return (
    <footer className="siteFooter">
      <div className="siteFooterInner">
        <div>
          <div className="footerLogo">DE</div>
          <p>David Ezieshi</p>
          <span>Operations & Business Systems Analyst</span>
        </div>

        <div>
          <h4>Navigation</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/work">Projects</a>
          <a href="/contact">Contact</a>
        </div>

        <div>
          <h4>Resources</h4>
          <a href="/resume.pdf">Resume</a>
          <a href="https://linkedin.com/in/YOUR-LINKEDIN">LinkedIn</a>
          <a href="mailto:YOUR-EMAIL">Email Me</a>
          <a href="https://github.com/YOUR-GITHUB">GitHub</a>
        </div>

        <div>
          <h4>Connect</h4>
          <span>
            Open to opportunities in operations, systems analysis, and process
            improvement.
          </span>
          <a href="/contact">Get in Touch</a>
        </div>
      </div>

      <div className="footerBottom">
        <span>© {new Date().getFullYear()} David Ezieshi. All rights reserved.</span>
        <span>Built with care.</span>
      </div>
    </footer>
  );
}
