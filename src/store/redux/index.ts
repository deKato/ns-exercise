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

const store = configureStore({ reducer: { sort: sortReducer } });

export default store;
