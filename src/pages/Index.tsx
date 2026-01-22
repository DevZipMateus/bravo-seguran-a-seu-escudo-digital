import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { ImageDivider } from '@/components/ImageDivider';
import { Gallery } from '@/components/Gallery';
import { VitrineSection } from '@/components/VitrineSection';
import { Plans } from '@/components/Plans';
import { CTABanner } from '@/components/CTABanner';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <ImageDivider />
        <Services />
        <Gallery />
        <VitrineSection />
        <Plans />
        <CTABanner />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
