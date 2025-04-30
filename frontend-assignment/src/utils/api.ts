import { Product, ProductListResponse, ProductResponse } from "@/types/product";

const API_BASE_URL = 'https://fakestoreapi.com';

/**
 * Fetches all products from the FakeStore API
 */
export async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    
    const data: ProductListResponse = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
}

/**
 * Fetches a specific product by ID from the FakeStore API
 */
export async function getProductById(id: string): Promise<Product> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product with ID ${id}: ${response.status}`);
    }
    
    const data: ProductResponse = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
}

/**
 * Fetches all product categories from the FakeStore API
 */
export async function getProductCategories(): Promise<string[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/products/categories`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    
    const data: string[] = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    throw error;
  }
}

