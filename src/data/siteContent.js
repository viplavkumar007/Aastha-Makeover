// ============================================================================
//  AASTHA MAKEOVER & TRAINING CENTER — Single Source of Truth
//  Edit everything here. No copy lives inside components.
// ============================================================================

export const brand = {
  name: 'Aastha Makeover',
  fullName: 'Aastha Makeover & Training Center',
  tagline: 'Premium Beauty • Makeup • Spa • Training',
  established: '2024',
  logo: '/logo.jpg',
  professionals: ['Pro. Saloni Mishra', 'Laxmi'],
};

// ---------------------------------------------------------------------------
//  CONTACT & LEAD ROUTING
//  All enquiry forms, the "Book Appointment" button and service buttons route
//  to WhatsApp on `whatsappNumber`. `phonePrimary` is used for tap-to-call.
//  To also email leads, set `email` below — the contact form will then open a
//  mailto draft alongside WhatsApp. Leave it empty to keep WhatsApp-only.
// ---------------------------------------------------------------------------
export const contact = {
  phonePrimary: '8953006278',
  phoneSecondary: '8400406278',
  whatsappNumber: '918953006278', // include 91 country code, no +, no spaces
  email: '', // e.g. 'aasthamakeover@gmail.com' — leave '' for WhatsApp-only
  addressLines: [
    'Shop No. 07, Pitambara Bazar',
    'Kursi Road, Sector 14, Vikas Nagar',
    'Lucknow, Uttar Pradesh',
  ],
  mapsQuery: 'Pitambara Bazar, Kursi Road, Sector 14, Vikas Nagar, Lucknow, Uttar Pradesh',
  // Update with your real handles. '' hides the icon in navbar/footer.
  socials: {
    instagram: 'https://instagram.com/',
    facebook: '',
  },
  homeServiceAvailable: true,
};

export const hours = [
  { day: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
  { day: 'Sunday', time: '11:00 AM – 6:00 PM' },
];

export const nav = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Offers', id: 'offers' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Reviews', id: 'testimonials' },
  { label: 'FAQ', id: 'faq' },
  { label: 'Contact', id: 'contact' },
];

export const hero = {
  eyebrow: 'Luxury Beauty Studio • Since 2024',
  title: 'Where Lucknow Comes to Feel Beautiful',
  highlight: 'Beautiful',
  subtitle:
    'Premium bridal makeup, salon, spa, skin care and professional beauty training — crafted by expert artists. Home service available across the city.',
  primaryCta: { label: 'Book Appointment', kind: 'whatsapp' },
  secondaryCta: { label: 'WhatsApp Now', kind: 'whatsapp' },
  badges: ['Home Service Available', 'Since 2024', 'Professional Makeup Artists'],
  stats: [
    { value: '8+', label: 'Service Categories' },
    { value: '500+', label: 'Happy Clients' },
    { value: '100%', label: 'Hygienic & Safe' },
  ],
};

export const about = {
  eyebrow: 'Our Story',
  title: 'A premium beauty destination in the heart of Lucknow',
  paragraphs: [
    'Founded in 2024, Aastha Makeover & Training Center was created to bring salon-quality luxury to every woman in Vikas Nagar and beyond. From the moment you walk in, our focus is simple: make you look and feel your absolute best.',
    'Led by Pro. Saloni Mishra and Laxmi, our team blends modern techniques with premium products to deliver flawless bridal looks, refined everyday styling, restorative spa rituals — and the option to bring it all to your doorstep.',
    'Beyond the chair, we train the next generation of beauty professionals through hands-on makeup and salon courses, so the craft we love keeps growing.',
  ],
  pillars: [
    { title: 'Professional Artists', desc: 'Trained, experienced and detail-obsessed.' },
    { title: 'Premium Products', desc: 'Trusted, skin-friendly brands only.' },
    { title: 'Modern Techniques', desc: 'HD makeup, smoothening, advanced skin care.' },
    { title: 'Comfortable Space', desc: 'A calm, hygienic, welcoming studio.' },
  ],
};

// ---------------------------------------------------------------------------
//  SERVICES — each card opens WhatsApp pre-filled with the category name.
//  `icon` maps to lucide-react icon names in components/iconMap.js
// ---------------------------------------------------------------------------
export const services = [
  {
    icon: 'sparkles',
    title: 'Makeup',
    desc: 'Bridal, HD & occasion makeup that lasts all day.',
    items: ['Bridal Makeup', 'Party Makeup', 'HD Makeup', 'Engagement', 'Reception', 'Festival'],
  },
  {
    icon: 'scissors',
    title: 'Hair',
    desc: 'Cuts, colour, smoothening and salon-grade care.',
    items: ['Hair Cut', 'Hair Styling', 'Hair Color', 'Smoothening', 'Hair Spa', 'Treatments'],
  },
  {
    icon: 'droplet',
    title: 'Skin & Facial',
    desc: 'Glow-restoring facials and clean-ups for every skin type.',
    items: ['Facial', 'Clean-up', 'Skin Cleaning', 'Bleach', 'Face Wax & Bleach'],
  },
  {
    icon: 'feather',
    title: 'Waxing',
    desc: 'Smooth, gentle waxing with premium products.',
    items: ['Full Body Waxing', 'Leg Wax', 'Hand Wax', 'Face Wax'],
  },
  {
    icon: 'eye',
    title: 'Threading',
    desc: 'Precise shaping for perfectly defined features.',
    items: ['Eyebrows', 'Face Threading'],
  },
  {
    icon: 'flower',
    title: 'Spa & Massage',
    desc: 'Relaxing rituals to unwind and recharge.',
    items: ['Body Spa', 'Head Massage', 'Relaxation Massage'],
  },
  {
    icon: 'hand',
    title: 'Nail Care',
    desc: 'Manicure & pedicure for groomed, healthy nails.',
    items: ['Manicure', 'Pedicure'],
  },
  {
    icon: 'leaf',
    title: 'Mehendi',
    desc: 'Intricate bridal and party henna artistry.',
    items: ['Bridal Mehendi', 'Party Mehendi'],
  },
  {
    icon: 'graduation-cap',
    title: 'Beauty Training',
    desc: 'Professional makeup & salon courses for aspiring artists.',
    items: ['Makeup Courses', 'Salon Training', 'Certification'],
  },
];

