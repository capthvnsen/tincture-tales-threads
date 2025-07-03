import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, ShoppingCart, Heart } from 'lucide-react';

// Sample product data - in a real app this would come from an API
const sampleProducts = [
  {
    id: 1,
    name: "Emerald Elven Capelet",
    price: 125,
    image: "/placeholder.svg",
    category: "capelets",
    description: "Flowing forest green capelet inspired by Celtic traditions",
    isNew: true,
    inStock: true
  },
  {
    id: 2,
    name: "Viking Leather Belt",
    price: 65,
    image: "/placeholder.svg", 
    category: "accessories",
    description: "Handcrafted leather belt with brass buckle",
    isNew: false,
    inStock: true
  },
  {
    id: 3,
    name: "Burgundy Renaissance Cloak",
    price: 185,
    image: "/placeholder.svg",
    category: "capelets", 
    description: "Full-length cloak perfect for grand occasions",
    isNew: false,
    inStock: false
  },
  {
    id: 4,
    name: "Celtic Knotwork Tabard",
    price: 95,
    image: "/placeholder.svg",
    category: "tunics",
    description: "Embroidered tabard with traditional Celtic designs",
    isNew: true,
    inStock: true
  },
  {
    id: 5,
    name: "Medieval Coin Purse",
    price: 35,
    image: "/placeholder.svg",
    category: "accessories",
    description: "Small leather purse with drawstring closure",
    isNew: false,
    inStock: true
  },
  {
    id: 6,
    name: "Dragon Scale Jewelry Set",
    price: 75,
    image: "/placeholder.svg",
    category: "jewelry",
    description: "Necklace and earrings with dragon scale design",
    isNew: true,
    inStock: true
  }
];

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  const categories = [
    { value: 'all', label: 'All Items' },
    { value: 'capelets', label: 'Capelets & Cloaks' },
    { value: 'accessories', label: 'Accessories' },
    { value: 'tunics', label: 'Tunics & Tabards' },
    { value: 'jewelry', label: 'Jewelry' }
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'name', label: 'Name A-Z' }
  ];

  // Filter and sort products
  const filteredProducts = sampleProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch(sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'name': return a.name.localeCompare(b.name);
        case 'newest': 
        default: return b.isNew ? 1 : -1;
      }
    });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold medieval-heading mb-4">
            Enchanted Shop
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover handcrafted treasures for your next adventure. Each piece tells a story of heritage and craftsmanship.
          </p>
        </div>

        {/* Filters */}
        <div className="medieval-card mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            {/* Search */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-foreground mb-2">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 medieval-input"
                />
              </div>
            </div>

            {/* Category */}
            <div className="w-full lg:w-48">
              <label className="block text-sm font-medium text-foreground mb-2">Category</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="medieval-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Sort */}
            <div className="w-full lg:w-48">
              <label className="block text-sm font-medium text-foreground mb-2">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="medieval-input">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map(option => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-muted-foreground">
            Showing {filteredProducts.length} of {sampleProducts.length} items
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <Card key={product.id} className="medieval-card hover-lift group cursor-pointer">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-2 left-2 flex gap-2">
                  {product.isNew && (
                    <Badge className="bg-burgundy text-white">New</Badge>
                  )}
                  {!product.inStock && (
                    <Badge variant="secondary">Out of Stock</Badge>
                  )}
                </div>
                
                {/* Wishlist button */}
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="absolute top-2 right-2 bg-background/80 hover:bg-background text-muted-foreground hover:text-burgundy"
                >
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg text-gold mb-2 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-foreground">
                    ${product.price}
                  </span>
                  <Button 
                    variant={product.inStock ? "medieval" : "outline"} 
                    size="sm"
                    disabled={!product.inStock}
                    className="min-w-[100px]"
                  >
                    {product.inStock ? (
                      <>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </>
                    ) : (
                      'Out of Stock'
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No items found</h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or filters to find what you're looking for.
            </p>
            <Button 
              variant="medieval" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
                setSortBy('newest');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 medieval-card">
          <h2 className="text-2xl font-bold medieval-heading mb-4">
            Don't See What You're Looking For?
          </h2>
          <p className="text-foreground/80 mb-6">
            We create custom pieces tailored to your vision. Commission a unique item just for you!
          </p>
          <Button variant="gold" size="lg">
            Request Custom Piece
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Shop;