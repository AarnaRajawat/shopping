// src/api/productsApi.ts
import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.products;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id: number) => {
  try {
    console.log(`Fetching product by ID: ${id}`);
    const response = await axios.get(`${API_URL}/${id}`);
    console.log('API Response:', response.data); // Log the response
    return response.data; // Return product details
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};