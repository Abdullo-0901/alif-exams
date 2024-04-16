import axios, { AxiosError } from "axios";
import { ProductType } from "../interfaces";
import { GLOBALURL } from "../components";
import { toast } from "react-toastify";

export const getProduct = async (title: string) => {
  console.log(title);

  try {
    const response = await axios.get<ProductType[]>(
      `${GLOBALURL}products?title=${title}`
    );
    console.log(response.data);

    return response.data;
  } catch (error_) {
    const error = error_ as AxiosError<{ message: string }>;
    const statusCode = error.status;
    if (statusCode !== undefined) {
      if (statusCode >= 500) {
        toast.error("Ошибка на стороне сервера");
      }
    } else if (error.message === "Network Error") {
      toast.error("Проверьте подключение к интернету.");
    }
  }
};
