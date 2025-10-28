import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Users, TrendingUp } from "lucide-react";

interface TownCardProps {
  name: string;
  category: string;
  memberCount: number;
  progress: number;
  evolutionLevel: "homestead" | "settlement" | "village" | "town" | "city" | "metropolis";
}

const evolutionLevels = {
  homestead: { label: "Homestead", color: "bg-muted", threshold: 0 },
  settlement: { label: "Settlement", color: "bg-secondary", threshold: 20 },
  village: { label: "Village", color: "bg-accent/70", threshold: 40 },
  town: { label: "Town", color: "bg-primary/70", threshold: 60 },
  city: { label: "City", color: "bg-primary", threshold: 80 },
  metropolis: { label: "Metropolis", color: "bg-gradient-to-r from-accent to-primary", threshold: 95 }
};

export const TownCard = ({
  name,
  category,
  memberCount,
  progress,
  evolutionLevel,
}: TownCardProps) => {
  const evolution = evolutionLevels[evolutionLevel];

  return (
    <Card className="border-primary/20 bg-card/30 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)] cursor-pointer">
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-foreground mb-1">{name}</h4>
            <p className="text-sm text-muted-foreground">{category} community</p>
          </div>
          <Badge className={`${evolution.color} text-white`}>
            {evolution.label}
          </Badge>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>{memberCount} members</span>
            </div>
            <div className="flex items-center gap-2 text-primary">
              <TrendingUp className="w-4 h-4" />
              <span>{progress}%</span>
            </div>
          </div>
          <Progress value={progress} className="h-1.5" />
        </div>
      </div>
    </Card>
  );
};
