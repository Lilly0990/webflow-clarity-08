import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Zap, Eye, Code2, Clock } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Pixel-Perfect Implementation (Figma → Webflow)",
    description: `We think like designers first, developers second.
So your typography, spacing, grid, rhythm — all stays intact.
You get a pixel-perfect Webflow developer who doesn't reinterpret your design.
They execute it.

This is why agencies use us as their go-to Webflow partner for design teams.`,
  },
  {
    icon: Zap,
    title: "White-Label Webflow Development That Just Works",
    description: `We plug into your workflow — Notion, Figma, Slack, ClickUp — whatever you use.
Your clients never know we exist.
You're the face, we're the force behind it.

This is true white-label Webflow development:
Fast, predictable, and invisible.`,
  },
  {
    icon: Code2,
    title: "Clean Architecture, Structured CMS, Zero Gatekeeping",
    description: `No spaghetti classes.
No nested div hell.
No "why does changing this break everything?".

Just a clean, scalable foundation you can hand off to any future dev.

We believe in zero technical gatekeeping — your team stays fully in control.`,
  },
  {
    icon: Clock,
    title: "Fast Delivery Without Cutting Corners",
    description: `Studios need speed.
You often have tight client timelines, design approvals, revisions, and sudden launches.

We deliver Webflow builds:
– fast
– without sacrificing quality
– without missing deadlines

Because reliability > everything.`,
  },
];

const processSteps = [
  {
    number: "01",
    title: "You send the design",
    description: "Figma, prototype, components, interactions — all documented.",
  },
  {
    number: "02",
    title: "We plan",
    description: "Timeline, scope, dev notes, tricky elements, animations, integrations.",
  },
  {
    number: "03",
    title: "We build",
    description: "Clean Webflow architecture, structured CMS, pixel-perfect implementation, animations.",
  },
  {
    number: "04",
    title: "You deliver",
    description: "We stay behind the scenes. You present it like your in-house miracle.",
  },
];

const benefits = [
  "Pixel-perfect Webflow builds",
  "White-label Webflow development partnership",
  "Clean, scalable architecture",
  "Structured CMS your team can manage",
  "Fast delivery for tight studio timelines",
  "Clear communication",
  "Zero surprises",
  "Zero overcomplication",
];

const targetAudience = [
  "Design studios needing a Webflow developer for Figma designs",
  "UX agencies that want clean Webflow development they trust",
  "Creative studios needing a long-term Webflow development agency",
  "Teams looking for white-label Webflow experts to scale effortlessly",
];

const ForAgency = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="section-padding pt-32 md:pt-40 container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Your Webflow Partner Who Actually Gets Design
            </h1>
            <div className="text-lg md:text-xl text-muted-foreground mb-6 space-y-2">
              <p>You bring the strategy, concept, and visuals.</p>
              <p>We turn them into a clean, scalable Webflow product — exactly how you imagined it.</p>
              <p>No drama. No "this can't be done". No broken layouts on launch day.</p>
            </div>
            <p className="text-foreground mb-8">
              We're the Webflow development agency that works like an extension of your studio: silent, predictable, pixel-obsessed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link to="/lets-talk">
                <Button size="lg" className="glow-effect w-full sm:w-auto">
                  Start a project
                </Button>
              </Link>
              <Link to="/#projects">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  See projects
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              White-label Webflow development for design studios & agencies
            </p>
          </div>

          {/* Right: Visual */}
          <div className="animate-fade-in animation-delay-200">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              <div className="flex flex-col items-center gap-6">
                {/* Flow diagram */}
                <div className="flex items-center gap-4 text-center">
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <p className="font-semibold text-lg">Your Studio</p>
                    <p className="text-sm text-muted-foreground">Strategy & Design</p>
                  </div>
                  <div className="text-2xl text-muted-foreground">→</div>
                  <div className="bg-primary/10 rounded-xl p-4 border border-primary/30">
                    <p className="font-semibold text-lg gradient-text">webf.love</p>
                    <p className="text-sm text-muted-foreground">Development</p>
                  </div>
                  <div className="text-2xl text-muted-foreground">→</div>
                  <div className="bg-secondary/50 rounded-xl p-4 border border-border">
                    <p className="font-semibold text-lg">Your Client</p>
                    <p className="text-sm text-muted-foreground">Happy Launch</p>
                  </div>
                </div>

                {/* Tools stack */}
                <div className="w-full pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground text-center mb-4">We integrate with your workflow</p>
                  <div className="flex justify-center gap-6 flex-wrap">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                        <span className="font-bold text-xs">F</span>
                      </div>
                      <span>Figma</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                        <span className="font-bold text-xs">W</span>
                      </div>
                      <span>Webflow</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                        <span className="font-bold text-xs">S</span>
                      </div>
                      <span>Slack</span>
                    </div>
                  </div>
                </div>

                {/* Badge */}
                <div className="bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full border border-primary/30">
                  White-label partner
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Studios Choose Us Section */}
      <section className="section-padding container-custom">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Why Studios Choose Us Instead of Random Freelancers
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          We're not just another Webflow developer. We're your dedicated development arm.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <article
              key={index}
              className="bg-card border border-border rounded-xl p-6 md:p-8 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <reason.icon size={24} />
                </div>
                <h3 className="text-xl font-bold">{reason.title}</h3>
              </div>
              <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                {reason.description}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Perfect For Section */}
      <section className="section-padding container-custom bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div className="animate-fade-in">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Perfect For Studios That Want a Reliable Webflow Arm
            </h2>
            <ul className="space-y-4 mb-6">
              {targetAudience.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-medium">
              If Webflow is part of your service offer — we make it your unfair advantage.
            </p>
          </div>
          <div className="flex justify-center animate-fade-in animation-delay-200">
            <div className="bg-card border border-border rounded-2xl p-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">Built for</p>
              <p className="text-2xl font-bold gradient-text">Design Studios & Agencies</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section-padding container-custom">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          How We Work With Studios
        </h2>

        <div className="max-w-4xl mx-auto">
          <ol className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step, index) => (
              <li
                key={index}
                className="bg-card border border-border rounded-xl p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-3xl font-bold text-primary mb-3 block">{step.number}</span>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="section-padding container-custom bg-secondary/30">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
          What You Get Working With webf.love
        </h2>

        <div className="max-w-3xl mx-auto">
          <ul className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-3 animate-fade-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="cta" className="section-padding container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in animation-delay-100">
            Whether you need a silent development arm or a long-term Webflow partner — we're here.
            <br />
            Let's build something your clients will love.
          </p>
          <Link to="/lets-talk" className="animate-fade-in animation-delay-200 inline-block">
            <Button size="lg" className="glow-effect">
              Start a project
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForAgency;
