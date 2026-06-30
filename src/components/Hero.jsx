import { motion } from 'framer-motion';
import { MessageCircle, CheckCircle2 } from 'lucide-react';
import { hero, brand } from '../data/siteContent';
import { waLink, messages } from '../lib/whatsapp';
import Button from './ui/Button';
import GoldParticles from './decor/GoldParticles';
import { FloralBlob } from './decor/Ornaments';
import usePrefersReducedMotion from '../hooks/usePrefersReducedMotion';

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: reduced ? 0 : 0.16, delayChildren: 0.1 } },
  };
  const item = {
    hidden: { opacity: 0, y: reduced ? 0 : 26 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pt-40 lg:pb-28">
      {/* Background wash + decoration */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-ivory-blush" />
        <div className="absolute -right-24 -top-24 h-[34rem] w-[34rem] rounded-full bg-rose-gradient opacity-[0.10] blur-3xl" />
        <div className="absolute -left-32 top-40 h-[28rem] w-[28rem] rounded-full bg-champagne-gradient opacity-[0.12] blur-3xl" />
        <FloralBlob className="absolute right-6 top-10 h-72 w-72 opacity-60 animate-floaty motion-reduce:animate-none" />
      </div>
      <GoldParticles />

      <div className="container-x grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Copy */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-rosegold/30 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-bronze backdrop-blur"
          >
            {hero.eyebrow}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-5 font-display text-4xl font-bold leading-[1.07] text-warm-brown sm:text-5xl lg:text-6xl"
          >
            {hero.title.split(hero.highlight)[0]}
            <span className="text-gradient">{hero.highlight}</span>
            {hero.title.split(hero.highlight)[1]}
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/70 sm:text-lg">
            {hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
            <Button as="a" href={waLink(messages.book)} target="_blank" rel="noopener noreferrer" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button
              as="a"
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="lg"
            >
              <MessageCircle size={18} /> {hero.secondaryCta.label}
            </Button>
          </motion.div>

          <motion.ul variants={item} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {hero.badges.map((b) => (
              <li key={b} className="inline-flex items-center gap-2 text-sm font-medium text-warm-brown">
                <CheckCircle2 size={16} className="text-bronze" /> {b}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Logo medallion visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-rose-gradient opacity-20 blur-2xl" />
          <div className="relative rounded-[2rem] border border-white/60 bg-white/40 p-4 shadow-lift backdrop-blur-xl">
            <img
              src={brand.logo}
              alt={`${brand.fullName} logo`}
              className="aspect-square w-full rounded-[1.6rem] object-cover"
              loading="eager"
            />
            <span className="pointer-events-none absolute inset-4 rounded-[1.6rem] ring-1 ring-inset ring-champagne/50" />
          </div>

          {/* Floating stat chips */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {hero.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl border border-rosegold/20 bg-white/70 px-3 py-4 text-center shadow-soft backdrop-blur"
              >
                <div className="font-display text-2xl font-bold text-gradient">{s.value}</div>
                <div className="mt-1 text-[11px] leading-tight text-charcoal/60">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
