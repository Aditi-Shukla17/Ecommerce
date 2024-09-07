import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: CartItem[];
  disabledButtons: { [key: number]: boolean };
}

const initialState: CartState = {
  cart: [],
  disabledButtons: {},
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state, action: PayloadAction<CartItem>) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.disabledButtons[action.payload.id] = true;
    },
    remove(state, action: PayloadAction<number>) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
      state.disabledButtons[action.payload] = false;
    },
    increaseQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action: PayloadAction<number>) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    disableButton(state, action: PayloadAction<number>) {
      state.disabledButtons[action.payload] = true;
    },
    enableButton(state, action: PayloadAction<number>) {
      state.disabledButtons[action.payload] = false;
    },
  },
});

export const {
  add,
  remove,
  increaseQuantity,
  decreaseQuantity,
  disableButton,
  enableButton,
} = cartSlice.actions;
export default cartSlice.reducer;
