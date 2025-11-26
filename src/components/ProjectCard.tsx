import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  highlights: string[];
  previewImage?: string;
  heroVideo?: string;
}

const ProjectCard = ({ id, title, description, category, highlights, previewImage, heroVideo }: ProjectCardProps) => {
  return (
    <Link to={`/projects/${id}`} className="group block">
      <div className="bg-card border border-border rounded-2xl overflow-hidden card-hover">
        {/* Preview Video or Image */}
        <div className="aspect-[16/10] overflow-hidden bg-secondary">
          {heroVideo ? (
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : previewImage ? (
            <img
              src={previewImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-6xl opacity-20">📷</span>
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-8">
          <Badge className="mb-4">{category}</Badge>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{description}</p>
          <div className="flex flex-wrap gap-2">
            {highlights.map((highlight, index) => (
              <span key={index} className="text-sm text-muted-foreground">
                {highlight} {index < highlights.length - 1 && "•"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
