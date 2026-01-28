import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const logoBravo = '/1769040154965_logo_bravo_jpg-removebg-preview.png';

const navLinks = [{
  href: '#inicio',
  label: 'Início'
}, {
  href: '#sobre',
  label: 'Sobre'
}, {
  href: '#servicos',
  label: 'Serviços'
}, {
  href: '#planos',
  label: 'Planos'
}, {
  href: '#contato',
  label: 'Contato'
}];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    // If not on home page, navigate to home first
    if (!isHomePage) {
      window.location.href = '/' + href;
      return;
    }
    
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
  return <header className="fixed top-0 left-0 right-0 z-50 bg-background shadow-md">
      {/* Top bar */}
      <div className={`transition-all duration-300 ${isScrolled ? 'h-0 overflow-hidden' : 'bg-primary py-1.5 sm:py-2'}`}>
        <div className="container-custom flex justify-center md:justify-end gap-3 sm:gap-4 md:gap-6 text-xs sm:text-sm text-primary-foreground px-4">
          <a href="tel:51999294788" className="flex items-center gap-1.5 sm:gap-2 hover:text-accent transition-colors">
            <Phone className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span className="hidden xs:inline sm:inline">(51) 99929-4788</span>
          </a>
          <a href="mailto:comercial@segurancabravo.com.br" className="flex items-center gap-1.5 sm:gap-2 hover:text-accent transition-colors">
            <Mail className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
            <span className="hidden sm:inline">comercial@segurancabravo.com.br</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container-custom py-2 sm:py-3 md:py-4 px-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" onClick={e => {
          e.preventDefault();
          handleNavClick('#inicio');
        }} className="flex items-center gap-2 sm:gap-3">
            <img src={logoBravo} alt="Bravo - Logo" className="h-14 sm:h-16 md:h-20 lg:h-16 w-auto" />
            <div className="hidden lg:block text-foreground">
              <span className="font-heading font-bold text-lg">Bravo</span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            {navLinks.map(link => <a key={link.href} href={link.href} onClick={e => {
            e.preventDefault();
            handleNavClick(link.href);
          }} className="font-medium text-sm lg:text-base text-foreground transition-colors hover:text-accent">
                {link.label}
              </a>)}
            <Link 
              to="/vitrine" 
              className="flex items-center gap-2 font-medium text-sm lg:text-base text-accent transition-colors hover:text-accent/80"
            >
              <ShoppingBag className="w-4 h-4" />
              Vitrine
            </Link>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold shadow-accent text-sm lg:text-base px-4 lg:px-6">
              <a href="https://wa.me/5551999294788" target="_blank" rel="noopener noreferrer">
                Fale conosco
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors" aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}>
            {isMobileMenuOpen ? <X className="w-5 sm:w-6 h-5 sm:h-6" /> : <Menu className="w-5 sm:w-6 h-5 sm:h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && <div className="md:hidden mt-3 sm:mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col gap-1 sm:gap-2 pt-3 sm:pt-4">
              {navLinks.map(link => <a key={link.href} href={link.href} onClick={e => {
            e.preventDefault();
            handleNavClick(link.href);
          }} className="py-2.5 sm:py-2 px-4 rounded-lg font-medium text-sm sm:text-base text-foreground hover:bg-muted transition-colors">
                  {link.label}
                </a>)}
              <Link 
                to="/vitrine" 
                className="py-2.5 sm:py-2 px-4 rounded-lg font-medium text-sm sm:text-base text-accent hover:bg-muted transition-colors flex items-center gap-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingBag className="w-4 h-4" />
                Vitrine
              </Link>
              <Button asChild className="mt-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm sm:text-base">
                <a href="https://wa.me/5551999294788" target="_blank" rel="noopener noreferrer">
                  Fale conosco
                </a>
              </Button>
            </div>
          </div>}
      </nav>
    </header>;
}