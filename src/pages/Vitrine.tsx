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
    <div className="fixed inset-0 w-full h-full overflow-hidden flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Iframe - ocupa todo o espaço abaixo do header */}
      <iframe 
        src="https://beckeredelimavaz.egestor.com.br/vitrine/"
        className="flex-1 w-full border-none mt-[72px] sm:mt-[80px] md:mt-[88px]"
        title="Demonstração de Vitrine"
      />
    </div>
  );
};

export default Vitrine;
