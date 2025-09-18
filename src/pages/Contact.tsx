import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, MapPin, Clock, Instagram, Facebook, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. We'll get back to you within 1-2 business days.",
    });
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

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
            We'd love to hear from you! Whether you have questions about our pieces, 
            need help with an order, or want to discuss a custom commission, we're here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <Card className="medieval-card">
            <CardHeader>
              <CardTitle className="text-2xl medieval-heading">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="medieval-input"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="medieval-input"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    placeholder="What can we help you with?"
                    className="medieval-input"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    placeholder="Tell us more about how we can help you..."
                    className="medieval-input min-h-[150px]"
                    required
                  />
                </div>

                <Button type="submit" variant="gold" size="lg" className="w-full">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & FAQ */}
          <div className="space-y-8">
            
            {/* Contact Details */}
            <Card className="medieval-card">
              <CardHeader>
                <CardTitle className="text-xl medieval-heading">
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Email Us</h3>
                    <p className="text-muted-foreground">contact@tincturesoddsends.com</p>
                    <p className="text-sm text-muted-foreground">We respond within 1-2 business days</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-gold mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Location</h3>
                    <p className="text-muted-foreground">Salt Lake City, Utah</p>
                    <p className="text-sm text-muted-foreground">Handcrafted locally with love</p>
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
                  <Button variant="outline" size="sm" className="hover:text-gold">
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

            {/* Quick FAQ */}
            <Card className="medieval-card">
              <CardHeader>
                <CardTitle className="text-xl medieval-heading">
                  Quick Questions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                
                <div>
                  <h4 className="font-semibold text-gold mb-2">Do you ship internationally?</h4>
                  <p className="text-sm text-muted-foreground">
                    Currently we ship within the United States. International shipping coming soon!
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gold mb-2">Can I visit your workshop?</h4>
                  <p className="text-sm text-muted-foreground">
                    We operate by appointment only. Contact us to arrange a visit to our Salt Lake City workshop.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gold mb-2">Do you attend Renaissance fairs?</h4>
                  <p className="text-sm text-muted-foreground">
                    Yes! Follow us on social media for our upcoming fair appearances and convention booths.
                  </p>
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