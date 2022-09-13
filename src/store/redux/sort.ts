import { createSlice } from "@reduxjs/toolkit";

const initialSortState = {
  sortParams: { order: "", orderBy: "" },
};

const sortSlice = createSlice({
  name: "sort",
  initialState: initialSortState,
  reducers: {
    sort(state, action) {
      const { column } = action.payload;
      const { sortParams } = state;
      if (
        (sortParams.orderBy === "" && sortParams.order === "") ||
        column !== sortParams.orderBy
      ) {
        state.sortParams = { orderBy: column, order: "asc" };
      } else if (sortParams.orderBy === column && sortParams.order === "asc") {
        state.sortParams = { orderBy: column, order: "desc" };
      } else if (sortParams.orderBy === column && sortParams.order === "desc") {
        state.sortParams = { orderBy: "", order: "" };
      }
    },
  },
});

export const sortActions = sortSlice.actions;
export default sortSlice.reducer;
