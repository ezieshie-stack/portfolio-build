import { BackgroundCanvas } from "@/components/BackgroundCanvas";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { FeaturedProject } from "@/components/FeaturedProject";
import { ProjectMarquee } from "@/components/ProjectMarquee";
import { Philosophy } from "@/components/Philosophy";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <BackgroundCanvas />
      <div className="orb" aria-hidden />
      <Nav />
      <main className="flex-1">
        <Hero />
        <FeaturedProject />
        <ProjectMarquee />
        <Philosophy />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
