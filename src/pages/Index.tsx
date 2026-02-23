import backgroundImage from "@/assets/background.jpg";
import { Heart, Gift } from "lucide-react";

const Index = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
        <div className="space-y-3">
          <p className="text-primary-foreground/80 tracking-[0.3em] uppercase text-sm font-body font-light" style={{ fontFamily: 'var(--font-body)' }}>
            Estamos nos casando
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground drop-shadow-lg" style={{ fontFamily: 'var(--font-heading)' }}>
            Gabriel & Ana Flavia
          </h1>
          <div className="flex items-center justify-center gap-3 text-primary-foreground/70">
            <span className="h-px w-12 bg-primary-foreground/40" />
            <Heart className="w-4 h-4 fill-current" />
            <span className="h-px w-12 bg-primary-foreground/40" />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <a
            href="https://chat.whatsapp.com/C8vAMujU2dnDekSpQXJkWV"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Confirmar Presença
          </a>

          <a
            href="https://lista.havan.com.br/Convidado/ItensListaPresente/906725"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 rounded-full bg-primary-foreground/20 backdrop-blur-sm text-primary-foreground border border-primary-foreground/30 font-medium text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-primary-foreground/30"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            <Gift className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Lista de Presentes
          </a>
        </div>
      </div>
    </div>
  );
};

export default Index;
