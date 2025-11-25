import { useParams, Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollLottie from "@/components/ScrollLottie";
import { getProjectById, projects } from "@/data/projects";
import { useEffect, useState } from "react";

const ProjectPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = getProjectById(id || "");
  const [lottieData, setLottieData] = useState(null);

  useEffect(() => {
    if (project?.heroLottie) {
      fetch(project.heroLottie)
        .then(res => res.json())
        .then(data => setLottieData(data))
        .catch(err => console.error("Failed to load Lottie:", err));
    }
  }, [project?.heroLottie]);

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  const currentIndex = projects.findIndex(p => p.id === project.id);
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const prevProject = projects[(currentIndex - 1 + projects.length) % projects.length];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 container-custom">
        <div className="max-w-5xl mx-auto">
          <Link
            to="/#projects"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Link>

          <div className="animate-fade-in">
            {/* Logo and Tags */}
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">{project.title}</h2>
              <div className="flex gap-2">
                {project.industry && (
                  <Badge variant="outline" className="rounded-full px-4 py-1">
                    {project.industry}
                  </Badge>
                )}
                {project.serviceType && (
                  <Badge variant="outline" className="rounded-full px-4 py-1">
                    {project.serviceType}
                  </Badge>
                )}
              </div>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-12 leading-tight"
              dangerouslySetInnerHTML={{
                __html: (project.heroTitle || project.description)
                  .replace(/<gradient>/g, '<span class="gradient-text">')
                  .replace(/<\/gradient>/g, '</span>')
                  .replace(/<ukraine>/g, '<span class="gradient-ukraine">')
                  .replace(/<\/ukraine>/g, '</span>')
              }}
            />

            {/* Divider */}
            <div className="border-t border-border mb-8" />

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {project.stats?.map((stat, index) => (
                <div key={index}>
                  <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                  <p className="text-2xl md:text-3xl font-bold">{stat.value}</p>
                </div>
              ))}
              {project.websiteUrl && (
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Check it out</p>
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-2xl md:text-3xl font-bold hover:text-primary transition-colors group"
                  >
                    Visit Website
                    <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Visual - Lottie or Image */}
      <section className="container-custom pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-secondary/50 rounded-lg overflow-hidden animate-scale-in">
            {project.heroLottie && lottieData ? (
              <ScrollLottie
                animationData={lottieData}
                autoPlayDuration={2}
                className="w-full"
              />
            ) : (
              <div className="aspect-video">
                <img
                  src={project.gallery[0]}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Intro & Background */}
      {(project.introText || project.backgroundText) && (
        <section className="section-padding container-custom">
          <div className="max-w-4xl mx-auto space-y-12">
            {project.introText && (
              <p className="text-2xl md:text-3xl font-medium leading-relaxed animate-fade-in">
                {project.introText}
              </p>
            )}

            {project.backgroundTitle && project.backgroundText && (
              <div className="animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{project.backgroundTitle}</h2>
                <div className="text-lg text-muted-foreground leading-relaxed space-y-4">
                  {project.backgroundText.split('\n\n').map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Challenge */}
      <section className="section-padding container-custom bg-secondary/30">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.challenge}</p>
        </div>
      </section>

      {/* Mobile Screenshots */}
      {project.mobileScreenshots && project.mobileScreenshots.length > 0 && (
        <section className="section-padding pb-0 container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {project.mobileScreenshots.map((screenshot, index) => (
                <div
                  key={index}
                  className="bg-secondary/30 rounded-2xl p-6 md:p-8 animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="aspect-[9/16] rounded-xl overflow-hidden bg-card border border-border shadow-lg">
                    <img
                      src={screenshot}
                      alt={`${project.title} mobile screenshot ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Solution */}
      <section className="section-padding pb-0 container-custom">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Solution</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{project.solution}</p>
        </div>
      </section>

      {/* Results */}
      <section className="section-padding container-custom bg-secondary/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center animate-fade-in">Key Results</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {project.results.map((result, index) => {
              const isObject = typeof result === 'object';
              return (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-2">
                    {isObject ? result.value : result}
                  </p>
                  {isObject && (
                    <p className="text-sm md:text-base text-muted-foreground">
                      {result.label}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery.length > 1 && (
        <section className="section-padding container-custom bg-secondary/30">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Project Gallery</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {project.gallery.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-video bg-secondary/50 rounded-lg overflow-hidden animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={image}
                    alt={`${project.title} screenshot ${index + 2}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      <section className="section-padding container-custom">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center animate-fade-in">Technologies Used</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {project.technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="text-base px-4 py-2 animate-scale-in"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {project.testimonial && (
        <section className="section-padding container-custom bg-secondary/30">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Quote className="h-12 w-12 mx-auto mb-6 text-primary opacity-50" />
            <blockquote className="text-2xl md:text-3xl font-medium mb-6 leading-relaxed">
              "{project.testimonial.quote}"
            </blockquote>
            <div>
              <p className="font-semibold">{project.testimonial.author}</p>
              <p className="text-muted-foreground">{project.testimonial.role}</p>
            </div>
          </div>
        </section>
      )}

      {/* Navigation */}
      <section className="section-padding container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <Link
              to={`/projects/${prevProject.id}`}
              className="group flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors"
            >
              <span className="text-sm text-muted-foreground">Previous Project</span>
              <p className="text-xl font-semibold group-hover:text-primary transition-colors">
                {prevProject.title}
              </p>
            </Link>
            <Link
              to={`/projects/${nextProject.id}`}
              className="group flex-1 bg-card border border-border rounded-lg p-6 hover:border-primary transition-colors text-right"
            >
              <span className="text-sm text-muted-foreground">Next Project</span>
              <p className="text-xl font-semibold group-hover:text-primary transition-colors">
                {nextProject.title}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding container-custom bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg opacity-90 mb-8">
            Let's discuss how we can bring your vision to life with Webflow.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/#contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectPage;
