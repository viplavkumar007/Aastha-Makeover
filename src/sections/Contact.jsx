import { MapPin, Phone, MessageCircle, Clock, Home } from 'lucide-react';
import { contact, hours, brand } from '../data/siteContent';
import { waLink, telLink, mapsLink, messages } from '../lib/whatsapp';
import SectionHeading from '../components/ui/SectionHeading';
import ContactForm from '../components/ContactForm';
import Button from '../components/ui/Button';
import { Reveal } from '../components/ui/Reveal';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Book Now"
          title="Let’s make you look stunning"
          highlight="stunning"
          subtitle="Send an enquiry below or reach us directly. Home service available across Lucknow for weddings, parties and special occasions."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left: info */}
          <Reveal>
            <div className="space-y-4">
              {/* WhatsApp / Call big buttons */}
              <div className="grid gap-3 sm:grid-cols-2">
                <Button as="a" href={waLink(messages.book)} target="_blank" rel="noopener noreferrer" size="lg">
                  <MessageCircle size={18} /> WhatsApp Us
                </Button>
                <Button
                  as="a"
                  href={telLink()}
                  variant="secondary"
                  size="lg"
                >
                  <Phone size={18} /> Call Now
                </Button>
              </div>

              {/* Info cards */}
              <div className="rounded-3xl border border-rosegold/20 bg-white/60 p-6 shadow-soft backdrop-blur-xl">
                <InfoRow icon={<MapPin size={18} />} title="Visit the studio">
                  <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="hover:text-rosegold">
                    {contact.addressLines.join(', ')}
                  </a>
                </InfoRow>
                <Hr />
                <InfoRow icon={<Phone size={18} />} title="Call or WhatsApp">
                  <a href={telLink(contact.phonePrimary)} className="hover:text-rosegold">
                    {contact.phonePrimary}
                  </a>
                  {'  ·  '}
                  <a href={telLink(contact.phoneSecondary)} className="hover:text-rosegold">
                    {contact.phoneSecondary}
                  </a>
                </InfoRow>
                <Hr />
                <InfoRow icon={<Clock size={18} />} title="Opening hours">
                  {hours.map((h) => (
                    <span key={h.day} className="block">
                      {h.day}: {h.time}
                    </span>
                  ))}
                </InfoRow>
                {contact.homeServiceAvailable && (
                  <>
                    <Hr />
                    <InfoRow icon={<Home size={18} />} title="Home service">
                      Available across Lucknow — bridal, party & festival bookings.
                    </InfoRow>
                  </>
                )}
                <p className="mt-5 text-xs text-charcoal/50">
                  Studio led by {brand.professionals.join(' & ')}.
                </p>
              </div>

              {/* Map */}
              <div className="overflow-hidden rounded-3xl border border-rosegold/20 shadow-soft">
                <iframe
                  title="Aastha Makeover location map"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    contact.mapsQuery
                  )}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-60 w-full border-0"
                />
              </div>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-rosegold/20 bg-white/70 p-6 shadow-lift backdrop-blur-xl sm:p-8">
              <h3 className="font-display text-xl font-semibold text-warm-brown">Send an enquiry</h3>
              <p className="mt-1 text-sm text-charcoal/60">
                Fill in your details and we’ll continue on WhatsApp.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, title, children }) {
  return (
    <div className="flex gap-4 py-1">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-champagne/20 text-bronze">
        {icon}
      </span>
      <div>
        <p className="text-sm font-semibold text-warm-brown">{title}</p>
        <div className="mt-0.5 text-sm text-charcoal/65">{children}</div>
      </div>
    </div>
  );
}

function Hr() {
  return <div className="my-3 h-px bg-rosegold/15" />;
}
