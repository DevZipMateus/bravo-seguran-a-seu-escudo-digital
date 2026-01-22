import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import perimeterSecurity from '@/assets/perimeter-security.jpg';

export function CTABanner() {
  return (
    <section 
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${perimeterSecurity})` }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
            Proteja o que é mais importante para você
          </h2>
          
          <p className="text-white/90 text-lg md:text-xl mb-8 leading-relaxed">
            Solicite um orçamento sem compromisso e descubra como a Bravo pode garantir sua tranquilidade
          </p>
          
          <Button 
            asChild
            size="lg"
            className="bg-white hover:bg-white/90 text-primary font-semibold text-lg px-8 py-6 shadow-lg"
          >
            <a href="https://wa.me/5551999294788" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento gratuito
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
