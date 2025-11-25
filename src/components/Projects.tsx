import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { projects, categories } from "@/data/projects";

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
          <div key={project.id} className="animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
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
