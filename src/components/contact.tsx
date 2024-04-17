import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ProductType } from "../interfaces";
import { sendMessage } from "./sendMessageToTelegram";

const Contact = () => {
  const [adres, setAdres] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [product] = React.useState<ProductType[]>(
    JSON.parse(localStorage.getItem("carts") as string) || []
  );
  const dispatch = useDispatch();
  return (
    <Box>
      <form>
        <input
          type="text"
          required
          onChange={(e) => setAdres(e.target.value)}
          value={adres}
          placeholder="Адрес доставки"
          style={{ border: "1px solid gray" }}
          className="w-full p-[15px_18px] border-1 mb-8 border-gray-400  outline-yellow-500 "
        />
        <input
          required
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(Number(e.target.value))}
          type="number"
          placeholder="Номер телефон"
          style={{ border: "1px solid gray" }}
          className="w-full p-[15px_18px] border-1 mb-8 border-gray-400  outline-yellow-500 "
        />
        <Button
          onClick={(e) => {
            e.preventDefault();
            adres != "" &&
              phoneNumber != 0 &&
              sendMessage({ adres, phoneNumber, product, dispatch });
          }}
          type="submit"
          sx={{
            backgroundColor: "#eab308",
            display: "flex",
            alignItems: "center",
            padding: "10px 20px",
            marginTop: "5px",

            "&:hover": {
              backgroundColor: "orange",
            },
          }}
        >
          <span> Отправить</span>
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
