import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";
import Orb from "../animation/components/Orb";
import DecryptedText from "../animation/components/DecryptedText";
import CountUp from "@/animation/components/CountUp";

export function HeroSection() {
  const statsData = [
    {
      value: 50,
      suffix: "+",
      label: "Projetos Concluídos",
      color: "text-blue-600"
    },
    {
      value: 5,
      suffix: "+",
      label: "Anos de Experiência",
      color: "text-purple-600"
    },
    {
      value: 100,
      suffix: "%",
      label: "Clientes Satisfeitos",
      color: "text-green-600"
    },
    {
      value: 24,
      suffix: "/5",
      label: "Suporte Disponível",
      color: "text-orange-600"
    }
  ];
  const countUpAnimation = (number: number) => {
    return (
      <CountUp
        from={0}
        to={number}
        separator=","
        direction="up"
        duration={1}
        className="count-up-text"
      />
    );
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./CV_IvanMartins.pdf";
    link.download = "CV_IvanMartins.pdf";
    link.click();
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({behavior: "smooth"});
    }
  };

  return (
    <section id="home" className="min-h-screen pt-16 pb-0 relative">
      {/* Orb Background Effect - Fixo no fundo */}
      <div className="fixed inset-0 -z-09 pointer-events-none opacity-30">
        <Orb hoverIntensity={0.3} rotateOnHover={true} hue={0} forceHoverState={false} />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
          {/* Main Hero Card */}
          <Card className="h-[57vh] md:col-span-8 p-8 bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-blue-950/80 dark:to-purple-950/80 border-0 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm">
            <div className="flex flex-col justify-center h-full space-y-6 ">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Desenvolvedor
                  </span>
                  <br />
                  <DecryptedText
                    className="text-foreground"
                    text="Full Stack"
                  ></DecryptedText>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  Criando experiências digitais incríveis com tecnologias modernas.
                  Especializado em React, Node.js e desenvolvimento web responsivo.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  onClick={() => scrollToSection("projects")}
                >
                  Ver Projetos
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="hover:scale-105 transition-transform duration-300"
                  onClick={handleDownload}
                >
                  Download CV
                </Button>
              </div>
            </div>
          </Card>

          {/* Profile Image Card */}
          <Card className="flex h-[60vh] md:h-auto md:col-span-4 p-6 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-50/90 to-purple-50/90 dark:from-blue-950/80 dark:to-purple-950/80 border-0 backdrop-blur-sm">
            <div className="flex mx-auto items-center aspect-square relative overflow-hidden rounded-lg  ">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="./preto_branco_02.jpeg"
                  alt="imagem de perfil"
                  className="h-full w-full object-cover"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-500 to-purple-500 opacity-15"></div>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          {statsData.map((stat, index) => (
            <Card
              key={index}
              className="md:col-span-3 p-6 hover:scale-105 transition-transform duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm"
            >
              <div className="text-center">
                <h3 className={`text-3xl font-bold ${stat.color}`}>
                  {countUpAnimation(stat.value)}
                  {stat.suffix}
                </h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            </Card>
          ))}
          {/* <Card className="md:col-span-3 p-6 hover:scale-105 transition-transform duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">
                {countUpAnimation(50)}+
              </h3>
              <p className="text-muted-foreground">Projetos Concluídos</p>
            </div>
          </Card>

          <Card className="md:col-span-3 p-6 hover:scale-105 transition-transform duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-600">
                {countUpAnimation(5)}+
              </h3>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
          </Card>

          <Card className="md:col-span-3 p-6 hover:scale-105 transition-transform duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600">
                {countUpAnimation(100)}%
              </h3>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
          </Card>

          <Card className="md:col-span-3 p-6 hover:scale-105 transition-transform duration-300 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-600">
                {countUpAnimation(24)}/5
              </h3>
              <p className="text-muted-foreground">Suporte Disponível</p>
            </div>
          </Card> */}
        </div>
      </div>
    </section>
  );
}
