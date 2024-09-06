import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  disabledButtons: {},
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    add(state, action) {
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.disabledButtons[action.payload.id] = true;
    },
    remove(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    disableButton(state, action) {
      state.disabledButtons[action.payload] = true;
    },
    enableButton(state, action) {
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

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   cart: [],
// };

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState,
//   reducers: {
//     add(state, action) {
//       const item = state.cart.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity += 1;
//       } else {
//         state.cart.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     remove(state, action) {
//       return {
//         ...state,
//         cart: state.cart.filter((item) => item.id !== action.payload),
//       };
//     },
//     increaseQuantity(state, action) {
//       const item = state.cart.find((item) => item.id === action.payload);
//       if (item) {
//         item.quantity += 1;
//       }
//     },
//     decreaseQuantity(state, action) {
//       const item = state.cart.find((item) => item.id === action.payload);
//       if (item && item.quantity > 1) {
//         item.quantity -= 1;
//       }
//     },
//   },
// });

// export const { add, remove, increaseQuantity, decreaseQuantity } =
//   cartSlice.actions;
// export default cartSlice.reducer;
