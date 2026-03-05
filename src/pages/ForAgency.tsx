import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useContactForm } from "@/contexts/ContactFormContext";

const whyUseTabs = [
  {
    id: "pixel-perfect",
    tabLabel: "Pixel-Perfect",
    title: "Your Design, Executed Exactly",
    description: "Typography, spacing, grid, rhythm — everything stays intact. We don't reinterpret. We execute.",
  },
  {
    id: "white-label",
    tabLabel: "White-Label",
    title: "Invisible Partner, Visible Results",
    description: "Your clients never know we exist. You're the face, we're the force behind it. We plug into your workflow — Notion, Figma, Slack — whatever you use.",
  },
  {
    id: "clean-code",
    tabLabel: "Clean Code",
    title: "No Spaghetti. No Gatekeeping.",
    description: "Clean class names. Structured CMS. Zero \"why does this break everything?\". A foundation you can hand off to any dev — or manage yourself.",
  },
  {
    id: "fast-delivery",
    tabLabel: "Fast Delivery",
    title: "On Time. Every Time.",
    description: "Tight client deadlines? Sudden launches? We deliver fast without cutting corners. Because reliability > everything.",
  },
];

// Process Step Icons — Bauhaus geometric style (rectangles, no circles)
const UploadIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="28" height="28" stroke="currentColor" strokeWidth="1.5" opacity="0.2" />
    <line x1="6" y1="14" x2="34" y2="14" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <path d="M20 28V14" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" />
    <path d="M14 20L20 14L26 20" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" />
    <rect x="8" y="8" width="4" height="4" fill="currentColor" opacity="0.4" />
    <rect x="18" y="12" width="4" height="4" fill="#d4292b" opacity="0.85" />
  </svg>
);

const PlanIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="14" y1="4" x2="14" y2="36" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="26" y1="4" x2="26" y2="36" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="4" y1="14" x2="36" y2="14" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="4" y1="26" x2="36" y2="26" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <rect x="8" y="8" width="10" height="10" stroke="currentColor" strokeWidth="1.75" />
    <rect x="22" y="8" width="10" height="6" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="8" y="22" width="6" height="10" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="18" y="20" width="14" height="12" stroke="currentColor" strokeWidth="1.75" />
    <rect x="11" y="11" width="4" height="4" fill="#d4292b" opacity="0.85" />
  </svg>
);

const BuildIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="24" y="6" width="10" height="6" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="24" y="14" width="10" height="6" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <rect x="24" y="22" width="10" height="6" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <path d="M14 12L6 20L14 28" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" />
    <path d="M20 12L20 28" stroke="currentColor" strokeWidth="1.5" opacity="0.3" />
    <rect x="24" y="30" width="10" height="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <rect x="4" y="18" width="4" height="4" fill="#d4292b" opacity="0.85" />
  </svg>
);

const DeliverIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="8" y1="8" x2="16" y2="16" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="32" y1="8" x2="24" y2="16" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="8" y1="32" x2="16" y2="24" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="32" y1="32" x2="24" y2="24" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <rect x="12" y="12" width="16" height="16" stroke="currentColor" strokeWidth="1.75" />
    <path d="M14 20L18 24L26 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="square" strokeLinejoin="miter" />
    <rect x="6" y="6" width="4" height="4" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <rect x="30" y="6" width="4" height="4" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <rect x="6" y="30" width="4" height="4" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <rect x="30" y="30" width="4" height="4" stroke="currentColor" strokeWidth="1" opacity="0.3" />
    <rect x="24" y="14" width="4" height="4" fill="#d4292b" opacity="0.85" />
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

// Bauhaus-style SVG Icons for Studio Profiles
const BrandingIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="8" width="12" height="12" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="24" y="8" width="16" height="8" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <rect x="8" y="24" width="8" height="16" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <rect x="18" y="18" width="22" height="22" stroke="currentColor" strokeWidth="1.75" />
    <rect x="22" y="22" width="6" height="6" stroke="currentColor" strokeWidth="1.75" />
    <rect x="32" y="24" width="5" height="5" stroke="currentColor" strokeWidth="1.5" opacity="0.6" />
    <rect x="28" y="32" width="4" height="4" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
    <rect x="23" y="23" width="4" height="4" fill="#d4292b" opacity="0.85" />
  </svg>
);

const UXUIIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="12" y1="4" x2="12" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <line x1="24" y1="4" x2="24" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <line x1="36" y1="4" x2="36" y2="44" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.15" />
    <rect x="8" y="10" width="32" height="28" stroke="currentColor" strokeWidth="1.75" />
    <rect x="8" y="10" width="32" height="8" stroke="currentColor" strokeWidth="1.75" />
    <rect x="11" y="13" width="3" height="2" fill="currentColor" opacity="0.4" />
    <rect x="16" y="13" width="3" height="2" fill="currentColor" opacity="0.4" />
    <rect x="12" y="22" width="10" height="12" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="26" y="22" width="10" height="5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="26" y="29" width="10" height="5" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="34" y="8" width="6" height="4" stroke="#d4292b" strokeWidth="1.5" opacity="0.85" />
    <rect x="35" y="9" width="2" height="2" fill="#d4292b" opacity="0.85" />
  </svg>
);

const CreativeIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="6" y1="38" x2="16" y2="28" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="4" y1="32" x2="12" y2="24" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <line x1="8" y1="42" x2="14" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.1" />
    <rect x="34" y="8" width="8" height="8" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="7" y="11" width="6" height="6" stroke="currentColor" strokeWidth="1" opacity="0.15" />
    <path d="M24 8L32 24L28 26L24 38L20 26L16 24L24 8Z" stroke="currentColor" strokeWidth="1.75" strokeLinejoin="miter" />
    <rect x="21" y="15" width="6" height="6" stroke="currentColor" strokeWidth="1.5" />
    <path d="M22 38L24 44L26 38" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
    <rect x="22" y="16" width="4" height="4" fill="#d4292b" opacity="0.85" />
  </svg>
);

const PartnershipIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="38" y="10" width="4" height="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="6" y="34" width="4" height="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <rect x="38" y="34" width="4" height="4" stroke="currentColor" strokeWidth="1" opacity="0.2" />
    <line x1="10" y1="12" x2="18" y2="20" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="38" y1="12" x2="30" y2="20" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="10" y1="36" x2="18" y2="28" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <line x1="38" y1="36" x2="30" y2="28" stroke="currentColor" strokeWidth="0.75" opacity="0.15" />
    <path d="M14 20C14 16 18 14 22 16C22 16 20 20 20 24C20 28 22 32 22 32C18 34 14 32 14 28V20Z" stroke="currentColor" strokeWidth="1.75" />
    <path d="M34 20C34 16 30 14 26 16C26 16 28 20 28 24C28 28 26 32 26 32C30 34 34 32 34 28V20Z" stroke="currentColor" strokeWidth="1.75" />
    <rect x="20" y="20" width="8" height="8" stroke="currentColor" strokeWidth="1.5" />
    <rect x="22" y="22" width="4" height="4" fill="#d4292b" opacity="0.85" />
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

const valueCards = [
  { num: "01", title: "Pixel-Perfect Execution", description: "Every detail matches your Figma — typography, spacing, components, interactions." },
  { num: "02", title: "White-Label Partnership", description: "We work behind the scenes so your studio looks world-class." },
  { num: "03", title: "Clean, Scalable Architecture", description: "A maintainable Webflow system your team won't break." },
  { num: "04", title: "Structured CMS", description: "Editors and clients can manage content without developers." },
  { num: "05", title: "Fast Delivery", description: "Tight studio timelines? We hit them without cutting quality." },
  { num: "06", title: "Zero Surprises", description: "Clear communication, clear scope, no drama, no blockers." },
];

