import { about, brand, hours } from '../data/siteContent';
import SectionHeading from '../components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal';
import { FloralBlob } from '../components/decor/Ornaments';

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28">
      <FloralBlob className="pointer-events-none absolute -left-16 top-10 h-64 w-64 opacity-40" />
      <div className="container-x grid items-center gap-14 lg:grid-cols-2">
        {/* Visual */}
        <Reveal className="relative order-last lg:order-first">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 -z-10 rounded-[2.2rem] bg-rose-gradient opacity-15 blur-2xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/50 p-3 shadow-lift backdrop-blur-xl">
              <img
                src={brand.logo}
                alt={`${brand.fullName} studio mark`}
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-rosegold/25 bg-white/80 px-6 py-3 text-center shadow-soft backdrop-blur">
              <p className="font-display text-2xl font-bold text-gradient">Since {brand.established}</p>
              <p className="text-[11px] uppercase tracking-wider text-charcoal/55">Lucknow’s beauty studio</p>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} center={false} />
          <div className="mt-6 space-y-4">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-[15px] leading-relaxed text-charcoal/70">{p}</p>
              </Reveal>
            ))}
          </div>

          <Stagger className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {about.pillars.map((pl) => (
              <StaggerItem
                key={pl.title}
                className="rounded-2xl border border-rosegold/20 bg-white/55 p-5 shadow-soft backdrop-blur-xl"
              >
                <h3 className="font-display text-base font-semibold text-warm-brown">{pl.title}</h3>
                <p className="mt-1 text-sm text-charcoal/65">{pl.desc}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
