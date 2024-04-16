import { FC } from "react";
import { ProductType } from "../interfaces";
interface Props {
  product: ProductType;
}
const CoustomImages: FC<Props> = ({ product }) => {
  return (
    <img
      src={product.images[1]}
      alt="product"
      className={`
    object-contain h-[150px] w-full duration-700  ease-in-out group-hover:opacity-75`}
    />
  );
};

export default CoustomImages;
