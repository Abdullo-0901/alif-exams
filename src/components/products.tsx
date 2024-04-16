import { Box, Button } from "@mui/material";
import { FC } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../interfaces";
import { handleClick } from "./addtocard";
import CoustomImages from "./images";
import { useDispatch } from "react-redux";

const Product: FC<{ product: ProductType; isLoading: boolean }> = ({
  product,
}) => {
  const dispatch = useDispatch();
  return (
    <Box className=" h-96 flex flex-col p-6 rounded-lg border group hover:scale-105 transition-transform ease-in-out duration-200">
      <Link to={`product/${product.id}`}>
        <Box className="relative max-h-80 flex-1 mb-5">
          <CoustomImages product={product} />
        </Box>
        <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
          {product.category.name}
        </h3>
        <Box className="font-semibold flex items-center justify-between mt-4 mb-1 ">
          <h2 className="w-44  truncate">{product.title}</h2>
          <p>${product.price}</p>
        </Box>
        <p className="leading-relaxed text-base line-clamp-2">
          {product.description}
        </p>
      </Link>
      <Button
        onClick={() => handleClick({ product, dispatch })}
        sx={{
          backgroundColor: "#eab308",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "5px",

          "&:hover": {
            backgroundColor: "orange",
          },
        }}
      >
        <span>
          <img className="w-[20px]" src="/card.svg" alt="" />
        </span>
        <span className="!text-[12px] text-black" aria-label="Cart link">
          В корзину
        </span>
      </Button>
    </Box>
  );
};

export default Product;
