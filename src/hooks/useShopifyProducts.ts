import { useQuery } from "@tanstack/react-query";
import { ShopifyService } from "@/services/shopifyService";
import type { ShopifyProduct } from "@/types/shopify";

export const useShopifyProducts = (searchTerm?: string) => {
  return useQuery({
    queryKey: ['shopify-products', searchTerm],
    queryFn: () => ShopifyService.fetchProducts(searchTerm),
    staleTime: 5 * 60 * 1000, // 5 minutes
    retry: 3,
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
};

export const useShopifySearch = (query: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: ['shopify-search', query],
    queryFn: () => ShopifyService.searchProducts(query),
    enabled: enabled && query.length > 0,
    staleTime: 2 * 60 * 1000, // 2 minutes
    retry: 2,
  });
};