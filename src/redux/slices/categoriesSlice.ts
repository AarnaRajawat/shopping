// categoriesSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Category } from "../../types"; // Import Category type

interface CategoriesState {
  categories: Category[]; // Array of categories
  loading: boolean;
  error: string | null;
}

const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

// Define the async thunk for fetching categories
export const fetchCategoriesThunk = createAsyncThunk<Category[]>(
  "categories/fetchCategories",
  async () => {
    const response = await fetch("https://dummyjson.com/products/categories");
    return response.json(); // This should return an array of Category objects
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload; // Set the fetched categories
      })
      .addCase(fetchCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch categories";
      });
  },
});

export default categoriesSlice.reducer;

