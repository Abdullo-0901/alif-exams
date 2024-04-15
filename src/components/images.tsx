import { FC } from "react";
import { ProductType } from "../interfaces";
interface Props {
  product: ProductType;
  fill?: boolean;
  isLoading?: boolean;
}
const CoustomImages: FC<Props> = ({ product, fill, isLoading }) => {
  return (
    <>
      {fill ? (
        <img
          src={product.images[0]}
          alt="product"
          className={`
    object-contain h-[150px] w-full duration-700  ease-in-out group-hover:opacity-75  ${
      isLoading
        ? "scale-110 blur-2xl grayscale"
        : "scale-100 blur-0 grayscale-0"
    }
  `}
        />
      ) : (
        <img
          src={product.images[0]}
          alt="product"
          width={400}
          height={900}
          className={`
    object-contain duration-700 ease-in-out group-hover:opacity-75  ${
      isLoading
        ? "scale-110 blur-2xl grayscale"
        : "scale-100 blur-0 grayscale-0"
    }
  `}
        />
      )}
    </>
  );
};

export default CoustomImages;
