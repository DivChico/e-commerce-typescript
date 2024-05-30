import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByItems from "./act/actGetProductsByItems";
import { TProduct, TLoading, isString } from "../../types";
interface IInitialState {
  items: { [key: string]: number };
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}
const initialState: IInitialState = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart  ",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      delete state.items[itemId];
      state.productsFullInfo = state.productsFullInfo.filter(
        (item) => item.id !== itemId
      );
    },
    changeItemQuantity: (state, action) => {
      const itemId = action.payload.id;
      const newQuantity = action.payload.newQuantity;

      state.items[itemId] = newQuantity;
    },
    productsFullInfoCleanUp: (state) => {
      state.productsFullInfo = [];
    },
    clearCart: (state) => {
      state.items = {};
      state.productsFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "succeeded";
      let productsWithQuantity = action.payload;
      productsWithQuantity = productsWithQuantity.filter(
        (item) => state.items[item.id]
      );
      state.productsFullInfo = productsWithQuantity;
    });
    builder.addCase(actGetProductsByItems.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export { actGetProductsByItems };
export const {
  addToCart,
  removeFromCart,
  changeItemQuantity,
  productsFullInfoCleanUp,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
