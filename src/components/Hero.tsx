import { Shield, CheckCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-background.jpg';

const logoBravo = '/1769040154965_logo_bravo_jpg-removebg-preview.png';

export function Hero() {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contato');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleScrollToServices = () => {
    const element = document.querySelector('#servicos');
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-primary/70" />

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 pt-32 md:pt-40 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Shield className="w-5 h-5 text-accent" />
              <span className="text-primary-foreground text-sm font-medium">Desde 2010 protegendo você</span>
            </div>

            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Bravo Segurança
            </h1>

            <h2 className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
              Soluções completas em segurança eletrônica, monitoramento 24h e facilities para sua tranquilidade
            </h2>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Button 
                onClick={handleScrollToContact}
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-lg px-8 py-6 shadow-accent"
              >
                Solicitar orçamento
              </Button>
              <Button 
                onClick={handleScrollToServices}
                size="lg"
                variant="outline"
                className="bg-white/20 border-white text-white hover:bg-white hover:text-primary font-semibold text-lg px-8 py-6"
              >
                Nossos serviços
              </Button>
              <Button 
                asChild
                size="lg"
                className="bg-primary-foreground hover:bg-primary-foreground/90 text-primary font-semibold text-lg px-8 py-6"
              >
                <Link to="/vitrine" className="flex items-center gap-2">
                  <ShoppingBag className="w-5 h-5" />
                  Ver Vitrine
                </Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 justify-center lg:justify-start text-primary-foreground/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">Monitoramento 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">Atendimento RS</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-sm">+15 anos de experiência</span>
              </div>
            </div>
          </div>

          {/* Video */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
                <video 
                  autoPlay 
                  muted 
                  loop 
                  playsInline
                  className="w-[600px] h-auto object-contain"
                >
                  <source src="/midia_13.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeos.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slogan bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-accent py-4">
        <div className="container-custom text-center">
          <p className="text-accent-foreground font-heading font-semibold text-lg md:text-xl">
            Ser Bravo é ir além: é garantir segurança com excelência
          </p>
        </div>
      </div>
    </section>
  );
}
