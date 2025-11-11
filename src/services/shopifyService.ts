import { toast } from "sonner";
import { SHOPIFY_STOREFRONT_URL, SHOPIFY_STOREFRONT_TOKEN } from "@/config/shopify";
import type { ShopifyProduct, ShopifyProductsResponse, CartItem, LegacyShopifyProduct } from "@/types/shopify";

// Storefront API helper function
async function storefrontApiRequest(query: string, variables: any = {}) {
  const response = await fetch(SHOPIFY_STOREFRONT_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_TOKEN
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (response.status === 402) {
    toast.error("Shopify: Payment required", {
      description: "Shopify API access requires an active Shopify billing plan. Visit https://admin.shopify.com to upgrade.",
    });
    throw new Error("Payment required");
  }

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  const data = await response.json();
  
  if (data.errors) {
    throw new Error(`Error calling Shopify: ${data.errors.map((e: any) => e.message).join(', ')}`);
  }

  return data;
}

const STOREFRONT_QUERY = `
  query GetProducts($first: Int!, $query: String) {
    products(first: $first, query: $query) {
      edges {
        node {
          id
          title
          description
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          images(first: 5) {
            edges {
              node {
                url
                altText
              }
            }
          }
          variants(first: 10) {
            edges {
              node {
                id
                title
                price {
                  amount
                  currencyCode
                }
                availableForSale
                selectedOptions {
                  name
                  value
                }
              }
            }
          }
          options {
            name
            values
          }
          tags
          productType
        }
      }
    }
  }
`;

const CART_CREATE_MUTATION = `
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        id
        checkoutUrl
        totalQuantity
        cost {
          totalAmount {
            amount
            currencyCode
          }
        }
        lines(first: 100) {
          edges {
            node {
              id
              quantity
              merchandise {
                ... on ProductVariant {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  product {
                    title
                    handle
                  }
                }
              }
            }
          }
        }
      }
      userErrors {
        field
        message
      }
    }
  }
`;

// Transform Shopify API products to legacy format for existing components
function transformToLegacy(product: ShopifyProduct): LegacyShopifyProduct {
  const node = product.node;
  return {
    id: node.id,
    name: node.title,
    handle: node.handle,
    description: node.description,
    price: parseFloat(node.priceRange.minVariantPrice.amount),
    image: node.images.edges[0]?.node.url || '/placeholder.svg',
    images: node.images.edges.map(edge => edge.node.url),
    category: node.productType || 'Uncategorized',
    inStock: node.variants.edges.some(v => v.node.availableForSale),
    isNew: node.tags?.includes('new') || node.tags?.includes('New') || false,
    tags: node.tags || [],
    variants: node.variants.edges.map(({ node: variant }) => ({
      id: variant.id,
      title: variant.title,
      price: parseFloat(variant.price.amount),
      available: variant.availableForSale,
    })),
    currencyCode: node.priceRange.minVariantPrice.currencyCode,
  };
}

export class ShopifyService {
  static async fetchProducts(searchTerm?: string): Promise<LegacyShopifyProduct[]> {
    try {
      const data: ShopifyProductsResponse = await storefrontApiRequest(STOREFRONT_QUERY, {
        first: 50,
        query: searchTerm || null
      });

      return data.data.products.edges.map(transformToLegacy);
    } catch (error) {
      console.error('ShopifyService.fetchProducts error:', error);
      throw error;
    }
  }

  static async searchProducts(query: string): Promise<LegacyShopifyProduct[]> {
    return this.fetchProducts(query);
  }

  static async createStorefrontCheckout(items: CartItem[]): Promise<string> {
    try {
      const lines = items.map(item => ({
        quantity: item.quantity,
        merchandiseId: item.variantId,
      }));

      const cartData = await storefrontApiRequest(CART_CREATE_MUTATION, {
        input: {
          lines,
        },
      });

      if (cartData.data.cartCreate.userErrors.length > 0) {
        throw new Error(`Cart creation failed: ${cartData.data.cartCreate.userErrors.map((e: any) => e.message).join(', ')}`);
      }

      const cart = cartData.data.cartCreate.cart;
      
      if (!cart.checkoutUrl) {
        throw new Error('No checkout URL returned from Shopify');
      }

      const url = new URL(cart.checkoutUrl);
      url.searchParams.set('channel', 'online_store');
      return url.toString();
    } catch (error) {
      console.error('Error creating storefront checkout:', error);
      throw error;
    }
  }
}
