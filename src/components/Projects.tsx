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
    <section className="section-padding container-custom">
      <div className="mb-12">
        <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d4292b] mb-4">
          Selected Work
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-[48px] font-bold leading-[1.1] tracking-tight mb-8">
          Projects
        </h2>

        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={
                activeCategory === category
                  ? "bg-[#d4292b] text-[#f3f2ef] hover:bg-[#b8232a]"
                  : "border-black text-black hover:bg-black hover:text-[#f3f2ef]"
              }
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-12">
        {filteredProjects.map((project) => (
          <div key={project.id} className="h-full">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
