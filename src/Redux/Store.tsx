"use client";
import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "@/Redux/CartSlice";
import cartReducer from "./ProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    // cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
