import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  highlights: string[];
}

const ProjectCard = ({ title, description, category, highlights }: ProjectCardProps) => {
  return (
    <div className="group bg-card border border-border rounded-lg p-8 card-hover">
      <Badge className="mb-4">{category}</Badge>
      <h3 className="text-3xl font-bold mb-3">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {highlights.map((highlight, index) => (
          <span key={index} className="text-sm text-muted-foreground">
            {highlight} {index < highlights.length - 1 && "•"}
          </span>
        ))}
      </div>
      <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
        View Case Study
      </Button>
    </div>
  );
};

export default ProjectCard;
