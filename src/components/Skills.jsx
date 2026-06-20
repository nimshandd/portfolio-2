import skills from "../data/skills";

function Skills() {
  const categoryNames = {
    frontend: "Frontend",
    backend: "Backend",
    mobile: "Mobile Development",
    programming: "Programming Languages",
    tools: "Tools & DevOps",
  };

  return (
    <section id="skills" className="py-20 border-t border-[#27272A] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#A855F7]">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Technologies & Tools
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([key, list]) => (
            <div
              key={key}
              className="p-6 bg-[#161616] border border-[#27272A] rounded-xl text-left space-y-4 hover:border-[#A855F7]/30 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white border-b border-[#27272A] pb-2">
                {categoryNames[key] || key}
              </h3>
              
              <div className="flex flex-wrap gap-2 pt-1">
                {list.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 bg-[#0B0B0B] border border-[#27272A] text-[#A1A1AA] hover:text-white hover:border-[#A1A1AA] rounded-md transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
