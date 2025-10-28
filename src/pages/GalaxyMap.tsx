import { useState } from "react";
import { StarField } from "@/components/StarField";
import { PlanetCard } from "@/components/PlanetCard";
import { JoinPlanetDialog } from "@/components/JoinPlanetDialog";
import { CreatePlanetDialog } from "@/components/CreatePlanetDialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, Users, Plus } from "lucide-react";
import planetZen from "@/assets/planet-zen.png";
import planetReiki from "@/assets/planet-reiki.png";
import planetAnxiety from "@/assets/planet-anxiety.png";
import planetTarot from "@/assets/planet-tarot.png";

const planets = [
  {
    id: "meditation",
    name: "Meditation Planet",
    image: planetZen,
    description: "A sanctuary for mindfulness practitioners exploring inner peace through meditation and contemplation",
    memberCount: 1247,
    progress: 67,
    level: 5,
    category: "Meditation",
  },
  {
    id: "energy-healing",
    name: "Energy Healing Planet",
    image: planetReiki,
    description: "Energy healers united in mastering Reiki techniques and sharing universal life force knowledge",
    memberCount: 892,
    progress: 43,
    level: 3,
    category: "Energy Healing",
  },
  {
    id: "mental-health",
    name: "Mental Health Planet",
    image: planetAnxiety,
    description: "A compassionate community supporting each other through anxiety relief practices and coping strategies",
    memberCount: 2156,
    progress: 81,
    level: 7,
    category: "Mental Health",
  },
  {
    id: "divination",
    name: "Divination Planet",
    image: planetTarot,
    description: "Seekers and readers diving deep into tarot wisdom, symbolism, and divination practices",
    memberCount: 634,
    progress: 29,
    level: 2,
    category: "Divination",
  },
];

const GalaxyMap = () => {
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [createDialogOpen, setCreateDialogOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState("");
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <StarField />
      
      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Quest PlanetsCircle</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-float">
            Explore the Galaxy
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join communities as planets in a vast universe of shared growth. Each planet represents a journey of collective achievement.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">12</div>
              <div className="text-sm text-muted-foreground">Active Planets</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">5.2K</div>
              <div className="text-sm text-muted-foreground">Explorers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">847</div>
              <div className="text-sm text-muted-foreground">Quests Active</div>
            </div>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input
              placeholder="Search for planets or topics..."
              className="pl-12 h-14 bg-card/50 backdrop-blur-sm border-primary/30 focus:border-primary/60"
            />
          </div>
        </div>

        {/* Planets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {planets.map((planet) => (
            <PlanetCard key={planet.name} planetId={planet.id} {...planet} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-6 py-16">
          <h2 className="text-3xl font-bold text-foreground">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Join a planetary community or create your own. Every explorer starts with their first quest.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              onClick={() => {
                setSelectedPlanet("Meditation Planet");
                setJoinDialogOpen(true);
              }}
            >
              <Users className="w-5 h-5 mr-2" />
              Join a Planet
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-accent/50 hover:border-accent"
              onClick={() => setCreateDialogOpen(true)}
            >
              <Plus className="w-5 h-5 mr-2" />
              Create Planet
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

      {/* Dialogs */}
      <JoinPlanetDialog 
        open={joinDialogOpen} 
        onOpenChange={setJoinDialogOpen}
        planetName={selectedPlanet}
      />
      <CreatePlanetDialog 
        open={createDialogOpen} 
        onOpenChange={setCreateDialogOpen}
      />
    </div>
  );
};

export default GalaxyMap;
