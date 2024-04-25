import { createSlice } from "@reduxjs/toolkit";

export const initialStateFilter = {
  contacts: {
    items: [],
    loading: false,
    error: null,
  },
  filters: {
    name: ""
  }
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: initialStateFilter,
  reducers: {
    changeFilter(state, action) {
      state.filters.name = action.payload;
    }
  }
});



export const { changeFilter } = filtersSlice.actions;
