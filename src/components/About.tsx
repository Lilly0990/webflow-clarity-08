import { Link } from "react-router-dom";

const stats = [
  { value: "6+", label: "Years" },
  { value: "100+", label: "Projects" },
  { value: "95%", label: "Referral Rate" },
];

const About = () => {
  return (
    <section className="section-padding container-custom border-t border-black">
      <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
        About
      </p>
      <h2 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-12">
        A web studio that ships —
        <br />
        and automates the rest.
      </h2>

      <div className="grid md:grid-cols-2 gap-12 md:gap-24">
        {/* Left — Text */}
        <div>
          <p className="text-lg font-light text-muted-foreground leading-relaxed mb-6">
            We're a Ukrainian team building websites and digital products for 6+ years.
            Our stack is Webflow + custom code + AI automation. Our founder started as a
            designer — so we think in UX, structure, and logic, not just code.
          </p>
          <p className="text-lg font-light text-muted-foreground leading-relaxed mb-8">
            Clear communication. Honest pricing. No technical gatekeeping.
            Most clients come from referrals — that says more than any tagline.
          </p>
          <Link
            to="/about-me"
            className="text-xs font-bold uppercase tracking-[0.15em] text-foreground hover:text-[#d4292b] transition-colors"
          >
            Learn more about us →
          </Link>
        </div>

        {/* Right — Stats */}
        <div className="flex flex-col">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex items-baseline justify-between py-6 border-t border-black ${i === stats.length - 1 ? "border-b" : ""}`}
            >
              <span className="text-4xl md:text-5xl font-bold text-[#d4292b]">
                {stat.value}
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-black/40">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
