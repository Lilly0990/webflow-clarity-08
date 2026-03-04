import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/contexts/ContactFormContext";

const services = [
  {
    num: "01",
    title: "Web Development",
    items: [
      "Corporate websites & landing pages",
      "SaaS, fintech, education, real estate",
      "Custom booking systems & configurators",
      "CMS architecture & migrations",
    ],
  },
  {
    num: "02",
    title: "AI & Automation",
    items: [
      "n8n workflows & integrations",
      "AI agents for internal operations",
      "Telegram bots & auto-posting",
      "MCP integrations (Figma, Webflow, n8n)",
    ],
  },
  {
    num: "03",
    title: "Dev Partnership",
    items: [
      "Technical partner for design studios",
      "From brief to delivery",
      "Ongoing support & maintenance",
      "AI workshops for product teams",
    ],
  },
];

const stack = [
  { name: "Webflow", logo: "/images/stack/webflow.svg" },
  { name: "Claude Code", logo: "/images/stack/claude.png" },
  { name: "n8n", logo: "/images/stack/n8n.png" },
  { name: "Supabase", logo: "/images/stack/supabase.png" },
  { name: "GSAP", logo: "/images/stack/gsap.svg" },
  { name: "Telegram API", logo: "/images/stack/telegram.svg" },
  { name: "GitHub API", logo: "/images/stack/github.png" },
  { name: "OpenAI", logo: "/images/stack/openai.svg" },
];

const stats = [
  { value: "6+", label: "Years" },
  { value: "100+", label: "Projects" },
  { value: "95%", label: "Referral rate" },
  { value: "3", label: "Countries" },
];

const Founder = () => {
  const { openContactForm } = useContactForm();

  return (
    <>
      <Helmet>
        <title>About — webf.love</title>
        <meta
          name="description"
          content="Ukrainian web studio. Webflow + AI automation. 6+ years, 100+ projects, 95% referral rate."
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main className="pt-32">
          {/* Hero */}
          <section className="section-padding container-custom">
            <div className="relative">
              <div className="absolute -top-6 left-0 w-32 h-[3px] bg-[#d4292b]" />
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
                About the Studio
              </p>
              <h1 className="text-4xl md:text-6xl lg:text-[72px] font-bold leading-[1.05] tracking-tight mb-6">
                We build websites that work. And automate what doesn't need a human.
              </h1>
              <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl leading-relaxed mb-10">
                A small Ukrainian studio combining Webflow, custom code, and AI
                automation. We work as a technical partner — from brief to
                delivery.
              </p>
              <Button
                className="bg-[#d4292b] text-[#f3f2ef] hover:bg-[#b8232a] px-8 h-12"
                onClick={openContactForm}
              >
                Start a Project
              </Button>
            </div>
          </section>

          {/* Stats */}
          <section className="container-custom pb-0">
            <div className="grid grid-cols-2 md:grid-cols-4 border-t border-black">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="py-10 md:py-12 border-b md:border-b-0 md:border-r border-black last:border-r-0 last:border-b-0 md:pl-0 md:pr-8 [&:nth-child(n+3)]:md:pl-8 [&:nth-child(2)]:md:pl-8"
                >
                  <span className="text-4xl md:text-5xl font-bold tracking-tight block mb-1">
                    {stat.value}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Studio — video background + description */}
          <section className="relative overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
              src="/freepik_abstract.mp4"
            />
            <div className="absolute inset-0 bg-black/60" />

            <div className="relative container-custom py-24 md:py-32">
              <div className="max-w-3xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
                  Who We Are
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#f3f2ef]">
                  A technical studio with a design mindset.
                </h2>

                <div className="space-y-5 text-lg font-light text-[#f3f2ef]/80 leading-relaxed">
                  <p>
                    webf.love is a small Ukrainian team that takes projects from brief to delivery. Our core stack is Webflow + custom code, but over the past year we've added AI and automation as a dedicated practice. Our main development tool today is Claude Code.
                  </p>
                  <p>
                    We started from design before moving into development — so we think in UX, structure, and long-term maintainability, not just code. We've worked across fintech, SaaS, education, real estate, and beauty — building corporate sites, landing pages, custom booking systems, configurators, and CMS architectures.
                  </p>
                  <p>
                    On the automation side, we build n8n workflows for everything from voice messages to CRM tasks, Telegram bots for auto-posting and content generation, AI agents for internal QA and brief analysis, and MCP integrations connecting Figma, Webflow, and development pipelines.
                  </p>
                  <p>
                    We also run workshops on integrating AI tools into studio workflows — helping product teams adopt modern tooling and ship faster.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* What We Do */}
          <section className="section-padding container-custom border-t border-black">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
              What We Do
            </p>
            <h2 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-12">
              Three directions. One process.
            </h2>

            <div className="grid md:grid-cols-3 border-t border-black">
              {services.map((service) => (
                <div
                  key={service.num}
                  className="py-10 md:pr-8 border-b md:border-b-0 md:border-r border-black last:border-r-0 last:border-b-0 md:pl-8 first:md:pl-0"
                >
                  <span className="text-[11px] font-bold text-[#d4292b] mb-4 block">
                    {service.num}
                  </span>
                  <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                  <ul className="space-y-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="text-sm font-light text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-[#d4292b] mt-0.5">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Stack */}
          <section className="section-padding border-t border-black">
            <div className="container-custom mb-12">
              <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
                Stack
              </p>
              <h2 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight">
                Tools we use daily.
              </h2>
            </div>

            <div className="flex flex-wrap border-t border-l border-black">
              {stack.map((tool) => (
                <div
                  key={tool.name}
                  className="flex flex-col items-center justify-center gap-3 py-8 px-8 md:px-12 border-r border-b border-black"
                >
                  <img
                    src={tool.logo}
                    alt={tool.name}
                    className="w-8 h-8 object-contain"
                    onError={(e) => { e.currentTarget.style.display = 'none' }}
                  />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/60">
                    {tool.name}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Contact */}
          <section className="section-padding container-custom border-t border-black">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
              Contact
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-2">
                  Email
                </p>
                <a
                  href="mailto:hello@webf.love"
                  className="text-lg font-light hover:text-[#d4292b] transition-colors"
                >
                  hello@webf.love
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-2">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/in/rulikovskyi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-light hover:text-[#d4292b] transition-colors"
                >
                  linkedin.com/in/rulikovskyi
                </a>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-black/40 mb-2">
                  Phone
                </p>
                <a
                  href="tel:+380930709602"
                  className="text-lg font-light hover:text-[#d4292b] transition-colors"
                >
                  +380 93 070 96 02
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Founder;
