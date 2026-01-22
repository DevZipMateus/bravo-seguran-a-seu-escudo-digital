import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoBravo from '@/assets/logo-bravo.png';

const navLinks = [
  { href: '#inicio', label: 'Início' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#planos', label: 'Planos' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-primary' 
          : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'bg-primary py-2'}`}>
        <div className="container-custom flex justify-center md:justify-end gap-4 md:gap-6 text-sm text-primary-foreground">
          <a href="tel:51999294788" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">(51) 99929-4788</span>
          </a>
          <a href="mailto:amauribravo2@gmail.com" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">amauribravo2@gmail.com</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-custom py-3 md:py-4">
        <div className="flex items-center justify-between">
          <a 
            href="#inicio" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
            className="flex items-center gap-3"
          >
            <img 
              src={logoBravo} 
              alt="Bravo Segurança - Logo" 
              className="h-12 md:h-16 w-auto"
            />
            <div className={`hidden lg:block transition-colors ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
              <span className="font-heading font-bold text-lg">Bravo</span>
              <span className="block text-xs opacity-80">Segurança</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button 
              asChild
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-accent"
            >
              <a href="https://wa.me/5551999294788" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-foreground hover:bg-muted' : 'text-primary-foreground hover:bg-primary-foreground/10'
            }`}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className={`py-2 px-4 rounded-lg font-medium transition-colors ${
                    isScrolled 
                      ? 'text-foreground hover:bg-muted' 
                      : 'text-primary-foreground hover:bg-primary-foreground/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <Button 
                asChild
                className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              >
                <a href="https://wa.me/5551999294788" target="_blank" rel="noopener noreferrer">
                  Fale conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
