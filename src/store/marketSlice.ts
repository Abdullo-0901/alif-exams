import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "../interfaces";

const products: ProductType[] =
  JSON.parse(localStorage.getItem("carts") as string) || [];

export interface MarketState {
  products: ProductType[];
  qtitle: string;
  price_min: number;
  price_max: number;
  categoryId: number;
}

const initialState: MarketState = {
  products: products,
  qtitle: "",
  price_max: 0,
  price_min: 0,
  categoryId: 0,
};

const marketSlice = createSlice({
  name: "market",
  initialState,
  reducers: {
    queryTitle(state, action: PayloadAction<string>) {
      state.qtitle = action.payload;
    },
    maxPrice(state, action: PayloadAction<number>) {
      state.price_max = action.payload;
    },
    minPrice(state, action: PayloadAction<number>) {
      state.price_min = action.payload;
    },
    setCategoryId(state, action: PayloadAction<number>) {
      console.log(action.payload);

      state.categoryId = action.payload;
    },
    productsCard(state, action: PayloadAction<ProductType[]>) {
      state.products = action.payload;
    },
  },
});

export const { queryTitle, maxPrice, minPrice, setCategoryId, productsCard } =
  marketSlice.actions;

export default marketSlice.reducer;
