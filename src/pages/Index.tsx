import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { StarField } from "@/components/StarField";
import { ArrowRight, Mail, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const donateRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    const elements = [heroRef, aboutRef, donateRef, contactRef];

    elements.forEach((ref) => {
      if (ref.current) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add("animate-in");
              }
            });
          },
          { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
        );

        observer.observe(ref.current);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  const parallaxOffset = scrollY * 0.5;

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <StarField />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center opacity-0 transition-all duration-1000 ease-out"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      >
        <div className="container mx-auto px-4 text-center space-y-8 relative z-10">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 backdrop-blur-sm mb-4 transition-all duration-700 delay-200"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.3, 50)}px)`,
              opacity: Math.max(1 - scrollY / 500, 0),
            }}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm text-primary font-medium">Revolutionary Learning Platform</span>
          </div>

          <h1
            className="text-7xl md:text-9xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent transition-all duration-1000 delay-300"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.2, 30)}px)`,
              opacity: Math.max(1 - scrollY / 600, 0),
            }}
          >
            Meet QuestAI
          </h1>

          <p
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-500"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.15, 20)}px)`,
              opacity: Math.max(1 - scrollY / 700, 0),
            }}
          >
            Experience a new dimension of collaborative learning where communities
            become galaxies and achievements become constellations
          </p>

          <div
            className="transition-all duration-1000 delay-700"
            style={{
              transform: `translateY(${Math.min(scrollY * 0.1, 15)}px)`,
              opacity: Math.max(1 - scrollY / 800, 0),
            }}
          >
            <Link to="/galaxies">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)] group"
              >
                Explore the Galaxy
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />
      </section>

      {/* About Section */}
      <section
        ref={aboutRef}
        className="relative py-12 opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              A Universe of
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Possibility
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              QuestAI transforms how communities learn and grow together. Each planet
              represents a thriving community, each quest a shared journey, and every
              achievement a star added to your constellation. Join thousands of explorers
              on missions that matter.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-primary/20 hover:border-primary/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-primary mb-4">12+</div>
                <div className="text-lg font-semibold mb-2">Active Planets</div>
                <div className="text-sm text-muted-foreground">
                  Diverse communities exploring different domains
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-accent/20 hover:border-accent/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-accent mb-4">5.2K+</div>
                <div className="text-lg font-semibold mb-2">Explorers</div>
                <div className="text-sm text-muted-foreground">
                  Learners growing together across the galaxy
                </div>
              </div>
              <div className="p-8 rounded-2xl bg-card/50 backdrop-blur-sm border border-secondary/20 hover:border-secondary/40 transition-all duration-500 hover:transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-secondary mb-4">847+</div>
                <div className="text-lg font-semibold mb-2">Active Quests</div>
                <div className="text-sm text-muted-foreground">
                  Missions completed and achievements unlocked
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section
        ref={donateRef}
        className="relative py-12  opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <Heart className="w-16 h-16 mx-auto text-primary animate-pulse" />
            <h2 className="text-5xl md:text-6xl font-bold text-foreground">
              Support the
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Mission
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Help us keep the galaxy expanding. Your contribution powers new features,
              supports our community, and keeps QuestAI free for explorers everywhere.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 shadow-[0_0_30px_rgba(168,85,247,0.4)]"
              >
                <Heart className="w-5 h-5 mr-2" />
                Make a Donation
              </Button>
              <Button size="lg" variant="outline" className="border-accent/50 hover:border-accent">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        ref={contactRef}
        className="relative py-12  opacity-0 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <Mail className="w-16 h-16 mx-auto text-accent" />
              <h2 className="text-5xl md:text-6xl font-bold text-foreground">
                Get in
                <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Have questions or ideas? We'd love to hear from you.
              </p>
            </div>

            <form className="space-y-6 mt-12">
              <div className="space-y-2">
                <Input
                  placeholder="Your Name"
                  className="h-14 bg-card/50 backdrop-blur-sm border-primary/30 focus:border-primary/60"
                />
              </div>
              <div className="space-y-2">
                <Input
                  type="email"
                  placeholder="Your Email"
                  className="h-14 bg-card/50 backdrop-blur-sm border-primary/30 focus:border-primary/60"
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  placeholder="Your Message"
                  className="min-h-[150px] bg-card/50 backdrop-blur-sm border-primary/30 focus:border-primary/60"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-accent hover:bg-accent/90 shadow-[0_0_30px_rgba(234,88,12,0.4)]"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2025 QuestAI. Empowering communities across the galaxy.</p>
        </div>
      </footer>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse pointer-events-none"
        style={{ animationDelay: "1s" }}
      />
    </div>
  );
};

export default Index;