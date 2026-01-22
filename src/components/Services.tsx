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
    <section id="servicos" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-accent/10 text-accent font-semibold px-4 py-2 rounded-full text-sm mb-4">
            O que oferecemos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Nossos serviços
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Soluções integradas em segurança e facilities para garantir a proteção e o bom funcionamento do seu patrimônio
          </p>
        </div>

        {/* Security Services */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-10">
            Segurança eletrônica e monitoramento
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {securityServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-card card-hover border border-border/50"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h4 className="font-heading text-lg text-foreground mb-3">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image showcase between sections */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <img src={cctvCamera} alt="Câmera CFTV" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-heading text-lg">Câmeras CFTV</span>
          </div>
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <img src={securityTeam} alt="Equipe de segurança" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-heading text-lg">Equipe qualificada</span>
          </div>
          <div className="relative h-48 md:h-64 rounded-xl overflow-hidden">
            <img src={maintenanceHvac} alt="Manutenção predial" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/70 to-transparent" />
            <span className="absolute bottom-4 left-4 text-white font-heading text-lg">Facilities completo</span>
          </div>
        </div>

        {/* Facility Services */}
        <div className="mb-12">
          <h3 className="font-heading text-2xl md:text-3xl text-foreground text-center mb-10">
            Serviços de facilities
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilityServices.map((service, index) => (
              <div 
                key={index}
                className="group bg-card rounded-2xl p-6 shadow-card card-hover border border-border/50"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-accent group-hover:text-accent-foreground transition-colors" />
                </div>
                <h4 className="font-heading text-lg text-foreground mb-2">{service.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 shadow-primary"
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
