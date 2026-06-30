import { ToastProvider } from './components/ui/Toast';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/Hero';
import About from './sections/About';
import Services from './sections/Services';
import Offers from './sections/Offers';
import Gallery from './sections/Gallery';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import CTA from './components/CTA';
import FloatingActions from './components/FloatingActions';

export default function App() {
  return (
    <ToastProvider>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Offers />
        <Gallery />
        <Testimonials />
        <CTA />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </ToastProvider>
  );
}
