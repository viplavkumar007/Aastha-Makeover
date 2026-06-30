import { services, whyChooseUs } from '../data/siteContent';
import SectionHeading from '../components/ui/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Icon from '../components/ui/Icon';
import { Stagger, StaggerItem, Reveal } from '../components/ui/Reveal';

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What We Offer"
          title="Premium services, beautifully done"
          highlight="beautifully"
          subtitle="From bridal transformations to relaxing spa rituals and professional training — every service is delivered with premium products and expert care."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" amount={0.1} gap={0.07}>
          {services.map((s) => (
            <StaggerItem key={s.title} className="h-full">
              <ServiceCard service={s} />
            </StaggerItem>
          ))}
        </Stagger>

        {/* Why choose us */}
        <Reveal className="mt-20">
          <h3 className="text-center font-display text-2xl font-semibold text-warm-brown sm:text-3xl">
            Why women across Lucknow choose <span className="text-gradient">Aastha</span>
          </h3>
        </Reveal>
        <Stagger className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4" amount={0.1} gap={0.05}>
          {whyChooseUs.map((w) => (
            <StaggerItem
              key={w.title}
              className="flex flex-col items-center gap-3 rounded-2xl border border-rosegold/20 bg-white/55 px-4 py-6 text-center shadow-soft backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="grid h-12 w-12 place-items-center rounded-full bg-champagne/20 text-bronze">
                <Icon name={w.icon} size={22} strokeWidth={1.8} />
              </span>
              <span className="text-sm font-medium text-warm-brown">{w.title}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
