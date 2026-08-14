import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

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
    <Link to={`/projects/${id}`} className="group block h-full">
      <div className="flex h-full flex-col border border-black overflow-hidden transition-transform duration-500 hover:-translate-y-[2px]">
        <div className="aspect-[16/10] shrink-0 overflow-hidden bg-muted">
          {heroVideo ? (
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : previewImage ? (
            <img
              src={previewImage}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-muted" />
          )}
        </div>

        <div className="flex flex-1 flex-col p-6 border-t border-black">
          <Badge variant="outline" className="mb-3 border-black">{category}</Badge>
          <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-[#d4292b] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-light line-clamp-2 mb-3">{description}</p>
          <div className="flex flex-wrap gap-x-2 gap-y-1">
            {highlights.map((highlight, index) => (
              <span key={index} className="text-xs text-muted-foreground font-light">
                {highlight}{index < highlights.length - 1 && " /"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
