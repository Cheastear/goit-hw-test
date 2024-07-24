import { CatalogState } from "./slice";

export const selectCatalog = (state: { catalog: CatalogState }) =>
  state.catalog.catalog;

export const selectIsLoading = (state: { catalog: CatalogState }) =>
  state.catalog.isLoading;

export const selectIsError = (state: { catalog: CatalogState }) =>
  state.catalog.isError;

export const selectIsEnd = (state: { catalog: CatalogState }) =>
  state.catalog.isEnd;
