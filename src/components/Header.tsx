"use client";

import {ThemeToggle} from "./ThemeToggle";
import {Button} from "@/components/ui/button";

export function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/30">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Ivan Martins.Dev
          </h1>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Button
            variant="ghost"
            onClick={() => scrollToSection("home")}
            className="hover:text-primary transition-colors"
          >
            Home
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("about")}
            className="hover:text-primary transition-colors"
          >
            Sobre
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("projects")}
            className="hover:text-primary transition-colors"
          >
            Projetos
          </Button>
          <Button
            variant="ghost"
            onClick={() => scrollToSection("contact")}
            className="hover:text-primary transition-colors"
          >
            Contato
          </Button>
        </nav>

        <ThemeToggle />
      </div>
    </header>
  );
}
