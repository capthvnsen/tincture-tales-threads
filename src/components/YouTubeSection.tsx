import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const YouTubeSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-bold medieval-heading mb-4">
            Follow Our Journey
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Watch behind-the-scenes content and see the craftsmanship that goes into every piece
          </p>
          
          <Button 
            variant="outline" 
            size="lg" 
            className="gap-2"
            asChild
          >
            <a 
              href="https://www.youtube.com/@TincturesOddsandEnds" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Our YouTube Channel
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;