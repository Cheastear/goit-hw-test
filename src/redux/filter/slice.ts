import { createSlice } from "@reduxjs/toolkit";
import { setFilterThunk } from "./operations";

export type Mileage = {
  from: number;
  to: number;
};
export type Filter = {
  makes: string;
  minPrice: number;
  mileage: Mileage;
};

export type FilterState = {
  item: Filter;
  isError: boolean;
  isLoading: boolean;
};

const initialState: FilterState = {
  item: {
    makes: "",
    minPrice: 0,
    mileage: {
      from: 0,
      to: 0,
    },
  },
  isError: false,
  isLoading: false,
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(setFilterThunk.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(setFilterThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.item = action.payload;
      })
      .addCase(setFilterThunk.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      }),
});

export const filterReducer = slice.reducer;
