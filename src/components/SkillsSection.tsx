import { ArrowUpRight, Globe, Monitor, Server, Database, Cloud } from "lucide-react";

interface SkillCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const skillCards: SkillCard[] = [
  {
    icon: <Monitor className="h-7 w-7 text-neutral-900 dark:text-white" />,
    title: "Frontend",
    description: "Interfaces modernas com React, Next.js e Tailwind CSS focadas em performance e acessibilidade.",
  },
  {
    icon: <Server className="h-7 w-7 text-neutral-900 dark:text-white" />,
    title: "Backend",
    description: "APIs REST escaláveis com Node.js, Express e autenticação segura com JWT.",
  },
  {
    icon: <Database className="h-7 w-7 text-neutral-900 dark:text-white" />,
    title: "Banco de Dados",
    description: "Modelagem e otimização com PostgreSQL e MongoDB para aplicações de alta demanda.",
  },
  {
    icon: <Cloud className="h-7 w-7 text-neutral-900 dark:text-white" />,
    title: "Cloud & DevOps",
    description: "Deploy e infraestrutura com AWS, Docker e CI/CD pipelines para entregas contínuas.",
  },
];

export function SkillsSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="max-w-[1440px] mx-auto px-6 mb-32">
      {/* Section Header */}
      <div className="grid grid-cols-12 gap-8 mb-16 items-center">
        <div className="col-span-12 md:col-span-6">
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none mb-2 text-neutral-900 dark:text-white">
            Especializado
          </h2>
          <div className="flex flex-col md:flex-row gap-4 md:items-end">
            <p className="text-sm text-neutral-500 max-w-xs md:mb-4">
              Do frontend ao cloud — construindo soluções completas com tecnologias que o mercado exige.
            </p>
            <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none text-right md:text-left w-full text-neutral-900 dark:text-white">
              Em
            </h2>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex justify-end">
          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-sm text-right">
            Comprometido com código de qualidade, arquiteturas escaláveis e entrega consistente de valor.
          </p>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center border border-neutral-300 dark:border-neutral-700 rounded-full pl-8 pr-2 py-2 bg-white dark:bg-neutral-900 max-w-2xl w-full justify-between relative shadow-sm">
          <div className="text-base font-medium text-neutral-900 dark:text-white">
            Disponível para novos projetos e oportunidades
          </div>
          <div>
            <button
              onClick={() => scrollToSection("contact")}
              className="h-12 flex items-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 pl-6 pr-2 rounded-full text-sm font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-colors"
            >
              Fale Comigo
              <div className="bg-white/20 dark:bg-black/10 p-1.5 rounded-full flex items-center justify-center">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Remote / Global Banner */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-16 gap-8">
        <div>
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none mb-2 text-neutral-900 dark:text-white">
            Trabalho
          </h2>
          <div className="flex items-center gap-6">
            <Globe className="h-12 w-12 text-neutral-900 dark:text-white shrink-0" />
            <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white">
              Remoto
            </h2>
          </div>
        </div>
        <div className="max-w-md text-sm md:text-base text-neutral-500 dark:text-neutral-400 text-right lg:text-right">
          <p>
            Disponível para projetos nacionais e internacionais. Comunicação clara,
            entregas no prazo e foco total em resultado — de qualquer lugar do mundo.
          </p>
        </div>
      </div>

      {/* 4 Skill Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCards.map((card) => (
          <div
            key={card.title}
            className="border border-neutral-200 dark:border-neutral-700 rounded-[2rem] p-6 h-[240px] flex flex-col justify-between hover:shadow-lg transition-shadow bg-white dark:bg-neutral-900"
          >
            <div className="flex justify-between items-start">
              {card.icon}
              <div className="bg-neutral-900 dark:bg-white p-2 rounded-full flex items-center justify-center">
                <ArrowUpRight className="h-4 w-4 text-white dark:text-neutral-900" />
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-2 text-neutral-900 dark:text-white">{card.title}</h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
