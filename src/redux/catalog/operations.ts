import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CatalogItem } from "./slice";

type PagesType = {
  page?: number;
  limit?: number;
};

type RejectValue = {
  message: string;
};

const url = new URL("https://66856f30b3f57b06dd4cb96e.mockapi.io/APICatalog");

export const getCatalogThunk = createAsyncThunk<
  CatalogItem[],
  PagesType,
  {
    rejectValue: RejectValue;
  }
>(
  "getCatalog",
  async (
    request: PagesType = { page: undefined, limit: undefined },
    thunkApi
  ) => {
    try {
      const copy_url = new URL(url);
      if (request.page != undefined && request.limit != undefined) {
        copy_url.searchParams.append("page", request.page.toString());
        copy_url.searchParams.append("limit", request.limit.toString());
      }
      const data = await axios
        .get(copy_url.toString())
        .then((response) => response.data);
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return thunkApi.rejectWithValue({ message: error.message });
      } else {
        return thunkApi.rejectWithValue({
          message: "An unexpected error occurred",
        });
      }
    }
  }
);

export const appendCatalogThunk = createAsyncThunk<
  CatalogItem[],
  PagesType,
  {
    rejectValue: RejectValue;
  }
>("appendCatalog", async (request: PagesType, thunkApi) => {
  try {
    const copy_url = new URL(url);
    if (request.page != undefined && request.limit != undefined) {
      copy_url.searchParams.append("page", request.page.toString());
      copy_url.searchParams.append("limit", request.limit.toString());
    }
    const data = await axios
      .get(copy_url.toString())
      .then((response) => response.data);
    return data;
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

export const getByIdCatalogItemThunk = async (
  id: number
): Promise<CatalogItem> => {
  const copy_url = new URL(url);
  copy_url.searchParams.append("id", id.toString());
  const data = await axios
    .get(copy_url.toString())
    .then((response) => response.data);
  return data[0];
};
