import { createSlice } from "@reduxjs/toolkit";
import { TCategory, TLoading } from "../../types";
import actGetCategories from "./act/actGetCategories";

interface IInitialState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

const isString = (value: unknown): value is string => {
  return typeof value === "string";
};

const initialState: IInitialState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetCategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetCategories.fulfilled, (state, action) => {
      state.loading = "succeeded";
      state.records = action.payload;
    });
    builder.addCase(actGetCategories.rejected, (state, action) => {
      state.loading = "failed";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export default categoriesSlice.reducer;
