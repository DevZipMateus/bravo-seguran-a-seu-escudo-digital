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
    <div className="min-h-screen w-full overflow-hidden flex flex-col">
      {/* Header */}
      <Header />
      
      {/* Spacer para compensar o header fixo */}
      <div className="flex-shrink-0 h-[72px] sm:h-[80px] md:h-[88px]" />
      
      {/* Iframe - ocupa o restante da tela */}
      <div className="flex-1 w-full h-[calc(100vh-72px)] sm:h-[calc(100vh-80px)] md:h-[calc(100vh-88px)]">
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
