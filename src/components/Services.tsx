import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Webflow Development",
    description: "We build fast, scalable sites with clean architecture and fully structured CMS.",
    benefits: [
      "Pixel-perfect custom development",
      "CMS your team can manage independently",
      "SEO-ready structure optimized from day one",
    ],
  },
  {
    title: "Integrations & Automation",
    description: "We connect tools, automate workflows, and extend Webflow's capabilities.",
    benefits: [
      "API and service integrations",
      "n8n, Make, Zapier automation",
      "Custom workflows that save hours weekly",
    ],
  },
  {
    title: "Ongoing Partnership",
    description: "We support, train, and empower your team — giving you full ownership of the site.",
    benefits: [
      "Documentation and video walkthroughs",
      "Full autonomy for your team",
      "Support for updates and major changes",
    ],
  },
];

const Services = () => {
  return (
    <section className="section-padding container-custom">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground">
            Three core services. One goal — helping you move faster with Webflow.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-8 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
              
              <h4 className="text-lg font-semibold mb-3">What you get:</h4>
              <ul className="space-y-3 mb-6">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">→</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <Button variant="outline" className="w-full">Learn more</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
