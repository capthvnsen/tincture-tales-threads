import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play } from "lucide-react";

const YouTubeSection = () => {
  // Update this video ID when you have a new latest video
  const latestVideoId = "dQw4w9WgXcQ"; // Replace with actual latest video ID
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold medieval-heading mb-4">
            Latest from Our Workshop
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch our newest creations come to life and get a behind-the-scenes look at our crafting process
          </p>
        </div>

        <div className="medieval-card p-8">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden mb-6">
            {!isLoaded ? (
              <div 
                className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center cursor-pointer group"
                onClick={handleLoadVideo}
              >
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                  <p className="text-lg font-semibold text-foreground mb-2">Watch Latest Video</p>
                  <p className="text-sm text-muted-foreground">Click to load video</p>
                </div>
              </div>
            ) : (
              <iframe
                src={`https://www.youtube.com/embed/${latestVideoId}?autoplay=1&rel=0`}
                title="Latest Workshop Video"
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="gap-2"
              onClick={() => window.open("https://youtube.com/@tincturesoddsandends", "_blank")}
            >
              <ExternalLink className="w-4 h-4" />
              Visit Our YouTube Channel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;