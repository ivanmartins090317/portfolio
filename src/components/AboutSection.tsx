import {Smile} from "lucide-react";

const infoItems = [
  {label: "Experiência", value: "5+ Anos"},
  {label: "Localização", value: "Santos, SP"},
  {label: "Email", value: "ivanrbmartins@gmail.com"}
];

export function AboutSection() {
  return (
    <section id="about" className="max-w-[1440px] mx-auto px-6 mb-32">
      {/* Section Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-start">
        <div>
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none mb-2 text-neutral-900 dark:text-white">
            Conheça o
          </h2>
          <div className="flex items-center gap-4">
            <Smile className="h-12 w-12 text-neutral-900 dark:text-white rotate-12 shrink-0" />
            <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white">
              Desenvolvedor
            </h2>
          </div>
        </div>
        <div className="pt-4">
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg ml-auto text-right">
            Sou Ivan Martins, Desenvolvedor Full Stack & Mobile com atuação em consultoria
            de alto impacto — incluindo o setor financeiro (Serasa Experian).
            Especializado em React Native, React.js, Node.js e TypeScript, com
            certificações em AWS e Scrum, e profundo domínio em desenvolvimento assistido
            por IA.
          </p>
        </div>
      </div>

      {/* Profile Card + Connector Strip */}
      <div className="flex flex-col lg:flex-row items-center">
        {/* Main Card */}
        <div className="bg-neutral-950 text-white p-8 rounded-[2rem] w-full lg:w-[400px] shrink-0 z-10 relative shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-24 h-24 rounded-full border-2 border-white/20 p-1 mb-4 overflow-hidden">
              <img
                src="./preto_branco_02.jpeg"
                className="w-full h-full rounded-full object-cover object-top"
                alt="Ivan Martins"
              />
            </div>
            <h3 className="text-xl font-medium mb-1">Ivan Martins</h3>
            <p className="text-neutral-400 text-sm mb-8">
              Desenvolvedor Full Stack & Mobile
            </p>

            <div className="space-y-3 text-left w-full text-sm text-neutral-400">
              <p className="text-neutral-200 font-medium">Especialidades</p>
              <ul className="space-y-1">
                <li>React Native & React.js</li>
                <li>Node.js & TypeScript</li>
                <li>PostgreSQL & MongoDB</li>
                <li>AWS Cloud & Docker</li>
                <li>IA Assistida (MCP, Cursor)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Connector Strip */}
        <div className="flex-1 w-full lg:-ml-6 bg-neutral-900 text-white py-12 px-12 lg:pl-16 rounded-[2rem] lg:rounded-l-none lg:rounded-r-[2rem] flex flex-col md:flex-row justify-between items-center gap-8 mt-[-20px] lg:mt-0 pt-16 lg:pt-12">
          {infoItems.map((item) => (
            <div key={item.label} className="text-center md:text-left">
              <p className="text-xs text-neutral-400 uppercase tracking-wider mb-1">
                {item.label}
              </p>
              <p className="text-xl font-medium">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
