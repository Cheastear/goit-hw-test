import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getCatalogThunk, appendCatalogThunk } from "./operations";
import { loadLimit } from "../../pages/CatalogPage/CatalogPage";

export type CatalogItem = {
  id: number;
  year: number;
  make: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: string;
  engineSize: string;
  accessories: string[];
  functionalities: string[];
  rentalPrice: string;
  rentalCompany: string;
  address: string;
  rentalConditions: string;
  mileage: number;
};

export type CatalogState = {
  catalog: CatalogItem[];
  isError: boolean;
  isLoading: boolean;
  isEnd: boolean;
};

const initialState: CatalogState = {
  catalog: [],
  isError: false,
  isLoading: false,
  isEnd: false,
};

const slice = createSlice({
  name: "catalog",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(getCatalogThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.catalog = action.payload;
        state.isEnd = false;
      })
      .addCase(appendCatalogThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload.length != loadLimit) state.isEnd = true;
        state.catalog = [...state.catalog, ...action.payload];
      })
      .addMatcher(isAnyOf(getCatalogThunk.rejected), (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addMatcher(
        isAnyOf(getCatalogThunk.pending, appendCatalogThunk.pending),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      ),
});

export const catalogReducer = slice.reducer;
