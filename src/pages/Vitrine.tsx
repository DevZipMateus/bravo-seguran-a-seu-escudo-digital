import { useEffect, useRef, useState } from 'react';
import { Header } from '@/components/Header';

const Vitrine = () => {
  const [headerHeight, setHeaderHeight] = useState<number>(88);
  const badgeRef = useRef<HTMLElement | null>(null);
  const badgePrevDisplayRef = useRef<string>('');

  useEffect(() => {
    // Lock page scroll
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.documentElement.style.margin = '0';
    document.documentElement.style.padding = '0';

    // Hide MonteSite badge - espera um pouco caso seja carregado dinamicamente
    const hideBadge = () => {
      const badge = document.getElementById('montesite-footer-badge');
      if (badge) {
        badgeRef.current = badge;
        badgePrevDisplayRef.current = badge.style.display || '';
        badge.style.setProperty('display', 'none', 'important');
        badge.style.setProperty('visibility', 'hidden', 'important');
        badge.style.setProperty('height', '0', 'important');
        badge.style.setProperty('overflow', 'hidden', 'important');
      }
    };

    hideBadge();
    // Retry após um tempo caso o script carregue o badge depois
    const timer = setTimeout(hideBadge, 500);
    const timer2 = setTimeout(hideBadge, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      // Restore scroll on unmount
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';

      // Restore MonteSite badge visibility
      if (badgeRef.current) {
        badgeRef.current.style.display = badgePrevDisplayRef.current;
        badgeRef.current.style.visibility = '';
        badgeRef.current.style.height = '';
        badgeRef.current.style.overflow = '';
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
    <>
      {/* Estilo global para esconder qualquer elemento externo na página vitrine */}
      <style>{`
        #montesite-footer-badge,
        #montesite-footer-badge * {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          max-height: 0 !important;
          overflow: hidden !important;
          position: absolute !important;
          pointer-events: none !important;
        }
      `}</style>
      <div className="fixed inset-0 w-full h-[100dvh] overflow-hidden bg-background">
        {/* Header */}
        <Header />

        {/* Iframe - fixa e ocupa todo o espaço restante abaixo do header */}
        <iframe
          src="https://beckeredelimavaz.egestor.com.br/vitrine/"
          className="absolute left-0 right-0 bottom-0 w-full border-none"
          style={{ top: headerHeight, height: `calc(100dvh - ${headerHeight}px)` }}
          title="Demonstração de Vitrine"
        />
      </div>
    </>
  );
};

export default Vitrine;
