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
  }
};

const initialState: CartState = loadState();

const saveState = (state: CartState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cartState", serializedState);
  } catch (err) {
    console.error("Could not save state to localStorage", err);
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
      saveState(state); // Save state to localStorage whenever it changes
    },
    decrement: (state) => {
      state.count -= 1;
      saveState(state); // Save state to localStorage whenever it changes
    },
    openDialog: (state, action: PayloadAction<number>) => {
      const product = state.products.find((p) => p.id === action.payload);
      state.open = true;
      state.selectedProduct = product || null;
      saveState(state); // Save state to localStorage whenever it changes
    },
    closeDialog: (state) => {
      state.open = false;
      state.selectedProduct = null;
      saveState(state); // Save state to localStorage whenever it changes
    },
  },
});

export const { increment, decrement, openDialog, closeDialog } =
  cartSlice.actions;

export default cartSlice.reducer;
