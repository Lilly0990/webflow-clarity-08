import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="section-padding container-custom min-h-[90vh] flex items-center pt-24">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <div className="inline-block px-4 py-2 bg-secondary/50 rounded-full border border-border mb-4 animate-fade-in">
          <p className="text-sm text-muted-foreground">Webflow Development Agency</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-in animation-delay-200">
          Building Fast, Scalable,{" "}
          <span className="gradient-text">High-Performance</span> Websites
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
          We build Webflow sites without the technical mess. Clean architecture, scalable CMS, 
          transparent process, clear communication — no technical gatekeeping.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center pt-4 animate-fade-in animation-delay-600">
          <div className="text-left">
            <p className="text-sm text-muted-foreground">6+ years</p>
          </div>
          <div className="w-px bg-border"></div>
          <div className="text-left">
            <p className="text-sm text-muted-foreground">100+ projects</p>
          </div>
          <div className="w-px bg-border"></div>
          <div className="text-left">
            <p className="text-sm text-muted-foreground">95% referral rate</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in animation-delay-[800ms]">
          <Button size="lg" className="text-lg px-8 glow-effect hover-lift">
            View Our Work
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 hover-lift">
            Start a Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
