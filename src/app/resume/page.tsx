import { PageShell, SectionTag } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { ResumeViewer } from "@/components/cms/ResumeViewer";
import { resume } from "@/lib/content";
import { fetchImageBySlot } from "@/lib/cms";

export const metadata = { title: "Resume — Portfolio" };

export default async function ResumePage() {
  // Convex slot wins if uploaded; falls back to the static /public/resume.pdf
  // so the page is functional before an admin upload happens.
  const resumeFile = await fetchImageBySlot("resume-pdf");
  const pdfUrl = resumeFile?.imageUrl ?? "/resume.pdf";

  return (
    <PageShell>
      <Reveal as="section" className="pb-12">
        <SectionTag>{resume.tag}</SectionTag>
        <h1 className="text-[clamp(36px,5vw,56px)] font-extrabold leading-[1.05] tracking-[-0.02em] mb-6 whitespace-pre-line">
          {resume.title}
        </h1>
        <p className="text-[color:var(--text-dim)] max-w-prose mb-10">
          {resume.intro}
        </p>
      </Reveal>

      <div className="grid lg:grid-cols-[1fr_1.3fr] gap-10 items-start">
        <Reveal>
          {pdfUrl ? (
            <div className="resume-preview-card">
              <iframe
                src={`${pdfUrl}#toolbar=0&navpanes=0`}
                className="resume-preview-frame"
                title="Resume preview"
              />
            </div>
          ) : (
            <div className="glass-card aspect-[3/4] flex items-center justify-center text-[color:var(--text-dim)] text-xs tracking-[0.2em] uppercase">
              [Resume Preview Placeholder]
            </div>
          )}
          <div className="mt-5">
            <ResumeViewer
              pdfUrl={pdfUrl}
              downloadLabel={resume.downloadCta.label}
              viewLabel={resume.viewCta.label}
            />
          </div>
        </Reveal>

        <Reveal as="section" className="space-y-12">
          <div>
            <SectionTag>{resume.whatTag}</SectionTag>
            <ul className="space-y-3 mt-2">
              {resume.what.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[color:var(--text-dim)]">
                  <span className="status-dot mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionTag>{resume.expertiseTag}</SectionTag>
            <ul className="flex flex-wrap gap-2 mt-2">
              {resume.expertise.map((item) => (
                <li key={item} className="chip">
                  <span className="status-dot" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </PageShell>
  );
}
