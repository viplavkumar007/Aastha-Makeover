import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X, Phone, Instagram } from 'lucide-react';
import { brand, nav, contact } from '../../data/siteContent';
import { waLink, telLink, messages } from '../../lib/whatsapp';
import useScrolled from '../../hooks/useScrolled';
import useScrollSpy from '../../hooks/useScrollSpy';
import Button from '../ui/Button';

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(nav.map((n) => n.id), 140);

  const close = () => setOpen(false);
  const goToSection = (id) => {
    close();
    window.setTimeout(() => {
      const section = document.getElementById(id);
      if (!section) return;

      const navOffset = 84;
      const top = section.getBoundingClientRect().top + window.scrollY - navOffset;
      window.scrollTo({ top, behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }, 80);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-soft border-b border-rosegold/30'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between" aria-label="Primary">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3" aria-label={`${brand.fullName} — home`}>
          <img
            src={brand.logo}
            alt=""
            width="44"
            height="44"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-champagne/60 shadow-soft"
          />
          <span className="leading-tight">
            <span className="block font-display text-lg font-bold text-warm-brown">{brand.name}</span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-bronze">
              & Training Center
            </span>
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                data-active={active === item.id}
                className="link-underline text-sm font-medium text-charcoal/80 transition hover:text-rosegold data-[active=true]:text-rosegold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={telLink()}
            className="grid h-10 w-10 place-items-center rounded-full border border-rosegold/40 text-rosegold transition hover:bg-rose-gradient hover:text-white"
            aria-label={`Call ${contact.phonePrimary}`}
          >
            <Phone size={17} />
          </a>
          <Button as="a" href={waLink(messages.book)} target="_blank" rel="noopener noreferrer" size="md">
            Book Appointment
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="relative z-[60] grid h-11 w-11 shrink-0 place-items-center rounded-full border border-rosegold/40 bg-white/45 text-warm-brown backdrop-blur lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="overflow-hidden border-t border-rosegold/20 bg-white/90 backdrop-blur-xl lg:hidden"
          >
            <ul className="container-x flex flex-col py-4">
              {nav.map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => goToSection(item.id)}
                    data-active={active === item.id}
                    className="block w-full rounded-xl px-3 py-3 text-left text-base font-medium text-charcoal/80 transition hover:bg-blush data-[active=true]:text-rosegold"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mt-3 flex items-center gap-3 px-1">
                <Button
                  as="a"
                  href={waLink(messages.book)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                  onClick={close}
                >
                  Book Appointment
                </Button>
                <a
                  href={telLink()}
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-rosegold/40 text-rosegold"
                  aria-label={`Call ${contact.phonePrimary}`}
                >
                  <Phone size={18} />
                </a>
                {contact.socials.instagram && (
                  <a
                    href={contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-rosegold/40 text-rosegold"
                    aria-label="Instagram"
                  >
                    <Instagram size={18} />
                  </a>
                )}
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
