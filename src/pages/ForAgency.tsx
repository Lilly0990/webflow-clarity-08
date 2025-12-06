import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Zap, Eye, Code2, Clock } from "lucide-react";

const whyUseTabs = [
  {
    id: "pixel-perfect",
    icon: Eye,
    tabLabel: "Pixel-Perfect",
    title: "Your Design, Executed Exactly",
    description: "Typography, spacing, grid, rhythm — everything stays intact. We don't reinterpret. We execute.",
  },
  {
    id: "white-label",
    icon: Zap,
    tabLabel: "White-Label",
    title: "Invisible Partner, Visible Results",
    description: "Your clients never know we exist. You're the face, we're the force behind it. We plug into your workflow — Notion, Figma, Slack — whatever you use.",
  },
  {
    id: "clean-code",
    icon: Code2,
    tabLabel: "Clean Code",
    title: "No Spaghetti. No Gatekeeping.",
    description: "Clean class names. Structured CMS. Zero \"why does this break everything?\". A foundation you can hand off to any dev — or manage yourself.",
  },
  {
    id: "fast-delivery",
    icon: Clock,
    tabLabel: "Fast Delivery",
    title: "On Time. Every Time.",
    description: "Tight client deadlines? Sudden launches? We deliver fast without cutting corners. Because reliability > everything.",
  },
];

// Process Step Icons
const UploadIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background frame */}
    <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    {/* Main upload arrow */}
    <path d="M20 28V14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    <path d="M14 20L20 14L26 20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    {/* Figma-style dots */}
    <circle cx="10" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="15" cy="10" r="1.5" fill="currentColor" opacity="0.4" />
    {/* Accent */}
    <circle cx="20" cy="14" r="2" fill="hsl(var(--primary) / 0.85)" />
  </svg>
);

const PlanIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Grid guides */}
    <line x1="14" y1="4" x2="14" y2="36" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="26" y1="4" x2="26" y2="36" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="4" y1="26" x2="36" y2="26" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    {/* Main planning blocks */}
    <rect x="8" y="8" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.75" />
    <rect x="22" y="8" width="10" height="6" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="8" y="22" width="6" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="18" y="20" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.75" />
    {/* Accent dot */}
    <circle cx="13" cy="13" r="2" fill="hsl(var(--primary) / 0.85)" />
  </svg>
);

const BuildIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background grid */}
    <rect x="24" y="6" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="24" y="14" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <rect x="24" y="22" width="10" height="6" rx="1.5" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    {/* Code brackets */}
    <path d="M14 12L6 20L14 28" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M20 12L20 28" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    {/* CMS indicator */}
    <rect x="24" y="30" width="10" height="4" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    {/* Accent */}
    <circle cx="6" cy="20" r="2" fill="hsl(var(--primary) / 0.85)" />
  </svg>
);

const DeliverIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Connection lines */}
    <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="32" y1="8" x2="24" y2="16" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="8" y1="32" x2="16" y2="24" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="32" y1="32" x2="24" y2="24" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    {/* Outer ring - handoff */}
    <circle cx="20" cy="20" r="12" stroke="currentColor" strokeWidth="1.75" />
    {/* Inner checkmark */}
    <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
    {/* Corner nodes */}
    <circle cx="8" cy="8" r="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="32" cy="8" r="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="8" cy="32" r="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <circle cx="32" cy="32" r="2" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    {/* Accent */}
    <circle cx="26" cy="16" r="2" fill="hsl(var(--primary) / 0.85)" />
  </svg>
);

const processSteps = [
  {
    number: "01",
    IconComponent: UploadIcon,
    title: "You Send the Design",
    tagline: "Your vision stays untouched.",
    description: "Figma files, prototypes, components, interactions — all documented.",
  },
  {
    number: "02",
    IconComponent: PlanIcon,
    title: "We Plan With Precision",
    tagline: "No surprises. No drama.",
    description: "Timeline, scope, dev notes, interaction logic, tricky elements, integrations.",
  },
  {
    number: "03",
    IconComponent: BuildIcon,
    title: "We Build It Clean",
    tagline: "Exactly as designed.",
    description: "Clean Webflow architecture, structured CMS, pixel-perfect execution, smooth animations.",
  },
  {
    number: "04",
    IconComponent: DeliverIcon,
    title: "You Deliver Like a Pro",
    tagline: "You get all the credit.",
    description: "We stay behind the scenes. You present it as your own top-tier development work.",
  },
];


