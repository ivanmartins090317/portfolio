import {ArrowRight} from "lucide-react";

const techList = [
  {label: "React", number: "01"},
  {label: "Node.js", number: "02"},
  {label: "TypeScript", number: "03"},
  {label: "Next.js", number: "04"},
  {label: "Expo", number: "05"},
  {label: "PostgreSQL", number: "06"},
  {label: "AWS", number: "07"}
];

const stackItems = ["Projetos", "Frontend", "Backend", "APIs", "Cloud", "Mobile"];

const stats = [
  {badge: "01", value: "50+", label: "Projetos Concluídos"},
  {badge: "02", value: "5+", label: "Anos de Experiência"}
];

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({behavior: "smooth"});
  };

  return (
    <section id="home" className="pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto px-6">
        {/* Hero Header Grid */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Left Title */}
          <div className="col-span-12 lg:col-span-10">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white">
                  Desenvolvedor
                </h1>
                <div className="h-16 w-32 md:h-20 md:w-48 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=400"
                    className="w-full h-full object-cover grayscale opacity-80"
                    alt="Code"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <div className="h-16 w-32 md:h-20 md:w-48 rounded-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=400"
                    className="w-full h-full object-cover grayscale opacity-80"
                    alt="Tech"
                  />
                </div>
                <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white">
                  Full Stack
                </h1>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-6xl md:text-8xl font-semibold tracking-tight leading-none text-neutral-400">
                  Ivan Martins
                </h1>
              </div>

              <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl mt-4 leading-relaxed">
                Engenheiro de software especializado em React, Node.js e TypeScript.
                Construindo soluções escaláveis e experiências digitais de alta qualidade.
              </p>
            </div>
          </div>

          {/* Right Tech List */}
          <div className="hidden lg:flex col-span-2 flex-col items-end justify-center text-sm font-medium text-neutral-400 gap-3">
            {techList.map((tech, i) => (
              <div
                key={tech.label}
                className={`flex justify-between w-full max-w-[180px] ${i === 0 ? "text-neutral-900 dark:text-white" : ""}`}
              >
                <span>{tech.label}</span>
                <span>{tech.number}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content Grid */}
        <div className="grid grid-cols-12 gap-6 items-end">
          {/* Left Stats Sidebar */}
          <div className="col-span-12 lg:col-span-2 flex flex-col gap-10">
            <div>
              <h3 className="font-semibold text-lg leading-tight mb-4 text-neutral-900 dark:text-white">
                Minhas
                <br />
                habilidades
              </h3>
              <div className="border border-neutral-200 dark:border-neutral-700 rounded-3xl p-5 bg-white dark:bg-neutral-900 shadow-sm relative overflow-hidden">
                <ul className="space-y-3 text-sm text-neutral-400">
                  {stackItems.map((item, i) => (
                    <li
                      key={item}
                      className={
                        i === 0 ? "text-neutral-900 dark:text-white font-medium" : ""
                      }
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-700 text-xs text-neutral-500 leading-tight">
                  Crie projetos, tecnologias e resultados reais.
                </div>
              </div>
            </div>

            <div className="space-y-6">
              {stats.map((stat) => (
                <div key={stat.badge}>
                  <span className="inline-block bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-xs px-2 py-0.5 rounded-full mb-1">
                    {stat.badge}
                  </span>
                  <div className="text-4xl font-medium tracking-tight text-neutral-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-neutral-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="col-span-12 lg:col-span-10 relative">
            <div className="w-full h-[500px] md:h-[600px] rounded-[2.5rem] overflow-hidden relative bg-neutral-100 dark:bg-neutral-800">
              <img
                src="./preto_branco_02.jpeg"
                alt="Ivan Martins"
                className="w-full h-full object-cover object-top"
              />

              <div className="absolute bottom-8 right-8">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="group flex items-center gap-3 bg-neutral-900 text-white pl-6 pr-2 py-2 rounded-full font-medium hover:bg-neutral-800 transition-all"
                >
                  Ver Projetos
                  <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-white" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
