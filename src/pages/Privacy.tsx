import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4">Legal</Badge>
          <h1 className="text-4xl font-bold medieval-heading mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: January 2025</p>
        </div>

        <Card className="medieval-card">
          <CardContent className="prose prose-invert max-w-none p-8 text-foreground/80">
            <h2 className="text-gold">Introduction</h2>
            <p>
              Tinctures, Odds, & Ends ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.
            </p>

            <h2 className="text-gold">Information We Collect</h2>
            <p>We may collect the following types of information:</p>
            <ul>
              <li><strong>Personal Information:</strong> Name, email address, shipping address, billing address, and phone number when you place an order or contact us.</li>
              <li><strong>Payment Information:</strong> Payment details are processed securely through Shopify's payment system. We do not store your complete credit card information.</li>
              <li><strong>Usage Data:</strong> Information about how you interact with our website, including pages visited and time spent on site.</li>
            </ul>

            <h2 className="text-gold">How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul>
              <li>Process and fulfill your orders</li>
              <li>Communicate with you about your orders and inquiries</li>
              <li>Send promotional emails (only if you opt in)</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="text-gold">Information Sharing</h2>
            <p>
              We do not sell or rent your personal information to third parties. We may share your information with:
            </p>
            <ul>
              <li>Shipping carriers to deliver your orders</li>
              <li>Payment processors to complete transactions</li>
              <li>Service providers who assist our operations</li>
            </ul>

            <h2 className="text-gold">Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small files stored on your device that help us remember your preferences and understand how you use our site.
            </p>

            <h2 className="text-gold">Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-gold">Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt out of marketing communications</li>
            </ul>

            <h2 className="text-gold">Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or your personal information, please contact us at contact@tincturesoddsends.com.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
