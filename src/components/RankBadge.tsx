import { Badge } from "@/components/ui/badge";
import { Sparkles, Compass, Shield, Crown } from "lucide-react";

type Rank = "Explorer" | "Pathfinder" | "Champion" | "Elder";

interface RankBadgeProps {
  rank: Rank;
  size?: "sm" | "md" | "lg";
}

const rankConfig = {
  Explorer: {
    icon: Compass,
    color: "bg-secondary/20 border-secondary text-secondary-foreground",
    glow: "shadow-[0_0_15px_rgba(59,130,246,0.5)]",
  },
  Pathfinder: {
    icon: Sparkles,
    color: "bg-accent/20 border-accent text-accent-foreground",
    glow: "shadow-[0_0_15px_rgba(236,72,153,0.5)]",
  },
  Champion: {
    icon: Shield,
    color: "bg-primary/20 border-primary text-primary-foreground",
    glow: "shadow-[0_0_20px_rgba(168,85,247,0.6)]",
  },
  Elder: {
    icon: Crown,
    color: "bg-stellar/20 border-stellar text-foreground",
    glow: "shadow-[0_0_25px_rgba(251,191,36,0.7)]",
  },
};

export const RankBadge = ({ rank, size = "md" }: RankBadgeProps) => {
  const config = rankConfig[rank];
  const Icon = config.icon;

  const sizeClasses = {
    sm: "text-xs px-2 py-1",
    md: "text-sm px-3 py-1.5",
    lg: "text-base px-4 py-2",
  };

  return (
    <Badge
      variant="outline"
      className={`${config.color} ${config.glow} ${sizeClasses[size]} font-semibold flex items-center gap-1.5`}
    >
      <Icon className="w-3 h-3" />
      {rank}
    </Badge>
  );
};
