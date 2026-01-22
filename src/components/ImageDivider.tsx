import securityMonitoring from '@/assets/security-monitoring.jpg';
import facilitiesCleaning from '@/assets/facilities-cleaning.jpg';
import securityPatrol from '@/assets/security-patrol.jpg';
import perimeterSecurity from '@/assets/perimeter-security.jpg';
import receptionService from '@/assets/reception-service.jpg';
import gardeningService from '@/assets/gardening-service.jpg';

const dividerImages = [
  { src: securityMonitoring, alt: 'Central de monitoramento' },
  { src: securityPatrol, alt: 'Vigilância patrimonial' },
  { src: facilitiesCleaning, alt: 'Limpeza predial' },
  { src: perimeterSecurity, alt: 'Segurança perimetral' },
  { src: receptionService, alt: 'Portaria e recepção' },
  { src: gardeningService, alt: 'Jardinagem' },
];

export function ImageDivider() {
  return (
    <div className="grid grid-cols-3 md:grid-cols-6 h-32 md:h-48 overflow-hidden">
      {dividerImages.map((image, index) => (
        <div key={index} className="relative overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-primary/20" />
        </div>
      ))}
    </div>
  );
}
