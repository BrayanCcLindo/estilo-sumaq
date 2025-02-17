"use server";

import { supabase } from "@/lib/supabase";

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("offer", true);

  if (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }

  return data;
}

export async function getProductById(
  id: string | string[] | undefined,
): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }

  return data;
}

export async function getRelatedProducts(
  excludeId: string,
): Promise<Product[] | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    // .eq("category", category)
    .neq("id", excludeId)
    .limit(4);

  if (error) {
    console.error("Error fetching related products:", error);
    return [];
  }

  return data;
}

export async function getProductsByCategory(
  category: string,
): Promise<Product[] | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category); // Filtro por categoría    // Excluye el producto actual

  if (error) {
    console.error("Error fetching related products:", error);
    return [];
  }

  return data;
}
