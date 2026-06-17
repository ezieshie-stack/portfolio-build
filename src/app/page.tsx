import { Hero } from "@/components/home/Hero";
import { CoreCapabilities } from "@/components/home/CoreCapabilities";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ToolsCarousel } from "@/components/home/ToolsCarousel";
import { SkillsCarousel } from "@/components/home/SkillsCarousel";
import { MyApproach } from "@/components/home/MyApproach";
import { FeaturedProjectsSlider } from "@/components/home/FeaturedProjectsSlider";
import { CurrentlyExploring } from "@/components/home/CurrentlyExploring";

export default function Home() {
  return (
    <>
      <Hero />
      <CoreCapabilities />
      <AboutPreview />
      <ToolsCarousel />
      <SkillsCarousel />
      <MyApproach />
      <FeaturedProjectsSlider />
      <CurrentlyExploring />
    </>
  );
}
