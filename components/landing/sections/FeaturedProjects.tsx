import ProjectCard from "../miniComponents/ProjectCard";
import SectionWrapper from "../miniComponents/SectionWrapper";
import projects from "@/lib/data.json";

export default function FeaturedProjects() {
  return (
    <SectionWrapper id="projects" className="flex flex-col w-full space-y-8 scroll-mt-26">
      <h2 className="heading">Featured Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.data.map((project) => (
          <ProjectCard {...project} key={project.title} />
        ))}
      </div>
    </SectionWrapper>
  );
}
