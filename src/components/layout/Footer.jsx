import { MapPin, Phone, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import { brand, contact, hours, nav, services, footer } from '../../data/siteContent';
import { waLink, telLink, mapsLink, messages } from '../../lib/whatsapp';

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t border-rosegold/30 bg-ivory-blush">
      <span aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-rosegold to-transparent" />
      <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <img src={brand.logo} alt="" className="h-12 w-12 rounded-full object-cover ring-2 ring-champagne/60" />
            <div className="leading-tight">
              <p className="font-display text-lg font-bold text-warm-brown">{brand.name}</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-bronze">& Training Center</p>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-charcoal/65">{footer.blurb}</p>
          <p className="mt-4 text-xs text-charcoal/55">
            {brand.professionals.join(' • ')} · Est. {brand.established}
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-display text-base font-semibold text-warm-brown">Quick Links</h4>
          <ul className="mt-4 space-y-2.5">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="link-underline text-sm text-charcoal/65 hover:text-rosegold">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-base font-semibold text-warm-brown">Services</h4>
          <ul className="mt-4 space-y-2.5">
            {services.slice(0, 7).map((s) => (
              <li key={s.title}>
                <a
                  href={waLink(messages.service(s.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-charcoal/65 hover:text-rosegold"
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact + hours */}
        <div>
          <h4 className="font-display text-base font-semibold text-warm-brown">Get in Touch</h4>
          <ul className="mt-4 space-y-3 text-sm text-charcoal/65">
            <li className="flex gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-rosegold" />
              <a href={mapsLink()} target="_blank" rel="noopener noreferrer" className="hover:text-rosegold">
                {contact.addressLines.join(', ')}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone size={16} className="mt-0.5 shrink-0 text-rosegold" />
              <span>
                <a href={telLink(contact.phonePrimary)} className="hover:text-rosegold">
                  {contact.phonePrimary}
                </a>{' '}
                ·{' '}
                <a href={telLink(contact.phoneSecondary)} className="hover:text-rosegold">
                  {contact.phoneSecondary}
                </a>
              </span>
            </li>
            <li className="flex gap-2.5">
              <Clock size={16} className="mt-0.5 shrink-0 text-rosegold" />
              <span>
                {hours.map((h) => (
                  <span key={h.day} className="block">
                    {h.day}: {h.time}
                  </span>
                ))}
              </span>
            </li>
          </ul>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={waLink(messages.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full bg-white text-rosegold shadow-soft ring-1 ring-rosegold/25 transition hover:bg-rose-gradient hover:text-white"
            >
              <MessageCircle size={18} />
            </a>
            {contact.socials.instagram && (
              <a
                href={contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-rosegold shadow-soft ring-1 ring-rosegold/25 transition hover:bg-rose-gradient hover:text-white"
              >
                <Instagram size={18} />
              </a>
            )}
            {contact.socials.facebook && (
              <a
                href={contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="grid h-10 w-10 place-items-center rounded-full bg-white text-rosegold shadow-soft ring-1 ring-rosegold/25 transition hover:bg-rose-gradient hover:text-white"
              >
                <Facebook size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-rosegold/15">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-5 text-center text-xs text-charcoal/55 sm:flex-row sm:text-left">
          <p>{footer.copyright}</p>
          {contact.homeServiceAvailable && (
            <p className="font-medium text-bronze">✦ Home Service Available across Lucknow</p>
          )}
        </div>
      </div>
    </footer>
  );
}
