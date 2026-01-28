import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import logoBravo from '@/assets/logo-bravo.png';

const quickLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#planos', label: 'Planos' },
  { href: '#contato', label: 'Contato' },
];

const services = [
  'Alarmes monitorados',
  'Câmeras de segurança',
  'Cerca elétrica',
  'Portaria',
  'Limpeza predial',
  'Rastreamento veicular',
];

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
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
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom py-10 sm:py-12 md:py-16 lg:py-20 px-4 md:px-6 pb-6 sm:pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-10 md:mb-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }} className="inline-block mb-4 sm:mb-6">
              <img 
                src={logoBravo} 
                alt="Bravo" 
                className="h-14 sm:h-16 md:h-20 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-primary-foreground/80 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Ser Bravo é ir além: é garantir segurança com excelência.
            </p>
            <p className="text-primary-foreground/60 text-[10px] sm:text-xs">
              CNPJ: 11.466.698/0001-51
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-sm sm:text-base md:text-lg mb-4 sm:mb-6">Links rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-sm sm:text-base md:text-lg mb-4 sm:mb-6">Serviços</h3>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-xs sm:text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm sm:text-base md:text-lg mb-4 sm:mb-6">Contato</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="tel:51999294788" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">
                  <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" />
                  <span>(51) 99929-4788</span>
                </a>
              </li>
              <li>
                <a href="mailto:comercial@segurancabravo.com.br" className="flex items-center gap-2 sm:gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm">
                  <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" />
                  <span className="break-all">comercial@segurancabravo.com.br</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/qnUJrApWUPckEZFN6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 sm:gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm"
                >
                  <MapPin className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0 mt-0.5" />
                  <span>R. França, 169<br />Dois Irmãos - RS</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/bravo.ltda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm"
                >
                  <Instagram className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" />
                  <span>@bravo.ltda</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://facebook.com/bravoservices" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 sm:gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-xs sm:text-sm"
                >
                  <Facebook className="w-3.5 sm:w-4 h-3.5 sm:h-4 flex-shrink-0" />
                  <span>Bravo Services</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-[10px] sm:text-xs md:text-sm">
            © {new Date().getFullYear()} Bravo. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
