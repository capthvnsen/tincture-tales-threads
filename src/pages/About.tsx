import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Heart, Leaf, Shield, MapPin, Sparkles, ArrowRight } from 'lucide-react';

// Import the founder image
import founderImage from '@/assets/ashlee-founder-photo.jpg';

const About = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            ✨ Our Story ✨
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold medieval-heading mb-6">
            From Passionate Need to Purposeful Craft
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every great venture begins with a problem seeking a solution. 
            For us, that problem was finding Renaissance attire that honored our values 
            without compromise. Here's how we became the solution.
          </p>
        </div>

        {/* Founder's Story */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <div className="medieval-scroll">
              <img 
                src={founderImage} 
                alt="Ashlee C. E. Hansen in her workshop" 
                className="w-full h-96 object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Sparkles className="h-12 w-12 text-gold" />
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold medieval-heading mb-6">
              Meet Ashlee C. E. Hansen
            </h2>
            <div className="space-y-4 text-foreground/90 leading-relaxed">
              <p>
                For as long as I can remember, I've had a passion for high fantasy and the cultures 
                of my ancestors – Celtic, Viking, German, and English. As I found my fantasy community, 
                I loved attending Renaissance Fairs and other costume events, but I struggled to find 
                costume-wear that was modest, sustainable, and historically accurate.
              </p>
              
              <p>
                I was done missing out on events because I couldn't find clothing I was satisfied with. 
                I refused to compromise my values by shopping fast fashion or settling for less modest pieces. 
                It seemed that perfect trifecta – modest, sustainable, historically accurate – would elude me 
                everywhere I shopped.
              </p>
              
              <blockquote className="text-xl italic pl-6 border-l-4 border-gold my-6">
                "So, I decided to become the solution to my own problem."
              </blockquote>
              
              <p>
                I began to craft pieces I loved for my friends and myself. The fulfillment I felt in creating 
                my ideal product, and the confidence I felt when wearing my own handiwork, led me to launch 
                Tinctures, Odds, & Ends. Each creation is infused with love and intention, and I take pride 
                in knowing that when you wear one of my pieces, you're wearing something made with care.
              </p>
            </div>
            
            <div className="mt-8 flex items-center text-muted-foreground">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Handcrafting in Salt Lake City, Utah</span>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="text-center mb-16 p-8 medieval-card">
          <h2 className="text-3xl font-bold medieval-heading mb-6">Our Mission</h2>
          <p className="text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed">
            Our mission is to provide Renaissance and fantasy enthusiasts with attire that honors their values – 
            handcrafted with care, historically inspired, environmentally sustainable, and respectful of modesty – 
            so they can fully enjoy their adventures in costume without compromise.
          </p>
        </div>

        {/* The Tinctures, Odds, & Ends Story */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold medieval-heading mb-8 text-center">
            Why "Tinctures, Odds, & Ends"?
          </h2>
          <Card className="medieval-card">
            <CardContent className="p-8">
              <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-foreground/90 leading-relaxed mb-6">
                  In alchemy, a <span className="text-gold font-semibold">tincture</span> is a potion meant to heal or enchant. 
                  In the same way, each of our creations is imbued with a special magic – the power to transform how you feel 
                  when you step into character.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed">
                  <span className="text-gold font-semibold">Odds & Ends</span> reflects the delightful variety and uniqueness 
                  of pieces you'll find here. Like a medieval merchant's curious collection, each item has its own story, 
                  its own purpose, its own adventure waiting to unfold.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Our Values Deep Dive */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold medieval-heading mb-12 text-center">
            The Values That Guide Every Stitch
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Sustainability */}
            <Card className="medieval-card hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-forest-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-8 w-8 text-forest-green" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">Sustainability First</h3>
                <div className="text-foreground/80 leading-relaxed space-y-3">
                  <p>
                    Every piece is crafted from 100% sustainable, natural materials – primarily cotton and linen. 
                    We prioritize recycled and upcycled fabrics, giving new life to beautiful materials.
                  </p>
                  <p>
                    Our "buy-for-life" philosophy means creating garments durable enough to last for generations, 
                    not seasons. We're the antithesis of fast fashion.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Handcrafted */}
            <Card className="medieval-card hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-burnt-orange/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-burnt-orange" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">Handcrafted with Love</h3>
                <div className="text-foreground/80 leading-relaxed space-y-3">
                  <p>
                    Each piece is meticulously handmade in our Salt Lake City workshop. No mass production, 
                    no factory lines – just careful, intentional craftsmanship.
                  </p>
                  <p>
                    Every stitch is sewn with care, making each item truly one-of-a-kind. When you wear our pieces, 
                    you're wearing something infused with love and positive intention.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Historical Accuracy */}
            <Card className="medieval-card hover-lift">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-burgundy/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-8 w-8 text-burgundy" />
                </div>
                <h3 className="text-xl font-bold text-gold mb-4">Modest & Historic</h3>
                <div className="text-foreground/80 leading-relaxed space-y-3">
                  <p>
                    Our designs draw inspiration from Celtic, Viking, German, and English historical clothing, 
                    ensuring authenticity in both look and feel.
                  </p>
                  <p>
                    We believe in modest fashion that provides comfort and coverage without sacrificing style. 
                    Perfect for those who want to enjoy events while honoring their personal values.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Community & Impact */}
        <div className="mb-16 p-8 medieval-card">
          <h2 className="text-3xl font-bold medieval-heading mb-6 text-center">
            Supporting Community & Ethical Craft
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gold mb-4">Local & Ethical</h3>
                <p className="text-foreground/80 leading-relaxed">
                  Everything is handmade right here in Salt Lake City, Utah. We believe in supporting local artisans, 
                  fair labor practices, and the intimate scale of creation that allows for personal attention to every detail. 
                  No mass factory production – just honest, ethical craftsmanship.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gold mb-4">Fantasy Community</h3>
                <p className="text-foreground/80 leading-relaxed">
                  We're not just selling products – we're serving a community. Renaissance fair enthusiasts, cosplayers, 
                  LARP adventurers, and fantasy lovers all deserve attire that lets them fully embrace their passion 
                  without compromising their values.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold medieval-heading mb-6">
            Ready to Begin Your Adventure?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of adventurers who refuse to compromise on their values. 
            Discover pieces that honor your heritage and fuel your imagination.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="gold" size="lg">
              <Link to="/shop">
                Explore Our Shop <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;