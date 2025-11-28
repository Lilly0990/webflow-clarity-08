const teamMembers = [
  { name: "Viktor", role: "Project Management & QA" },
  { name: "Yarik", role: "Webflow Development" },
  { name: "Sasha", role: "Custom Code & WordPress" },
  { name: "Vlad", role: "Strategy & Client Communication" },
];

const stats = [
  { value: "6", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "95%", label: "Referral Rate" },
];

const About = () => {
  return (
    <section className="section-padding container-custom">
      <div className="max-w-4xl mx-auto animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-center">Who We Are</h2>
        <p className="text-xl text-muted-foreground mb-12 text-center">
          We're a 4-person Webflow development team working globally for 6+ years.
        </p>

        <div className="space-y-8 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-3">What makes us different?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our founder started as a designer before becoming a Webflow developer — so we think in UX,
              structure, logic, and long-term maintainability, not just code.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-3">How we work</h3>
            <p className="text-muted-foreground leading-relaxed">
              Clear communication. Honest pricing. No complexity for the sake of complexity.
              No technical gatekeeping. Most clients come from referrals — that says more than any tagline.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">Team Structure:</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {teamMembers.map((member, index) => (
                <div 
                  key={index} 
                  className="bg-card border border-border rounded-lg p-6 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-xl font-bold mb-2">{member.name}</h4>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
              <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
