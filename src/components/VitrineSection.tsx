import { ShoppingBag, ArrowRight, Tag, Truck, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import vitrineShowcase from '@/assets/vitrine-showcase.jpg';

const benefits = [
  { icon: Tag, text: 'Preços competitivos' },
  { icon: Truck, text: 'Entrega para todo RS' },
  { icon: CreditCard, text: 'Facilidade no pagamento' },
];

export function VitrineSection() {
  return (
    <section className="py-12 sm:py-16 md:py-24 px-4 md:px-6 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-4 sm:mb-6">
              <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5 text-accent" />
              <span className="text-accent font-semibold text-xs sm:text-sm">Nossa Vitrine</span>
            </div>

            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
              Confira nossos produtos e equipamentos
            </h2>

            <p className="text-muted-foreground text-sm sm:text-base md:text-lg mb-6 sm:mb-8 leading-relaxed">
              Acesse nossa vitrine virtual e conheça nossa linha completa de equipamentos de segurança, 
              câmeras, alarmes e muito mais. Produtos de qualidade com as melhores condições do mercado.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-6 mb-6 sm:mb-8 justify-center lg:justify-start">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-foreground">
                  <div className="w-8 sm:w-10 h-8 sm:h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <benefit.icon className="w-4 sm:w-5 h-4 sm:h-5 text-primary" />
                  </div>
                  <span className="font-medium text-xs sm:text-sm md:text-base">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button 
              asChild
              size="lg"
              className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-accent group"
            >
              <Link to="/vitrine" className="flex items-center justify-center gap-2">
                <ShoppingBag className="w-4 sm:w-5 h-4 sm:h-5" />
                Acessar Vitrine
                <ArrowRight className="w-4 sm:w-5 h-4 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative order-first lg:order-last">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl sm:rounded-3xl blur-2xl hidden sm:block" />
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl sm:shadow-2xl">
              <img 
                src={vitrineShowcase} 
                alt="Vitrine de produtos Bravo Segurança" 
                className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-heading font-bold text-foreground text-sm sm:text-base">Vitrine Online</p>
                      <p className="text-muted-foreground text-xs sm:text-sm">Equipamentos de segurança</p>
                    </div>
                    <div className="w-10 sm:w-12 h-10 sm:h-12 bg-accent rounded-full flex items-center justify-center">
                      <ShoppingBag className="w-5 sm:w-6 h-5 sm:h-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
