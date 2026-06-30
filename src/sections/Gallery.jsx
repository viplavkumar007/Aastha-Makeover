import { gallery } from '../data/siteContent';
import SectionHeading from '../components/ui/SectionHeading';
import { Stagger, StaggerItem } from '../components/ui/Reveal';
import { useState } from 'react';
import { Camera, Volume2, VolumeX } from 'lucide-react';

export default function Gallery() {
  const [unmutedVideos, setUnmutedVideos] = useState({});

  const toggleVideoSound = (label) => {
    setUnmutedVideos((current) => ({
      ...current,
      [label]: !current[label],
    }));
  };

  return (
    <section id="gallery" className="relative py-20 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="Our Work"
          title="A glimpse of the Aastha look"
          highlight="Aastha"
          subtitle="Bridal, party, hair, skin and spa — a taste of the transformations we create. Replace these tiles with your own studio photos anytime."
        />

        <Stagger
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4"
          amount={0.08}
          gap={0.05}
        >
          {gallery.map((g, i) => (
            <StaggerItem
              key={g.label}
              className={i % 5 === 0 ? 'col-span-2 row-span-2' : ''}
            >
              <figure className="group relative h-full overflow-hidden rounded-3xl border border-rosegold/25 shadow-soft">
                {g.type === 'video' ? (
                  <>
                    <video
                      src={g.src}
                      aria-label={g.label}
                      autoPlay
                      loop
                      muted={!unmutedVideos[g.label]}
                      playsInline
                      preload="metadata"
                      className="h-full min-h-[150px] w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <button
                      type="button"
                      onClick={() => toggleVideoSound(g.label)}
                      className="absolute right-3 top-3 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white shadow-soft backdrop-blur transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/80"
                      aria-label={unmutedVideos[g.label] ? 'Mute Shop View video' : 'Unmute Shop View video'}
                      title={unmutedVideos[g.label] ? 'Mute' : 'Unmute'}
                    >
                      {unmutedVideos[g.label] ? <Volume2 size={18} /> : <VolumeX size={18} />}
                    </button>
                  </>
                ) : g.src ? (
                  <img
                    src={g.src}
                    alt={g.label}
                    loading="lazy"
                    className="h-full min-h-[150px] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  // Elegant placeholder panel (no external image dependency)
                  <div className="flex h-full min-h-[150px] w-full flex-col items-center justify-center bg-rose-gloss p-4 text-white transition duration-500 group-hover:scale-[1.03]">
                    <Camera size={26} className="opacity-80" />
                  </div>
                )}
                <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 to-transparent p-3">
                  <span className="text-sm font-medium text-white drop-shadow">{g.label}</span>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
