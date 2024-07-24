import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type RejectValue = {
  message: string;
};

export const addFavoritesThunk = createAsyncThunk<
  number,
  number,
  {
    rejectValue: RejectValue;
  }
>("addFavorite", async (item, thunkApi) => {
  try {
    return item;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkApi.rejectWithValue({ message: error.message });
    } else {
      return thunkApi.rejectWithValue({
        message: "An unexpected error occurred",
      });
    }
  }
});

export const deleteFavoritesThunk = createAsyncThunk<
  number,
  number,
  {
    rejectValue: RejectValue;
  }
>("deleteFavorite", async (item, thunkApi) => {
  try {
    return item;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return thunkApi.rejectWithValue({ message: error.message });
    } else {
      return thunkApi.rejectWithValue({
        message: "An unexpected error occurred",
      });
    }
  }
});
