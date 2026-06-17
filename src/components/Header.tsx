import { ArrowRight } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { label: "Home", section: "home" },
  { label: "Sobre", section: "about" },
  { label: "Projetos", section: "projects" },
  { label: "Contato", section: "contact" },
];

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white/90 dark:bg-neutral-950/90 backdrop-blur-md z-50 border-b border-neutral-100 dark:border-neutral-800">
      <div className="max-w-[1440px] mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-semibold tracking-tight uppercase text-neutral-900 dark:text-white"
          >
            Ivan Martins.Dev
          </button>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-500">
            {navLinks.map((link) => (
              <button
                key={link.section}
                onClick={() => scrollToSection(link.section)}
                className="hover:text-neutral-900 dark:hover:text-white transition-colors first:text-neutral-900 dark:first:text-white"
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <button
            onClick={() => scrollToSection("contact")}
            className="flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 pl-5 pr-2 py-1.5 rounded-full text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
          >
            Contato
            <div className="bg-white/20 dark:bg-black/10 p-1.5 rounded-full flex items-center justify-center">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
