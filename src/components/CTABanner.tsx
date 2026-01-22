import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import receptionService from '@/assets/reception-service.jpg';

export function CTABanner() {
  return (
    <section 
      className="relative py-12 sm:py-16 md:py-20 bg-cover bg-center bg-fixed px-4 md:px-6"
      style={{ backgroundImage: `url(${receptionService})` }}
    >
      <div className="absolute inset-0 bg-primary/85" />
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
            <Shield className="w-6 sm:w-7 md:w-8 h-6 sm:h-7 md:h-8 text-white" />
          </div>
          
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-white mb-4 sm:mb-6">
            Proteja o que é mais importante para você
          </h2>
          
          <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed">
            Solicite um orçamento sem compromisso e descubra como a Bravo pode garantir sua tranquilidade
          </p>
          
          <Button 
            asChild
            size="lg"
            className="w-full sm:w-auto bg-white hover:bg-white/90 text-primary font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-lg"
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
