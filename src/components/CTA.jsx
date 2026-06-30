import { ctaStrip } from '../data/siteContent';
import { waLink, messages } from '../lib/whatsapp';
import Button from './ui/Button';
import { Reveal } from './ui/Reveal';

export default function CTA() {
  return (
    <section className="container-x py-16 sm:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2rem] bg-rose-gradient px-6 py-14 text-center shadow-lift sm:px-12">
          {/* pulsing glow layers */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-champagne/40 blur-3xl animate-pulseglow motion-reduce:animate-none"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-white/30 blur-3xl animate-pulseglow motion-reduce:animate-none"
            style={{ animationDelay: '1.5s' }}
          />
          {/* gloss top */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/30 to-transparent"
          />

          <div className="relative">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{ctaStrip.title}</h2>
            <p className="mx-auto mt-4 max-w-xl text-white/90">{ctaStrip.subtitle}</p>
            <div className="mt-8 flex justify-center">
              <Button
                as="a"
                href={waLink(messages.book)}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
                size="lg"
                className="!bg-white !text-rosegold hover:!bg-white/90 hover:!text-bronze"
              >
                {ctaStrip.button.label}
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
