import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import productDetailReducer from "./slices/productDetailSlice";
import cartReducer from "./slices/cartSlice";
import productsReducer from "./slices/productsSlice";
import categoriesReducer from "./slices/categoriesSlice"; // ✅ Import categories reducer

// Configure the Redux store
export const store = configureStore({
  reducer: {
    productDetail: productDetailReducer,
    cart: cartReducer,
    products: productsReducer,
    categories: categoriesReducer, // ✅ Add categories slice here
  },
});

// RootState is the overall state of the Redux store
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch is the type for dispatching actions
export type AppDispatch = typeof store.dispatch;

// ✅ Custom hook for dispatching actions correctly with TypeScript support
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;

