import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  favourites: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // add to cart
    addToCart: (state: any, action: any) => {
      state.cart.push(action.payload);
    },
    // remove from cart
    removeFromCart: (state: any, action: any) => {
      state.cart = state.cart.filter(
        (item: any) => item.id !== action.payload.id
      );
    },
  },
});

export const { addToCart, removeFromCart } = userSlice.actions;
export default userSlice.reducer;
