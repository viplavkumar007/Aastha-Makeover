import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../data/siteContent';
import SectionHeading from '../components/ui/SectionHeading';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export default function Testimonials() {
  const [i, setI] = useState(0);
  const reduced = usePrefersReducedMotion();
  const count = testimonials.length;

  const go = (n) => setI((prev) => (n + count) % count);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(() => setI((p) => (p + 1) % count), 6000);
    return () => clearInterval(t);
  }, [count, reduced]);

  const t = testimonials[i];

  return (
    <section id="testimonials" className="relative bg-ivory-blush py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Loved by Clients"
          title="Kind words from our chairs"
          highlight="Kind"
        />

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div className="relative overflow-hidden rounded-[2rem] border border-rosegold/25 bg-white/65 p-8 shadow-lift backdrop-blur-xl sm:p-12">
            <Quote className="absolute right-8 top-8 text-rosegold/20" size={64} />
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4 }}
              >
                <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={18} className="fill-champagne text-champagne" />
                  ))}
                </div>
                <blockquote className="mt-5 font-serifalt text-xl leading-relaxed text-warm-brown sm:text-2xl">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <span className="block font-display text-base font-semibold text-warm-brown">{t.name}</span>
                  <span className="text-sm text-charcoal/55">{t.role}</span>
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => go(i - 1)}
              aria-label="Previous review"
              className="grid h-10 w-10 place-items-center rounded-full border border-rosegold/30 bg-white text-rosegold transition hover:bg-rose-gradient hover:text-white"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, d) => (
                <button
                  key={d}
                  onClick={() => setI(d)}
                  aria-label={`Go to review ${d + 1}`}
                  aria-current={d === i}
                  className={`h-2.5 rounded-full transition-all ${
                    d === i ? 'w-7 bg-rose-gradient' : 'w-2.5 bg-rosegold/30'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(i + 1)}
              aria-label="Next review"
              className="grid h-10 w-10 place-items-center rounded-full border border-rosegold/30 bg-white text-rosegold transition hover:bg-rose-gradient hover:text-white"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
