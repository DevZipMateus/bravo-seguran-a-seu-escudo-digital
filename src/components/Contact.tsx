import { Phone, Mail, MapPin, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import perimeterSecurity from '@/assets/perimeter-security.jpg';

const contactInfo = [
  {
    icon: Phone,
    title: 'Telefones',
    lines: ['(51) 2040-684', '(51) 99929-4788', '(51) 99929-4711'],
    href: 'tel:51999294788',
  },
  {
    icon: Mail,
    title: 'E-mail',
    lines: ['amauribravo2@gmail.com'],
    href: 'mailto:amauribravo2@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Endereço',
    lines: ['R. França, 169', 'Dois Irmãos - RS'],
    href: 'https://maps.app.goo.gl/qnUJrApWUPckEZFN6',
  },
  {
    icon: Clock,
    title: 'Horário de atendimento',
    lines: ['Seg a Sex: 8h às 11:30', '13h às 18h'],
    href: null,
  },
];

export function Contact() {
  return (
    <section id="contato" className="py-12 sm:py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container-custom">
        {/* Section header with decorative image */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-10 sm:mb-12 md:mb-16">
          <div>
            <span className="inline-block bg-accent/10 text-accent font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
              Contato
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
              Entre em contato conosco
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg">
              Estamos prontos para atender você e apresentar as melhores soluções em segurança
            </p>
          </div>
          <div className="hidden lg:block">
            <div className="relative h-40 md:h-48 rounded-xl sm:rounded-2xl overflow-hidden">
              <img src={perimeterSecurity} alt="Segurança perimetral" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent/50 to-transparent" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact info */}
          <div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-card border border-border/50">
                  <div className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4">
                    <info.icon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-sm sm:text-base md:text-lg text-foreground mb-1 sm:mb-2">{info.title}</h3>
                  {info.href ? (
                    <a 
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block hover:text-primary transition-colors"
                    >
                      {info.lines.map((line, lineIndex) => (
                        <p key={lineIndex} className="text-muted-foreground text-xs sm:text-sm">{line}</p>
                      ))}
                    </a>
                  ) : (
                    info.lines.map((line, lineIndex) => (
                      <p key={lineIndex} className="text-muted-foreground text-xs sm:text-sm">{line}</p>
                    ))
                  )}
                </div>
              ))}
            </div>

            {/* Social */}
            <div className="bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-card border border-border/50">
              <h3 className="font-heading text-sm sm:text-base md:text-lg text-foreground mb-3 sm:mb-4">Redes sociais</h3>
              <a 
                href="https://instagram.com/bravo.ltda"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 sm:gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-8 sm:w-9 md:w-10 h-8 sm:h-9 md:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Instagram className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                </div>
                <span className="text-xs sm:text-sm">@bravo.ltda</span>
              </a>
            </div>

            {/* CTA */}
            <div className="mt-6 sm:mt-8">
              <Button 
                asChild
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-accent"
              >
                <a href="https://wa.me/5551999294788" target="_blank" rel="noopener noreferrer">
                  Falar pelo WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Map */}
          <div className="h-[300px] sm:h-[350px] lg:h-full min-h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-card border border-border/50">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.4276!2d-51.0885!3d-29.5833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943d8c0a82f8d%3A0x8a5c3c8c8c8c8c8c!2sR.%20Fran%C3%A7a%2C%20169%20-%20Dois%20Irm%C3%A3os%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Bravo Segurança - R. França, 169, Dois Irmãos, RS"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