// Custom SVG Icons for Studio Profiles
const BrandingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background grid */}
    <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="24" y="8" width="16" height="8" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <rect x="8" y="24" width="8" height="16" rx="2" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    {/* Main palette shape */}
    <circle cx="28" cy="28" r="14" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="24" cy="22" r="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="34" cy="26" r="2.5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <circle cx="30" cy="34" r="2" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    {/* Accent highlight */}
    <circle cx="24" cy="22" r="1.5" fill="hsl(var(--primary) / 0.85)" />
  </svg>
);

const UXUIIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background alignment guides */}
    <line x1="12" y1="4" x2="12" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <line x1="36" y1="4" x2="36" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    {/* Main wireframe */}
    <rect x="8" y="10" width="32" height="28" rx="3" stroke="currentColor" strokeWidth="1.75" />
    {/* Header bar */}
    <rect x="8" y="10" width="32" height="8" rx="3" stroke="currentColor" strokeWidth="1.75" />
    <circle cx="13" cy="14" r="1.5" fill="currentColor" opacity="0.4" />
    <circle cx="18" cy="14" r="1.5" fill="currentColor" opacity="0.4" />
    {/* Content grid */}
    <rect x="12" y="22" width="10" height="12" rx="1.5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="26" y="22" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="26" y="29" width="10" height="5" rx="1" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    {/* Accent - precision marker */}
    <circle cx="36" cy="10" r="3" stroke="hsl(var(--primary) / 0.85)" strokeWidth="1.5" />
    <circle cx="36" cy="10" r="1" fill="hsl(var(--primary) / 0.85)" />
  </svg>
);

const CreativeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Speed lines / kinetic geometry */}
    <line x1="6" y1="38" x2="16" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="4" y1="32" x2="12" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <line x1="8" y1="42" x2="14" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    {/* Abstract circles */}
    <circle cx="38" cy="12" r="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <circle cx="10" cy="14" r="3" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    {/* Main rocket - geometric */}
    <path d="M24 8L32 24L28 26L24 38L20 26L16 24L24 8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="round" />
    {/* Rocket window */}
    <circle cx="24" cy="18" r="3" stroke="currentColor" strokeWidth="1.5" />
    {/* Flames / boost */}
    <path d="M22 38L24 44L26 38" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    {/* Energy accent */}
    <circle cx="24" cy="18" r="1.5" fill="hsl(var(--primary) / 0.85)" />
    <path d="M32 24L38 22" stroke="hsl(var(--primary) / 0.85)" strokeWidth="1.5" opacity="0.6" />
  </svg>
);

const PartnershipIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Connection nodes background */}
    <circle cx="8" cy="12" r="2" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <circle cx="40" cy="12" r="2" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <circle cx="8" cy="36" r="2" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <circle cx="40" cy="36" r="2" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="8" y1="12" x2="18" y2="20" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="40" y1="12" x2="30" y2="20" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="8" y1="36" x2="18" y2="28" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="40" y1="36" x2="30" y2="28" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    {/* Interlocking shapes - left */}
    <path d="M14 20C14 16 18 14 22 16C22 16 20 20 20 24C20 28 22 32 22 32C18 34 14 32 14 28V20Z" stroke="currentColor" strokeWidth="1.75" />
    {/* Interlocking shapes - right */}
    <path d="M34 20C34 16 30 14 26 16C26 16 28 20 28 24C28 28 26 32 26 32C30 34 34 32 34 28V20Z" stroke="currentColor" strokeWidth="1.75" />
    {/* Center connection point */}
    <circle cx="24" cy="24" r="4" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="24" cy="24" r="2" fill="hsl(var(--primary) / 0.85)" />
  </svg>
);

const studioProfiles = [
  {
    IconComponent: BrandingIcon,
    title: "Branding Studios",
    description: "You craft identities. We bring them to life in Webflow — pixel-perfect, on-brand, every time.",
  },
  {
    IconComponent: UXUIIcon,
    title: "UX/UI Agencies",
    description: "You design experiences. We build them exactly as you envisioned — no compromises.",
  },
  {
    IconComponent: CreativeIcon,
    title: "Creative Teams",
    description: "You push boundaries. We handle the Webflow heavy-lifting so you can focus on what you do best.",
  },
  {
    IconComponent: PartnershipIcon,
    title: "Webflow Partners",
    description: "You sell Webflow services. We become your invisible development arm — reliable and scalable.",
  },
];

