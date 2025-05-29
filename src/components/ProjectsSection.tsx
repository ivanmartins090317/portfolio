import {Card} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {Badge} from "@/components/ui/badge";
import {Link} from "lucide-react";
import {log} from "console";

export function ProjectsSection() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de e-commerce com link direto para o WhatsApp do vendedor, facilitando a compra do produto.",
      technologies: ["React", "Node.js", "PostgreSQL", "Tailwind"],
      image: "https://i.ibb.co/kskhjL4Z/ecomerce-reage.png",
      link: "https://reage-surfboard.vercel.app/"
    },
    {
      title: "Surf Training Heat",
      description:
        "Aplicativo para gerenciamento e avaliação de surfistas em competições ou baterias de surfe.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
      image:
        "https://i.ibb.co/4gXXrBM5/screencapture-juiz-surf-br-vercel-app-training-heat-2025-05-28-20-23-58.png",
      link: "https://juiz-surf-br.vercel.app/"
    },
    {
      title: "Chat Surfboard Measure",
      description:
        "Aplicativo de chat para avaliação e análise, utilizando a OpenIA, para determinar o volume ideal de prancha com base no peso e altura do usuário.",
      technologies: ["React", "Chart.js", "Tailwind", "OpenIA"],
      image: "https://i.ibb.co/mCgwmPSK/tela-principal-chat-surfboardmeasure.png",

      link: "https://surf-board-mesure.vercel.app/"
    },
    {
      title: "Social Media App",
      description:
        "Rede social com feed personalizado, sistema de mensagens e compartilhamento de mídia.",
      technologies: ["React Native", "Firebase", "Redux", "AWS"],
      image: "bg-gradient-to-br from-orange-500 to-red-500",
      link: "#"
    }
  ];
  console.log(projects[1].link);

  const handleClickLink = (link) => {
    // Link externo para onde você deseja direcionar
    const linkExterno = {link};

    // Abre o link em uma nova aba
    window.open(link, "_blank");
  };
  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Projetos em Destaque
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, demonstrando diferentes
            tecnologias e soluções criativas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {/* Featured Project */}
          <Card className="lg:col-span-8 p-0 overflow-hidden hover:scale-105 transition-transform duration-300">
            <div className="grid md:grid-cols-2 h-full">
              <div className={`${projects[0].image} flex items-center justify-center`}>
                <img
                  className="w-[100%] h-full object-cover"
                  src={`${projects[0].image}`}
                  alt=""
                />
                {/* <div className="text-white text-6xl font-bold opacity-20">
                  {projects[0].title.split(" ")[0]}
                </div> */}
              </div>
              <div className="p-6 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-3">{projects[0].title}</h3>
                <p className="text-muted-foreground mb-4">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {projects[0].technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  className="self-start group"
                  onClick={() => handleClickLink("https://reage-surfboard.vercel.app/")}
                >
                  Ver Projeto
                  <Link className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Side Projects */}
          <div className="lg:col-span-4 space-y-6">
            {projects.slice(1, 3).map((project, index) => (
              <Card
                key={project.title}
                className="p-4 hover:scale-105 transition-transform duration-300"
              >
                <div
                  className={`${project.image} h-24 rounded mb-3 flex items-center justify-center`}
                >
                  <img
                    className="w-[100%] h-full object-cover"
                    src={`${projects[index + 1].image}`}
                    alt=""
                  />
                  {/* <div className="text-white text-2xl font-bold opacity-30">
                    {project.title.split(" ")[0]}
                  </div> */}
                </div>
                <h4 className="font-bold mb-2">{project.title}</h4>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <Button
                  size="sm"
                  variant="outline"
                  className="w-full"
                  onClick={() => handleClickLink(projects[index + 1].link)}
                >
                  Ver Detalhes
                </Button>
              </Card>
            ))}
          </div>

          {/* Bottom Project */}
          <Card className="lg:col-span-12 p-6 hover:scale-105 transition-transform duration-300">
            <div className="grid md:grid-cols-4 gap-6 items-center">
              <div
                className={`${projects[3].image} h-32 rounded flex items-center justify-center`}
              >
                <div className="text-white text-3xl font-bold opacity-30">
                  {projects[3].title.split(" ")[0]}
                </div>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold mb-2">{projects[3].title}</h3>
                <p className="text-muted-foreground mb-3">{projects[3].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[3].technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <Button className="w-full">Ver Projeto</Button>
                <Button variant="outline" className="w-full">
                  Código Fonte
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
