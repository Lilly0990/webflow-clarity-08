const advantages = [
  {
    title: "Designer → Developer Advantage",
    description: "We understand structure, UX, and how users interact — not just code.",
  },
  {
    title: "Transparent Hourly Billing",
    description: "Clear breakdowns. No inflated estimates. No surprises.",
  },
  {
    title: "No Technical Gatekeeping",
    description: "We explain everything in simple language. You always know what's happening.",
  },
  {
    title: "95% Referral Rate",
    description: "Our work brings clients back — and brings new ones to us.",
  },
];

const Advantages = () => {
  return (
    <section className="section-padding container-custom">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center animate-fade-in">
          Why webf.love?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {advantages.map((advantage, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-8 card-hover animate-scale-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-bold mb-3">{advantage.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{advantage.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
