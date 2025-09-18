import { supabase } from "@/integrations/supabase/client";
import type { ShopifyProduct, ShopifyProductsResponse } from "@/types/shopify";

export class ShopifyService {
  static async fetchProducts(searchTerm?: string): Promise<ShopifyProduct[]> {
    try {
      const { data, error } = await supabase.functions.invoke('shopify-products', {
        body: { 
          searchTerm: searchTerm || null,
          first: 50 
        }
      });

      if (error) {
        console.error('Error calling shopify-products function:', error);
        throw new Error(`Failed to fetch products: ${error.message}`);
      }

      const response: ShopifyProductsResponse = data;
      
      if (response.error) {
        throw new Error(response.error);
      }

      return response.products || [];
    } catch (error) {
      console.error('ShopifyService.fetchProducts error:', error);
      throw error;
    }
  }

  static async searchProducts(query: string): Promise<ShopifyProduct[]> {
    return this.fetchProducts(query);
  }
}