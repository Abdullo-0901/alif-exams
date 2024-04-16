// reducers/marketSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../interfaces";

export interface MarketState {
  products: ProductType[];
  qtitle: string;
}

const initialState: MarketState = {
  products: [],
  qtitle: "",
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    queryTitle(state, action: PayloadAction<string>) {
      console.log(action.payload);

      state.qtitle = action.payload;
    },
  },
});

export const { queryTitle } = marketSlice.actions;

export default marketSlice.reducer;
