import { Button } from "@/components/ui/button";
import { useContactForm } from "@/contexts/ContactFormContext";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const { openContactForm } = useContactForm();

  return (
    <section className="relative h-screen flex items-center bg-black overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src="/freepik_abstract.mp4"
      />
      <div className="absolute inset-0 bg-black/20" />

      {/* Red accent line */}
      <div className="absolute top-32 left-6 md:left-16 w-40 h-[3px] bg-[#d4292b]" />

      <div className="relative container-custom">
        <div className="max-w-4xl">
          {/* Label */}
          <p
            className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#f3f2ef]/60 mb-6 opacity-0 animate-bauhaus-in"
          >
            Web Development Studio
          </p>

          {/* H1 */}
          <h1
            className="text-4xl md:text-6xl lg:text-[84px] font-bold leading-[1.05] tracking-tight text-[#f3f2ef] mb-6 opacity-0 animate-bauhaus-in animation-delay-200"
          >
            We build websites
            <br />
            that work.
          </h1>

          {/* Body */}
          <p
            className="text-lg md:text-xl font-light text-[#f3f2ef]/70 max-w-xl leading-relaxed mb-10 opacity-0 animate-bauhaus-in animation-delay-400"
          >
            Clean architecture. Honest process.
            No technical gatekeeping.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-bauhaus-in animation-delay-600"
          >
            <a href="#projects">
              <Button className="bg-black text-[#f3f2ef] hover:bg-black/80 px-8 h-12">
                View Our Work
              </Button>
            </a>
            <Button
              variant="outline"
              className="border-[#f3f2ef] text-[#f3f2ef] hover:bg-[#f3f2ef] hover:text-black px-8 h-12"
              onClick={openContactForm}
            >
              Start a Project
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-bauhaus-in animation-delay-800">
        <ChevronDown className="w-5 h-5 text-[#f3f2ef]/40 animate-scroll-bounce" />
      </div>
    </section>
  );
};

export default Hero;
