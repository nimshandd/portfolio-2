import profile from "../data/profile";

function About() {
  return (
    <section id="about" className="py-20 border-t border-[#27272A] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#A855F7]">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Full Stack Web Developer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Main Bio - Left 2 Columns */}
          <div className="md:col-span-2 space-y-6 text-left">
            <p className="text-[#A1A1AA] text-base md:text-lg font-light leading-relaxed">
              {profile.about}
            </p>
            <div className="p-6 bg-[#161616] border border-[#27272A] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-[#A1A1AA]/30 transition-all duration-300 rounded-xl space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Education</h3>
              <div className="space-y-1">
                <p className="text-white font-medium text-sm md:text-base">
                  {profile.education}
                </p>
                <p className="text-[#A1A1AA] text-xs md:text-sm">
                  {profile.institute} • GPA: {profile.gpa}
                </p>
              </div>
            </div>
          </div>

          {/* Stats & Quick Facts - Right 1 Column */}
          <div className="flex flex-col gap-4">
            <div className="p-6 bg-[#161616] border border-[#27272A] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-[#A1A1AA]/30 transition-all duration-300 rounded-xl text-left space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#A855F7]">Location</span>
              <p className="text-white font-medium text-sm md:text-base">{profile.location}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-[#161616] border border-[#27272A] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-[#A1A1AA]/30 transition-all duration-300 rounded-xl text-left space-y-1">
                <span className="block text-2xl md:text-3xl font-bold text-white">{profile.stats.technologies}</span>
                <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Technologies</span>
              </div>
              <div className="p-6 bg-[#161616] border border-[#27272A] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-[#A1A1AA]/30 transition-all duration-300 rounded-xl text-left space-y-1">
                <span className="block text-2xl md:text-3xl font-bold text-white">{profile.stats.projects}</span>
                <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">Projects</span>
              </div>
            </div>
            
            <div className="p-6 bg-[#161616] border border-[#27272A] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-[#A1A1AA]/30 transition-all duration-300 rounded-xl text-left space-y-1">
              <span className="block text-2xl md:text-3xl font-bold text-white">{profile.stats.gpa}</span>
              <span className="text-xs text-[#A1A1AA] uppercase tracking-wider">GPA / 4.0</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
