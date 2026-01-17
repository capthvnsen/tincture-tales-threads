// Shopify configuration - uses environment variables for security
// These are loaded from Cloudflare Pages environment variables at build time
export const SHOPIFY_API_VERSION = '2025-07';
export const SHOPIFY_STORE_PERMANENT_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN || '';
export const SHOPIFY_STOREFRONT_URL = `https://${SHOPIFY_STORE_PERMANENT_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`;
export const SHOPIFY_STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN || '';

// Validate required environment variables in development
if (import.meta.env.DEV && (!SHOPIFY_STORE_PERMANENT_DOMAIN || !SHOPIFY_STOREFRONT_TOKEN)) {
  console.warn('Missing Shopify environment variables. Check your .env file.');
}
