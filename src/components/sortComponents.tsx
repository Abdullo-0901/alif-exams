import { Box } from "@mui/material";
import React, { FC, useState } from "react";
import { ProductType } from "../interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { maxPrice, minPrice } from "../store/marketSlice";

const SortComponents: FC<{ data: ProductType[] }> = ({ data }) => {
  const dispatch = useDispatch();
  const price_min = useSelector((state: RootState) => state.market.price_min);
  const price_max = useSelector((state: RootState) => state.market.price_max);

  const [checkedItems, setCheckedItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleChange =
    (itemName: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCheckedItems({
        ...checkedItems,
        [itemName]: event.target.checked,
      });
    };

  return (
    <Box
      sx={{
        marginTop: "70px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <aside className="flex flex-col">
        <h1 className="mb-2 font-mono font-bold">Цена</h1>
        <Box sx={{ display: "flex", gap: "15px" }}>
          <input
            type="text"
            value={price_min}
            onChange={(e) => dispatch(minPrice(Number(e.target.value)))}
            placeholder="от 10$"
            className=" border-gray-400 border-[1px] text-[14px]  rounded-[5px]    outline-yellow-500  w-[100px] p-[2px_6px]"
          />
          <input
            type="text"
            value={price_max}
            onChange={(e) => dispatch(maxPrice(Number(e.target.value)))}
            placeholder="до 550$"
            className=" border-gray-400 border-[1px]  text-[14px] rounded-[5px]    outline-yellow-500  w-[100px] p-[2px_6px]"
          />
        </Box>
      </aside>
      <aside className="flex flex-col">
        <h1 className="mb-2 mt-5 font-mono font-bold">Бренд</h1>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {[
            "Clothes",
            "Electronics",
            "Furniture",
            "Shoes",
            "Miscellaneous",
          ].map((item, index) => (
            <div
              key={item}
              style={{ display: "flex", alignItems: "center", gap: "9px" }}
            >
              <input
                type="checkbox"
                checked={checkedItems[item] || false}
                onChange={handleChange(item)}
                aria-label="controlled"
              />
              <span className="text-[15px] font-serif">{item}</span>
            </div>
          ))}
          <div></div>
        </Box>
      </aside>
    </Box>
  );
};

export default SortComponents;
