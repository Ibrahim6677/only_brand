import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

const OnlyBrandSlice = createSlice({
  name: 'OnlyBrand',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((product) => product.id === action.payload.id);
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
    },
    updateCart: (state, action) => {
      state.products = action.payload;
    },
    removeFromCart: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id);
    },
  },
});

export const { addToCart, updateCart, removeFromCart } = OnlyBrandSlice.actions;
export default OnlyBrandSlice.reducer;
