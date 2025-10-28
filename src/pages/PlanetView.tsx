import { useState } from "react";
import { StarField } from "@/components/StarField";
import { RankBadge } from "@/components/RankBadge";
import { TownCard } from "@/components/TownCard";
import { JoinPlanetDialog } from "@/components/JoinPlanetDialog";
import { JoinMissionDialog } from "@/components/JoinMissionDialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowLeft, Users, Target, Calendar, MessageCircle, Trophy, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";
import planetZen from "@/assets/planet-zen.png";

const missions = [
  {
    title: "30 Days of Mindfulness",
    description: "Auto-derived from 234 members' personal quests",
    progress: 67,
    participants: 234,
    reward: "Planet Evolution +10%",
  },
  {
    title: "Collective Peace Hour",
    description: "Synchronized from weekly quest goals across the planet",
    progress: 100,
    participants: 456,
    reward: "Unlocked: Serenity Chamber",
    completed: true,
  },
  {
    title: "Wisdom Sharing Circle",
    description: "Generated from community feedback & quest updates",
    progress: 45,
    participants: 123,
    reward: "Rank Progress +5%",
  },
];

const members = [
  { name: "Luna Starweaver", rank: "Elder" as const, quests: 47, avatar: "🌙" },
  { name: "Kai Zenith", rank: "Champion" as const, quests: 32, avatar: "⭐" },
  { name: "Nova Seeker", rank: "Pathfinder" as const, quests: 18, avatar: "✨" },
  { name: "River Flow", rank: "Explorer" as const, quests: 7, avatar: "🌊" },
];

