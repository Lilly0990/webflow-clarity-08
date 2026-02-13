const stats = [
  { value: "6", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "95%", label: "Referral Rate" },
];

const About = () => {
  return (
    <section id="about" className="section-padding container-custom">
      <div className="animate-fade-in">
        <h2 className="text-5xl md:text-7xl font-bold mb-12">About</h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left — Text */}
          <div className="space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're a Webflow development team working globally for 6+ years.
              Our clients come back — and bring their friends.
            </p>

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

            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Photo Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/images/my-photo.png"
              alt="Vlad — Founder"
              className="rounded-xl object-cover w-full aspect-square"
            />
            <img
              src="/images/team/vlad-logo.png"
              alt="webf.love branding"
              className="rounded-xl object-cover w-full aspect-[3/4]"
            />
            <img
              src="/images/team/post-1.png"
              alt="Project showcase"
              className="rounded-xl object-cover w-full col-span-2 aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
