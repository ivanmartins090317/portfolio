import {Card} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";

export function AboutSection() {
  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "Docker",
    "Git"
  ];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* About Content */}
          <Card className="md:col-span-8 p-8">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sobre Mim
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Sou um desenvolvedor apaixonado por tecnologia com mais de 5 anos de
                experiência criando soluções web inovadoras. Especializo-me em
                desenvolvimento full-stack usando tecnologias modernas como React, Node.js
                e TypeScript.
              </p>
              <p>
                Possuo certificações em AWS Cloud e Scrum, o que reforça minha capacidade
                de entregar soluções escaláveis e eficientes.
              </p>
              <p>
                Quando não estou codificando, gosto de contribuir para projetos open
                source, aprender novas tecnologias e compartilhar conhecimento com a
                comunidade de desenvolvedores.
              </p>
            </div>
          </Card>

          {/* Skills Card */}
          <Card className="md:col-span-4 p-6">
            <h3 className="text-2xl font-bold mb-6">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="hover:scale-105 transition-transform duration-200"
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Experience Timeline */}
          <Card className="md:col-span-6 p-6">
            <h3 className="text-2xl font-bold mb-6">Experiência</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-blue-500 pl-4">
                <h4 className="font-semibold">Desenvolvedor Front-end</h4>
                <p className="text-sm text-muted-foreground">
                  Fast Shop S/A • 2024 - 2025
                </p>
                <p className="text-sm mt-2">
                  Desenvolvimento de aplicações web complexas usando React
                </p>
              </div>
              <div className="border-l-2 border-purple-500 pl-4">
                <h4 className="font-semibold">Engenharo de Software</h4>
                <p className="text-sm text-muted-foreground">Consultoria • 2021 - 2023</p>
                <p className="text-sm mt-2">
                  Criação de interfaces modernas e responsivas
                </p>
              </div>
            </div>
          </Card>

          {/* Education */}
          <Card className="md:col-span-6 p-6">
            <h3 className="text-2xl font-bold mb-6">Educação</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-green-500 pl-4">
                <h4 className="font-semibold">Engenharia Mecatrônica</h4>
                <p className="text-sm text-muted-foreground">
                  Universidade Paulista • 2014 - 2020
                </p>
                <p className="text-sm mt-2">Bacharelado em Engenharia Mecatrônica</p>
              </div>
              <div className="border-l-2 border-orange-500 pl-4">
                <h4 className="font-semibold">Certificações</h4>
                <p className="text-sm text-muted-foreground">
                  Várias Plataformas • 2023 - Presente
                </p>
                <p className="text-sm mt-2"> AWS Cloud Practitioner</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
