import { contact } from '../data/siteContent';

// Build a wa.me deep link with a pre-typed, context-specific message.
export function waLink(message) {
  const text = encodeURIComponent(message || 'Hello Aastha Makeover, I would like to enquire.');
  return `https://wa.me/${contact.whatsappNumber}?text=${text}`;
}

export function telLink(number = contact.phonePrimary) {
  return `tel:+91${String(number).replace(/\D/g, '')}`;
}

export function mapsLink() {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.mapsQuery)}`;
}

export function mailtoLink({ name, service, message }) {
  if (!contact.email) return null;
  const subject = encodeURIComponent(`Enquiry from ${name || 'website'} — ${service || 'General'}`);
  const body = encodeURIComponent(
    `Name: ${name || ''}\nService: ${service || ''}\n\n${message || ''}`
  );
  return `mailto:${contact.email}?subject=${subject}&body=${body}`;
}

// Pre-typed messages used across CTAs
export const messages = {
  book: 'Hello Aastha Makeover! I would like to book an appointment. Please share available slots.',
  general: 'Hello Aastha Makeover! I would like to know more about your services.',
  service: (name) =>
    `Hello Aastha Makeover! I am interested in your ${name} services. Please share details and pricing.`,
  offer: (name, price) =>
    `Hello Aastha Makeover! I would like to avail the offer: ${name}${price ? ` (₹${price})` : ''}. Is it available?`,
  enquiry: ({ name, service, message }) =>
    `New enquiry from the website%0A----------------------%0AName: ${name}%0AService: ${service}%0AMessage: ${message}`,
};
