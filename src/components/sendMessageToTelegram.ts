import { toast } from "react-toastify";
import { ProductType } from "../interfaces";
import { Dispatch, UnknownAction } from "@reduxjs/toolkit";
import { openModal } from "../store/marketSlice";

interface IMessage {
  adres: string;
  phoneNumber?: number;
  product: ProductType[];
  dispatch: Dispatch<UnknownAction>;
}

export const sendMessage = async ({
  adres,
  phoneNumber,
  product,
  dispatch,
}: IMessage) => {
  const token = "7014941655:AAGccnh01y1JkW9E3ggcwSlg5NwoaEKQdL8";
  const chatId = "5923880668";
  const url = `https://api.telegram.org/bot${token}/sendMessage`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: `Адрес : ${adres}\nPhone Number: ${phoneNumber}\n Заказ: ${product.map(
          (pro) =>
            "\n" +
            "\n" +
            "Имя товара :" +
            pro.title +
            "\n" +
            "Код товара:" +
            pro.id +
            "\n" +
            "Категория товара:" +
            pro.category.name +
            "\n" +
            "Количество товар:" +
            pro.quantity
        )}  `,
      }),
    });

    if (response.ok) {
      dispatch(openModal(false));
      toast.success("Успешно отправленно");
    } else {
      toast.error(await response.text());
      throw new Error("Server error");
    }
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
