import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalItems: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    SET_CART_ITEMS(state, action) {
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    },
    REMOVE_CART_ITEM(state, action) {
      return {
        ...state,
        cartItems: [...state.cartItems].filter(
          (item) => item.id !== action.payload
        ),
      };
    },
  },
});

export const { SET_CART_ITEMS, REMOVE_CART_ITEM } = CartSlice.actions;
export const selectCartItems = (state) => state.cart.cartItems;

export default CartSlice.reducer;
