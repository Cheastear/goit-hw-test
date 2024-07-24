import { FavoriteState } from "./slice";

export const selectFavorite = (state: { favorite: FavoriteState }) =>
  state.favorite.favorite;

export const selectIsLoading = (state: { favorite: FavoriteState }) =>
  state.favorite.isLoading;

export const selectIsError = (state: { favorite: FavoriteState }) =>
  state.favorite.isError;
