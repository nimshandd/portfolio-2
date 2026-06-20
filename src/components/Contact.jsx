import { FiMail, FiPhone, FiGithub, FiLinkedin } from "react-icons/fi";
import profile from "../data/profile";

function Contact() {
  const contactLinks = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: <FiMail size={20} />,
      isExternal: false,
    },
    {
      label: "Phone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      icon: <FiPhone size={20} />,
      isExternal: false,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/nimshan-dulantha",
      href: profile.linkedin,
      icon: <FiLinkedin size={20} />,
      isExternal: true,
    },
    {
      label: "GitHub",
      value: "github.com/nimshandd",
      href: profile.github,
      icon: <FiGithub size={20} />,
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-20 border-t border-[#27272A] scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-4 mb-12">
          <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-[#A855F7]">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Contact Information
          </h2>
        </div>

        {/* Grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="p-6 bg-[#161616] border border-[#27272A] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05)] hover:border-[#A855F7]/50 hover:-translate-y-0.5 rounded-xl flex flex-col items-center justify-center text-center space-y-4 group transition-all duration-300"
            >
              <div className="p-3 bg-[#0B0B0B] border border-[#27272A] text-[#A1A1AA] group-hover:text-white group-hover:border-[#A855F7]/50 rounded-lg transition-colors duration-200">
                {link.icon}
              </div>
              
              <div className="space-y-1 w-full overflow-hidden">
                <span className="block text-xs font-semibold uppercase tracking-wider text-[#A1A1AA]">
                  {link.label}
                </span>
                <span className="block text-sm font-medium text-white truncate px-2">
                  {link.value}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
