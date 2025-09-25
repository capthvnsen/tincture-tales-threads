import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            ✨ Get in Touch ✨
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold medieval-heading mb-6">
            Contact Our Guild
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to connect? We'd love to hear from you! Drop us an email or send us a DM on Instagram - 
            we're always excited to chat about our pieces, answer questions, or discuss custom commissions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          
          {/* Contact Methods */}
          <Card className="medieval-card">
            <CardHeader>
              <CardTitle className="text-2xl medieval-heading">
                Let's Connect!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-gold mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Email Us</h3>
                  <p className="text-muted-foreground mb-2">tincturesoddsandends@gmail.com</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:text-gold"
                    onClick={() => window.open('mailto:tincturesoddsandends@gmail.com')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Send Email
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Instagram className="h-6 w-6 text-gold mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Instagram DM</h3>
                  <p className="text-muted-foreground mb-2">Quick responses & behind-the-scenes content</p>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:text-gold"
                    onClick={() => window.open('https://www.instagram.com/tincturesoddsandends?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Send DM
                  </Button>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="h-6 w-6 text-gold mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Response Time</h3>
                  <p className="text-muted-foreground">1-2 business days</p>
                  <p className="text-sm text-muted-foreground">Monday - Friday</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Location & Social */}
          <div className="space-y-8">
            
            {/* Location */}
            <Card className="medieval-card">
              <CardHeader>
                <CardTitle className="text-xl medieval-heading">
                  Our Workshop
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Salt Lake City, Utah</h3>
                    <p className="text-muted-foreground">Handcrafted locally with love</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Workshop visits by appointment only - reach out to arrange a visit!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="medieval-card">
              <CardHeader>
                <CardTitle className="text-xl medieval-heading">
                  Follow Our Adventures
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Stay connected and see our latest creations, behind-the-scenes content, 
                  and community adventures!
                </p>
                <div className="flex space-x-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="hover:text-gold"
                    onClick={() => window.open('https://www.instagram.com/tincturesoddsandends?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank')}
                  >
                    <Instagram className="h-4 w-4 mr-2" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="hover:text-gold">
                    <Facebook className="h-4 w-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center p-8 medieval-card">
          <h2 className="text-2xl font-bold medieval-heading mb-4">
            Join Our Guild Newsletter
          </h2>
          <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
            Get monthly updates on new arrivals, upcoming convention appearances, 
            behind-the-scenes content, and special offers for guild members.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1 medieval-input"
            />
            <Button variant="medieval" className="px-8">
              Join Guild
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No spam, just magical updates. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;