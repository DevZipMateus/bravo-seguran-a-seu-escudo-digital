import { 
  Shield, 
  Camera, 
  Zap, 
  Radio, 
  Users, 
  Eye,
  MapPin,
  Sparkles,
  Wrench,
  Droplets,
  Wind,
  DoorOpen,
  Paintbrush,
  TreeDeciduous,
  Car,
  Flame
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import cctvCamera from '@/assets/cctv-camera.jpg';
import securityTeam from '@/assets/security-team.jpg';
import maintenanceHvac from '@/assets/maintenance-hvac.jpg';

const securityServices = [
  {
    icon: Shield,
    title: 'Alarmes monitorados 24h',
    description: 'Instalação e monitoramento ininterrupto de sistemas de alarme com resposta imediata.',
  },
  {
    icon: Camera,
    title: 'Câmeras de segurança (CFTV)',
    description: 'Sistemas de alta definição com acesso remoto e monitoramento via aplicativo.',
  },
  {
    icon: Zap,
    title: 'Cerca elétrica',
    description: 'Proteção perimetral eficiente para inibir invasões em sua propriedade.',
  },
  {
    icon: Radio,
    title: 'Sistema de interfonia',
    description: 'Comunicação interna e externa para controle de acesso em condomínios e empresas.',
  },
  {
    icon: Users,
    title: 'Portaria e recepção',
    description: 'Profissionais qualificados para controle de acesso e gestão humanizada.',
  },
  {
    icon: Eye,
    title: 'Vigilância patrimonial',
    description: 'Equipes preparadas para proteção de bens e prevenção de perdas.',
  },
  {
    icon: MapPin,
    title: 'Rastreamento veicular',
    description: 'Tecnologia de rastreamento 24h para logística e recuperação de veículos.',
  },
  {
    icon: Flame,
    title: 'Bombeiro civil',
    description: 'Profissionais capacitados para prevenção e combate a incêndios.',
  },
];

const facilityServices = [
  {
    icon: Sparkles,
    title: 'Limpeza predial',
    description: 'Limpeza e conservação para escritórios, condomínios e estabelecimentos comerciais.',
  },
  {
    icon: Wrench,
    title: 'Zeladoria',
    description: 'Manutenção geral e cuidados com o patrimônio do seu empreendimento.',
  },
  {
    icon: Paintbrush,
    title: 'Pintura e reformas',
    description: 'Serviços de acabamento, pintura e pequenas reformas.',
  },
  {
    icon: TreeDeciduous,
    title: 'Jardinagem',
    description: 'Cuidados com áreas verdes e paisagismo.',
  },
  {
    icon: Zap,
    title: 'Instalação elétrica',
    description: 'Instalação e manutenção de sistemas elétricos.',
  },
  {
    icon: Droplets,
    title: 'Instalação hidráulica',
    description: 'Serviços hidráulicos, sanitários e de gás.',
  },
  {
    icon: Wind,
    title: 'Ar condicionado',
    description: 'Instalação e manutenção de sistemas de climatização.',
  },
  {
    icon: DoorOpen,
    title: 'Acabamentos',
    description: 'Portas, janelas, divisórias e acabamentos em gesso.',
  },
  {
    icon: Car,
    title: 'Motoristas',
    description: 'Profissionais qualificados para transporte executivo.',
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-12 sm:py-16 md:py-24 px-4 md:px-6 bg-background">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            O que oferecemos
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            Nossos serviços
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Soluções integradas em segurança e facilities para garantir a proteção e o bom funcionamento do seu patrimônio
          </p>
        </div>

        {/* Security Services */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground text-center mb-6 sm:mb-8 md:mb-10">
            Segurança eletrônica e monitoramento
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {securityServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-card card-hover border border-border/50"
              >
                <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 md:mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg text-foreground mb-2 sm:mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed hidden sm:block">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image showcase between sections */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12">
          <div className="relative h-28 sm:h-40 md:h-64 rounded-lg sm:rounded-xl overflow-hidden">
            <img src={cctvCamera} alt="Câmera CFTV" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <span className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white font-heading text-xs sm:text-sm md:text-lg">Câmeras CFTV</span>
          </div>
          <div className="relative h-28 sm:h-40 md:h-64 rounded-lg sm:rounded-xl overflow-hidden">
            <img src={securityTeam} alt="Equipe de segurança" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <span className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white font-heading text-xs sm:text-sm md:text-lg">Equipe qualificada</span>
          </div>
          <div className="relative h-28 sm:h-40 md:h-64 rounded-lg sm:rounded-xl overflow-hidden">
            <img src={maintenanceHvac} alt="Manutenção predial" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <span className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white font-heading text-xs sm:text-sm md:text-lg">Facilities completo</span>
          </div>
        </div>

        {/* Facility Services */}
        <div className="mb-8 sm:mb-10 md:mb-12">
          <h3 className="font-heading text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground text-center mb-6 sm:mb-8 md:mb-10">
            Serviços de facilities
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {facilityServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-card rounded-xl sm:rounded-2xl p-4 sm:p-5 md:p-6 shadow-card card-hover border border-border/50"
              >
                <div className="w-9 sm:w-10 md:w-12 h-9 sm:h-10 md:h-12 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg text-foreground mb-1 sm:mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed hidden sm:block">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm sm:text-base md:text-lg px-6 sm:px-8 py-5 sm:py-6 shadow-primary"
          >
            <a href="https://wa.me/5551999294788" target="_blank" rel="noopener noreferrer">
              Solicitar orçamento
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
