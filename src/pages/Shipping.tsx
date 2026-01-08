import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Package, Truck, RefreshCw, Clock } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Policies</Badge>
          <h1 className="text-4xl font-bold medieval-heading mb-4">Shipping & Returns</h1>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about receiving your handcrafted treasures
          </p>
        </div>

        <div className="space-y-8">
          {/* Shipping Info */}
          <Card className="medieval-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gold">
                <Truck className="h-6 w-6" />
                Shipping Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Processing Time</h3>
                <p>All orders are handcrafted with care. Please allow 3-7 business days for your order to be prepared before shipping.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Domestic Shipping (USA)</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Standard Shipping: 5-7 business days ($5.99)</li>
                  <li>Express Shipping: 2-3 business days ($12.99)</li>
                  <li>Free standard shipping on orders over $75</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">International Shipping</h3>
                <p>We ship internationally! Rates and delivery times vary by location. International orders may be subject to customs fees and import duties.</p>
              </div>
            </CardContent>
          </Card>

          {/* Order Tracking */}
          <Card className="medieval-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gold">
                <Package className="h-6 w-6" />
                Order Tracking
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              <p>Once your order ships, you'll receive an email with tracking information. You can track your package through the carrier's website or by contacting us directly.</p>
            </CardContent>
          </Card>

          {/* Returns */}
          <Card className="medieval-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gold">
                <RefreshCw className="h-6 w-6" />
                Returns & Exchanges
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-foreground/80">
              <div>
                <h3 className="font-semibold text-foreground mb-2">Return Policy</h3>
                <p>We want you to love your purchase! If you're not completely satisfied, you may return unworn, unwashed items within 30 days of delivery for a full refund or exchange.</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">How to Return</h3>
                <ol className="list-decimal list-inside space-y-1">
                  <li>Contact us via email or Instagram DM with your order number</li>
                  <li>Receive your return authorization and shipping instructions</li>
                  <li>Ship items back in their original condition</li>
                  <li>Refund processed within 5-7 business days of receipt</li>
                </ol>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Non-Returnable Items</h3>
                <p>Custom or commissioned pieces are final sale and cannot be returned unless there is a defect.</p>
              </div>
            </CardContent>
          </Card>

          {/* Processing Times */}
          <Card className="medieval-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gold">
                <Clock className="h-6 w-6" />
                Custom Orders
              </CardTitle>
            </CardHeader>
            <CardContent className="text-foreground/80">
              <p>Custom and commissioned pieces require additional crafting time. Typical turnaround for custom orders is 2-4 weeks, depending on complexity. We'll provide an estimated completion date when you place your order.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
