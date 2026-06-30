// Rose-gold ornamental divider with a central lotus motif, inspired by the logo.
export function Divider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-16 sm:w-28 bg-gradient-to-r from-transparent via-rosegold/60 to-champagne/80" />
      <svg width="34" height="20" viewBox="0 0 34 20" fill="none" className="shrink-0">
        <path
          d="M17 2C15 8 11 11 4 11c5 4 9 4 13 7 4-3 8-3 13-7-7 0-11-3-13-9Z"
          stroke="url(#dg)"
          strokeWidth="1.2"
          fill="none"
        />
        <circle cx="17" cy="10" r="1.6" fill="#E7C57A" />
        <defs>
          <linearGradient id="dg" x1="4" y1="2" x2="30" y2="18" gradientUnits="userSpaceOnUse">
            <stop stopColor="#B88652" />
            <stop offset="0.5" stopColor="#C78E82" />
            <stop offset="1" stopColor="#E7C57A" />
          </linearGradient>
        </defs>
      </svg>
      <span className="h-px w-16 sm:w-28 bg-gradient-to-l from-transparent via-rosegold/60 to-champagne/80" />
    </div>
  );
}

// Soft floating botanical blob used as ambient background decoration.
export function FloralBlob({ className = '' }) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="fb" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#E7C57A" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#D7A79C" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#D7A79C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <path
        fill="url(#fb)"
        d="M44.7,-58.9C57.4,-50.7,66.2,-36.5,69.8,-21.1C73.4,-5.7,71.8,10.9,64.9,24.7C58,38.6,45.8,49.6,31.9,57.5C18,65.3,2.4,70,-13.9,69.1C-30.2,68.2,-47.2,61.7,-58.4,49.6C-69.6,37.5,-75,19.7,-74.2,2.5C-73.4,-14.7,-66.4,-31.3,-54.8,-39.9C-43.2,-48.6,-27,-49.3,-12.4,-53.8C2.2,-58.3,15.2,-66.6,28.6,-66.6C42,-66.6,55.8,-58.3,44.7,-58.9Z"
        transform="translate(100 100)"
      />
    </svg>
  );
}
