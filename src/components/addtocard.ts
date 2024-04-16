import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { ProductType } from "../interfaces";
import { productsCard } from "../store/marketSlice";

export interface IAddToCard {
  product: ProductType | undefined;
  dispatch: Dispatch<UnknownAction>;
}

export const handleClick = ({ product, dispatch }: IAddToCard) => {
  const products: ProductType[] =
    JSON.parse(localStorage.getItem("carts") as string) || [];

  const existProduct = products.find((c) => c.id === product?.id);
  if (existProduct) {
    toast.success("Этот продукт был добавлен ранее ))");
  } else {
    const data = [...products, { ...product, quantity: 1 }];
    localStorage.setItem("carts", JSON.stringify(data));
    const prod = JSON.parse(localStorage.getItem("carts") as string) || [];
    dispatch(productsCard(prod));
    toast.success("Товар добавлен в корзину!!");
  }
};
