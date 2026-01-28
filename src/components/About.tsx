import { Target, Eye, Heart, Award, Users, Clock } from 'lucide-react';
import gardeningService from '@/assets/gardening-service.jpg';

const values = [
  { icon: Award, title: 'Qualidade', description: 'Excelência em cada serviço prestado' },
  { icon: Target, title: 'Eficiência', description: 'Soluções rápidas e eficazes' },
  { icon: Heart, title: 'Comprometimento', description: 'Dedicação total aos nossos clientes' },
  { icon: Users, title: 'Profissionalismo', description: 'Equipe altamente qualificada' },
  { icon: Clock, title: 'Disponibilidade', description: 'Atendimento 24 horas por dia' },
  { icon: Eye, title: 'Vigilância', description: 'Monitoramento constante e preciso' },
];

export function About() {
  return (
    <section id="sobre" className="py-12 sm:py-16 md:py-24 px-4 md:px-6 bg-secondary">
      <div className="container-custom">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm mb-3 sm:mb-4">
            Quem somos
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground mb-4 sm:mb-6">
            Sobre a Bravo
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Desde 2010, oferecemos soluções completas em segurança e facilities com qualidade, eficiência e comprometimento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 sm:mb-16 md:mb-20">
          {/* History */}
          <div className="order-2 lg:order-1">
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground mb-4 sm:mb-6">
              Nossa história
            </h3>
            <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                Fundada em 2010, a Bravo nasceu do desejo de oferecer mais segurança, tranquilidade e qualidade de vida às pessoas. Desde o início, a empresa construiu sua trajetória com base em parcerias sólidas com empresas referência em tecnologia, já reconhecidas no mercado gaúcho, unindo inovação e confiança.
              </p>
              <p>
                Localizada em Dois Irmãos, RS, a Bravo expandiu sua atuação para todo o estado do Rio Grande do Sul, tornando-se presença constante em lojas, postos de combustíveis, condomínios e órgãos públicos.
              </p>
              <p>
                Cada projeto é tratado com responsabilidade, cuidado e comprometimento, pois acreditamos que segurança vai além da tecnologia — envolve pessoas.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-card">
              <img 
                src={gardeningService} 
                alt="Serviços de jardinagem e facilities" 
                className="w-full h-[280px] sm:h-[350px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Vision Card */}
        <div className="bg-card rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-card mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-primary/10 rounded-lg sm:rounded-xl flex items-center justify-center">
              <Eye className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-primary" />
            </div>
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl text-foreground">Nossa visão</h3>
          </div>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
            Na Bravo LTDA, nossa visão é ser o seu parceiro de confiança em segurança e serviços, oferecendo soluções completas e integradas que garantem a tranquilidade de sua família, patrimônio e negócios.
          </p>
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Atuamos com base em pilares inegociáveis: <span className="text-primary font-semibold">Qualidade</span>, <span className="text-primary font-semibold">Eficiência</span> e <span className="text-primary font-semibold">Comprometimento</span>, assegurando que cada serviço prestado exceda as expectativas de nossos clientes.
          </p>
        </div>

        {/* Values */}
        <div>
          <h3 className="font-heading text-xl sm:text-2xl md:text-3xl text-foreground text-center mb-6 sm:mb-8 md:mb-10">
            Nossos valores
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-card rounded-lg sm:rounded-xl p-4 sm:p-5 md:p-6 shadow-card card-hover text-center"
              >
                <div className="w-10 sm:w-12 md:w-14 h-10 sm:h-12 md:h-14 bg-accent/10 rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <value.icon className="w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-accent" />
                </div>
                <h4 className="font-heading text-sm sm:text-base md:text-lg text-foreground mb-1 sm:mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
