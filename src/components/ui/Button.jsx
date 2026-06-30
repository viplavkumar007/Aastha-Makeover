import { forwardRef } from 'react';

const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full font-medium ' +
  'transition-all duration-300 ease-out select-none ' +
  'focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 ' +
  'active:translate-y-0 active:scale-[0.98]';

const sizes = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

const variants = {
  // Glossy rose-gold gradient, white text, lift + glow on hover
  primary:
    'text-white bg-rose-gloss shadow-soft hover:-translate-y-0.5 hover:shadow-glow ' +
    'before:absolute before:inset-0 before:rounded-full before:shadow-inset before:pointer-events-none',
  // White, rose-gold border + text, fills with rose gold on hover
  secondary:
    'text-rosegold bg-white border border-rosegold/70 shadow-soft ' +
    'hover:-translate-y-0.5 hover:text-white hover:bg-rose-gradient hover:border-transparent hover:shadow-lift',
  ghost: 'text-warm-brown hover:text-rosegold',
};

const Button = forwardRef(function Button(
  { as = 'button', variant = 'primary', size = 'md', loading = false, className = '', children, ...props },
  ref
) {
  const Tag = as;
  const showShimmer = variant === 'primary';
  return (
    <Tag
      ref={ref}
      className={`${base} ${sizes[size]} ${variants[variant]} overflow-hidden ${className}`}
      aria-busy={loading || undefined}
      {...props}
    >
      {/* moving gloss highlight */}
      {showShimmer && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 skew-x-[-18deg] bg-white/35 blur-md
                     opacity-0 group-hover:opacity-100 group-hover:animate-shimmer motion-reduce:hidden"
        />
      )}
      {loading && (
        <span
          aria-hidden="true"
          className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
        />
      )}
      <span className="relative z-10 inline-flex items-center gap-2">{children}</span>
    </Tag>
  );
});

export default Button;
