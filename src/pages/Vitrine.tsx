import { useEffect } from 'react';
import { Header } from '@/components/Header';

const Vitrine = () => {
  useEffect(() => {
    // Lock page scroll
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Hide MonteSite badge only on this page
    const montesiteBadge = document.getElementById('montesite-footer-badge');
    const previousDisplay = montesiteBadge?.style.display;
    if (montesiteBadge) {
      montesiteBadge.style.display = 'none';
    }
    
    return () => {
      // Restore scroll on unmount
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      // Restore MonteSite badge visibility
      if (montesiteBadge) {
        montesiteBadge.style.display = previousDisplay ?? '';
      }
    };
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex flex-col">
      {/* Header fixo - 80px */}
      <div className="h-20 flex-shrink-0">
        <Header />
      </div>
      
      {/* Iframe - altura calculada: 100vh - 80px (header) */}
      <div className="flex-1" style={{ height: 'calc(100vh - 80px)' }}>
        <iframe 
          src="https://beckeredelimavaz.egestor.com.br/vitrine/"
          className="w-full h-full border-none"
          title="Demonstração de Vitrine"
        />
      </div>
    </div>
  );
};

export default Vitrine;
