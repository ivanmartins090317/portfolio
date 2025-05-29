import {Button} from "@/components/ui/button";
import {Card} from "@/components/ui/card";

export function HeroSection() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "./Ivan_Martins_CV-ok.pdf";
    link.download = "Ivan_Martins_CV-ok.pdf";
    link.click();
  };

  return (
    <section id="home" className="min-h-screen pt-16 pb-0">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
          {/* Main Hero Card */}
          <Card className="h-[57vh] md:col-span-8 p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col justify-center h-full space-y-6 ">
              <div>
                <h2 className="text-4xl md:text-6xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Desenvolvedor
                  </span>
                  <br />
                  <span className="text-foreground">Full Stack</span>
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
          <Card className="flex md:col-span-4 p-6 hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 border-0">
            <div className="flex mx-auto items-center aspect-square relative overflow-hidden rounded-lg  ">
              <div className="absolute inset-0 flex items-center justify-center">
                {/* <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  JS
                </div> */}
                <img src="./perfil_ 00.png" alt="imagem de perfil" />
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <Card className="md:col-span-3 p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-blue-600">50+</h3>
              <p className="text-muted-foreground">Projetos Concluídos</p>
            </div>
          </Card>

          <Card className="md:col-span-3 p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-purple-600">5+</h3>
              <p className="text-muted-foreground">Anos de Experiência</p>
            </div>
          </Card>

          <Card className="md:col-span-3 p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-green-600">100%</h3>
              <p className="text-muted-foreground">Clientes Satisfeitos</p>
            </div>
          </Card>

          <Card className="md:col-span-3 p-6 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-orange-600">24/5</h3>
              <p className="text-muted-foreground">Suporte Disponível</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
