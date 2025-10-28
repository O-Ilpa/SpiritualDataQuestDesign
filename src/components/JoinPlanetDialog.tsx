import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sparkles, Target, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface JoinPlanetDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  planetName: string;
}

export const JoinPlanetDialog = ({ open, onOpenChange, planetName }: JoinPlanetDialogProps) => {
  const [role, setRole] = useState<"explorer" | "mentor">("explorer");
  const [quest, setQuest] = useState("");

  const handleJoin = () => {
    toast({
      title: "Welcome to " + planetName + "! 🌟",
      description: `You've joined as ${role === "explorer" ? "an Explorer" : "a Mentor"}. Your journey begins now!`,
    });
    onOpenChange(false);
    setQuest("");
    setRole("explorer");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-xl border-primary/30">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <DialogTitle className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Join {planetName}
            </DialogTitle>
          </div>
          <DialogDescription className="text-base">
            Choose your path and begin your journey on this planetary community.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Role Selection */}
          <div className="space-y-3">
            <Label className="text-base font-semibold">Select Your Role</Label>
            <RadioGroup value={role} onValueChange={(v) => setRole(v as "explorer" | "mentor")}>
              <div className="flex items-start space-x-3 p-4 rounded-lg border border-primary/30 hover:border-primary/60 transition-all cursor-pointer bg-background/50">
                <RadioGroupItem value="explorer" id="explorer" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="explorer" className="flex items-center gap-2 cursor-pointer font-semibold text-base mb-1">
                    <Target className="w-4 h-4 text-secondary" />
                    Explorer
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Start a new quest in this topic area. Perfect for beginners on their journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3 p-4 rounded-lg border border-accent/30 hover:border-accent/60 transition-all cursor-pointer bg-background/50">
                <RadioGroupItem value="mentor" id="mentor" className="mt-1" />
                <div className="flex-1">
                  <Label htmlFor="mentor" className="flex items-center gap-2 cursor-pointer font-semibold text-base mb-1">
                    <Users className="w-4 h-4 text-accent" />
                    Mentor
                  </Label>
                  <p className="text-sm text-muted-foreground">
                    Guide others with your experience. Requires verified progress in this area.
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Quest Description */}
          <div className="space-y-3">
            <Label htmlFor="quest" className="text-base font-semibold">
              {role === "explorer" ? "Your Quest Goal" : "How Will You Help?"}
            </Label>
            <Textarea
              id="quest"
              placeholder={
                role === "explorer"
                  ? "Describe what you want to achieve (e.g., 'Master daily meditation practice')"
                  : "Describe your expertise and how you'll support explorers"
              }
              value={quest}
              onChange={(e) => setQuest(e.target.value)}
              className="min-h-[100px] bg-background/50 border-primary/30 focus:border-primary/60"
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-muted">
            Cancel
          </Button>
          <Button 
            onClick={handleJoin} 
            disabled={!quest.trim()}
            className="bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Begin Journey
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
