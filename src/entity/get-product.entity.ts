import axios from "axios";
import { ProductType } from "../interfaces";
import { GLOBALURL } from "../components";

export const getProduct = async () => {
  try {
    const response = await axios.get<ProductType[]>(`${GLOBALURL}products`);

    if (response.status == 200) {
      return response.data;
    } else {
      throw new Error("Server error");
    }
  } catch (error) {
    console.log(error);
  }
};
