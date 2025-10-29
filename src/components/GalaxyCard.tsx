import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Users, Target, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface GalaxyCardProps {
  name: string;
  image: string;
  description: string;
  memberCount: number;
  progress: number;
  level: number;
  category: string;
  planetId: string;
}

export const GalaxyCard = ({
  name,
  image,
  description,
  memberCount,
  progress,
  level,
  category,
  planetId,
}: GalaxyCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      onClick={() => navigate(`/planet/${planetId}`)}
      className="group relative overflow-hidden border-primary/30 bg-card/50 backdrop-blur-sm hover:border-primary/60 transition-all duration-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.4)] cursor-pointer animate-fade-in"
    >
      <div className="absolute inset-0 bg-linear-to-br from-primary/20 via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative aspect-video overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent" />
        
        <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
          Level {level}
        </Badge>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <Badge variant="outline" className="border-accent/50 text-accent">
              {category}
            </Badge>
          </div>
          <p className="text-muted-foreground line-clamp-2">{description}</p>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{memberCount} Explorers</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="w-4 h-4" />
              <span>{progress}% Progress</span>
            </div>
          </div>

          <Progress value={progress} className="h-2" />

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Target className="w-4 h-4" />
            <span>Next evolution at 100%</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
