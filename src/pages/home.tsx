import { Box, Button, Container, Skeleton, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Product from "../components/products";
import SortComponents from "../components/sortComponents";
import { getProduct } from "../entity/get-product.entity";
import { maxPrice, minPrice, queryTitle } from "../store/marketSlice";
import { RootState } from "../store/store";

const Home = () => {
  const dispatch = useDispatch();
  const title = useSelector((state: RootState) => state.market.qtitle);
  const price_min = useSelector((state: RootState) => state.market.price_min);
  const price_max = useSelector((state: RootState) => state.market.price_max);
  const categoryId = useSelector((state: RootState) => state.market.categoryId);

  const { data = [], isLoading } = useQuery(
    ["getcategory", title, price_min, price_max, categoryId],
    () => getProduct(title, price_min, price_max, categoryId),
    {
      onError: (err) => {
        toast.error((err as any).response.data.message);
      },
    }
  );
  console.log(data);

  return (
    <Container maxWidth="xl">
      <section className="flex gap-5 mt-20 space-y-12 ">
        <SortComponents />
        {isLoading ? (
          <div className="grid grid-cols-1 gap-y-10 mt-20  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8">
            {Array.from({ length: 16 }, (_, i) => i).map((_item) => (
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
                    <Skeleton variant="rectangular" width={150} height={10} />
                  </h2>

                  <Skeleton variant="rectangular" width={50} height={10} />
                </div>
                <p className="leading-relaxed text-base line-clamp-2">
                  <Skeleton variant="rectangular" width={250} height={10} />
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div
            className={`${
              data.length != 0
                ? "grid grid-cols-1 gap-y-10  sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8"
                : "flex justify-center w-full"
            }`}
          >
            {data.length == 0 ? (
              <div className="mt-7">
                <Typography variant="h3">Результаты поиска:{title}</Typography>
                <Box
                  sx={{
                    display: "flex",
                    gap: "30px",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "70vh",
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <img
                    className="w-[190px]"
                    src="/no-search-result.svg"
                    alt=""
                  />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: "10px",
                    }}
                  >
                    <Typography variant="h6">Таких товаров нет</Typography>
                    <span>Мы делаем все, чтобы это исправить</span>

                    <Button
                      onClick={() => {
                        dispatch(queryTitle("")),
                        dispatch(maxPrice(0))
                        dispatch(minPrice(0))
                      }}
                      sx={{
                        backgroundColor: "#eab308",
                        display: "flex",
                        alignItems: "center",
                        gap: "28px",
                        marginTop: "5px",
                        padding: "18px 22px",
                        marginLeft: "33px",

                        "&:hover": {
                          backgroundColor: "orange",
                        },
                      }}
                    >
                      <span
                        className="!text-[15px] text-black"
                        aria-label="Cart link"
                      >
                        Перейти на главную
                      </span>
                    </Button>
                  </Box>
                </Box>
              </div>
            ) : (
              data.map((product) => (
                <Product
                  key={product.id}
                  isLoading={isLoading}
                  product={product}
                />
              ))
            )}
          </div>
        )}
      </section>
    </Container>
  );
};

export default Home;
