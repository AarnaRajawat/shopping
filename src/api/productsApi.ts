import axios from 'axios';

const API_URL = 'https://dummyjson.com/products';

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
// ✅ Fetch unique categories dynamically from products
// ✅ Fetch unique categories
export const fetchCategories = async () => {
  try {
    const products = await fetchProducts(); // Fetch all products
    const categories = [...new Set(products.map((product: any) => product.category))]; // Extract unique categories
    console.log("Fetched Categories:", categories); // Debugging
    return categories; // Should return an array of category strings
  } catch (error: any) {
    console.error("Error fetching categories:", error.response?.data || error.message);
    throw new Error(error.response?.data?.message || "Error fetching categories");
  }
};