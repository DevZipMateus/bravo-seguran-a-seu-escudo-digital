import { useState } from 'react';

const galleryImages = [
  { src: '/midia_3.jpg', alt: 'Serviço de segurança Bravo' },
  { src: '/midia_4.jpg', alt: 'Monitoramento 24 horas' },
  { src: '/midia_5.jpg', alt: 'Equipe de vigilância' },
  { src: '/midia_6.jpg', alt: 'Sistema de CFTV' },
  { src: '/midia_7.jpg', alt: 'Serviços de facilities' },
  { src: '/midia_8.jpg', alt: 'Segurança patrimonial' },
  { src: '/midia_9.jpg', alt: 'Atendimento profissional' },
];

export function Gallery() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-16 bg-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block bg-primary/10 text-primary font-semibold px-4 py-2 rounded-full text-sm mb-4">
            Nosso trabalho
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Galeria de atuação
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Conheça alguns dos nossos serviços em ação
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className={`w-full h-full object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
              />
              <div 
                className={`absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
