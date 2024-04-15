"use client";

import { FC } from "react";
import { ProductType } from "../interfaces";
import { Link } from "react-router-dom";
import CoustomImages from "./images";
import { Box } from "@mui/material";

// eslint-disable-next-line @next/next/no-async-client-component
const Product: FC<{ product: ProductType; isLoading: boolean }> = ({
  product,
  isLoading,
}) => {
  return (
    <Link
      to={`product/${product.id}`}
      className=" h-96 flex flex-col p-6 rounded-lg border group hover:scale-105 transition-transform ease-in-out duration-200"
    >
      <Box className="relative max-h-80 flex-1 mb-5">
        <CoustomImages product={product} isLoading={isLoading} fill />
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
  );
};

export default Product;
