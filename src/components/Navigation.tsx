import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '/lovable-uploads/8be59ab0-b5af-4d86-8c0f-a2ed527d5404.png';
const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;
  const navItems = [{
    path: '/',
    label: 'Home',
    color: 'emerald-potion',
    shape: 'round'
  }, {
    path: '/shop',
    label: 'Shop',
    color: 'purple-potion',
    shape: 'teardrop'
  }, {
    path: '/custom-orders',
    label: 'Custom Orders',
    color: 'sapphire-potion',
    shape: 'conical'
  }, {
    path: '/about',
    label: 'Our Story',
    color: 'amber-potion',
    shape: 'round'
  }, {
    path: '/contact',
    label: 'Contact',
    color: 'crimson-potion',
    shape: 'teardrop'
  }];
  const getBottleShape = (shape: string) => {
    switch (shape) {
      case 'teardrop':
        return '65% 35% 60% 40% / 70% 70% 30% 30%';
      case 'conical':
        return '85% 15% 50% 50% / 40% 40% 60% 60%';
      default: // round
        return '50% 50% 50% 50% / 55% 55% 45% 45%';
    }
  };

  const PotionBottle = ({
    item,
    isActive
  }: {
    item: typeof navItems[0];
    isActive: boolean;
  }) => <Link to={item.path} className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
      {/* Wooden Shelf Shadow */}
      <div className="absolute -bottom-1 w-10 h-2 bg-rustic-brown-dark/30 rounded-full blur-sm"></div>
      
      {/* Authentic Alchemy Bottle */}
      <div className="relative">
        {/* Mystical Glow */}
        <div className={`absolute inset-0 rounded-full blur-md transition-all duration-500 ${isActive ? `bg-${item.color}/40 scale-110` : `bg-${item.color}/0 group-hover:bg-${item.color}/30 group-hover:scale-105`}`} />
        
        {/* Bottle Container */}
        <div className="relative">
          {/* Wax Seal Cork */}
          <div className={`relative z-10 mx-auto w-3 h-2 rounded-t transition-all duration-300 ${isActive ? 'bg-gradient-to-b from-rustic-brown to-rustic-brown-light border border-rustic-brown-dark shadow-sm' : 'bg-gradient-to-b from-rustic-brown/80 to-rustic-brown-light/60 border border-rustic-brown/60 group-hover:from-rustic-brown group-hover:to-rustic-brown-light group-hover:border-rustic-brown-dark'}`}>
            {/* Wax seal texture */}
            <div className="absolute inset-0.5 bg-gradient-radial from-rustic-brown-dark/20 to-transparent rounded"></div>
            {/* Cork lines */}
            <div className="absolute top-0.5 left-0.5 right-0.5 h-0.5 bg-rustic-brown-dark/40 rounded"></div>
          </div>
          
          {/* Elongated Neck */}
          <div className={`relative mx-auto w-2.5 h-3 transition-all duration-300 ${isActive ? 'bg-gradient-to-b from-parchment/30 to-parchment/20 border-x border-rustic-brown-dark/60' : 'bg-gradient-to-b from-parchment/20 to-parchment/15 border-x border-rustic-brown/40 group-hover:border-rustic-brown-dark/50 group-hover:from-parchment/25'}`}>
            {/* Glass reflection on neck */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent"></div>
            {/* Neck ridges */}
            <div className="absolute top-1 left-0 right-0 h-0.5 border-t border-white/10"></div>
          </div>
          
          {/* Variable Bottle Body Shape */}
          <div 
            className={`relative w-8 h-8 mx-auto transition-all duration-300 ${isActive ? 'bg-gradient-to-b from-parchment/30 to-parchment/20 border border-rustic-brown-dark/70 shadow-lg' : 'bg-gradient-to-b from-parchment/20 to-parchment/15 border border-rustic-brown/50 group-hover:border-rustic-brown-dark/60 group-hover:from-parchment/25'}`} 
            style={{ borderRadius: getBottleShape(item.shape) }}
          >
            {/* Enhanced glass shine */}
            <div className="absolute top-1.5 left-1.5 w-2 h-4 bg-gradient-to-br from-white/35 to-transparent rounded-full opacity-80"></div>
            
            {/* Secondary glass highlight */}
            <div className="absolute top-3 right-1.5 w-1 h-2 bg-gradient-to-bl from-white/20 to-transparent rounded-full"></div>
            
            {/* Glass imperfections */}
            <div className="absolute inset-1 opacity-20" style={{ borderRadius: getBottleShape(item.shape) }}>
              <div className="w-full h-full bg-gradient-to-br from-transparent via-rustic-brown/8 to-rustic-brown/15" style={{ borderRadius: getBottleShape(item.shape) }}></div>
            </div>
            
            {/* Potion Liquid with authentic colors */}
            <div 
              className={`absolute bottom-0.5 left-0.5 right-0.5 transition-all duration-700 group-hover:animate-pulse`}
              style={{
                height: '75%',
                borderRadius: getBottleShape(item.shape),
                background: `linear-gradient(to top, hsl(var(--${item.color})), hsl(var(--${item.color}) / 0.8))`,
                filter: 'brightness(0.9) saturate(1.4)'
              }}
            >
              {/* Liquid surface shimmer */}
              <div className="absolute top-0.5 left-1 right-1 h-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"></div>
              
              {/* Floating herb particles */}
              <div className="absolute inset-0 opacity-60">
                <div className="absolute top-2 left-2 w-0.5 h-1 bg-moss-green/80 rounded-full rotate-12"></div>
                <div className="absolute top-4 right-2.5 w-0.5 h-0.5 bg-moss-green/60 rounded-full"></div>
                <div className="absolute top-3 left-3 w-0.5 h-0.5 bg-moss-green/70 rounded-full"></div>
              </div>
              
              {/* Enhanced mystical bubbles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute top-2 left-2 w-0.5 h-0.5 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '0s', animationDuration: '2s' }} />
                <div className="absolute top-3.5 right-2 w-0.5 h-0.5 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '0.8s', animationDuration: '2.5s' }} />
                <div className="absolute top-5 left-3 w-0.5 h-0.5 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '1.6s', animationDuration: '2s' }} />
                <div className="absolute top-4.5 right-3 w-0.5 h-0.5 bg-white/70 rounded-full animate-ping" style={{ animationDelay: '2.4s', animationDuration: '2.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Rustic Label */}
      <div className={`mt-1.5 text-xs font-medium transition-all duration-300 ${isActive ? 'text-moss-green-light scale-105' : 'text-foreground/70 group-hover:text-moss-green-light group-hover:scale-100'}`}>
        {item.label}
      </div>
    </Link>;
  const WoodBasket = () => <Button variant="ghost" size="icon" className="group relative text-moss-green hover:text-moss-green-light transition-all duration-300 hover:-translate-y-1">
      {/* Basket Shadow */}
      <div className="absolute inset-0 rounded-full bg-rustic-brown-dark/0 group-hover:bg-rustic-brown-dark/20 blur-md transition-all duration-300" />
      
      {/* Woven Basket */}
      <div className="relative">
        <div className="w-8 h-6 bg-gradient-to-b from-rustic-brown-light to-rustic-brown rounded-b-lg border border-rustic-brown-dark/70 group-hover:border-rustic-brown-dark transition-all duration-300">
          {/* Woven texture */}
          <div className="absolute inset-0 opacity-40">
            <div className="absolute inset-0 bg-gradient-to-r from-rustic-brown-dark/20 via-transparent to-rustic-brown-dark/20"></div>
            <div className="absolute top-1 left-0 right-0 h-0.5 bg-rustic-brown-dark/30"></div>
            <div className="absolute top-3 left-0 right-0 h-0.5 bg-rustic-brown-dark/30"></div>
          </div>
          
          {/* Basket handles */}
          <div className="absolute left-0 top-0 w-1 h-4 border-l-2 border-rustic-brown-dark/60 rounded-l group-hover:border-rustic-brown-dark transition-all duration-300" />
          <div className="absolute right-0 top-0 w-1 h-4 border-r-2 border-rustic-brown-dark/60 rounded-r group-hover:border-rustic-brown-dark transition-all duration-300" />
        </div>
        
        {/* Cart contents indicator */}
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-1 h-1 bg-moss-green rounded-full animate-pulse" />
        </div>
      </div>
    </Button>;

  return <nav className="fixed top-0 w-full z-50 bg-slate-800 border-b border-slate-700">

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift relative z-10">
            <img src={logoImage} alt="Tinctures, Odds, & Ends" className="h-14 w-auto" />
          </Link>

          {/* Desktop Navigation - Alchemy Shelf */}
          <div className="hidden md:flex items-end space-x-6 pb-4">
            {navItems.map(item => <PotionBottle key={item.path} item={item} isActive={isActive(item.path)} />)}
            
            {/* Wood Basket Cart */}
            <div className="ml-4">
              <WoodBasket />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-moss-green-light relative z-10">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden border-t border-moss-green/30 py-4 relative z-10 bg-rustic-brown/80 rounded-b-lg">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`text-foreground hover:text-moss-green-light transition-colors duration-300 font-medium px-2 py-1 ${isActive(item.path) ? 'text-moss-green-light' : ''}`}>
                  {item.label}
                </Link>)}
              <div className="pt-2 border-t border-moss-green/30">
                <Button variant="ghost" size="sm" className="text-moss-green hover:text-moss-green-light">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Cart
                </Button>
              </div>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navigation;