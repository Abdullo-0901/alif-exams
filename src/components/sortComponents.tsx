import { Box } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { maxPrice, minPrice, setCategoryId } from "../store/marketSlice";
import { RootState } from "../store/store";

const SortComponents = () => {
  const dispatch = useDispatch();
  const price_min = useSelector((state: RootState) => state.market.price_min);
  const price_max = useSelector((state: RootState) => state.market.price_max);

  const [clothesChecked, setClothesChecked] = useState<boolean>(false);
  const [electronicsChecked, setElectronicsChecked] = useState<boolean>(false);
  const [furnitureChecked, setFurnitureChecked] = useState<boolean>(false);
  const [shoesChecked, setShoesChecked] = useState<boolean>(false);
  const [miscellaneousChecked, setMiscellaneousChecked] =
    useState<boolean>(false);

  const handleClothesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClothesChecked(event.target.checked);
    dispatch(setCategoryId(1));
    if (event.target.checked) {
      setElectronicsChecked(false);
      setFurnitureChecked(false);
      setShoesChecked(false);
      setMiscellaneousChecked(false);
    }
  };

  const handleElectronicsChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setElectronicsChecked(event.target.checked);
    dispatch(setCategoryId(2));
    if (event.target.checked) {
      setClothesChecked(false);
      setFurnitureChecked(false);
      setShoesChecked(false);
      setMiscellaneousChecked(false);
    }
  };

  const handleFurnitureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFurnitureChecked(event.target.checked);
    dispatch(setCategoryId(3));
    if (event.target.checked) {
      setClothesChecked(false);
      setElectronicsChecked(false);
      setShoesChecked(false);
      setMiscellaneousChecked(false);
    }
  };

  const handleShoesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShoesChecked(event.target.checked);
    dispatch(setCategoryId(4));
    if (event.target.checked) {
      setClothesChecked(false);
      setElectronicsChecked(false);
      setFurnitureChecked(false);
      setMiscellaneousChecked(false);
    }
  };

  const handleMiscellaneousChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setMiscellaneousChecked(event.target.checked);
    dispatch(setCategoryId(5));
    if (event.target.checked) {
      setClothesChecked(false);
      setElectronicsChecked(false);
      setFurnitureChecked(false);
      setShoesChecked(false);
    }
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
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <input
              type="checkbox"
              checked={clothesChecked}
              onChange={handleClothesChange}
              aria-label="controlled"
            />
            <span className="text-[15px] font-serif">Clothes</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <input
              type="checkbox"
              checked={electronicsChecked}
              onChange={handleElectronicsChange}
              aria-label="controlled"
            />
            <span className="text-[15px] font-serif">Electronics</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <input
              type="checkbox"
              checked={furnitureChecked}
              onChange={handleFurnitureChange}
              aria-label="controlled"
            />
            <span className="text-[15px] font-serif">Furniture</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <input
              type="checkbox"
              checked={shoesChecked}
              onChange={handleShoesChange}
              aria-label="controlled"
            />
            <span className="text-[15px] font-serif">Shoes</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
            <input
              type="checkbox"
              checked={miscellaneousChecked}
              onChange={handleMiscellaneousChange}
              aria-label="controlled"
            />
            <span className="text-[15px] font-serif">Miscellaneous</span>
          </div>
        </Box>
      </aside>
    </Box>
  );
};

export default SortComponents;
