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
import { Checkbox } from "@/components/ui/checkbox";
import { Target, Trophy, Users } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface JoinMissionDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mission: {
    title: string;
    description: string;
    reward: string;
  };
}

export const JoinMissionDialog = ({ open, onOpenChange, mission }: JoinMissionDialogProps) => {
  const [agreed, setAgreed] = useState(false);

  const handleJoin = () => {
    toast({
      title: "Mission Accepted! 🎯",
      description: `You've joined "${mission.title}". Track your progress in your profile.`,
    });
    onOpenChange(false);
    setAgreed(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] bg-card/95 backdrop-blur-xl border-primary/30">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-6 h-6 text-primary animate-pulse" />
            <DialogTitle className="text-xl">Join Mission</DialogTitle>
          </div>
          <DialogDescription className="text-base">
            Commit to this planetary mission and contribute to collective growth.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Mission Details */}
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/30">
              <h3 className="font-semibold text-lg mb-2">{mission.title}</h3>
              <p className="text-muted-foreground">{mission.description}</p>
            </div>

            {/* Rewards */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-stellar/10 border border-stellar/30">
              <Trophy className="w-5 h-5 text-stellar mt-0.5" />
              <div>
                <p className="font-semibold text-sm mb-1">Mission Reward</p>
                <p className="text-sm text-muted-foreground">{mission.reward}</p>
              </div>
            </div>

            {/* Community Impact */}
            <div className="flex items-start gap-3 p-4 rounded-lg bg-accent/10 border border-accent/30">
              <Users className="w-5 h-5 text-accent mt-0.5" />
              <div>
                <p className="font-semibold text-sm mb-1">Community Impact</p>
                <p className="text-sm text-muted-foreground">
                  Your participation contributes to the planet's evolution progress and helps unlock new features for all members.
                </p>
              </div>
            </div>
          </div>

          {/* Agreement */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="commitment"
              checked={agreed}
              onCheckedChange={(checked) => setAgreed(checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="commitment" className="text-sm cursor-pointer leading-relaxed">
              I commit to actively participating in this mission and understand that my progress will be shared with the community to inspire collective growth.
            </Label>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-muted">
            Cancel
          </Button>
          <Button
            onClick={handleJoin}
            disabled={!agreed}
            className="bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            <Target className="w-4 h-4 mr-2" />
            Accept Mission
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
