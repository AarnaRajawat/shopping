import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';
const CATEGORY_API_URL = 'https://dummyjson.com/products/categories';

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.products;
  } catch (error: any) {
    console.error('Error fetching products:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Error fetching products');
  }
};

// Fetch a single product by ID
export const fetchProductById = async (id: number) => {
  try {
    console.log(`Fetching product by ID: ${id}`);
    const response = await axios.get(`${API_URL}/${id}`);
    console.log('API Response:', response.data);
    return response.data;
  } catch (error: any) {
    console.error('Error fetching product by ID:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Error fetching product by ID');
  }
};

// Fetch all categories
export const fetchCategories = async () => {
  try {
    const response = await axios.get(CATEGORY_API_URL);
    return response.data; // Assuming the API returns a list of categories
  } catch (error: any) {
    console.error('Error fetching categories:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Error fetching categories');
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category: string) => {
  try {
    console.log(`Fetching products in category: ${category}`);
    const response = await axios.get(`${API_URL}/category/${category}`);
    console.log('Category Products API Response:', response.data);
    return response.data.products; // Returns a list of products in the category
  } catch (error: any) {
    console.error(`Error fetching products for category "${category}":`, error.response?.data || error.message);
    throw new Error(error.response?.data?.message || `Error fetching products for category "${category}"`);
  }
};

