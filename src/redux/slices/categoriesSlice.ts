import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCategories } from "../../api/productsApi"; // Ensure this returns string[]

interface CategoriesState {
  categories: string[];
  loading: boolean;
  error: string | null;
}

// ✅ Initial state
const initialState: CategoriesState = {
  categories: [],
  loading: false,
  error: null,
};

// ✅ Async Thunk with explicit return type
export const fetchCategoriesThunk = createAsyncThunk<
  string[], // Expected return type (fulfilled)
  void, 
  { rejectValue: string } // Expected rejection value
>(
  "categories/fetchCategories",
  async (_, { rejectWithValue }) => {
    try {
      const categories = await fetchCategories();
      console.log("Fetched Categories from API:", categories);

      if (!Array.isArray(categories)) {
        throw new Error("Invalid API response: Expected an array");
      }

      return categories as string[]; // ✅ Type assertion
    } catch (error: any) {
      return rejectWithValue(error.message || "Error fetching categories");
    }
  }
);

// ✅ Create Redux slice
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesThunk.fulfilled, (state, action) => {
        console.log("Redux Fulfilled:", action.payload);
        state.loading = false;
        state.categories = action.payload; // ✅ Safe assignment
      })
      .addCase(fetchCategoriesThunk.rejected, (state, action) => {
        console.error("Redux Rejected:", action.payload);
        state.loading = false;
        state.error = action.payload ?? "Unknown error"; // ✅ Correct type handling
      });
  },
});

export default categoriesSlice.reducer;



