import {ArrowUpRight} from "lucide-react";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description:
      "Plataforma de e-commerce com link direto para o WhatsApp do vendedor, facilitando a compra do produto.",
    technologies: ["React", "Node.js", "PostgreSQL", "Tailwind"],
    image: "https://i.ibb.co/TxSH7tPv/card-jobs-02.png",
    link: "https://reage-surfboard.vercel.app/"
  },
  {
    title: "App Apple X9 Localiza",
    description:
      "Aplicativo X9 LOCALIZA é uma solução criada para encontrar veículos com mais rapidez, precisão e eficiência no processo de busca.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    image: "https://i.ibb.co/27dH6FtM/card-jobs-04.png",
    link: "https://apps.apple.com/br/app/x9-localiza/id6760557530"
  },
  {
    title: "Chat Surfboard Measure",
    description:
      "Chat com IA para determinar o volume ideal de prancha com base no peso e altura do usuário.",
    technologies: ["React", "Chart.js", "Tailwind", "OpenAI"],
    image: "https://i.ibb.co/mCgwmPSK/tela-principal-chat-surfboardmeasure.png",
    link: "https://surf-board-mesure.vercel.app/"
  },
  {
    title: "Landing Page Advogado",
    description:
      "Landing page personalizada para advogados com sistema de mensagens e compartilhamento de mídia.",
    technologies: ["React", "Tailwind", "Shadcn", "TypeScript"],
    image: "https://i.ibb.co/jZRV9QFT/landing-page-moraes.png",
    link: "https://advogado-moraes.vercel.app/"
  },
  {
    title: "Gestor de alunos",
    description:
      "Gestor de alunos para escola de surf com sistema de gerenciamento de alunos, financeiro e materiais.",
    technologies: ["React", "Tailwind", "Shadcn", "TypeScript"],
    image: "https://i.ibb.co/HpkDTXnB/card-jobs-03.png",
    link: "https://films-dutra-project.vercel.app/"
  }
];

function ProjectCard({project, className = ""}: {project: Project; className?: string}) {
  return (
    <div
      className={`relative group rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-800 ${className}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end gap-2">
        <span className="text-sm md:text-base font-semibold bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm px-3 py-1.5 md:px-4 md:py-2 rounded-full text-neutral-900 dark:text-white truncate">
          {project.title}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-900 text-white p-2.5 md:p-3 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors shrink-0"
        >
          <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5" />
        </a>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[1440px] mx-auto px-6 mb-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6 md:gap-8">
        <div>
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white">
            Projetos
          </h2>
          <div className="flex flex-col md:flex-row md:items-center md:gap-4 mt-2">
            <p className="text-sm md:text-base text-neutral-500 max-w-sm order-2 md:order-1 mt-3 md:mt-0">
              Soluções reais desenvolvidas com foco em performance, usabilidade e escala.
            </p>
            <h2 className="text-5xl md:text-7xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white order-1 md:order-2">
              em Destaque
            </h2>
          </div>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end justify-between md:justify-start gap-4">
          <p className="hidden md:block text-sm text-neutral-500 text-right max-w-xs">
            Explore projetos desenvolvidos com tecnologias modernas e foco em resultado
            real.
          </p>
          <a
            href="https://github.com/ivanmartins"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 pl-6 pr-2 py-2 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shrink-0"
          >
            Ver Todos
            <div className="bg-white/20 dark:bg-black/10 p-2 rounded-full flex items-center justify-center">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </a>
        </div>
      </div>

      {/* Mobile: lista empilhada | Desktop: masonry 3 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Col 1 */}
        <div className="space-y-6 flex flex-col">
          <ProjectCard project={projects[0]} className="h-[260px] md:h-[400px]" />
        </div>

        {/* Col 2 — offset apenas no desktop */}
        <div className="space-y-6 flex flex-col md:translate-y-12">
          <ProjectCard project={projects[1]} className="h-[260px] md:h-[300px]" />
          <ProjectCard project={projects[2]} className="h-[260px] md:h-[450px]" />
        </div>

        {/* Col 3 */}
        <div className="space-y-6 flex flex-col">
          <ProjectCard project={projects[3]} className="h-[260px] md:h-[500px]" />
          <ProjectCard project={projects[4]} className="h-[260px] md:h-[500px]" />
        </div>
      </div>
    </section>
  );
}
