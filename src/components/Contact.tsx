import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="section-padding container-custom bg-secondary/30">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Tell us about your project — we respond within 24 hours with realistic timelines and an honest assessment.
          </p>

          <Link to="/lets-talk">
            <Button size="lg" className="glow-effect text-lg px-8 py-6">
              Let's Talk
            </Button>
          </Link>

          <div className="mt-8 text-muted-foreground">
            <p>
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
