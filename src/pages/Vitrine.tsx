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
      
      {/* Spacer para compensar o header fixo (top bar ~40px + nav ~104px = ~144px) */}
      <div className="flex-shrink-0" style={{ height: '144px' }} />
      
      {/* Iframe - ocupa o restante da tela */}
      <div className="flex-1 w-full" style={{ height: 'calc(100vh - 144px)' }}>
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
