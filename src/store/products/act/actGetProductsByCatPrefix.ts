import { createAsyncThunk } from "@reduxjs/toolkit/react";
import axios from "axios";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { TProduct } from "../../../types";

type TResponse = TProduct[];

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProductsByCatPrefix",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        `http://localhost:5005/products?cat_prefix=${prefix}`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
export default actGetProductsByCatPrefix;
