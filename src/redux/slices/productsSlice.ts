// src/redux/slices/productsSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProducts, fetchProductById } from "../../api/productsApi"; // Import the API functions
import { Product } from "../../types";

// Define the state structure
interface ProductsState {
  products: Product[];           // List of all products
  loading: boolean;              // Loading state
  error: string | null;          // Error state
  selectedProduct: Product | null; // Single selected product for details page
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
  selectedProduct: null, // Initially no product selected
};

// Fetch all products - Async thunk
export const getProducts = createAsyncThunk("products/getProducts", fetchProducts);

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
      state.selectedProduct = null; // Reset the selected product when navigating away from detail page
    },
  },
  extraReducers: (builder) => {
    // Handling the fetching of all products
    builder
      .addCase(getProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload; // Set the list of products
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products.";
      })
      // Handling the fetching of a single product by ID
      .addCase(getProductById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.selectedProduct = action.payload; // Set the selected product for the detail page
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch product details.";
      });
  },
});

// Export the resetSelectedProduct action to reset the selected product when needed
export const { resetSelectedProduct } = productsSlice.actions;

export default productsSlice.reducer;
