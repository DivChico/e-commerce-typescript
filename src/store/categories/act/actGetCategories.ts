import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";
import axiosErrorHandler from "../../../utils/axiosErrorHandler";

import { TCategory } from "../../../types";
type TResponse = TCategory[];
const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get<TResponse>(
        "http://localhost:5005/category"
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);
export default actGetCategories;
