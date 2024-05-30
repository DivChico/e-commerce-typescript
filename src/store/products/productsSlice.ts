import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import actGetSingleProductById from "./act/actGetSingleProductById";
import { TLoading, TProduct } from "../../types";
interface IInitialState {
  records: TProduct[];
  item: TProduct;
  loading: TLoading;
  error: string | null;
}

const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

const initialState: IInitialState = {
  records: [],
  item: {
    id: 0,
    title: "",
    price: 249.0,
    cat_prefix: "",
    img: "",
    max: 0,
  },
  loading: "idle",
  error: null,
};
const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    productsStateCleanUp: (state) => {
      state.records = [];
    },
    productStateCleanUp: (state) => {
      state.item = {};
    },
  },
  extraReducers: (builder) => {
    // get all products
    builder.addCase(actGetProductsByCatPrefix.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByCatPrefix.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    // get single product
    builder.addCase(actGetSingleProductById.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetSingleProductById.fulfilled, (state, action) => {
      state.loading = "succeeded";

      state.item = action.payload[0];
    });
    builder.addCase(actGetSingleProductById.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});
export const { productsStateCleanUp, productStateCleanUp } =
  productsSlice.actions;
export { actGetProductsByCatPrefix };
export default productsSlice.reducer;
