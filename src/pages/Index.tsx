import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Heart, Shield, Sparkles, ArrowRight } from 'lucide-react';
import YouTubeSection from '@/components/YouTubeSection';

// Import the generated images
import heroImage from '@/assets/hero-new.png';
import capeletsImage from '@/assets/capelets-updated-image.svg';
import accessoriesImage from '@/assets/accessories-collection.jpg';
import founderImage from '@/assets/ashlee-founder-photo.jpg';
const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: `url(${heroImage})`
      }}>
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <Badge variant="secondary" className="mb-6 text-lg px-6 py-2">
            ✨ Handcrafted • Sustainable • Historic ✨
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 medieval-heading text-glow text-white">
            Tinctures, Odds, & Ends
          </h1>
          
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed">
            Modest, Sustainable Renaissance Attire for the Fantasy-Hearted Soul
          </p>
          
          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
            Each piece lovingly handcrafted from 100% recycled materials in Salt Lake City. 
            Discover historically-inspired clothing that honors your values and fuels your adventures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="relative text-lg px-8 py-3 bg-gradient-to-br from-purple-900 to-black text-white border-2 border-purple-600 hover:from-purple-800 hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 overflow-hidden group">
              <Link to="/shop">
                {/* Bubble effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-2 left-3 w-2 h-2 bg-purple-300/60 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-1 h-1 bg-white/40 rounded-full animate-bounce" style={{
                  animationDelay: '0.5s'
                }}></div>
                  <div className="absolute bottom-3 left-6 w-1.5 h-1.5 bg-purple-200/50 rounded-full animate-pulse" style={{
                  animationDelay: '1s'
                }}></div>
                  <div className="absolute top-6 left-1/2 w-1 h-1 bg-white/30 rounded-full animate-bounce" style={{
                  animationDelay: '1.5s'
                }}></div>
                  <div className="absolute bottom-4 right-6 w-2 h-2 bg-purple-400/40 rounded-full animate-pulse" style={{
                  animationDelay: '2s'
                }}></div>
                </div>
                <span className="relative z-10">Shop Now</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              </Link>
            </Button>
            
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-16 bg-gold/30 rounded-full">
            <div className="w-1 h-8 bg-gold rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold medieval-heading mb-4">
              Discover Our Enchanted Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              From flowing capelets to intricate accessories, each piece tells a story of craftsmanship and heritage
            </p>
          </div>
          
          <div className="flex justify-center max-w-5xl mx-auto">
            {/* Capelets Collection */}
            <Card className="medieval-card hover-lift cursor-pointer group">
              <div className="relative overflow-hidden rounded-t-lg">
                <img src={capeletsImage} alt="Capelets Collection" className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-burgundy text-white">
                  New Arrivals
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-gold mb-3">Capelets & Cloaks</h3>
                <p className="text-foreground/80 mb-4">
                  The perfect addition to your cosplay! Flowing, elegant pieces inspired by Celtic and Viking traditions.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/shop?category=capelets">
                    Explore Capelets <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Accessories Collection */}
            
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-earth-brown/20 to-forest-green/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold medieval-heading mb-4">
              The Trifecta of Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe you shouldn't have to compromise on modesty, sustainability, or historical accuracy. 
              That's why every piece we create honors all three.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Sustainable */}
            <Card className="medieval-card text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-forest-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-forest-green" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">100% Sustainable</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Crafted from sustainably sourced, 100% natural materials using recycled and upcycled fabrics. 
                  Built to last for generations, not seasons.
                </p>
              </CardContent>
            </Card>

            {/* Handmade */}
            <Card className="medieval-card text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-burnt-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-burnt-orange" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">Lovingly Handmade</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Each stitch sewn with care in our Salt Lake City workshop. No two pieces are exactly alike, 
                  giving you a truly one-of-a-kind treasure.
                </p>
              </CardContent>
            </Card>

            {/* Modest & Historic */}
            <Card className="medieval-card text-center hover-lift">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-burgundy/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-burgundy" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">Modest & Historic</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Designs inspired by Celtic, Viking, German, and English heritage. 
                  Authentic silhouettes that provide comfort and coverage for any adventure.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Founder's Story Teaser */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">Our Story</Badge>
              <h2 className="text-4xl font-bold medieval-heading mb-6">
                From Personal Need to Passionate Craft
              </h2>
              <blockquote className="text-xl italic text-foreground/90 mb-6 pl-6 border-l-4 border-gold">
                "I was done missing out on events because I couldn't find clothing I was satisfied with. 
                I refused to compromise my values... So, I decided to become the solution to my own problem."
              </blockquote>
              <p className="text-foreground/80 mb-8 leading-relaxed">
                What began as creating pieces for friends has blossomed into a mission to serve the fantasy community 
                with attire that honors both heritage and values. Each creation is infused with love, intention, 
                and the fulfillment that comes from doing meaningful work.
              </p>
              <Button asChild variant="medieval" size="lg">
                <Link to="/about">
                  Read Our Full Story <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="medieval-scroll">
                <img src={founderImage} alt="Founder in her workshop" className="w-full h-96 object-cover rounded-lg shadow-2xl" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Sparkles className="h-12 w-12 text-gold" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* YouTube Video Section */}
      <YouTubeSection />

    </div>
  );
};

export default Index;