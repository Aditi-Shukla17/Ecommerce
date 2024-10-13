"use client";
import { configureStore } from "@reduxjs/toolkit";
// import cartReducer from "@/Redux/CartSlice";
import cartReducer from "./ProductSlice";
import authReducer from "./AuthSlice"
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
