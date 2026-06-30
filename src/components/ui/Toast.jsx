import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

const ToastContext = createContext(null);

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within <ToastProvider>');
  return ctx;
}

let idCounter = 0;

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((t) => t.filter((x) => x.id !== id));
  }, []);

  const toast = useCallback(
    ({ type = 'success', title, message, duration = 4500 }) => {
      const id = ++idCounter;
      setToasts((t) => [...t, { id, type, title, message }]);
      if (duration) setTimeout(() => dismiss(id), duration);
      return id;
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      {/* ARIA live region — announces toasts to screen readers */}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="pointer-events-none fixed inset-x-0 top-4 z-[100] flex flex-col items-center gap-3 px-4 sm:items-end sm:px-6"
      >
        <AnimatePresence initial={false}>
          {toasts.map((t) => (
            <ToastItem key={t.id} toast={t} onClose={() => dismiss(t.id)} />
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

function ToastItem({ toast, onClose }) {
  const isError = toast.type === 'error';
  // pause autoclose handled in provider; this is presentational
  useEffect(() => {}, []);
  return (
    <motion.div
      role={isError ? 'alert' : 'status'}
      layout
      initial={{ opacity: 0, y: -16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.96 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="pointer-events-auto w-full max-w-sm glass rounded-2xl shadow-lift px-4 py-3.5"
    >
      <div className="flex items-start gap-3">
        <span
          className={`mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full ${
            isError ? 'bg-mauve/15 text-mauve' : 'bg-champagne/25 text-bronze'
          }`}
        >
          {isError ? <AlertCircle size={18} /> : <CheckCircle2 size={18} />}
        </span>
        <div className="min-w-0 flex-1">
          {toast.title && <p className="text-sm font-semibold text-warm-brown">{toast.title}</p>}
          {toast.message && <p className="mt-0.5 text-sm text-charcoal/70">{toast.message}</p>}
        </div>
        <button
          onClick={onClose}
          aria-label="Dismiss notification"
          className="-mr-1 -mt-1 rounded-full p-1.5 text-charcoal/40 transition hover:bg-black/5 hover:text-charcoal"
        >
          <X size={16} />
        </button>
      </div>
    </motion.div>
  );
}
