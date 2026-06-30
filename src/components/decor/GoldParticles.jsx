import { motion } from 'framer-motion';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

const dots = [
  { left: '8%', top: '22%', size: 6, delay: 0 },
  { left: '18%', top: '70%', size: 4, delay: 1.2 },
  { left: '32%', top: '38%', size: 5, delay: 0.6 },
  { left: '52%', top: '18%', size: 4, delay: 1.8 },
  { left: '68%', top: '62%', size: 7, delay: 0.3 },
  { left: '82%', top: '30%', size: 5, delay: 1.0 },
  { left: '90%', top: '74%', size: 4, delay: 2.0 },
  { left: '44%', top: '82%', size: 5, delay: 1.5 },
];

export default function GoldParticles() {
  const reduced = usePrefersReducedMotion();
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: d.left,
            top: d.top,
            width: d.size,
            height: d.size,
            background:
              'radial-gradient(circle at 30% 30%, #F0DAA6, #E7C57A 60%, rgba(231,197,122,0))',
            boxShadow: '0 0 10px rgba(231,197,122,0.7)',
          }}
          animate={reduced ? {} : { y: [0, -16, 0], opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 6 + i, repeat: Infinity, delay: d.delay, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}
