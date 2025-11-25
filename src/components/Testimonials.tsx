const testimonials = [
  {
    quote: "The most reliable Webflow development partner we've had. They understand goals and help us achieve them.",
    author: "Marketing Team, EnglishDom",
  },
  {
    quote: "webf.love delivered on schedule with zero issues. The AWS setup they built handles our high-traffic site flawlessly.",
    author: "Technical Team, Fixar",
  },
  {
    quote: "Feels like having an internal team. Clear explanations, full training, complete autonomy.",
    author: "Founder, Client Name",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding container-custom">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 text-center animate-fade-in">
          What Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card border border-border rounded-lg p-8 transition-all duration-500 hover:scale-105 hover:shadow-[var(--shadow-elegant)] hover:-translate-y-2 animate-scale-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="text-4xl text-primary mb-4 transition-transform duration-300 group-hover:scale-110">"</div>
              <p className="text-lg mb-6 leading-relaxed">{testimonial.quote}</p>
              <p className="text-sm text-muted-foreground">— {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
