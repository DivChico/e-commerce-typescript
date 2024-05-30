import { createAsyncThunk } from "@reduxjs/toolkit/react";
import axios from "axios";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";
import { TProduct } from "../../../types";

const actGetSingleProductById = createAsyncThunk(
  "products/actGetSingleProductById",
  async (productid: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const response = await axios.get<TProduct>(
        `http://localhost:5005/products?id=${productid}`,
        { signal }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
export default actGetSingleProductById;
