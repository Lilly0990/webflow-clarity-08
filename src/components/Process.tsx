const principles = [
  {
    number: "1",
    title: "No Manipulation",
    description: "If something isn't needed — we say so.",
  },
  {
    number: "2",
    title: "No Gatekeeping",
    description: "Webflow is powerful, and we show you how it works.",
  },
  {
    number: "3",
    title: "Full Clarity & Control",
    description: "You choose autonomy or long-term support — you always own your website.",
  },
];

const steps = [
  {
    number: "01",
    title: "Brief",
    description: "Goals, audience, functionality — only specifics.",
  },
  {
    number: "02",
    title: "Plan",
    description: "Phases, timelines, and hour estimates.",
  },
  {
    number: "03",
    title: "Build",
    description: "Transparent progress. Clear explanations. No mystery.",
  },
  {
    number: "04",
    title: "Launch",
    description: "Testing, handover, team training, and support — or full autonomy.",
  },
];

const Process = () => {
  return (
    <section className="section-padding container-custom bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center animate-fade-in">Our Webflow Development Process</h2>
        <p className="text-xl text-muted-foreground text-center mb-16">
          No hidden fees. No inflated features. No "trust us, it's complicated." Just clarity and honest work.
        </p>

        <div className="mb-20">
          <h3 className="text-3xl font-bold mb-8 text-center">Three Principles:</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {principles.map((principle, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 text-center animate-scale-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-4xl font-bold gradient-text mb-3">{principle.number}</div>
                <h4 className="text-xl font-bold mb-2">{principle.title}</h4>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold mb-8 text-center">Process Steps:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-card border border-border rounded-lg p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-3xl font-bold text-primary mb-3">{step.number}</div>
                <h4 className="text-2xl font-bold mb-2">{step.title}</h4>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