const ForAgency = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="container-custom min-h-screen flex flex-col justify-center px-6 pt-32 md:pt-40">
        {/* Text - Centered */}
        <div className="max-w-5xl mx-auto text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] animate-fade-in animation-delay-200">
            Your Webflow Partner Who Actually{" "}
            <span className="gradient-text italic">Gets Design</span>
          </h1>

          <div className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400 space-y-2">
            <p>You bring the strategy, concept, and visuals.</p>
            <p>We turn them into a clean, scalable Webflow product.</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center animate-fade-in animation-delay-400">
            <span className="inline-flex items-center px-4 py-2 bg-secondary/50 rounded-full border border-border text-sm text-muted-foreground">
              No drama
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-secondary/50 rounded-full border border-border text-sm text-muted-foreground">
              No "this can't be done"
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-secondary/50 rounded-full border border-border text-sm text-muted-foreground">
              No broken layouts on launch day
            </span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2 animate-fade-in animation-delay-600">
            <a href="https://t.me/webflove" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 glow-effect hover-lift">
                Start a project
              </Button>
            </a>
            <Link to="/#projects">
              <Button size="lg" variant="outline" className="text-lg px-8 hover-lift">
                See projects
              </Button>
            </Link>
          </div>

          <p className="text-sm text-muted-foreground/60 animate-fade-in animation-delay-600">
            White-label Webflow development for design studios & agencies
          </p>
        </div>

        {/* Visual - Below */}
        <div className="max-w-4xl mx-auto w-full animate-fade-in animation-delay-600">
          <div className="bg-card border border-border rounded-2xl p-6 md:p-10">
            <div className="flex flex-col items-center gap-6">
              {/* Flow diagram */}
              <div className="flex items-center gap-3 md:gap-6 text-center flex-wrap justify-center">
                <div className="bg-secondary/50 rounded-xl p-4 md:p-5 border border-border">
                  <p className="font-semibold text-base md:text-lg">Your Studio</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Strategy & Design</p>
                </div>
                <div className="text-xl md:text-2xl text-muted-foreground">→</div>
                <div className="bg-primary/10 rounded-xl p-4 md:p-5 border border-primary/30">
                  <p className="font-semibold text-base md:text-lg gradient-text">webf.love</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Development</p>
                </div>
                <div className="text-xl md:text-2xl text-muted-foreground">→</div>
                <div className="bg-secondary/50 rounded-xl p-4 md:p-5 border border-border">
                  <p className="font-semibold text-base md:text-lg">Your Client</p>
                  <p className="text-xs md:text-sm text-muted-foreground">Happy Launch</p>
                </div>
              </div>

              {/* Tools stack */}
              <div className="w-full pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center mb-4">We integrate with your workflow</p>
                <div className="flex justify-center gap-6 md:gap-8 flex-wrap">
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
      </section>

      {/* Why Studios Choose Us Section - Tabs */}
      <section className="section-padding container-custom">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4 animate-fade-in">
          Why Studios Choose Us Instead of Random Freelancers
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          We're not just another Webflow developer. We're your dedicated development arm.
        </p>

        {/* Desktop: Vertical Tabs Left + Content Right */}
        <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-10 max-w-5xl mx-auto">
          {/* Tabs - Left */}
          <div className="flex flex-col gap-3" role="tablist">
            {whyUseTabs.map((tab, index) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 p-4 rounded-xl border text-left transition-all duration-200
                  ${activeTab === index
                    ? "bg-card border-l-4 border-l-primary border-border shadow-md"
                    : "bg-transparent border-border hover:bg-secondary/50"
                  }`}
              >
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors
                  ${activeTab === index ? "bg-primary/10 text-primary" : "bg-secondary/50 text-muted-foreground/70"}`}>
                  <tab.icon size={18} strokeWidth={1.5} />
                </div>
                <span className={`font-semibold transition-colors
                  ${activeTab === index ? "text-foreground" : "text-muted-foreground"}`}>
                  {tab.tabLabel}
                </span>
              </button>
            ))}
          </div>

          {/* Content - Right */}
          <div className="bg-card/50 rounded-2xl p-8 md:p-10 shadow-lg shadow-black/5">
            <div
              key={activeTab}
              className="animate-fade-in"
            >
              {/* Text Content */}
              <div className="mb-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {whyUseTabs[activeTab].title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {whyUseTabs[activeTab].description}
                </p>
              </div>

              {/* Visual */}
              <div className="bg-secondary/30 rounded-xl p-6 md:p-8 border border-border min-h-[280px] flex items-center justify-center">
                {activeTab === 0 && (
                  /* Pixel-Perfect Visual */
                  <div className="flex items-center gap-4 md:gap-8">
                    <div className="bg-card rounded-xl p-4 md:p-6 border border-border text-center">
                      <div className="text-xs text-muted-foreground mb-2">Figma</div>
                      <div className="w-24 md:w-32 h-20 md:h-24 bg-secondary rounded-lg flex items-center justify-center">
                        <div className="space-y-1">
                          <div className="w-16 md:w-20 h-2 bg-muted-foreground/30 rounded"></div>
                          <div className="w-12 md:w-16 h-2 bg-muted-foreground/30 rounded"></div>
                          <div className="w-14 md:w-18 h-2 bg-muted-foreground/30 rounded"></div>
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl md:text-4xl font-bold text-primary">=</div>
                    <div className="bg-card rounded-xl p-4 md:p-6 border border-primary/30 text-center">
                      <div className="text-xs text-muted-foreground mb-2">Webflow</div>
                      <div className="w-24 md:w-32 h-20 md:h-24 bg-secondary rounded-lg flex items-center justify-center">
                        <div className="space-y-1">
                          <div className="w-16 md:w-20 h-2 bg-muted-foreground/30 rounded"></div>
                          <div className="w-12 md:w-16 h-2 bg-muted-foreground/30 rounded"></div>
                          <div className="w-14 md:w-18 h-2 bg-muted-foreground/30 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  /* White-Label Visual */
                  <div className="w-full max-w-md space-y-4">
                    <div className="bg-card rounded-xl p-4 border border-border">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-secondary rounded-full"></div>
                        <span className="font-semibold text-sm">Your Studio</span>
                      </div>
                      <p className="text-sm text-muted-foreground">"Here's your new website!"</p>
                    </div>
                    <div className="bg-card rounded-xl p-4 border border-border">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-secondary rounded-full"></div>
                        <span className="font-semibold text-sm">Client</span>
                      </div>
                      <p className="text-sm text-muted-foreground">"This is amazing! Exactly what we wanted 🎉"</p>
                    </div>
                    <div className="bg-card/50 rounded-xl p-4 border border-dashed border-primary/30 opacity-60">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-primary text-xs">👻</div>
                        <span className="font-semibold text-sm text-primary">webf.love</span>
                        <span className="text-xs text-muted-foreground">(invisible)</span>
                      </div>
                      <p className="text-sm text-muted-foreground italic">"You're welcome 😉"</p>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  /* Clean Code Visual */
                  <div className="flex gap-4 md:gap-6 w-full max-w-lg">
                    <div className="flex-1 bg-card rounded-xl p-4 border border-destructive/30">
                      <div className="flex items-center gap-2 mb-3 text-destructive">
                        <span className="text-sm">❌</span>
                        <span className="text-xs font-semibold">Others</span>
                      </div>
                      <div className="font-mono text-xs space-y-1 text-muted-foreground">
                        <div>.div-block-47</div>
                        <div className="pl-2">.div-block-48</div>
                        <div className="pl-4">.container-wrapper</div>
                        <div className="pl-6">.text-block-12</div>
                        <div className="pl-4">.div-49</div>
                        <div className="text-destructive/70">🤯 ???</div>
                      </div>
                    </div>
                    <div className="flex-1 bg-card rounded-xl p-4 border border-primary/30">
                      <div className="flex items-center gap-2 mb-3 text-primary">
                        <span className="text-sm">✅</span>
                        <span className="text-xs font-semibold">webf.love</span>
                      </div>
                      <div className="font-mono text-xs space-y-1 text-muted-foreground">
                        <div>.hero</div>
                        <div className="pl-2">.hero__title</div>
                        <div className="pl-2">.hero__subtitle</div>
                        <div className="pl-2">.hero__cta</div>
                        <div>.services</div>
                        <div className="text-primary/70">✨ Clean BEM</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  /* Fast Delivery Visual */
                  <div className="w-full max-w-md">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm">1</div>
                        <span className="text-xs mt-2 text-muted-foreground">Brief</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-primary/30 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm">2</div>
                        <span className="text-xs mt-2 text-muted-foreground">Plan</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-primary/30 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center text-primary font-bold text-sm">3</div>
                        <span className="text-xs mt-2 text-muted-foreground">Build</span>
                      </div>
                      <div className="flex-1 h-0.5 bg-primary/30 mx-2"></div>
                      <div className="flex flex-col items-center">
                        <div className="w-10 h-10 rounded-full bg-primary border-2 border-primary flex items-center justify-center text-primary-foreground font-bold text-sm">✓</div>
                        <span className="text-xs mt-2 text-muted-foreground">Launch</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-8">
                      <div className="bg-card rounded-lg p-3 border border-border text-center">
                        <div className="text-xl font-bold text-primary">5-7</div>
                        <div className="text-xs text-muted-foreground">days avg.</div>
                      </div>
                      <div className="bg-card rounded-lg p-3 border border-border text-center">
                        <div className="text-xl font-bold text-primary">100%</div>
                        <div className="text-xs text-muted-foreground">on-time</div>
                      </div>
                      <div className="bg-card rounded-lg p-3 border border-border text-center">
                        <div className="text-xl font-bold text-primary">∞</div>
                        <div className="text-xs text-muted-foreground">revisions</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Horizontal Tabs + Stacked Content */}
        <div className="lg:hidden">
          {/* Horizontal scrollable tabs */}
          <div className="flex gap-2 overflow-x-auto pb-4 mb-6 scrollbar-hide">
            {whyUseTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-3 rounded-full border whitespace-nowrap transition-all
                  ${activeTab === index
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card border-border text-muted-foreground"
                  }`}
              >
                <tab.icon size={16} />
                <span className="text-sm font-medium">{tab.tabLabel}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="bg-card border border-border rounded-2xl p-6">
            <h3 className="text-xl font-bold mb-3">
              {whyUseTabs[activeTab].title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {whyUseTabs[activeTab].description}
            </p>

            {/* Simplified mobile visual */}
            <div className="bg-secondary/30 rounded-xl p-6 border border-border flex items-center justify-center min-h-[200px]">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                {(() => {
                  const TabIcon = whyUseTabs[activeTab].icon;
                  return <TabIcon size={32} />;
                })()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect For Section - Studio Profiles Grid */}
      <section className="section-padding container-custom bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-end mb-12 lg:mb-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
                Built For Studios Like Yours
              </h2>
              <p className="text-lg text-muted-foreground animate-fade-in animation-delay-200">
                If Webflow is part of your service offer — we make it your unfair advantage.
              </p>
            </div>
          </div>

          {/* Studio Profiles Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {studioProfiles.map((profile, index) => (
              <div
                key={index}
                className="bg-card/60 rounded-2xl p-6 lg:p-8 shadow-xl shadow-black/10 hover:shadow-2xl hover:shadow-black/15 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-foreground/80 mb-6">
                  <profile.IconComponent />
                </div>
                <h3 className="text-lg font-bold mb-3">{profile.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section-padding container-custom">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 animate-fade-in">
            How We Work With Studios
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            A clear, no-drama process from design handoff to launch.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl font-bold text-muted-foreground/50">{step.number}</span>
                  <div className="text-foreground/60 scale-150 origin-top-right">
                    <step.IconComponent />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-foreground/70 mb-2">{step.tagline}</p>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-24 md:py-32 container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 md:mb-20 animate-fade-in">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Build Webflow the Way Studios Need
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground/70 max-w-2xl mx-auto">
              Silent, predictable, pixel-perfect Webflow development for design studios and agencies.
            </p>
          </div>

          {/* Value Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              className="bg-secondary/40 rounded-lg p-8 animate-fade-in"
              style={{ animationDelay: '100ms' }}
            >
              <h3 className="text-lg font-semibold mb-3">Pixel-Perfect Execution</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Every detail matches your Figma — typography, spacing, components, interactions.
              </p>
            </div>

            <div
              className="bg-secondary/40 rounded-lg p-8 animate-fade-in"
              style={{ animationDelay: '150ms' }}
            >
              <h3 className="text-lg font-semibold mb-3">White-Label Partnership</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We work behind the scenes so your studio looks world-class.
              </p>
            </div>

            <div
              className="bg-secondary/40 rounded-lg p-8 animate-fade-in"
              style={{ animationDelay: '200ms' }}
            >
              <h3 className="text-lg font-semibold mb-3">Clean, Scalable Architecture</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                A maintainable Webflow system your team won't break.
              </p>
            </div>

            <div
              className="bg-secondary/40 rounded-lg p-8 animate-fade-in"
              style={{ animationDelay: '250ms' }}
            >
              <h3 className="text-lg font-semibold mb-3">Structured CMS</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Editors and clients can manage content without developers.
              </p>
            </div>

            <div
              className="bg-secondary/40 rounded-lg p-8 animate-fade-in"
              style={{ animationDelay: '300ms' }}
            >
              <h3 className="text-lg font-semibold mb-3">Fast Delivery</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tight studio timelines? We hit them without cutting quality.
              </p>
            </div>

            <div
              className="bg-secondary/40 rounded-lg p-8 animate-fade-in"
              style={{ animationDelay: '350ms' }}
            >
              <h3 className="text-lg font-semibold mb-3">Zero Surprises</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Clear communication, clear scope, no drama, no blockers.
              </p>
            </div>
          </div>
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
          <a href="https://t.me/webflove" target="_blank" rel="noopener noreferrer" className="animate-fade-in animation-delay-200 inline-block">
            <Button size="lg" className="glow-effect">
              Start a project
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForAgency;
