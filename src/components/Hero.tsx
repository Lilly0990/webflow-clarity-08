import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Layers, LayoutGrid, Unlock } from "lucide-react";

const Hero = () => {
  return (
    <section className="container-custom h-screen flex items-center justify-center px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] animate-fade-in animation-delay-200">
          Webflow Development Agency for Fast, Scalable,{" "}
          <span className="gradient-text">High-Performance</span> Websites
        </h1>

        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
          We build Webflow websites that load fast, scale easily, and stay clean under the hood —
          without technical bloat or complex setups.
        </p>

        <div className="flex flex-wrap gap-3 justify-center pt-2 animate-fade-in animation-delay-400">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border text-sm">
            <Layers className="w-4 h-4 text-primary" />
            Clean architecture
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border text-sm">
            <LayoutGrid className="w-4 h-4 text-primary" />
            Structured CMS
          </span>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border text-sm">
            <Unlock className="w-4 h-4 text-primary" />
            Zero technical gatekeeping
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 animate-fade-in animation-delay-600">
          <a href="#projects">
            <Button size="lg" className="text-lg px-8 glow-effect hover-lift">
              View Our Work
            </Button>
          </a>
          <Link to="/lets-talk">
            <Button size="lg" variant="outline" className="text-lg px-8 hover-lift">
              Start a Project
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
