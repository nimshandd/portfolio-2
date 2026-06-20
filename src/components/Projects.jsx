import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-[#27272A] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#A855F7]">
            My Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
