import { ArrowUpRight } from "lucide-react";

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
    image: "https://i.ibb.co/KjSPLYhd/projeto-reage-preview.png",
    link: "https://reage-surfboard.vercel.app/",
  },
  {
    title: "Surf Training Heat",
    description:
      "Aplicativo para gerenciamento e avaliação de surfistas em competições ou baterias de surfe.",
    technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    image: "https://i.ibb.co/HThr14DL/projeto-surf-juiz-preview.png",
    link: "https://juiz-surf-br.vercel.app/",
  },
  {
    title: "Chat Surfboard Measure",
    description:
      "Chat com IA para determinar o volume ideal de prancha com base no peso e altura do usuário.",
    technologies: ["React", "Chart.js", "Tailwind", "OpenAI"],
    image: "https://i.ibb.co/mCgwmPSK/tela-principal-chat-surfboardmeasure.png",
    link: "https://surf-board-mesure.vercel.app/",
  },
  {
    title: "Landing Page Advogado",
    description:
      "Landing page personalizada para advogados com sistema de mensagens e compartilhamento de mídia.",
    technologies: ["React", "Tailwind", "Shadcn", "TypeScript"],
    image: "https://i.ibb.co/jZRV9QFT/landing-page-moraes.png",
    link: "https://advogado-moraes.vercel.app/",
  },
];

function ProjectCard({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  return (
    <div className={`relative group rounded-[2rem] overflow-hidden bg-neutral-100 dark:bg-neutral-800 ${className}`}>
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
        <span className="text-base font-semibold bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm px-4 py-2 rounded-full text-neutral-900 dark:text-white">
          {project.title}
        </span>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-neutral-900 text-white p-3 rounded-full flex items-center justify-center hover:bg-neutral-700 transition-colors shrink-0"
        >
          <ArrowUpRight className="h-5 w-5" />
        </a>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="max-w-[1440px] mx-auto px-6 mb-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white">
            Projetos
          </h2>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-sm md:text-base text-neutral-500 max-w-sm">
              Soluções reais desenvolvidas com foco em performance, usabilidade e escala.
            </p>
            <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none whitespace-nowrap text-neutral-900 dark:text-white">
              em Destaque
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-end gap-4">
          <p className="text-sm text-neutral-500 text-right max-w-xs">
            Explore projetos desenvolvidos com tecnologias modernas e foco em resultado real.
          </p>
          <a
            href="https://github.com/ivanmartins"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 pl-6 pr-2 py-2 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all"
          >
            Ver Todos
            <div className="bg-white/20 dark:bg-black/10 p-2 rounded-full flex items-center justify-center">
              <ArrowUpRight className="h-4 w-4" />
            </div>
          </a>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Col 1 */}
        <div className="space-y-6 flex flex-col">
          <ProjectCard project={projects[0]} className="h-[400px]" />
        </div>

        {/* Col 2 — offset para baixo */}
        <div className="space-y-6 flex flex-col md:translate-y-12">
          <ProjectCard project={projects[1]} className="h-[300px]" />
          <ProjectCard project={projects[2]} className="h-[450px]" />
        </div>

        {/* Col 3 */}
        <div className="space-y-6 flex flex-col">
          <ProjectCard project={projects[3]} className="h-[500px]" />
        </div>
      </div>
    </section>
  );
}