const ForAgency = () => {
  const [activeTab, setActiveTab] = useState(0);
  const { openContactForm } = useContactForm();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section — Dark with video */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/freepik_abstract.mp4"
        />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative container-custom px-6 pt-32 md:pt-40">
          <div className="max-w-5xl space-y-8 animate-bauhaus-in">
            <div className="w-32 h-[3px] bg-[#d4292b]" />
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b]">
              For Design Studios & Agencies
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-[#f3f2ef]">
              Your Webflow Partner Who Actually{" "}
              <span className="text-[#d4292b] italic">Gets Design</span>
            </h1>

            <div className="text-lg md:text-xl text-[#f3f2ef]/60 max-w-3xl leading-relaxed space-y-2 animate-bauhaus-in" style={{ animationDelay: "200ms" }}>
              <p>You bring the strategy, concept, and visuals.</p>
              <p>We turn them into a clean, scalable Webflow product.</p>
            </div>

            <p className="text-sm text-[#f3f2ef]/40 animate-bauhaus-in" style={{ animationDelay: "300ms" }}>
              No drama — No "this can't be done" — No broken layouts on launch day
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-bauhaus-in" style={{ animationDelay: "400ms" }}>
              <Button
                size="lg"
                className="bg-[#d4292b] text-[#f3f2ef] hover:bg-[#b8232a] text-lg px-8"
                onClick={openContactForm}
              >
                Start a project
              </Button>
              <Link to="/#projects">
                <Button size="lg" variant="outline" className="text-lg px-8 border-[#f3f2ef]/20 text-[#f3f2ef] hover:bg-[#f3f2ef]/10">
                  See projects
                </Button>
              </Link>
            </div>
          </div>

          {/* Flow diagram — Bauhaus grid */}
          <div className="max-w-4xl mt-16 mb-16 animate-bauhaus-in" style={{ animationDelay: "600ms" }}>
            <div className="flex items-center gap-4 md:gap-6 flex-wrap">
              <div className="border border-[#f3f2ef]/20 p-4 md:p-5">
                <p className="font-semibold text-base md:text-lg text-[#f3f2ef]">Your Studio</p>
                <p className="text-xs md:text-sm text-[#f3f2ef]/40">Strategy & Design</p>
              </div>
              <div className="text-xl md:text-2xl text-[#f3f2ef]/30">→</div>
              <div className="border border-[#d4292b]/40 p-4 md:p-5">
                <p className="font-semibold text-base md:text-lg text-[#d4292b]">webf.love</p>
                <p className="text-xs md:text-sm text-[#f3f2ef]/40">Development</p>
              </div>
              <div className="text-xl md:text-2xl text-[#f3f2ef]/30">→</div>
              <div className="border border-[#f3f2ef]/20 p-4 md:p-5">
                <p className="font-semibold text-base md:text-lg text-[#f3f2ef]">Your Client</p>
                <p className="text-xs md:text-sm text-[#f3f2ef]/40">Happy Launch</p>
              </div>
            </div>

            {/* Tools stack */}
            <div className="mt-8 pt-8 border-t border-[#f3f2ef]/10">
              <p className="text-sm text-[#f3f2ef]/40 mb-4">We integrate with your workflow</p>
              <div className="flex gap-6 md:gap-8 flex-wrap">
                {["Figma", "Webflow", "Slack"].map((tool, i) => (
                  <div key={tool} className="flex items-center gap-3 text-sm text-[#f3f2ef]/60">
                    <span className="w-8 h-8 border border-[#f3f2ef]/20 flex items-center justify-center font-bold text-xs text-[#f3f2ef]">
                      {tool[0]}
                    </span>
                    <span>{tool}</span>
                    {i < 2 && <span className="ml-4 text-[#f3f2ef]/10">|</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Studios Choose Us — Tabs */}
      <section className="section-padding container-custom border-t border-black">
        <div className="relative mb-12">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
            Why Us
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4 animate-bauhaus-in">
            Why Studios Choose Us Instead of Random Freelancers
          </h2>
          <p className="text-lg text-black/50 max-w-2xl">
            We're not just another Webflow developer. We're your dedicated development arm.
          </p>
        </div>

        {/* Desktop: Vertical Tabs Left + Content Right */}
        <div className="hidden lg:grid lg:grid-cols-[280px_1fr] gap-10 max-w-5xl">
          {/* Tabs - Left */}
          <div className="flex flex-col" role="tablist">
            {whyUseTabs.map((tab, index) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === index}
                onClick={() => setActiveTab(index)}
                className={`text-left p-4 border-b border-black transition-all duration-200
                  ${activeTab === index
                    ? "border-l-[3px] border-l-[#d4292b] bg-black/5 font-bold"
                    : "border-l-[3px] border-l-transparent text-black/50 hover:text-black hover:bg-black/[0.02]"
                  }`}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>

          {/* Content - Right */}
          <div className="border border-black p-8 md:p-10">
            <div key={activeTab} className="animate-bauhaus-in">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                {whyUseTabs[activeTab].title}
              </h3>
              <p className="text-lg text-black/50 leading-relaxed mb-8">
                {whyUseTabs[activeTab].description}
              </p>

              {/* Geometric Bauhaus visual per tab */}
              <div className="border border-black/10 p-6 md:p-8 min-h-[280px] flex items-center justify-center">
                {activeTab === 0 && (
                  <div className="flex items-center gap-4 md:gap-8">
                    <div className="border border-black p-4 md:p-6 text-center">
                      <div className="text-xs text-black/40 mb-2">Figma</div>
                      <div className="w-24 md:w-32 h-20 md:h-24 border border-black/10 flex items-center justify-center">
                        <div className="space-y-1.5">
                          <div className="w-16 md:w-20 h-1.5 bg-black/20" />
                          <div className="w-12 md:w-16 h-1.5 bg-black/20" />
                          <div className="w-14 md:w-18 h-1.5 bg-black/20" />
                        </div>
                      </div>
                    </div>
                    <div className="text-2xl md:text-4xl font-bold text-[#d4292b]">=</div>
                    <div className="border border-[#d4292b]/30 p-4 md:p-6 text-center">
                      <div className="text-xs text-black/40 mb-2">Webflow</div>
                      <div className="w-24 md:w-32 h-20 md:h-24 border border-black/10 flex items-center justify-center">
                        <div className="space-y-1.5">
                          <div className="w-16 md:w-20 h-1.5 bg-black/20" />
                          <div className="w-12 md:w-16 h-1.5 bg-black/20" />
                          <div className="w-14 md:w-18 h-1.5 bg-black/20" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="w-full max-w-md space-y-4">
                    <div className="border border-black p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-black flex items-center justify-center text-[#f3f2ef] text-xs font-bold">S</div>
                        <span className="font-semibold text-sm">Your Studio</span>
                      </div>
                      <p className="text-sm text-black/50">"Here's your new website!"</p>
                    </div>
                    <div className="border border-black p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-black flex items-center justify-center text-[#f3f2ef] text-xs font-bold">C</div>
                        <span className="font-semibold text-sm">Client</span>
                      </div>
                      <p className="text-sm text-black/50">"This is amazing! Exactly what we wanted"</p>
                    </div>
                    <div className="border border-dashed border-[#d4292b]/30 p-4 opacity-60">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 bg-[#d4292b] flex items-center justify-center text-[#f3f2ef] text-xs font-bold">W</div>
                        <span className="font-semibold text-sm text-[#d4292b]">webf.love</span>
                        <span className="text-xs text-black/40">(invisible)</span>
                      </div>
                      <p className="text-sm text-black/50 italic">"You're welcome"</p>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="flex gap-4 md:gap-6 w-full max-w-lg">
                    <div className="flex-1 border border-black/30 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-3 h-3 bg-black/30" />
                        <span className="text-xs font-bold text-black/40">Others</span>
                      </div>
                      <div className="font-mono text-xs space-y-1 text-black/40">
                        <div>.div-block-47</div>
                        <div className="pl-2">.div-block-48</div>
                        <div className="pl-4">.container-wrapper</div>
                        <div className="pl-6">.text-block-12</div>
                        <div className="pl-4">.div-49</div>
                      </div>
                    </div>
                    <div className="flex-1 border border-[#d4292b]/30 p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="w-3 h-3 bg-[#d4292b]" />
                        <span className="text-xs font-bold text-[#d4292b]">webf.love</span>
                      </div>
                      <div className="font-mono text-xs space-y-1 text-black/50">
                        <div>.hero</div>
                        <div className="pl-2">.hero__title</div>
                        <div className="pl-2">.hero__subtitle</div>
                        <div className="pl-2">.hero__cta</div>
                        <div>.services</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="w-full max-w-md">
                    <div className="flex items-center justify-between mb-6">
                      {["Brief", "Plan", "Build", "Launch"].map((step, i) => (
                        <div key={step} className="flex items-center">
                          <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 border-2 flex items-center justify-center font-bold text-sm
                              ${i === 3 ? "bg-[#d4292b] border-[#d4292b] text-[#f3f2ef]" : "border-[#d4292b] text-[#d4292b]"}`}>
                              {i === 3 ? "✓" : i + 1}
                            </div>
                            <span className="text-xs mt-2 text-black/40">{step}</span>
                          </div>
                          {i < 3 && <div className="w-8 md:w-12 h-[2px] bg-[#d4292b]/30 mx-1" />}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-8">
                      {[
                        { val: "5-7", label: "days avg." },
                        { val: "100%", label: "on-time" },
                        { val: "∞", label: "revisions" },
                      ].map((stat) => (
                        <div key={stat.label} className="border border-black p-3 text-center">
                          <div className="text-xl font-bold text-[#d4292b]">{stat.val}</div>
                          <div className="text-xs text-black/40">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Tabs + Content */}
        <div className="lg:hidden">
          <div className="flex gap-0 overflow-x-auto pb-4 mb-6 border-b border-black">
            {whyUseTabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(index)}
                className={`px-4 py-3 whitespace-nowrap text-sm font-medium transition-all border-b-2
                  ${activeTab === index
                    ? "border-b-[#d4292b] text-black"
                    : "border-b-transparent text-black/40"
                  }`}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>

          <div className="border border-black p-6">
            <h3 className="text-xl font-bold mb-3">
              {whyUseTabs[activeTab].title}
            </h3>
            <p className="text-black/50">
              {whyUseTabs[activeTab].description}
            </p>
          </div>
        </div>
      </section>

      {/* Built For Studios — Dark Section */}
      <section className="section-padding bg-black text-[#f3f2ef]">
        <div className="container-custom">
          <div className="mb-12 lg:mb-16">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
              Who We Work With
            </p>
            <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4 animate-bauhaus-in">
              Built For Studios Like Yours
            </h2>
            <p className="text-lg text-[#f3f2ef]/50 max-w-2xl">
              If Webflow is part of your service offer — we make it your unfair advantage.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 border-t border-[#f3f2ef]/10">
            {studioProfiles.map((profile, index) => (
              <div
                key={index}
                className="py-10 px-6 lg:px-8 border-b sm:border-b lg:border-b-0 border-r-0 sm:border-r border-[#f3f2ef]/10 last:border-r-0 last:border-b-0 sm:[&:nth-child(2)]:border-r-0 lg:[&:nth-child(2)]:border-r animate-bauhaus-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-[#f3f2ef]/80 mb-6">
                  <profile.IconComponent />
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#f3f2ef]">{profile.title}</h3>
                <p className="text-sm text-[#f3f2ef]/50 leading-relaxed">
                  {profile.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding container-custom border-t border-black">
        <div className="max-w-5xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
            Process
          </p>
          <h2 className="text-3xl md:text-5xl font-bold leading-[1.1] tracking-tight mb-4 animate-bauhaus-in">
            How We Work With Studios
          </h2>
          <p className="text-lg text-black/50 mb-16 max-w-2xl">
            A clear, no-drama process from design handoff to launch.
          </p>

          <div className="grid md:grid-cols-2 border-t border-l border-black">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="border-r border-b border-black p-8 animate-bauhaus-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl font-bold text-[#d4292b]">{step.number}</span>
                  <div className="text-black/60 scale-150 origin-top-right">
                    <step.IconComponent />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-sm text-black/60 mb-2">{step.tagline}</p>
                <p className="text-sm text-black/40">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding container-custom border-t border-black">
        <div className="max-w-6xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
            Deliverables
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-4 animate-bauhaus-in">
            We Build Webflow the Way Studios Need
          </h2>
          <p className="text-lg text-black/50 max-w-2xl mb-16">
            Silent, predictable, pixel-perfect Webflow development for design studios and agencies.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-black">
            {valueCards.map((card, index) => (
              <div
                key={index}
                className="border-r border-b border-black p-8 animate-bauhaus-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-[11px] font-bold text-[#d4292b] mb-4 block">{card.num}</span>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-sm text-black/40 leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — Dark with video */}
      <section className="relative section-padding overflow-hidden bg-black">
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
            <div className="w-32 h-[3px] bg-[#d4292b] mb-6" />
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
              Let's Talk
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-[#f3f2ef] mb-6 animate-bauhaus-in">
              Let's Work Together
            </h2>
            <p className="text-lg text-[#f3f2ef]/60 mb-8 animate-bauhaus-in" style={{ animationDelay: "200ms" }}>
              Whether you need a silent development arm or a long-term Webflow partner — we're here.
              <br />
              Let's build something your clients will love.
            </p>
            <Button
              size="lg"
              className="bg-[#d4292b] text-[#f3f2ef] hover:bg-[#b8232a] px-8 animate-bauhaus-in"
              style={{ animationDelay: "400ms" }}
              onClick={openContactForm}
            >
              Start a project
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ForAgency;
