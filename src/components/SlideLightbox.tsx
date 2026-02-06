import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

interface SlideLightboxProps {
  slides: string[];
}

const SlideLightbox = ({ slides }: SlideLightboxProps) => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  if (slides.length === 0) return null;

  return (
    <>
      <div className="flex gap-3 overflow-x-auto pb-2 -mx-2 px-2 snap-x snap-mandatory scrollbar-hide">
        {slides.map((src, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setOpen(true);
            }}
            className="flex-shrink-0 w-[calc(33.333%-8px)] md:w-[calc(25%-9px)] snap-start rounded-xl overflow-hidden border border-border/50 hover:border-border transition-colors shadow-sm hover:shadow-md"
          >
            <img
              src={src}
              alt={`Слайд ${i + 1}`}
              className="w-full aspect-[16/10] object-cover"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides.map((src) => ({ src }))}
        controller={{ closeOnBackdropClick: true }}
        styles={{
          container: { backgroundColor: "rgba(0, 0, 0, 0.9)" },
        }}
      />
    </>
  );
};

export default SlideLightbox;
