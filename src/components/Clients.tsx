const clientTypes = [
  {
    title: "Design Studios & Agencies",
    description: "You create strategy and design — we turn it into a clean, scalable Webflow product.",
    benefits: [
      "We think like designers",
      "We deliver complex functionality fast",
      "No lock-in — you keep full control",
    ],
    process: "White label. Hourly billing. Clear deadlines. You focus on creativity — we handle the execution.",
  },
  {
    title: "Businesses & Startups",
    description: "You need a website that works — scalable, fast to launch, easy to update, and ready to grow with the product.",
    benefits: [
      "Scalable architecture",
      "CMS your team can manage",
      "Ability to move quickly as the market shifts",
    ],
    process: "Proper briefing. Transparent timelines. Clear breakdowns. We explain technical decisions in plain language.",
  },
];

const Clients = () => {
  return (
    <section className="section-padding container-custom bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">
          Two Types of Clients. One Clear Approach.
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {clientTypes.map((client, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-8 card-hover animate-fade-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <h3 className="text-3xl font-bold mb-4">{client.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{client.description}</p>
              
              <h4 className="text-xl font-bold mb-3">
                {index === 0 ? "Why they work with us:" : "What you get:"}
              </h4>
              <ul className="space-y-2 mb-6">
                {client.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-primary mt-1">✓</span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <h4 className="text-xl font-bold mb-3">How it works:</h4>
              <p className="text-muted-foreground leading-relaxed">{client.process}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
