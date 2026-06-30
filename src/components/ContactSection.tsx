import {useState} from "react";
import {ArrowUpRight, Mail, Phone, MapPin} from "lucide-react";
import {LiquidChrome} from "@/animation/components/LiquidChrome";
import {toast} from "@/hooks/use-toast";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const contactInfo: ContactInfo[] = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: "ivanrbmartins@gmail.com"
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Telefone",
    value: "+55 (13) 98140-0137"
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Localização",
    value: "Santos, São Paulo, Brasil"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Obrigado pelo contato. Responderei em breve!"
      });
      setFormData({name: "", email: "", message: ""});
      setIsSubmitting(false);
    }, 600);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  return (
    <section id="contact" className="max-w-[1440px] mx-auto px-6 mb-32">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div>
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white">
            Vamos
          </h2>
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tight leading-none text-neutral-900 dark:text-white mt-1">
            Trabalhar Juntos
          </h2>
        </div>
        <p className="text-sm md:text-base text-neutral-500 dark:text-neutral-400 max-w-sm text-right">
          Tem um projeto em mente? Vamos conversar sobre como posso transformar sua ideia
          em realidade.
        </p>
      </div>

      {/* Contact Banner */}
      <div className="w-full h-[300px] rounded-[2rem] overflow-hidden relative group mb-16">
        <LiquidChrome className="absolute inset-0" interactive />
        <div
          className="absolute bottom-0 left-0 z-[1] w-full h-[100%] pointer-events-none bg-gradient-to-tr from-black/90 via-black/10 to-transparent"
          aria-hidden="true"
        />
        <div className="absolute bottom-8 left-8 z-10">
          <h3 className="text-white text-3xl font-semibold mb-2">Conecte-se Comigo</h3>
          <p className="text-white/90 max-w-md">
            Disponível para freelance, projetos full-time ou consultorias técnicas —
            nacional e internacional.
          </p>
        </div>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Info Cards */}
        <div className="md:col-span-4 space-y-4">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="border border-neutral-200 dark:border-neutral-700 rounded-[1.5rem] p-5 bg-white dark:bg-neutral-900 flex items-center gap-4 hover:shadow-md transition-shadow"
            >
              <div className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded-full text-neutral-700 dark:text-neutral-300 shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="text-xs text-neutral-400 uppercase tracking-wider mb-0.5">
                  {item.label}
                </p>
                <p className="text-sm font-medium text-neutral-900 dark:text-white">
                  {item.value}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <div className="md:col-span-8 border border-neutral-200 dark:border-neutral-700 rounded-[2rem] p-8 bg-white dark:bg-neutral-900">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Nome
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  required
                  className="w-full px-4 py-3 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors text-sm"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  className="w-full px-4 py-3 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors text-sm"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-neutral-700 dark:text-neutral-300"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Conte-me sobre seu projeto..."
                rows={6}
                required
                className="w-full px-4 py-3 rounded-[1.25rem] border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:border-neutral-900 dark:focus:border-white transition-colors text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex items-center gap-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 pl-6 pr-2 py-2 rounded-full font-medium hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all disabled:opacity-60"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              <div className="bg-white/20 dark:bg-black/10 p-2 rounded-full group-hover:bg-white/30 dark:group-hover:bg-black/20 transition-colors flex items-center justify-center">
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
