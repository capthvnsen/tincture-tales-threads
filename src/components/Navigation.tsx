import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/shop', label: 'Shop' },
    { path: '/custom-orders', label: 'Custom Orders' },
    { path: '/about', label: 'Our Story' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="medieval-nav sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift">
            <div className="text-2xl md:text-3xl font-bold medieval-heading">
              Tinctures, Odds, & Ends
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-foreground hover:text-gold transition-colors duration-300 font-medium ${
                  isActive(item.path) ? 'text-gold border-b-2 border-gold' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Cart Icon */}
            <Button variant="ghost" size="icon" className="text-gold hover:text-gold-dark">
              <ShoppingCart className="h-6 w-6" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gold"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gold/30 py-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-foreground hover:text-gold transition-colors duration-300 font-medium px-2 py-1 ${
                    isActive(item.path) ? 'text-gold' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 border-t border-gold/30">
                <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;