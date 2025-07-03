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
    { path: '/', label: 'Home', color: 'emerald' },
    { path: '/shop', label: 'Shop', color: 'purple' },
    { path: '/custom-orders', label: 'Custom Orders', color: 'blue' },
    { path: '/about', label: 'Our Story', color: 'amber' },
    { path: '/contact', label: 'Contact', color: 'rose' },
  ];

  const PotionBottle = ({ item, isActive }: { item: typeof navItems[0], isActive: boolean }) => (
    <Link
      to={item.path}
      className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-2"
    >
      {/* Potion Bottle */}
      <div className="relative">
        {/* Bottle Glow Effect */}
        <div className={`absolute inset-0 rounded-full blur-lg transition-all duration-300 ${
          isActive 
            ? 'bg-gold/40 scale-110' 
            : 'bg-gold/0 group-hover:bg-gold/30 group-hover:scale-105'
        }`} />
        
        {/* Antique Bottle Container */}
        <div className="relative">
          {/* Cork */}
          <div className={`relative z-10 mx-auto w-6 h-3 rounded-t-lg transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-b from-earth-brown to-earth-light border border-earth-brown shadow-sm'
              : 'bg-gradient-to-b from-earth-brown/80 to-earth-light/60 border border-earth-brown/60 group-hover:from-earth-brown group-hover:to-earth-light group-hover:border-earth-brown'
          }`}>
            {/* Cork texture lines */}
            <div className="absolute inset-1 space-y-0.5">
              <div className="h-0.5 bg-earth-brown/40 rounded"></div>
              <div className="h-0.5 bg-earth-brown/40 rounded"></div>
            </div>
          </div>
          
          {/* Bottle Neck */}
          <div className={`relative mx-auto w-4 h-4 transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-b from-parchment/30 to-parchment/20 border-x-2 border-gold shadow-inner'
              : 'bg-gradient-to-b from-parchment/20 to-parchment/10 border-x-2 border-gold/50 group-hover:border-gold group-hover:from-parchment/25 group-hover:to-parchment/15'
          }`}>
            {/* Antique glass texture */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
          </div>
          
          {/* Bottle Body - Bulbous Shape */}
          <div className={`relative w-14 h-14 mx-auto transition-all duration-300 ${
            isActive
              ? 'bg-gradient-to-b from-parchment/30 to-parchment/20 border-2 border-gold shadow-lg'
              : 'bg-gradient-to-b from-parchment/20 to-parchment/10 border-2 border-gold/50 group-hover:border-gold group-hover:from-parchment/25 group-hover:to-parchment/15'
          }`}
          style={{
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%'
          }}>
            {/* Antique glass shine effect */}
            <div className="absolute top-2 left-2 w-3 h-6 bg-gradient-to-br from-white/30 to-transparent rounded-full"></div>
            
            {/* Aged glass texture */}
            <div className="absolute inset-1 rounded-full opacity-30">
              <div className="w-full h-full bg-gradient-to-br from-transparent via-earth-brown/10 to-earth-brown/20 rounded-full"></div>
            </div>
            
            {/* Liquid - fills bulb shape */}
            <div className={`absolute bottom-1 left-1 right-1 transition-all duration-500 ${
              item.color === 'emerald' ? 'bg-gradient-to-t from-emerald-700 to-emerald-500' :
              item.color === 'purple' ? 'bg-gradient-to-t from-purple-700 to-purple-500' :
              item.color === 'blue' ? 'bg-gradient-to-t from-blue-700 to-blue-500' :
              item.color === 'amber' ? 'bg-gradient-to-t from-amber-700 to-amber-500' :
              'bg-gradient-to-t from-rose-700 to-rose-500'
            } group-hover:animate-pulse`}
            style={{
              height: '75%',
              borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
              filter: 'brightness(0.9) saturate(1.2)'
            }}>
              {/* Liquid surface shine */}
              <div className="absolute top-1 left-2 right-2 h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
              
              {/* Bubbles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-4 left-3 w-1 h-1 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
                <div className="absolute top-6 right-3 w-1 h-1 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                <div className="absolute top-8 left-4 w-0.5 h-0.5 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
                <div className="absolute top-5 right-4 w-0.5 h-0.5 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '1.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Antique Label */}
      <div className={`mt-2 text-xs font-medium transition-all duration-300 ${
        isActive 
          ? 'text-gold scale-110' 
          : 'text-foreground/80 group-hover:text-gold group-hover:scale-105'
      }`}>
        {item.label}
      </div>
    </Link>
  );

  const Cauldron = () => (
    <Button variant="ghost" size="icon" className="group relative text-gold hover:text-gold-dark transition-all duration-300 hover:-translate-y-1">
      {/* Cauldron Glow */}
      <div className="absolute inset-0 rounded-full bg-gold/0 group-hover:bg-gold/20 blur-md transition-all duration-300" />
      
      {/* Cauldron Body */}
      <div className="relative">
        <div className="w-8 h-6 bg-gradient-to-b from-muted to-muted-foreground/20 rounded-b-full border-2 border-gold/50 group-hover:border-gold transition-all duration-300">
          {/* Legs */}
          <div className="absolute -bottom-1 left-1 w-1 h-2 bg-gold/60 rounded-b" />
          <div className="absolute -bottom-1 right-1 w-1 h-2 bg-gold/60 rounded-b" />
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-gold/60 rounded-b" />
          
          {/* Handle */}
          <div className="absolute left-0 top-1 w-1 h-3 border-l-2 border-gold/50 rounded-l-full group-hover:border-gold transition-all duration-300" />
          <div className="absolute right-0 top-1 w-1 h-3 border-r-2 border-gold/50 rounded-r-full group-hover:border-gold transition-all duration-300" />
        </div>
        
        {/* Steam/Smoke */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-0.5 h-3 bg-gradient-to-t from-gold/60 to-transparent animate-pulse" />
        </div>
      </div>
    </Button>
  );

  return (
    <nav className="sticky top-0 z-50 shadow-lg" style={{
      background: 'linear-gradient(135deg, hsl(var(--earth-brown)) 0%, hsl(var(--forest-green)) 100%)',
      borderBottom: '3px solid hsl(var(--gold) / 0.3)'
    }}>
      {/* Alchemist Shelf Texture */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 2px,
            hsl(var(--earth-brown)) 2px,
            hsl(var(--earth-brown)) 4px
          ),
          repeating-linear-gradient(
            0deg,
            transparent,
            transparent 20px,
            hsl(var(--gold) / 0.1) 20px,
            hsl(var(--gold) / 0.1) 22px
          )
        `
      }} />
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift relative z-10">
            <div className="text-2xl md:text-3xl font-bold medieval-heading">
              Tinctures, Odds, & Ends
            </div>
          </Link>

          {/* Desktop Navigation - Potion Shelf */}
          <div className="hidden md:flex items-end space-x-6 pb-2">
            {navItems.map((item) => (
              <PotionBottle 
                key={item.path} 
                item={item} 
                isActive={isActive(item.path)} 
              />
            ))}
            
            {/* Cauldron Cart */}
            <div className="ml-4">
              <Cauldron />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gold relative z-10"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gold/30 py-4 relative z-10">
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