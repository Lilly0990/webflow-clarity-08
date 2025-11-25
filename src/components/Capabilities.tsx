const projectTypes = [
  "Landing pages",
  "Multi-page sites",
  "SaaS platforms",
  "Complex web applications",
  "E-commerce",
  "Custom integrations",
];

const technologies = [
  "Webflow & CMS",
  "GSAP, Three.js, Lottie",
  "AWS Infrastructure",
  "n8n Automation",
  "API Integrations",
  "Marketing Tools & Analytics",
];

const Capabilities = () => {
  return (
    <section className="section-padding container-custom bg-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center animate-fade-in">
          What We Build
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate-fade-in-left">
            <h3 className="text-3xl font-bold mb-6">Project Types</h3>
            <ul className="space-y-3">
              {projectTypes.map((type, index) => (
                <li key={index} className="flex items-start gap-3 text-lg">
                  <span className="text-primary mt-1">-</span>
                  <span className="text-muted-foreground">{type}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade-in-right">
            <h3 className="text-3xl font-bold mb-6">Technologies</h3>
            <ul className="space-y-3">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-start gap-3 text-lg">
                  <span className="text-primary mt-1">-</span>
                  <span className="text-muted-foreground">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Capabilities;
