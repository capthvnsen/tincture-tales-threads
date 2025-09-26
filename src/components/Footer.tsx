import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-earth-brown to-earth-brown-light border-t-2 border-gold/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-gold mb-4">Tinctures, Odds, & Ends</h3>
            <p className="text-foreground/80 mb-4 leading-relaxed">
              Handcrafted, sustainable Renaissance attire and fantasy costumes. 
              Each piece is lovingly made from 100% recycled materials in Salt Lake City, Utah.
            </p>
            <div className="flex items-center space-x-2 text-foreground/70">
              <MapPin className="h-4 w-4" />
              <span>Salt Lake City, Utah</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-foreground/80 hover:text-gold transition-colors">
                  Shop All Items
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-foreground/80 hover:text-gold transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-foreground/80 hover:text-gold transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/shipping" className="text-foreground/80 hover:text-gold transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-foreground/80 hover:text-gold transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-foreground/80 hover:text-gold transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-foreground/80 hover:text-gold transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>


        {/* Social & Copyright */}
        <div className="border-t border-gold/30 pt-6 mt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div className="flex space-x-4 mb-4 sm:mb-0">
              <a href="https://www.instagram.com/tincturesoddsandends?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-foreground/60 hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="mailto:contact@tincturesoddsends.com" className="text-foreground/60 hover:text-gold transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <p className="text-foreground/60 text-sm">
              © 2024 Tinctures, Odds, & Ends. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;