import { Box, Button } from "@mui/material";
import { sendMessage } from "./sendMessageToTelegram";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";

const Contact = () => {
  const [adres, setAdres] = useState("");
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const product = useSelector((state: RootState) => state.market.products);
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
