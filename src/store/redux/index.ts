import { configureStore } from "@reduxjs/toolkit";
import sortReducer from "./sort";

export interface ISortParams {
  orderBy: string;
  order: string;
}

export interface IRootState {
  sort: {
    sortParams: ISortParams;
  };
}

const sortStore = configureStore({ reducer: { sort: sortReducer } });

export default sortStore;
