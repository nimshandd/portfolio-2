import profile from "../data/profile";
import heroImg from "../assets/hero.png";

function Hero() {
  return (
    <section className="min-h-[calc(100vh-73px)] flex items-center justify-center py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center w-full">
        {/* Left Column */}
        <div className="flex flex-col justify-center space-y-6 text-left">
          <div className="space-y-2">
            <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#A855F7]">
              {profile.title}
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-none">
              Nimshan<br />
              Dulantha<br />
              Dasanayaka
            </h1>
          </div>
          
          <p className="text-base md:text-lg text-[#A1A1AA] max-w-lg font-light leading-relaxed">
            {profile.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3 bg-[#A855F7] hover:bg-[#b56ef8] hover:-translate-y-0.5 shadow-lg shadow-[#A855F7]/10 text-white font-medium rounded-lg text-sm transition-all duration-300"
            >
              View Projects
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-[#27272A] hover:bg-[#161616] hover:border-[#A1A1AA] hover:-translate-y-0.5 text-white font-medium rounded-lg text-sm transition-all duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center md:justify-end items-center">
          <div className="bg-[#161616] p-2 rounded-2xl border border-[#27272A] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden group">
            <img
              src={heroImg}
              alt="Nimshan Dulantha Dasanayaka"
              className="w-full h-full rounded-xl object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-all duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
