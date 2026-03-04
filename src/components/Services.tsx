const services = [
  {
    number: "01",
    title: "Development",
    description: "We develop fast, scalable websites with clean architecture and fully structured CMS.",
    benefits: [
      "Pixel-perfect custom development",
      "CMS your team can manage independently",
      "SEO-ready structure from day one",
    ],
  },
  {
    number: "02",
    title: "Integrations",
    description: "We connect tools, automate workflows, and extend your website's capabilities.",
    benefits: [
      "API & service integrations",
      "n8n, Make, Zapier automation",
      "Custom workflows that save hours",
    ],
  },
  {
    number: "03",
    title: "Support",
    description: "We support, train, and empower your team — giving you full ownership of the site.",
    benefits: [
      "Documentation & video walkthroughs",
      "Full autonomy for your team",
      "Ongoing updates and improvements",
    ],
  },
];

const Services = () => {
  return (
    <section className="section-padding container-custom">
      <div className="mb-16">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
          Services
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight">
          What We Do
        </h2>
      </div>

      <div className="grid md:grid-cols-3 border-t border-black">
        {services.map((service, index) => (
          <div
            key={index}
            className={`py-10 ${index < services.length - 1 ? 'md:border-r md:border-black md:pr-8' : ''} ${index > 0 ? 'md:pl-8' : ''} ${index > 0 ? 'border-t md:border-t-0 border-black' : ''}`}
          >
            <span className="text-[#d4292b] text-sm font-bold mb-4 block">
              {service.number}
            </span>
            <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
            <p className="text-muted-foreground font-light leading-relaxed mb-6">
              {service.description}
            </p>
            <ul className="space-y-3">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-light text-muted-foreground">
                  <span className="text-[#d4292b] mt-0.5">—</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
