import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ project }) {
  const { title, description, image, technologies, github, live } = project;

  // Check if live exists and is not null/none/empty
  const hasLiveUrl = live && live !== "none" && live !== "#";

  return (
    <div className="bg-[#161616] border border-[#27272A] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] rounded-xl overflow-hidden flex flex-col group hover:border-[#A855F7]/40 transition-all duration-300">
      {/* Image container */}
      <div className="overflow-hidden aspect-video relative border-b border-[#27272A]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500 grayscale group-hover:grayscale-0"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow text-left space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
          <p className="text-sm text-[#A1A1AA] font-light leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-[10px] uppercase tracking-wider font-semibold px-2 py-1 bg-[#0B0B0B] border border-[#27272A] text-[#A1A1AA] rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-4 pt-4 mt-auto border-t border-[#27272A]/50">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] hover:text-white hover:-translate-y-0.5 transition-all duration-200"
          >
            <FiGithub size={16} />
            Code
          </a>
          
          {hasLiveUrl && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#A1A1AA] hover:text-[#A855F7] hover:-translate-y-0.5 transition-all duration-200"
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
