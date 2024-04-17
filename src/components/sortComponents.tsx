import { Box } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { maxPrice, minPrice, setCategoryId } from "../store/marketSlice";

const SortComponents = () => {
  const dispatch = useDispatch();
  const [clothesChecked, setClothesChecked] = useState<boolean>(false);
  const [electronicsChecked, setElectronicsChecked] = useState<boolean>(false);
  const [furnitureChecked, setFurnitureChecked] = useState<boolean>(false);
  const [shoesChecked, setShoesChecked] = useState<boolean>(false);
  const [miscellaneousChecked, setMiscellaneousChecked] =
    useState<boolean>(false);

  const handleClothesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setClothesChecked(event.target.checked);

    {
      !clothesChecked ? dispatch(setCategoryId(1)) : dispatch(setCategoryId(0));
    }

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

    {
      !electronicsChecked
        ? dispatch(setCategoryId(2))
        : dispatch(setCategoryId(0));
    }
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

    {
      !furnitureChecked
        ? dispatch(setCategoryId(3))
        : dispatch(setCategoryId(0));
    }
    if (event.target.checked) {
      setClothesChecked(false);
      setElectronicsChecked(false);
      setShoesChecked(false);
      setMiscellaneousChecked(false);
    }
  };

  const handleShoesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShoesChecked(event.target.checked);

    {
      !shoesChecked ? dispatch(setCategoryId(4)) : dispatch(setCategoryId(0));
    }
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

    {
      !miscellaneousChecked
        ? dispatch(setCategoryId(5))
        : dispatch(setCategoryId(0));
    }
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
            onChange={(e) => dispatch(minPrice(Number(e.target.value)))}
            placeholder="от 10$"
            className=" border-gray-400 border-[1px] text-[14px]  rounded-[5px]    outline-yellow-500  w-[100px] p-[2px_6px]"
          />
          <input
            type="text"
            onChange={(e) => dispatch(maxPrice(Number(e.target.value)))}
            placeholder="до 550$"
            className=" border-gray-400 border-[1px]  text-[14px] rounded-[5px]    outline-yellow-500  w-[100px] p-[2px_6px]"
          />
        </Box>
      </aside>

      <aside className="flex flex-col ">
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
