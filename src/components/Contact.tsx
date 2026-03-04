import { Button } from "@/components/ui/button";
import { useContactForm } from "@/contexts/ContactFormContext";

const Contact = () => {
  const { openContactForm } = useContactForm();

  return (
    <section id="contact" className="relative section-padding bg-black overflow-hidden">
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
      <div className="relative container-custom">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
            Get in Touch
          </p>

          <h2 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-6 text-[#f3f2ef]">
            Have a project?
            <br />
            Let's talk.
          </h2>

          <p className="text-lg font-light text-[#f3f2ef]/70 mb-8 leading-relaxed">
            We respond within 24 hours with realistic timelines and an honest assessment.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
            <Button
              className="bg-[#d4292b] text-[#f3f2ef] hover:bg-[#b8232a] px-8 h-12"
              onClick={openContactForm}
            >
              Get in Touch
            </Button>
          </div>

          <p className="text-sm font-light text-[#f3f2ef]/50">
            Or email us directly at{" "}
            <a href="mailto:hello@webf.love" className="text-[#f3f2ef] hover:text-[#d4292b] transition-colors">
              hello@webf.love
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
