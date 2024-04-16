import axios from "axios";
import { ProductType } from "../interfaces";
import { GLOBALURL } from "../components";

export const getProductById = async (id: number) => {
  try {
    const response = await axios.get<ProductType>(`${GLOBALURL}products/${id}`);

    if (response.status == 200) {
      return response.data;
    } else {
      throw new Error("Server error");
    }
  } catch (error) {
    console.log(error);
  }
};
