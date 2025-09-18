import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface ShopifyProduct {
  id: string;
  title: string;
  handle: string;
  description: string;
  images: { edges: Array<{ node: { url: string; altText?: string } }> };
  priceRange: {
    minVariantPrice: { amount: string; currencyCode: string };
    maxVariantPrice: { amount: string; currencyCode: string };
  };
  availableForSale: boolean;
  tags: string[];
  productType: string;
  variants: {
    edges: Array<{
      node: {
        id: string;
        title: string;
        availableForSale: boolean;
        priceV2: { amount: string; currencyCode: string };
      };
    }>;
  };
}

interface ShopifyProductsResponse {
  data: {
    products: {
      edges: Array<{ node: ShopifyProduct }>;
    };
  };
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const storefrontToken = Deno.env.get('SHOPIFY_STOREFRONT_ACCESS_TOKEN');
    const shopDomain = '7yhets-x0.myshopify.com';

    if (!storefrontToken) {
      throw new Error('Shopify Storefront Access Token not configured');
    }

    const { searchTerm, first = 20 } = await req.json().catch(() => ({}));

    const query = `
      query getProducts($first: Int!, $query: String) {
        products(first: $first, query: $query) {
          edges {
            node {
              id
              title
              handle
              description
              images(first: 5) {
                edges {
                  node {
                    url
                    altText
                  }
                }
              }
              priceRange {
                minVariantPrice {
                  amount
                  currencyCode
                }
                maxVariantPrice {
                  amount
                  currencyCode
                }
              }
              availableForSale
              tags
              productType
              variants(first: 10) {
                edges {
                  node {
                    id
                    title
                    availableForSale
                    priceV2 {
                      amount
                      currencyCode
                    }
                  }
                }
              }
            }
          }
        }
      }
    `;

    const variables = {
      first,
      query: searchTerm || null
    };

    console.log('Fetching products from Shopify:', { searchTerm, first });

    const response = await fetch(`https://${shopDomain}/api/2023-07/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': storefrontToken,
      },
      body: JSON.stringify({ query, variables }),
    });

    if (!response.ok) {
      throw new Error(`Shopify API error: ${response.status} ${response.statusText}`);
    }

    const shopifyData: ShopifyProductsResponse = await response.json();
    
    if (!shopifyData.data?.products) {
      throw new Error('Invalid response from Shopify API');
    }

    // Transform Shopify data to match our frontend expectations
    const transformedProducts = shopifyData.data.products.edges.map(({ node }) => ({
      id: node.id,
      name: node.title,
      handle: node.handle,
      description: node.description,
      price: parseFloat(node.priceRange.minVariantPrice.amount),
      image: node.images.edges[0]?.node.url || '/placeholder.svg',
      images: node.images.edges.map(edge => edge.node.url),
      category: node.productType || 'Uncategorized',
      inStock: node.availableForSale,
      isNew: node.tags.includes('new') || node.tags.includes('New'),
      tags: node.tags,
      variants: node.variants.edges.map(({ node: variant }) => ({
        id: variant.id,
        title: variant.title,
        price: parseFloat(variant.priceV2.amount),
        available: variant.availableForSale,
      })),
      currencyCode: node.priceRange.minVariantPrice.currencyCode,
    }));

    console.log(`Successfully fetched ${transformedProducts.length} products from Shopify`);

    return new Response(JSON.stringify({ products: transformedProducts }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error in shopify-products function:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message || 'Failed to fetch products',
        products: [] 
      }), 
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});