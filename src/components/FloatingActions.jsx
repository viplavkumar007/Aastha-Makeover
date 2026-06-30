import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Phone, ArrowUp, MessageCircle } from 'lucide-react';
import { waLink, telLink, messages } from '../lib/whatsapp';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3">
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-rosegold/30 bg-white/80 text-rosegold shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <a
        href={telLink()}
        aria-label="Call us"
        className="grid h-12 w-12 place-items-center rounded-full bg-white text-rosegold shadow-lift ring-1 ring-rosegold/25 transition hover:-translate-y-0.5"
      >
        <Phone size={20} />
      </a>

      <a
        href={waLink(messages.general)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full text-white shadow-lift transition hover:-translate-y-0.5"
        style={{ background: 'linear-gradient(135deg,#25D366,#128C7E)' }}
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40 motion-reduce:hidden" />
        <MessageCircle size={24} className="relative" />
      </a>
    </div>
  );
}
