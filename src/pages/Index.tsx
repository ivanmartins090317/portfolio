import {ThemeProvider} from "@/components/ThemeProvider";
import {Header} from "@/components/Header";
import {HeroSection} from "@/components/HeroSection";
import {AboutSection} from "@/components/AboutSection";
import {ProjectsSection} from "@/components/ProjectsSection";
import {ContactSection} from "@/components/ContactSection";
import {Footer} from "@/components/Footer";
import {FloatingWhatsApp} from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange={false}
    >
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeProvider>
  );
};

export default Index;
