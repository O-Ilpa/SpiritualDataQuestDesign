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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles, Image as ImageIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface CreatePlanetDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const categories = [
  "Meditation",
  "Energy Healing",
  "Mental Health",
  "Divination",
  "Yoga",
  "Mindfulness",
  "Spiritual Growth",
  "Manifestation",
];

export const CreatePlanetDialog = ({ open, onOpenChange }: CreatePlanetDialogProps) => {
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [townName, setTownName] = useState("");

  const handleCreate = () => {
    const planetName = `${category} Planet`;
    toast({
      title: "Planet Created! 🌍",
      description: `${planetName} with ${townName} homestead has been added to the galaxy. Start inviting explorers!`,
    });
    onOpenChange(false);
    setDescription("");
    setCategory("");
    setTownName("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px] bg-card/95 backdrop-blur-xl border-primary/30 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
            <DialogTitle className="text-2xl bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              Create Your Planet
            </DialogTitle>
          </div>
          <DialogDescription className="text-base">
            Launch a new community and invite others to join your collective mission.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 py-4">
          {/* Category (becomes Planet name) */}
          <div className="space-y-2">
            <Label htmlFor="category" className="text-base font-semibold">
              Planet Category *
            </Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-background/50 border-primary/30">
                <SelectValue placeholder="Select a planet category" />
              </SelectTrigger>
              <SelectContent className="bg-popover/95 backdrop-blur-xl border-primary/30">
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat} Planet
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
              This will become your planet name (e.g., "Meditation Planet")
            </p>
          </div>

          {/* Town Name */}
          <div className="space-y-2">
            <Label htmlFor="townName" className="text-base font-semibold">
              Town Name *
            </Label>
            <Input
              id="townName"
              placeholder="e.g., Morning Practice, Crystal Healing"
              value={townName}
              onChange={(e) => setTownName(e.target.value)}
              className="bg-background/50 border-primary/30 focus:border-primary/60"
            />
            <p className="text-sm text-muted-foreground">
              Towns evolve based on progress: Homestead → Settlement → Village → Town → City → Metropolis
            </p>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description" className="text-base font-semibold">
              Description *
            </Label>
            <Textarea
              id="description"
              placeholder="Describe what this community is about and who should join..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="min-h-[100px] bg-background/50 border-primary/30 focus:border-primary/60"
            />
          </div>

          {/* Collective Goal - Auto-derived info */}
          <div className="space-y-2 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <Label className="text-base font-semibold flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-accent" />
              Collective Mission
            </Label>
            <p className="text-sm text-muted-foreground">
              Your planet's collective goals will be automatically derived from the personal quests of all members. As explorers complete their individual quests, the planet evolves together!
            </p>
          </div>

          {/* Planet Image Upload */}
          <div className="space-y-2">
            <Label className="text-base font-semibold">Planet Image</Label>
            <div className="border-2 border-dashed border-primary/30 rounded-lg p-8 text-center hover:border-primary/60 transition-all cursor-pointer bg-background/50">
              <ImageIcon className="w-12 h-12 mx-auto mb-3 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-1">
                Click to upload or drag and drop
              </p>
              <p className="text-xs text-muted-foreground">
                PNG, JPG up to 5MB
              </p>
            </div>
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)} className="border-muted">
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={!townName.trim() || !description.trim() || !category}
            className="bg-gradient-to-r from-accent to-primary hover:opacity-90 shadow-[0_0_30px_rgba(236,72,153,0.4)]"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Launch Planet
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
