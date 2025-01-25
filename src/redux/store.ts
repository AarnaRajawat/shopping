// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import productDetailReducer from './slices/productDetailSlice';
import cartReducer from './slices/cartSlice';
import productsReducer from './slices/productsSlice';

export const store = configureStore({
  reducer: {
    productDetail: productDetailReducer,
    cart: cartReducer,
    products: productsReducer,
  },
});
export default store;

export type RootState = ReturnType<typeof store.getState>; // This infers the type of your store state
export type AppDispatch = typeof store.dispatch; // This infers the type of your dispatch
