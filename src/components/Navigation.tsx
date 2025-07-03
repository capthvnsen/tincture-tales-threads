import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import logoImage from '@/assets/logo.png';
const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;
  const navItems = [{
    path: '/',
    label: 'Home',
    color: 'forest-green'
  }, {
    path: '/shop',
    label: 'Shop',
    color: 'earth-brown'
  }, {
    path: '/custom-orders',
    label: 'Custom Orders',
    color: 'forest-green'
  }, {
    path: '/about',
    label: 'Our Story',
    color: 'earth-brown'
  }, {
    path: '/contact',
    label: 'Contact',
    color: 'forest-green'
  }];
  const PotionBottle = ({
    item,
    isActive
  }: {
    item: typeof navItems[0];
    isActive: boolean;
  }) => <Link to={item.path} className="group relative flex flex-col items-center transition-all duration-300 hover:-translate-y-1">
      {/* Potion Bottle - Optimized for header size */}
      <div className="relative">
        {/* Bottle Glow Effect */}
        <div className={`absolute inset-0 rounded-full blur-sm transition-all duration-300 ${isActive ? 'bg-earth-brown/40 scale-105' : 'bg-earth-brown/0 group-hover:bg-forest-green/30 group-hover:scale-100'}`} />
        
        {/* Antique Bottle Container */}
        <div className="relative">
          {/* Cork - Compact */}
          <div className={`relative z-10 mx-auto w-3 h-1.5 rounded-t-md transition-all duration-300 ${isActive ? 'bg-gradient-to-b from-earth-brown to-earth-light border border-earth-brown/80' : 'bg-gradient-to-b from-earth-brown/70 to-earth-light/50 border border-earth-brown/50 group-hover:from-earth-brown group-hover:to-earth-light group-hover:border-earth-brown'}`}>
            {/* Cork texture */}
            <div className="absolute inset-0.5">
              <div className="h-0.5 bg-earth-brown/30 rounded"></div>
            </div>
          </div>
          
          {/* Bottle Neck - Compact */}
          <div className={`relative mx-auto w-2.5 h-2 transition-all duration-300 ${isActive ? 'bg-gradient-to-b from-parchment/25 to-parchment/15 border-x border-earth-brown/80' : 'bg-gradient-to-b from-parchment/15 to-parchment/10 border-x border-earth-brown/40 group-hover:border-earth-brown/70 group-hover:from-parchment/20'}`}>
            {/* Glass reflection */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/8 to-transparent"></div>
          </div>
          
          {/* Bottle Body - Compact Bulbous Shape */}
          <div className={`relative w-8 h-8 mx-auto transition-all duration-300 ${isActive ? 'bg-gradient-to-b from-parchment/25 to-parchment/15 border border-earth-brown/80 shadow-md' : 'bg-gradient-to-b from-parchment/15 to-parchment/10 border border-earth-brown/40 group-hover:border-earth-brown/70 group-hover:from-parchment/20'}`} style={{
          borderRadius: '50% 50% 50% 50% / 55% 55% 45% 45%'
        }}>
            {/* Glass shine effect */}
            <div className="absolute top-1.5 left-1.5 w-2 h-4 bg-gradient-to-br from-white/25 to-transparent rounded-full"></div>
            
            {/* Aged glass texture */}
            <div className="absolute inset-0.5 rounded-full opacity-25">
              <div className="w-full h-full bg-gradient-to-br from-transparent via-earth-brown/8 to-earth-brown/15 rounded-full"></div>
            </div>
            
            {/* Liquid - Enhanced colors */}
            <div className={`absolute bottom-0.5 left-0.5 right-0.5 transition-all duration-500 ${item.color === 'forest-green' ? 'bg-gradient-to-t from-emerald-900 to-emerald-700' : item.color === 'earth-brown' ? 'bg-gradient-to-t from-amber-900 to-amber-700' : 'bg-gradient-to-t from-emerald-900 to-emerald-700'} group-hover:animate-pulse`} style={{
            height: '70%',
            borderRadius: '50% 50% 50% 50% / 55% 55% 45% 45%',
            filter: 'brightness(0.85) saturate(1.3)'
          }}>
              {/* Liquid surface */}
              <div className="absolute top-0.5 left-1 right-1 h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"></div>
              
              {/* Magical bubbles */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute top-2 left-2 w-0.5 h-0.5 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0s' }} />
                <div className="absolute top-3 right-2 w-0.5 h-0.5 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '0.7s' }} />
                <div className="absolute top-4 left-3 w-0.5 h-0.5 bg-white/60 rounded-full animate-ping" style={{ animationDelay: '1.4s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Compact Label */}
      <div className={`mt-1 text-xs font-medium transition-all duration-300 ${isActive ? 'text-gold scale-105' : 'text-foreground/70 group-hover:text-gold group-hover:scale-100'}`}>
        {item.label}
      </div>
    </Link>;
  const Cauldron = () => <Button variant="ghost" size="icon" className="group relative text-gold hover:text-gold-dark transition-all duration-300 hover:-translate-y-1">
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
    </Button>;
  return <nav className="fixed top-0 w-full z-50 shadow-2xl" style={{
    background: 'linear-gradient(135deg, hsl(var(--earth-brown)) 0%, hsl(var(--earth-light)) 50%, hsl(var(--forest-green)) 100%)',
    borderBottom: '4px solid hsl(var(--earth-brown) / 0.8)'
  }}>
      {/* Tavern Roof Texture - Wood planks and aged effect */}
      <div className="absolute inset-0 opacity-20" style={{
      backgroundImage: `
          repeating-linear-gradient(
            90deg,
            hsl(var(--earth-brown) / 0.3) 0px,
            hsl(var(--earth-brown) / 0.5) 2px,
            hsl(var(--earth-light) / 0.3) 2px,
            hsl(var(--earth-light) / 0.5) 6px,
            hsl(var(--earth-brown) / 0.3) 6px,
            hsl(var(--earth-brown) / 0.5) 8px
          ),
          repeating-linear-gradient(
            0deg,
            transparent 0px,
            hsl(var(--earth-brown) / 0.2) 20px,
            hsl(var(--earth-brown) / 0.4) 22px,
            transparent 22px
          )
        `
    }} />
      
      {/* Tavern roof shadow */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-black/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover-lift relative z-10">
            <img src={logoImage} alt="Tinctures, Odds, & Ends" className="h-12 w-auto" />
            
          </Link>

          {/* Desktop Navigation - Potion Shelf */}
          <div className="hidden md:flex items-end space-x-6 pb-2">
            {navItems.map(item => <PotionBottle key={item.path} item={item} isActive={isActive(item.path)} />)}
            
            {/* Cauldron Cart */}
            <div className="ml-4">
              <Cauldron />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gold relative z-10">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden border-t border-gold/30 py-4 relative z-10">
            <div className="flex flex-col space-y-4">
              {navItems.map(item => <Link key={item.path} to={item.path} onClick={() => setIsMenuOpen(false)} className={`text-foreground hover:text-gold transition-colors duration-300 font-medium px-2 py-1 ${isActive(item.path) ? 'text-gold' : ''}`}>
                  {item.label}
                </Link>)}
              <div className="pt-2 border-t border-gold/30">
                <Button variant="ghost" size="sm" className="text-gold hover:text-gold-dark">
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