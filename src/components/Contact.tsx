import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useContactForm } from "@/contexts/ContactFormContext";

const Contact = () => {
  const { openContactForm } = useContactForm();

  return (
    <section id="contact" className="section-padding container-custom">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-secondary/30 border border-border p-8 md:p-16">
          {/* Decorative gradient orb */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in">
              Have a Cool Idea?{" "}
              <br className="hidden sm:block" />
              <span className="gradient-text">Let's Collaborate.</span>
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in">
              Tell us about your project — we respond within 24 hours with realistic timelines and an honest assessment.
            </p>

            <div className="pt-2 animate-fade-in">
              <Button
                size="lg"
                className="glow-effect text-lg px-8 py-6 gap-2 group"
                onClick={openContactForm}
              >
                Get in Touch
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground animate-fade-in">
              Or email us directly at{" "}
              <a href="mailto:hello@webf.love" className="text-primary hover:underline">
                hello@webf.love
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
