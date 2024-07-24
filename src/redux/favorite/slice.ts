import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { addFavoritesThunk, deleteFavoritesThunk } from "./operations";

export type FavoriteState = {
  favorite: number[];
  isError: boolean;
  isLoading: boolean;
};

const initialState: FavoriteState = {
  favorite: [],
  isError: false,
  isLoading: false,
};

const slice = createSlice({
  name: "favorite",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(addFavoritesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        if (state.favorite.find((elem) => elem == action.payload) == undefined)
          state.favorite.push(action.payload);
      })
      .addCase(deleteFavoritesThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.favorite = state.favorite.filter(
          (elem) => elem !== action.payload
        );
      })
      .addMatcher(
        isAnyOf(addFavoritesThunk.rejected, deleteFavoritesThunk.rejected),
        (state) => {
          state.isLoading = false;
          state.isError = true;
        }
      )
      .addMatcher(
        isAnyOf(addFavoritesThunk.pending, deleteFavoritesThunk.pending),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      ),
});

export const favoriteReducer = slice.reducer;
