const services = [
  {
    title: "Webflow Development Services",
    description: "We develop fast, scalable Webflow websites with clean architecture and fully structured CMS.",
    benefits: [
      "Pixel-perfect custom Webflow development",
      "CMS your team can manage independently",
      "SEO-ready structure optimized from day one",
    ],
  },
  {
    title: "Webflow Integrations & Automation",
    description: "We connect tools, automate workflows, and extend your Webflow website's capabilities.",
    benefits: [
      "API & service integrations",
      "n8n, Make, Zapier automation",
      "Custom workflows that save hours weekly",
    ],
  },
  {
    title: "Webflow Support & Ongoing Partnership",
    description: "We support, train, and empower your team — giving you full ownership of the site.",
    benefits: [
      "Documentation & video walkthroughs",
      "Full autonomy for your team",
      "Support for updates and major improvements",
    ],
  },
];

const Services = () => {
  return (
    <section className="section-padding container-custom">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Our Webflow Development Services</h2>
          <p className="text-xl text-muted-foreground">
            Three core services — one goal: help you move faster with Webflow.
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
              <ul className="space-y-3">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary">→</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
