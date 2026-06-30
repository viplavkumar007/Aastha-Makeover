import { Reveal } from './Reveal';
import { Divider } from '../decor/Ornaments';

export default function SectionHeading({ eyebrow, title, subtitle, center = true, highlight }) {
  const renderTitle = () => {
    if (!highlight) return title;
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-gradient">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={center ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      <Reveal>
        {eyebrow && (
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.28em] text-bronze">
            {eyebrow}
          </span>
        )}
        <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] leading-tight font-semibold text-warm-brown">
          {renderTitle()}
        </h2>
        {center && <Divider className="mt-5" />}
        {subtitle && (
          <p className="mt-5 text-base sm:text-lg text-charcoal/70 leading-relaxed">{subtitle}</p>
        )}
      </Reveal>
    </div>
  );
}
