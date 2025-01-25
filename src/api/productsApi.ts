// src/api/productsApi.ts

import axios from "axios";

// The API URL for fetching products
const API_URL = "https://dummyjson.com/products";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.products; // Assuming the response contains an array of products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; // Throw the error to be handled in the slice
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id: number) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data; // Assuming the response contains the product details directly
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    throw error; // Throw the error to be handled in the slice
  }
};

