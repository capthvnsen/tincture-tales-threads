export interface ShopifyProduct {
  id: string;
  name: string;
  handle: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  category: string;
  inStock: boolean;
  isNew: boolean;
  tags: string[];
  variants: ShopifyVariant[];
  currencyCode: string;
}

export interface ShopifyVariant {
  id: string;
  title: string;
  price: number;
  available: boolean;
}

export interface ShopifyProductsResponse {
  products: ShopifyProduct[];
  error?: string;
}