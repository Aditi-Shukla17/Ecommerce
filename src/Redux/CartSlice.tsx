import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "@/Component/Home/data";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: string;
}

export interface CartState {
  count: number;
  open: boolean;
  selectedProduct: Product | null;
  products: Product[];
}

let productData = products;

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cartState");
    if (serializedState === null) {
      return {
        products: productData,
        count: 0,
        open: false,
        selectedProduct: null,
      };
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state from localStorage", err);
    return {
      products: productData,
      count: 0,
      open: false,
      selectedProduct: null,
    };
  }
};

const initialState: CartState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    openDialog: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      state.open = true;
      state.selectedProduct = product || null;
    },
    closeDialog: (state) => {
      state.open = false;
      state.selectedProduct = null;
    },
  },
});

export const { increment, decrement, openDialog, closeDialog } =
  cartSlice.actions;

export default cartSlice.reducer;