const PlanetView = () => {
  const navigate = useNavigate();
  const [joinDialogOpen, setJoinDialogOpen] = useState(false);
  const [missionDialogOpen, setMissionDialogOpen] = useState(false);
  const [selectedMission, setSelectedMission] = useState(missions[0]);

  const handleMessage = () => {
    toast({
      title: "Coming Soon! 💬",
      description: "Planetary chat system is being developed. Stay tuned!",
    });
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <StarField />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate("/")}
          className="mb-6 hover:bg-primary/10"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Galaxy
        </Button>

        {/* Planet Header */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-3xl blur-2xl group-hover:blur-3xl transition-all" />
            <img
              src={planetZen}
              alt="Zen Circle"
              className="relative w-full h-[400px] object-cover rounded-3xl border-2 border-primary/30"
            />
            <Badge className="absolute top-6 right-6 bg-primary/90 backdrop-blur-sm text-lg px-4 py-2">
              Level 5
            </Badge>
          </div>

          <div className="space-y-6">
            <div>
              <Badge variant="outline" className="border-accent/50 text-accent mb-3">
                Meditation
              </Badge>
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Meditation Planet
              </h1>
              <p className="text-lg text-muted-foreground">
                A sanctuary for mindfulness practitioners exploring inner peace through meditation and contemplation. Together, we journey towards collective enlightenment.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-primary/30">
                <Users className="w-6 h-6 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold">1,247</div>
                <div className="text-sm text-muted-foreground">Explorers</div>
              </Card>
              <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-primary/30">
                <Target className="w-6 h-6 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold">47</div>
                <div className="text-sm text-muted-foreground">Active Quests</div>
              </Card>
              <Card className="p-4 text-center bg-card/50 backdrop-blur-sm border-primary/30">
                <Trophy className="w-6 h-6 mx-auto mb-2 text-stellar" />
                <div className="text-2xl font-bold">18</div>
                <div className="text-sm text-muted-foreground">Completed</div>
              </Card>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Planet Evolution Progress</span>
                <span className="text-primary font-semibold">67% to Level 6</span>
              </div>
              <Progress value={67} className="h-3" />
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Next evolution unlocks: Advanced Meditation Chamber & Intergalactic Alliance Access
              </p>
            </div>

            <div className="flex gap-3">
              <Button 
                size="lg" 
                className="flex-1 bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
                onClick={() => setJoinDialogOpen(true)}
              >
                Join Planet
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-accent/50 hover:border-accent"
                onClick={handleMessage}
              >
                <MessageCircle className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="towns" className="space-y-8">
          <TabsList className="bg-card/50 backdrop-blur-sm border border-primary/30">
            <TabsTrigger value="towns">Towns</TabsTrigger>
            <TabsTrigger value="missions">Collective Missions</TabsTrigger>
            <TabsTrigger value="members">Community</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
          </TabsList>

          <TabsContent value="towns" className="space-y-6">
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-accent" />
                Towns & Communities
              </h3>
              <p className="text-muted-foreground text-sm">
                Towns evolve as members complete quests: Homestead → Settlement → Village → Town → City → Metropolis
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <TownCard
                name="Morning Practice"
                category="Meditation"
                memberCount={342}
                progress={78}
                evolutionLevel="city"
              />
              <TownCard
                name="Mindful Warriors"
                category="Meditation"
                memberCount={156}
                progress={45}
                evolutionLevel="village"
              />
              <TownCard
                name="Zen Beginners"
                category="Meditation"
                memberCount={89}
                progress={15}
                evolutionLevel="settlement"
              />
              <TownCard
                name="Evening Calm"
                category="Meditation"
                memberCount={234}
                progress={92}
                evolutionLevel="metropolis"
              />
            </div>
          </TabsContent>

          <TabsContent value="missions" className="space-y-6">
            <div className="mb-4 p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <p className="text-sm text-muted-foreground flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Collective missions are automatically generated from members' personal quests and progress</span>
              </p>
            </div>
            {missions.map((mission) => (
              <Card
                key={mission.title}
                className={`p-6 bg-card/50 backdrop-blur-sm border-primary/30 ${
                  mission.completed ? "border-accent/50" : ""
                }`}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-start">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="text-xl font-semibold">{mission.title}</h3>
                        {mission.completed && (
                          <Badge className="bg-accent/20 text-accent border-accent/50">
                            Completed
                          </Badge>
                        )}
                      </div>
                      <p className="text-muted-foreground">{mission.description}</p>
                    </div>
                    <Badge variant="outline" className="border-stellar/50 text-stellar">
                      {mission.reward}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        {mission.participants} participants
                      </span>
                      <span className="text-primary font-semibold">{mission.progress}%</span>
                    </div>
                    <Progress value={mission.progress} className="h-2" />
                  </div>

                  {!mission.completed && (
                    <Button 
                      variant="outline" 
                      className="w-full border-primary/50 hover:border-primary"
                      onClick={() => {
                        setSelectedMission(mission);
                        setMissionDialogOpen(true);
                      }}
                    >
                      Join Mission
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="members" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {members.map((member) => (
                <Card key={member.name} className="p-6 text-center bg-card/50 backdrop-blur-sm border-primary/30 hover:border-primary/60 transition-all">
                  <div className="text-5xl mb-3">{member.avatar}</div>
                  <h3 className="font-semibold mb-2">{member.name}</h3>
                  <RankBadge rank={member.rank} size="sm" />
                  <div className="mt-3 text-sm text-muted-foreground">
                    {member.quests} quests completed
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="events" className="space-y-6">
            <Card className="p-8 text-center bg-card/50 backdrop-blur-sm border-primary/30">
              <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">No Upcoming Events</h3>
              <p className="text-muted-foreground mb-6">
                Check back soon for intergalactic challenges and community gatherings
              </p>
              <Button variant="outline" className="border-primary/50">
                Create Event
              </Button>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Dialogs */}
      <JoinPlanetDialog 
        open={joinDialogOpen} 
        onOpenChange={setJoinDialogOpen}
        planetName="Meditation Planet"
      />
      <JoinMissionDialog
        open={missionDialogOpen}
        onOpenChange={setMissionDialogOpen}
        mission={selectedMission}
      />
    </div>
  );
};

export default PlanetView;
