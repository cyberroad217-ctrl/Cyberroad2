/**
 * Shared code between client and server
 * Useful to share types between client and server
 * and/or small pure JS functions that can be used on both client and server
 */

/**
 * Example response type for /api/demo
 */
export interface DemoResponse {
  message: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  price: string;
  iconName: string;
  description: string;
  details: string;
  problem: string;
  target: string;
  income: string;
  includes: string;
  stats: Record<string, string>;
}

export interface AISyncResponse {
  products: Product[];
}
