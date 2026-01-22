import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
    <section id="planos" className="section-padding bg-secondary">
      <div className="container-custom">
        {/* Section header with background image */}
        <div className="relative rounded-2xl overflow-hidden mb-16 py-12 px-6">
          <img 
            src="/midia_3.jpg" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/85" />
          <div className="relative z-10 text-center">
            <span className="inline-block bg-white/20 text-white font-semibold px-4 py-2 rounded-full text-sm mb-4">
              Planos
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white mb-6">
              Escolha o plano ideal para você
            </h2>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              Oferecemos diversas opções de planos para atender às suas necessidades de segurança
            </p>
          </div>
        </div>

        {/* Plans grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-card rounded-2xl p-6 card-hover ${
                plan.featured 
                  ? 'border-2 border-accent shadow-accent' 
                  : 'border border-border/50 shadow-card'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    <Star className="w-3 h-3" />
                    Mais popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-heading text-xl text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                      plan.featured ? 'bg-accent/20' : 'bg-primary/10'
                    }`}>
                      <Check className={`w-3 h-3 ${plan.featured ? 'text-accent' : 'text-primary'}`} />
                    </div>
                    <span className="text-muted-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                asChild
                className={`w-full ${
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
        <p className="text-center text-muted-foreground text-sm mt-10">
          Entre em contato para receber um orçamento personalizado de acordo com suas necessidades.
        </p>
      </div>
    </section>
  );
}
