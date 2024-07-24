import { createAsyncThunk } from "@reduxjs/toolkit";

import { Filter } from "./slice";

type RejectValue = {
  message: string;
};

export const setFilterThunk = createAsyncThunk<
  Filter,
  Filter,
  {
    rejectValue: RejectValue;
  }
>("setFilter", async (filter: Filter) => {
  return filter;
});