// ---------------------------------------------------------------------------
//  OFFERS — promotional pricing pulled from the studio posters.
// ---------------------------------------------------------------------------
export const offers = {
  headMassage: {
    title: 'Head Massage Rituals',
    note: 'Limited-time studio offer',
    items: [
      { name: 'Relaxing Oil Head Massage', was: 749, now: 549 },
      { name: 'Herbal Cooling Head Massage', was: 949, now: 749 },
      { name: 'Aroma Oil Head Massage', was: 949, now: 749 },
      { name: 'Stress Relief Head & Back Massage', was: 1199, now: 949 },
    ],
  },
  beauty: {
    title: 'Beauty Offers',
    note: 'Flat pricing — walk in or book ahead',
    items: [
      { name: 'Clean-up', now: 499 },
      { name: 'Full Waxing', now: 499 },
      { name: 'Pedicure', now: 499 },
      { name: 'Manicure', now: 499 },
    ],
  },
};

export const whyChooseUs = [
  { icon: 'award', title: 'Professional Artists' },
  { icon: 'gem', title: 'Premium Products' },
  { icon: 'shield-check', title: 'Hygienic Environment' },
  { icon: 'home', title: 'Home Service Available' },
  { icon: 'wallet', title: 'Affordable Packages' },
  { icon: 'graduation-cap', title: 'Beauty Training' },
  { icon: 'crown', title: 'Bridal Specialists' },
  { icon: 'heart-handshake', title: 'Personalised Consultation' },
];

// ---------------------------------------------------------------------------
//  GALLERY — placeholder tiles render as elegant rose-gold panels with the
//  category label. To use real photos, set `src` to an image path in /public
//  (e.g. '/gallery/bridal-1.jpg'). Tiles with no `src` stay as styled panels.
// ---------------------------------------------------------------------------
export const gallery = [
  { label: 'Shop View', src: '/shop-view.mp4', type: 'video' },
  { label: 'Aastha Makeover gallery video', src: '/gallery-video.mp4', type: 'video' },
];

export const testimonials = [
  {
    name: 'Priya Srivastava',
    role: 'Bride • Gomti Nagar',
    quote:
      'Saloni did my bridal makeup and I could not stop staring at the mirror. It lasted the entire day and every photo came out stunning. Truly the best in Lucknow.',
    rating: 5,
  },
  {
    name: 'Anjali Verma',
    role: 'Regular client • Vikas Nagar',
    quote:
      'I booked the home service for my sister’s engagement and the whole team was so professional and warm. Premium products, spotless hygiene, fair pricing.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Training student',
    quote:
      'The makeup course gave me real confidence. Hands-on practice, patient teaching and genuine support even after the course ended. Highly recommended.',
    rating: 5,
  },
  {
    name: 'Ritika Sharma',
    role: 'Party makeup • Indira Nagar',
    quote:
      'Walked in for an HD party look and walked out feeling like a celebrity. The spa head massage afterwards was the perfect finishing touch.',
    rating: 5,
  },
];

export const faqs = [
  {
    q: 'Do you offer home service for makeup and beauty?',
    a: 'Yes. Home service is available across Lucknow for weddings, parties, functions, festivals and special occasions. Share your location and date on WhatsApp and we will confirm availability.',
  },
  {
    q: 'How do I book a bridal makeup slot?',
    a: 'Bridal dates fill up quickly, especially in wedding season. Tap “Book Appointment” to message us on WhatsApp with your event date and we will reserve your slot and share package details.',
  },
  {
    q: 'Which products do you use?',
    a: 'We use trusted, skin-friendly premium brands for makeup, hair and skin. If you have sensitive skin or allergies, just let us know beforehand and we will customise the products.',
  },
  {
    q: 'Do you provide beauty and makeup training?',
    a: 'Yes. We run professional makeup courses and salon training for beginners and aspiring artists, with hands-on practice and certification. Message us for the current course schedule and fees.',
  },
  {
    q: 'What are your timings?',
    a: 'We are open Monday to Saturday from 10:00 AM to 8:00 PM and Sunday from 11:00 AM to 6:00 PM. For home service we accommodate early-morning bridal bookings on request.',
  },
  {
    q: 'Where exactly are you located?',
    a: 'Shop No. 07, Pitambara Bazar, Kursi Road, Sector 14, Vikas Nagar, Lucknow. Use the “Get Directions” button in the contact section to navigate straight to us.',
  },
];

export const ctaStrip = {
  title: 'Ready to look your absolute best?',
  subtitle: 'Book your appointment today or message us on WhatsApp — home service available.',
  button: { label: 'Book on WhatsApp', kind: 'whatsapp' },
};

export const footer = {
  blurb:
    'Premium bridal makeup, salon, spa, skin care and beauty training in Vikas Nagar, Lucknow. Home service available.',
  copyright: `© ${new Date().getFullYear()} Aastha Makeover & Training Center. All rights reserved.`,
};
