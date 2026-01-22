import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import securityPlans from '@/assets/security-plans.jpg';
const plans = [
  {
    name: 'Monitoramento consignado',
    description: 'Ideal para quem busca segurança com praticidade',
    featured: false,
    features: [
      'Equipamentos em comodato',
      'Monitoramento 24 horas',
      'Suporte técnico incluso',
      'Sem custo de instalação',
    ],
  },
  {
    name: 'Alarme monitorado',
    description: 'Proteção completa para sua residência ou empresa',
    featured: true,
    features: [
      'Central de alarme moderna',
      'Sensores de presença',
      'Monitoramento 24/7',
      'Resposta imediata',
      'App para acompanhamento',
    ],
  },
  {
    name: 'Alarme + CFTV',
    description: 'Solução integrada de alarme e câmeras',
    featured: false,
    features: [
      'Sistema de alarme completo',
      'Câmeras HD com gravação',
      'Acesso remoto pelo celular',
      'Monitoramento integrado',
    ],
  },
  {
    name: 'Segurança patrimonial',
    description: 'Controle total via aplicativo',
    featured: false,
    features: [
      'Gestão pelo aplicativo',
      'Relatórios em tempo real',
      'Controle de acessos',
      'Histórico completo',
    ],
  },
  {
    name: 'Rastreamento veicular',
    description: 'Acompanhe seus veículos em tempo real',
    featured: false,
    features: [
      'Rastreamento GPS 24h',
      'Histórico de trajetos',
      'Alertas personalizados',
      'Recuperação de veículos',
    ],
  },
];

export function Plans() {
  return (
    <section id="planos" className="py-12 sm:py-16 md:py-24 px-4 md:px-6 bg-secondary">
      <div className="container-custom">
        {/* Section header with background image */}
        <div className="relative rounded-xl sm:rounded-2xl overflow-hidden mb-10 sm:mb-12 md:mb-16 py-8 sm:py-10 md:py-12 px-4 sm:px-6">
          <img 
            src={securityPlans} 
            alt="Planos de segurança" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative z-10 text-center">
            <span className="inline-block bg-white/20 text-white font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
              Planos
            </span>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-4 sm:mb-6">
              Escolha o plano ideal para você
            </h2>
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
              Oferecemos diversas opções de planos para atender às suas necessidades de segurança
            </p>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 card-hover ${
                plan.featured 
                  ? 'border-2 border-accent shadow-accent' 
                  : 'border border-border/50 shadow-card'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground text-[10px] sm:text-xs font-semibold px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                    <Star className="w-2.5 sm:w-3 h-2.5 sm:h-3" />
                    Mais popular
                  </span>
                </div>
              )}

              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-heading text-base sm:text-lg md:text-xl text-foreground mb-1 sm:mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-xs sm:text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2 sm:gap-3">
                    <div className={`w-4 sm:w-5 h-4 sm:h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.featured ? 'bg-accent/20' : 'bg-primary/10'
                    }`}>
                      <Check className={`w-2.5 sm:w-3 h-2.5 sm:h-3 ${plan.featured ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    <span className="text-muted-foreground text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                className={`w-full text-xs sm:text-sm ${
                  plan.featured 
                    ? 'bg-accent hover:bg-accent/90 text-accent-foreground' 
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                }`}
              >
                <a href="https://wa.me/5551999294788" target="_blank" rel="noopener noreferrer">
                  Saiba mais
                </a>
              </Button>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-muted-foreground text-xs sm:text-sm mt-6 sm:mt-8 md:mt-10">
          Entre em contato para receber um orçamento personalizado de acordo com suas necessidades.
        </p>
      </div>
    </section>
  );
}
