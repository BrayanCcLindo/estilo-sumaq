"use server";

import { supabase } from "@/lib/supabase";

export async function getProducts(category?: string): Promise<Product[]> {
  let query = supabase.from("products").select("*");
  if (category && category !== "Todos") {
    query = query.eq("category", category);
  }

  const { data, error } = await query;

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
