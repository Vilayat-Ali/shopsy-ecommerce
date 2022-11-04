import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  fav: [],
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
    // add to favourites
    addToFav: (state: any, action: any) => {
      state.fav.push(action.payload);
    },
    // remove from fav
    removeFromFav: (state: any, payload: any) => {
      state.fav = state.fav.filter(
        (item: any) => item.id !== payload.action.id
      );
    },
  },
});

export const { addToCart, removeFromCart, addToFav, removeFromFav } =
  userSlice.actions;
export default userSlice.reducer;
