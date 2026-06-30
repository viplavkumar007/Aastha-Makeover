import { offers } from '../data/siteContent';
import SectionHeading from '../components/ui/SectionHeading';
import { Reveal, Stagger, StaggerItem } from '../components/ui/Reveal';
import { waLink, messages } from '../lib/whatsapp';
import { ArrowRight } from 'lucide-react';

function pct(was, now) {
  if (!was) return null;
  return Math.round(((was - now) / was) * 100);
}

export default function Offers() {
  return (
    <section id="offers" className="relative bg-ivory-blush py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Limited-Time"
          title="Special studio offers"
          highlight="offers"
          subtitle="Treat yourself to our most-loved rituals and grooming essentials at special prices. Tap any offer to claim it on WhatsApp."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Head massage offers */}
          <Reveal className="rounded-[2rem] border border-rosegold/25 bg-white/60 p-6 shadow-soft backdrop-blur-xl sm:p-8">
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-2xl font-semibold text-warm-brown">{offers.headMassage.title}</h3>
            </div>
            <p className="mt-1 text-xs uppercase tracking-wider text-bronze">{offers.headMassage.note}</p>
            <ul className="mt-6 space-y-3">
              {offers.headMassage.items.map((it) => {
                const off = pct(it.was, it.now);
                return (
                  <li
                    key={it.name}
                    className="flex items-center justify-between gap-4 rounded-2xl border border-rosegold/15 bg-white/70 px-4 py-3"
                  >
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium text-warm-brown">{it.name}</p>
                      {off && (
                        <span className="mt-0.5 inline-block rounded-full bg-champagne/25 px-2 py-0.5 text-[10px] font-semibold text-bronze">
                          {off}% OFF
                        </span>
                      )}
                    </div>
                    <div className="shrink-0 text-right">
                      {it.was && <span className="mr-2 text-xs text-charcoal/40 line-through">₹{it.was}</span>}
                      <span className="font-display text-lg font-bold text-gradient">₹{it.now}</span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* Beauty offers — brochure cards */}
          <div>
            <Reveal>
              <h3 className="font-display text-2xl font-semibold text-warm-brown">{offers.beauty.title}</h3>
              <p className="mt-1 text-xs uppercase tracking-wider text-bronze">{offers.beauty.note}</p>
            </Reveal>
            <Stagger className="mt-6 grid grid-cols-2 gap-5" amount={0.1} gap={0.06}>
              {offers.beauty.items.map((it) => (
                <StaggerItem key={it.name}>
                  <a
                    href={waLink(messages.offer(it.name, it.now))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block overflow-hidden rounded-3xl bg-rose-gloss p-6 text-white shadow-soft transition hover:-translate-y-1 hover:shadow-glow"
                  >
                    {/* ribbon */}
                    <span className="absolute right-3 top-3 rounded-full bg-white/25 px-2.5 py-1 text-[10px] font-semibold backdrop-blur">
                      OFFER
                    </span>
                    <span className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/35 to-transparent" />
                    <p className="relative text-sm font-medium text-white/90">{it.name}</p>
                    <p className="relative mt-3 font-display text-3xl font-bold">₹{it.now}</p>
                    <span className="relative mt-3 inline-flex items-center gap-1 text-xs font-semibold text-white/90 transition group-hover:gap-2">
                      Claim now <ArrowRight size={14} />
                    </span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </div>
    </section>
  );
}
