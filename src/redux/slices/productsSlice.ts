// src/redux/slices/productsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById, fetchProductsByCategory } from "../../api/productsApi"; 
import { Product } from "../../types";

// Define the state structure
interface ProductsState {
  products: Product[];           // List of all products
  categoryProducts: Product[];   // Products filtered by category
  loading: boolean;              // Loading state
  error: string | null;          // Error state
  selectedProduct: Product | null; // Single selected product for details page
}

const initialState: ProductsState = {
  products: [],
  categoryProducts: [],
  loading: false,
  error: null,
  selectedProduct: null,
};

// Fetch all products - Async thunk
export const getProducts = createAsyncThunk("products/getProducts", fetchProducts);

// Fetch products by category - Async thunk
export const getProductsByCategory = createAsyncThunk(
  "products/getProductsByCategory",
  async (category: string) => {
    const response = await fetchProductsByCategory(category);
    return response;
  }
);

// Fetch single product by ID - Async thunk
export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id: number) => {
    const response = await fetchProductById(id);
    return response;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    resetSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetching all products
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products.";
      })

      // Fetching products by category
      .addCase(getProductsByCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductsByCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryProducts = action.payload; // Store category-specific products
      })
      .addCase(getProductsByCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch category products.";
      })

      // Fetching a single product by ID
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product details.";
      });
  },
});

export const { resetSelectedProduct } = productsSlice.actions;
export default productsSlice.reducer;

