import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, ArrowLeft, Minus, Plus } from 'lucide-react';
import { useShopifyProducts } from '@/hooks/useShopifyProducts';
import { Skeleton } from '@/components/ui/skeleton';
import { useCartStore } from '@/stores/cartStore';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { handle } = useParams<{ handle: string }>();
  const { data: products = [], isLoading } = useShopifyProducts();
  const addItem = useCartStore(state => state.addItem);
  
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const product = products.find(p => p.handle === handle);
  
  const selectedVariant = product?.variants.find(v => v.id === selectedVariantId) || product?.variants[0];

  const handleAddToCart = () => {
    if (!product || !selectedVariant) return;

    addItem({
      product: {
        node: {
          id: product.id,
          title: product.name,
          description: product.description,
          handle: product.handle,
          productType: product.category,
          tags: product.tags,
          priceRange: {
            minVariantPrice: {
              amount: product.price.toString(),
              currencyCode: product.currencyCode
            }
          },
          images: {
            edges: product.images.map(url => ({
              node: { url, altText: product.name }
            }))
          },
          variants: {
            edges: product.variants.map(v => ({
              node: {
                id: v.id,
                title: v.title,
                price: {
                  amount: v.price.toString(),
                  currencyCode: product.currencyCode
                },
                availableForSale: v.available,
                selectedOptions: []
              }
            }))
          },
          options: []
        }
      },
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: {
        amount: selectedVariant.price.toString(),
        currencyCode: product.currencyCode
      },
      quantity,
      selectedOptions: []
    });

    toast.success("Added to cart", {
      description: `${product.name} has been added to your cart`
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen pt-24 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Skeleton className="aspect-square rounded-lg" />
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-32 w-full" />
              <Skeleton className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen pt-24 pb-8">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
          <Link to="/shop">
            <Button variant="medieval">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Shop
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link to="/shop" className="text-muted-foreground hover:text-gold transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Shop
          </Link>
        </nav>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border-2 border-gold/20">
              <img
                src={product.images[selectedImageIndex] || product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImageIndex === index ? 'border-gold' : 'border-transparent hover:border-gold/50'
                    }`}
                  >
                    <img src={img} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                {product.isNew && (
                  <Badge className="bg-burgundy text-white">New</Badge>
                )}
                {!product.inStock && (
                  <Badge variant="secondary">Out of Stock</Badge>
                )}
                <span className="text-sm text-muted-foreground">{product.category}</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold medieval-heading mb-4">
                {product.name}
              </h1>
              
              <p className="text-3xl font-bold text-gold">
                ${(selectedVariant?.price || product.price).toFixed(2)} {product.currencyCode}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Variant Selector */}
            {product.variants.length > 1 && (
              <div>
                <label className="block text-sm font-medium mb-2">Variant</label>
                <Select 
                  value={selectedVariant?.id} 
                  onValueChange={setSelectedVariantId}
                >
                  <SelectTrigger className="medieval-input w-full">
                    <SelectValue placeholder="Select a variant" />
                  </SelectTrigger>
                  <SelectContent>
                    {product.variants.map(variant => (
                      <SelectItem 
                        key={variant.id} 
                        value={variant.id}
                        disabled={!variant.available}
                      >
                        {variant.title} - ${variant.price.toFixed(2)}
                        {!variant.available && ' (Out of Stock)'}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center text-lg font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Add to Cart */}
            <Button
              variant="medieval"
              size="lg"
              className="w-full"
              disabled={!product.inStock || !selectedVariant?.available}
              onClick={handleAddToCart}
            >
              <ShoppingCart className="h-5 w-5 mr-2" />
              {product.inStock ? 'Add to Cart' : 'Out of Stock'}
            </Button>

            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="pt-4 border-t border-gold/20">
                <p className="text-sm text-muted-foreground mb-2">Tags:</p>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
