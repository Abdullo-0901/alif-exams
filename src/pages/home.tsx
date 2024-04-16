import { Skeleton } from "@mui/material";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Product from "../components/products";
import { getProduct } from "../entity/get-product.entity";
import SortComponents from "../components/sortComponents";

const Home = () => {
  const { data = [], isLoading } = useQuery(
    ["getcategory"],
    () => getProduct(),
    {
      onError: (err) => {
        toast.error((err as any).response.data.message);
      },
    }
  );

  return (
    <section className="flex gap-5 mt-10 space-y-12 ">
      <SortComponents data={data} />
      <div className="grid grid-cols-1 gap-y-10  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8">
        {isLoading
          ? Array.from({ length: 16 }, (_, i) => i).map((_item) => (
              <div key={_item} className="flex flex-col gap-y-4">
                <div className="relative max-h-80 flex-1 mb-5">
                  <Skeleton
                    variant="rectangular"
                    className="rounded-2xl"
                    width={250}
                    height={150}
                  />
                </div>
                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">
                  <Skeleton variant="rectangular" width={150} height={10} />
                </h3>
                <div className="font-semibold flex items-center justify-between mt-4 mb-1 ">
                  <h2 className="w-44  truncate">
                    <Skeleton variant="rectangular" width={220} height={10} />
                  </h2>

                  <Skeleton variant="rectangular" width={100} height={10} />
                </div>
                <p className="leading-relaxed text-base line-clamp-2">
                  <Skeleton variant="rectangular" width={350} height={10} />
                </p>
              </div>
            ))
          : data.map((product) => (
              <Product
                key={product.id}
                isLoading={isLoading}
                product={product}
              />
            ))}
      </div>
    </section>
  );
};

export default Home;
