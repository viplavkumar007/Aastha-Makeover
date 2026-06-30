import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Icon from './ui/Icon';
import { waLink, messages } from '../lib/whatsapp';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export default function ServiceCard({ service }) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMove = (e) => {
    if (reduced || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: py * -6, ry: px * 6 }); // subtle
  };
  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      whileHover={reduced ? {} : { y: -8 }}
      style={{
        transform: `perspective(900px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
        transformStyle: 'preserve-3d',
      }}
      className="group relative flex h-full flex-col rounded-3xl border border-rosegold/25 bg-white/55 p-6
                 shadow-soft backdrop-blur-xl transition-shadow duration-300 hover:shadow-glow"
    >
      {/* vibrant top sheen */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-24 rounded-t-3xl bg-gradient-to-b from-white/70 to-transparent opacity-70"
      />

      {/* Icon badge */}
      <div className="relative mb-5 grid h-14 w-14 place-items-center rounded-full bg-rose-gloss text-white shadow-soft">
        <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/40" />
        <Icon name={service.icon} size={24} strokeWidth={1.8} />
      </div>

      <h3 className="font-display text-xl font-semibold text-warm-brown">{service.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-charcoal/65">{service.desc}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {service.items.map((it) => (
          <li
            key={it}
            className="rounded-full border border-rosegold/20 bg-blush/60 px-3 py-1 text-xs font-medium text-warm-brown"
          >
            {it}
          </li>
        ))}
      </ul>

      <a
        href={waLink(messages.service(service.title))}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-semibold text-rosegold transition group-hover:gap-2.5"
      >
        Enquire on WhatsApp
        <ArrowRight size={16} />
      </a>
    </motion.article>
  );
}
