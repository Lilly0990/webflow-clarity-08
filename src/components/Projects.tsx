import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EnglishDom",
    description: "EdTech Webflow Development — Marketing ecosystem of landing pages",
    category: "EdTech",
    highlights: ["40+ pages delivered", "3+ year partnership"],
  },
  {
    title: "Fixar",
    description: "Defense Tech Website with Custom AWS Infrastructure",
    category: "SaaS",
    highlights: ["High-performance", "Advanced integrations"],
  },
  {
    title: "CSMPLT",
    description: "Immigration Platform Built on Webflow",
    category: "SaaS",
    highlights: ["Complex architecture", "GSAP animations", "Web-app features"],
  },
  {
    title: "Exonode",
    description: "AI-Powered SaaS Platform on Webflow",
    category: "SaaS",
    highlights: ["Performance-optimized", "SEO-ready structure"],
  },
  {
    title: "Value Productions",
    description: "Portfolio Website for Video Production Studio",
    category: "Agencies",
    highlights: ["Pixel-perfect implementation", "Marketing tools setup"],
  },
  {
    title: "Prozora",
    description: "Web3 Blockchain Platform on Webflow",
    category: "E-commerce",
    highlights: ["Multi-language", "Custom integrations"],
  },
];

const categories = ["All", "SaaS", "EdTech", "E-commerce", "Agencies"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section className="section-padding container-custom bg-secondary/30">
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Recent Webflow Projects</h2>
        
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className="transition-all"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filteredProjects.map((project, index) => (
          <div key={index} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button size="lg" variant="outline" className="px-8">
          View All Projects
        </Button>
      </div>
    </section>
  );
};

export default Projects;
