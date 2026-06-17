import { ArrowUp, CodeXml } from "lucide-react";

const footerLinks = [
  { label: "Sobre", section: "about" },
  { label: "Projetos", section: "projects" },
  { label: "Contato", section: "contact" },
];

const supportLinks = [
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
  { label: "Currículo", href: "./CV_IvanMartins.pdf" },
];

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-8">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between mb-24">
          {/* Left — Hero Text */}
          <div className="mb-12 lg:mb-0">
            <h2 className="text-6xl md:text-7xl font-semibold tracking-tight">
              Seu Código É
            </h2>
            <div className="flex items-center gap-6 mt-2">
              <CodeXml className="h-12 w-12 text-white shrink-0" />
              <h2 className="text-6xl md:text-7xl font-semibold tracking-tight">
                Seu Legado
              </h2>
            </div>
            <p className="text-neutral-400 text-sm mt-8 max-w-lg leading-relaxed">
              Cada linha de código é uma oportunidade de criar algo que dure. Vamos construir juntos.
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="mt-8 bg-white text-neutral-900 px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-colors"
            >
              Iniciar um Projeto
            </button>
          </div>

          {/* Right — Links */}
          <div className="flex gap-16 lg:gap-24 text-sm text-neutral-400">
            <ul className="space-y-6">
              {footerLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="flex flex-col justify-between">
              <ul className="space-y-6">
                {supportLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <button
                onClick={scrollToTop}
                className="bg-white text-neutral-900 p-4 rounded-full mt-8 hover:bg-neutral-200 transition-colors self-end lg:self-start flex items-center justify-center"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500 gap-4">
          <p>© 2026 Ivan Martins.Dev. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
