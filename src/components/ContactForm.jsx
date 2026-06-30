import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import { services as serviceList } from '../data/siteContent';
import { waLink, mailtoLink, messages } from '../lib/whatsapp';
import { useToast } from './ui/Toast';
import Button from './ui/Button';

const initial = { name: '', phone: '', service: '', message: '' };

export default function ContactForm() {
  const { toast } = useToast();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const validate = () => {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!/^[0-9+\-\s]{8,15}$/.test(values.phone.trim())) e.phone = 'Enter a valid phone number.';
    if (!values.service) e.service = 'Please choose a service.';
    if (!values.message.trim()) e.message = 'Tell us a little about what you need.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const update = (k) => (ev) => {
    setValues((v) => ({ ...v, [k]: ev.target.value }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) {
      toast({ type: 'error', title: 'Please check the form', message: 'A few fields need your attention.' });
      return;
    }
    setLoading(true);

    // Simulate brief processing, then open WhatsApp (primary lead channel)
    setTimeout(() => {
      const text = messages.enquiry({
        name: values.name,
        service: values.service,
        message: values.message + ` (Phone: ${values.phone})`,
      });
      window.open(waLink(decodeURIComponent(text.replace(/%0A/g, '\n'))), '_blank', 'noopener');

      const mail = mailtoLink(values);
      if (mail) window.open(mail, '_blank', 'noopener');

      setLoading(false);
      setDone(true);
      toast({
        type: 'success',
        title: 'Opening WhatsApp…',
        message: 'Send the pre-filled message and we’ll reply shortly.',
      });
      setValues(initial);
      setTimeout(() => setDone(false), 6000);
    }, 900);
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <Field id="name" label="Your name" error={errors.name}>
        <input
          id="name"
          type="text"
          value={values.name}
          onChange={update('name')}
          placeholder=" "
          autoComplete="name"
          aria-invalid={!!errors.name}
          className="peer input-base"
        />
      </Field>

      <Field id="phone" label="Phone number" error={errors.phone}>
        <input
          id="phone"
          type="tel"
          value={values.phone}
          onChange={update('phone')}
          placeholder=" "
          autoComplete="tel"
          aria-invalid={!!errors.phone}
          className="peer input-base"
        />
      </Field>

      <Field id="service" label="Service you need" error={errors.service} floating={false}>
        <select
          id="service"
          value={values.service}
          onChange={update('service')}
          aria-invalid={!!errors.service}
          className="input-base appearance-none bg-white"
        >
          <option value="" disabled>
            Select a service…
          </option>
          {serviceList.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Home Service">Home Service</option>
        </select>
      </Field>

      <Field id="message" label="Message" error={errors.message}>
        <textarea
          id="message"
          rows={4}
          value={values.message}
          onChange={update('message')}
          placeholder=" "
          aria-invalid={!!errors.message}
          className="peer input-base resize-none"
        />
      </Field>

      <Button type="submit" size="lg" loading={loading} className="w-full" disabled={loading}>
        {done ? (
          <>
            <CheckCircle2 size={18} /> Sent — thank you!
          </>
        ) : (
          <>
            <Send size={18} /> Send via WhatsApp
          </>
        )}
      </Button>

      <p className="text-center text-xs text-charcoal/50">
        Your enquiry opens a pre-filled WhatsApp chat. We typically reply within a few hours.
      </p>

      {/* local styles for inputs + floating labels */}
      <style>{`
        .input-base {
          width: 100%;
          border-radius: 1rem;
          border: 1px solid rgba(199,142,130,0.35);
          background: rgba(255,255,255,0.7);
          padding: 1.05rem 1rem 0.55rem;
          font-size: 0.95rem;
          color: #2B2B2B;
          transition: border-color .25s, box-shadow .25s, background .25s;
        }
        .input-base:focus {
          outline: none;
          border-color: #C78E82;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(231,197,122,0.35);
        }
        select.input-base { padding-top: 0.85rem; padding-bottom: 0.85rem; }
        textarea.input-base { padding-top: 1.15rem; }
      `}</style>
    </form>
  );
}

function Field({ id, label, error, children, floating = true }) {
  return (
    <div>
      <div className="relative">
        {children}
        {floating && (
          <label
            htmlFor={id}
            className="pointer-events-none absolute left-4 top-3.5 text-sm text-charcoal/45 transition-all duration-200
                       peer-focus:top-1.5 peer-focus:text-[11px] peer-focus:text-rosegold
                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[11px]"
          >
            {label}
          </label>
        )}
        {!floating && (
          <span className="pointer-events-none absolute left-4 top-1.5 text-[11px] text-rosegold">
            {label}
          </span>
        )}
      </div>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 pl-1 text-xs font-medium text-mauve"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
}
