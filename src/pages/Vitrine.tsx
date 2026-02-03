import { useEffect, useState } from 'react';
import { Header } from '@/components/Header';

const Vitrine = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(88);

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

  useEffect(() => {
    const headerEl = document.querySelector('header') as HTMLElement | null;
    if (!headerEl) return;

    const update = () => {
      const next = Math.round(headerEl.getBoundingClientRect().height);
      if (Number.isFinite(next) && next > 0) setHeaderHeight(next);
    };

    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(headerEl);
    window.addEventListener('resize', update);

    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden">
      {/* Header */}
      <Header />

      {/* Iframe - fixa e ocupa todo o espaço restante abaixo do header (altura real medida) */}
      <iframe
        src="https://beckeredelimavaz.egestor.com.br/vitrine/"
        className="fixed left-0 right-0 bottom-0 w-full border-none"
        style={{ top: headerHeight }}
        title="Demonstração de Vitrine"
      />
    </div>
  );
};

export default Vitrine;
