import securityMonitoring from '@/assets/security-monitoring.jpg';
import facilitiesCleaning from '@/assets/facilities-cleaning.jpg';
import securityPatrol from '@/assets/security-patrol.jpg';
import vehicleTracking from '@/assets/vehicle-tracking.jpg';
import alarmSystem from '@/assets/alarm-system.jpg';
import electricFence from '@/assets/electric-fence.jpg';

const dividerImages = [
  { src: securityMonitoring, alt: 'Central de monitoramento' },
  { src: alarmSystem, alt: 'Sistema de alarme' },
  { src: facilitiesCleaning, alt: 'Limpeza predial' },
  { src: electricFence, alt: 'Cerca elétrica' },
  { src: securityPatrol, alt: 'Vigilância patrimonial' },
  { src: vehicleTracking, alt: 'Rastreamento veicular' },
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
