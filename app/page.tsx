import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Education from "@/components/Education";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      {/* <ProjectCard /> */}
      <Contact />
    </>
  );
}

