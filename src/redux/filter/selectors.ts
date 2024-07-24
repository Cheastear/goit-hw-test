import { FilterState } from "./slice";

export const selectFilters = (state: { filter: FilterState }) =>
  state.filter.item;

export const selectIsLoading = (state: { filter: FilterState }) =>
  state.filter.isLoading;

export const selectIsError = (state: { filter: FilterState }) =>
  state.filter.isError;
