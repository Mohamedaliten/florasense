import Hero from '@/components/landing/Hero';
import Navbar from '@/components/landing/Navbar';
import Features from '@/components/landing/Features';
import MobileApp from '@/components/landing/MobileApp';
import Testimonials from '@/components/landing/Testimonials';
import FAQ from '@/components/landing/FAQ';
import Footer from '@/components/landing/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <MobileApp />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}