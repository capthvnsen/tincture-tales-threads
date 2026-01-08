import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Legal</Badge>
          <h1 className="text-4xl font-bold medieval-heading mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <Card className="medieval-card">
          <CardContent className="prose prose-invert max-w-none p-8 text-foreground/80">
            <h2 className="text-gold">Agreement to Terms</h2>
            <p>
              By accessing and using the Tinctures, Odds, & Ends website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.
            </p>

            <h2 className="text-gold">Products and Pricing</h2>
            <p>
              All products are handcrafted and may have slight variations, which adds to their unique character. We reserve the right to modify prices at any time without notice. Prices displayed are in USD unless otherwise noted.
            </p>

            <h2 className="text-gold">Orders and Payment</h2>
            <p>
              By placing an order, you agree to provide accurate and complete information. We reserve the right to refuse or cancel any order for any reason. Payment is required at the time of purchase through our secure checkout powered by Shopify.
            </p>

            <h2 className="text-gold">Shipping and Delivery</h2>
            <p>
              Shipping times are estimates and may vary. We are not responsible for delays caused by shipping carriers or customs processing. Risk of loss and title for items purchased pass to you upon delivery to the carrier.
            </p>

            <h2 className="text-gold">Returns and Refunds</h2>
            <p>
              Please refer to our Shipping & Returns page for detailed information about our return policy. Custom orders are final sale unless defective.
            </p>

            <h2 className="text-gold">Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and designs, is the property of Tinctures, Odds, & Ends and is protected by copyright laws. You may not reproduce, distribute, or use our content without written permission.
            </p>

            <h2 className="text-gold">User Conduct</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use our website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with the proper functioning of the website</li>
              <li>Submit false or misleading information</li>
            </ul>

            <h2 className="text-gold">Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Tinctures, Odds, & Ends shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our website or products.
            </p>

            <h2 className="text-gold">Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Tinctures, Odds, & Ends from any claims, damages, or expenses arising from your violation of these terms or your use of our website.
            </p>

            <h2 className="text-gold">Changes to Terms</h2>
            <p>
              We may update these Terms of Service at any time. Continued use of the website after changes constitutes acceptance of the new terms.
            </p>

            <h2 className="text-gold">Contact</h2>
            <p>
              For questions about these Terms of Service, please contact us at contact@tincturesoddsends.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
