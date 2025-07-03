import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Wand2, Clock, DollarSign, Users, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CustomOrders = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    itemType: '',
    description: '',
    inspiration: '',
    colors: '',
    size: '',
    deadline: '',
    budget: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send to an API
    toast({
      title: "Request Submitted!",
      description: "We'll review your custom order request and get back to you within 2 business days.",
    });
    // Reset form
    setFormData({
      name: '', email: '', phone: '', itemType: '', description: '',
      inspiration: '', colors: '', size: '', deadline: '', budget: ''
    });
  };

  const itemTypes = [
    'Capelet/Cloak',
    'Dress/Gown', 
    'Tunic/Tabard',
    'Belt/Accessories',
    'Jewelry',
    'Complete Outfit',
    'Other'
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4 text-lg px-6 py-2">
            ✨ Custom Commissions ✨
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold medieval-heading mb-4">
            Bring Your Vision to Life
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you need a costume to embody your original character or attire representing 
            a specific historical clan, we can bring your vision to life with handcrafted perfection.
          </p>
        </div>

        {/* Process Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="medieval-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wand2 className="h-6 w-6 text-gold" />
              </div>
              <h3 className="text-lg font-semibold text-gold mb-2">1. Share Your Vision</h3>
              <p className="text-sm text-muted-foreground">
                Tell us about your dream piece, inspiration, and requirements
              </p>
            </CardContent>
          </Card>

          <Card className="medieval-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-forest-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-forest-green" />
              </div>
              <h3 className="text-lg font-semibold text-gold mb-2">2. We Collaborate</h3>
              <p className="text-sm text-muted-foreground">
                We'll discuss details, pricing, and timeline within 2 business days
              </p>
            </CardContent>
          </Card>

          <Card className="medieval-card text-center">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-burgundy/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-6 w-6 text-burgundy" />
              </div>
              <h3 className="text-lg font-semibold text-gold mb-2">3. Craft & Deliver</h3>
              <p className="text-sm text-muted-foreground">
                Your unique piece is handcrafted with love and delivered to you
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Custom Order Form */}
        <Card className="medieval-card">
          <CardHeader>
            <CardTitle className="text-2xl medieval-heading text-center">
              Custom Order Request Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name *</Label>
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
                <Label htmlFor="phone">Phone Number (Optional)</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="medieval-input"
                />
              </div>

              {/* Item Details */}
              <div className="space-y-2">
                <Label htmlFor="itemType">Type of Item Desired *</Label>
                <Select value={formData.itemType} onValueChange={(value) => handleInputChange('itemType', value)}>
                  <SelectTrigger className="medieval-input">
                    <SelectValue placeholder="Select item type" />
                  </SelectTrigger>
                  <SelectContent>
                    {itemTypes.map(type => (
                      <SelectItem key={type} value={type.toLowerCase()}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Detailed Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="Describe your vision in detail. What style, features, or specific elements would you like? The more detail you provide, the better we can bring your vision to life."
                  className="medieval-input min-h-[120px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="inspiration">Inspiration & References</Label>
                <Textarea
                  id="inspiration"
                  value={formData.inspiration}
                  onChange={(e) => handleInputChange('inspiration', e.target.value)}
                  placeholder="Tell us about your inspiration! Historical period, character, culture, or any reference images you'd like us to consider."
                  className="medieval-input"
                />
              </div>

              {/* Specifications */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="colors">Preferred Colors</Label>
                  <Input
                    id="colors"
                    value={formData.colors}
                    onChange={(e) => handleInputChange('colors', e.target.value)}
                    placeholder="e.g., Deep forest green, burgundy accents"
                    className="medieval-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="size">Size/Measurements</Label>
                  <Input
                    id="size"
                    value={formData.size}
                    onChange={(e) => handleInputChange('size', e.target.value)}
                    placeholder="e.g., Medium, or specific measurements"
                    className="medieval-input"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="deadline">Needed By Date</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => handleInputChange('deadline', e.target.value)}
                    className="medieval-input"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Budget Range</Label>
                  <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                    <SelectTrigger className="medieval-input">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-100">Under $100</SelectItem>
                      <SelectItem value="100-200">$100 - $200</SelectItem>
                      <SelectItem value="200-300">$200 - $300</SelectItem>
                      <SelectItem value="300-500">$300 - $500</SelectItem>
                      <SelectItem value="500-plus">$500+</SelectItem>
                      <SelectItem value="flexible">Flexible/TBD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <Button type="submit" variant="gold" size="lg" className="px-12">
                  Submit Custom Request
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  We'll review your request and respond within 2 business days with details and pricing.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <Card className="medieval-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-gold mr-3" />
                <h3 className="text-lg font-semibold text-gold">Timeline</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Simple items: 2-3 weeks</li>
                <li>• Complex outfits: 4-6 weeks</li>
                <li>• Rush orders available (additional fee)</li>
                <li>• Holiday seasons may extend timelines</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="medieval-card">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <DollarSign className="h-6 w-6 text-gold mr-3" />
                <h3 className="text-lg font-semibold text-gold">Pricing</h3>
              </div>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Accessories: $30-$100</li>
                <li>• Capelets: $80-$200</li>
                <li>• Full outfits: $200-$500+</li>
                <li>• Pricing depends on complexity and materials</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CustomOrders;