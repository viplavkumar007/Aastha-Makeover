import { useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { gallery } from '../data/siteContent';

export default function Gallery() {
  const [unmutedVideos, setUnmutedVideos] = useState({});
  const videos = gallery.filter((item) => item.type === 'video' && item.src);

  if (!videos.length) return null;

  return (
    <section id="gallery" className="relative py-16 sm:py-20">
      <div className="container-x grid max-w-5xl gap-5 sm:grid-cols-2">
        {videos.map((video) => {
          const unmuted = Boolean(unmutedVideos[video.label]);

          return (
            <figure
              key={video.label}
              className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-rosegold/25 bg-black shadow-soft"
            >
              <video
                src={video.src}
                aria-label={video.label}
                autoPlay
                loop
                muted={!unmuted}
                playsInline
                preload="metadata"
                className="block aspect-[9/16] w-full object-contain"
              />
              <button
                type="button"
                onClick={() =>
                  setUnmutedVideos((current) => ({
                    ...current,
                    [video.label]: !current[video.label],
                  }))
                }
                className="absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white shadow-soft backdrop-blur transition hover:bg-black/60 focus:outline-none focus:ring-2 focus:ring-white/80"
                aria-label={unmuted ? `Mute ${video.label}` : `Unmute ${video.label}`}
                title={unmuted ? 'Mute' : 'Unmute'}
              >
                {unmuted ? <Volume2 size={19} /> : <VolumeX size={19} />}
              </button>
              <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent p-4">
                <span className="text-sm font-medium text-white drop-shadow">{video.label}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>
    </section>
  );
}
