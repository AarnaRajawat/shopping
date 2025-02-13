// src/redux/slices/productDetailSlice.ts
import { createSlice } from "@reduxjs/toolkit";

interface ProductDetailState {
  selectedProduct: any | null; // Use the correct type for selectedProduct
  loading: boolean;
  error: string | null;
}

const initialState: ProductDetailState = {
  selectedProduct: null,
  loading: false,
  error: null,
};

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
      state.loading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { setLoading, setSelectedProduct, setError } = productDetailSlice.actions;
export default productDetailSlice.reducer;