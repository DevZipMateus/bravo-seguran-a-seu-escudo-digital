import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
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
      <div className="container-custom section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#inicio" onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }} className="inline-block mb-6">
              <img 
                src={logoBravo} 
                alt="Bravo Segurança" 
                className="h-20 w-auto brightness-0 invert"
              />
            </a>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              Ser Bravo é ir além: é garantir segurança com excelência.
            </p>
            <p className="text-primary-foreground/60 text-xs">
              CNPJ: 11.466.698/0001-51
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="font-heading text-lg mb-6">Links rápidos</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg mb-6">Serviços</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-lg mb-6">Contato</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:51999294788" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(51) 99929-4788</span>
                </a>
              </li>
              <li>
                <a href="mailto:amauribravo2@gmail.com" className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>amauribravo2@gmail.com</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://maps.app.goo.gl/qnUJrApWUPckEZFN6" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>R. França, 169<br />Dois Irmãos - RS</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://instagram.com/bravo.ltda" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  <Instagram className="w-4 h-4 flex-shrink-0" />
                  <span>@bravo.ltda</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Bravo Segurança. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
