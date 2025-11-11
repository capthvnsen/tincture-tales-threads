// Storefront API response types
export interface ShopifyProduct {
  node: {
    id: string;
    title: string;
    description: string;
    handle: string;
    productType: string;
    tags: string[];
    priceRange: {
      minVariantPrice: {
        amount: string;
        currencyCode: string;
      };
    };
    images: {
      edges: Array<{
        node: {
          url: string;
          altText: string | null;
        };
      }>;
    };
    variants: {
      edges: Array<{
        node: {
          id: string;
          title: string;
          price: {
            amount: string;
            currencyCode: string;
          };
          availableForSale: boolean;
          selectedOptions: Array<{
            name: string;
            value: string;
          }>;
        };
      }>;
    };
    options: Array<{
      name: string;
      values: string[];
    }>;
  };
}

export interface ShopifyProductsResponse {
  data: {
    products: {
      edges: ShopifyProduct[];
    };
  };
}

export interface CartItem {
  product: ShopifyProduct;
  variantId: string;
  variantTitle: string;
  price: {
    amount: string;
    currencyCode: string;
  };
  quantity: number;
  selectedOptions: Array<{
    name: string;
    value: string;
  }>;
}

// Legacy format for existing components (Shop page)
export interface LegacyShopifyProduct {
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
  variants: LegacyShopifyVariant[];
  currencyCode: string;
}

export interface LegacyShopifyVariant {
  id: string;
  title: string;
  price: number;
  available: boolean;
}
