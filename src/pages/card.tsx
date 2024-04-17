import {
  Box,
  Button,
  Container,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CoustomImages from "../components/images";
import { ProductType } from "../interfaces";
import { openModal, productsCard } from "../store/marketSlice";
import { RootState } from "../store/store";
import Contact from "../components/contact";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 560,
  bgcolor: "background.paper",
  border: "2px solid transparent",
  boxShadow: 24,
  p: 4,
};

const Card = () => {
  const dispatch = useDispatch();
  const [total, setTotal] = React.useState<number>(0);
  const [products, setProducts] = React.useState<ProductType[]>(
    JSON.parse(localStorage.getItem("carts") as string) || []
  );
  const modal = useSelector((state: RootState) => state.market.modal);

  const removeProduct = (id: number) => {
    const updateCart = products.filter((product) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(updateCart));
    setProducts(updateCart);
    dispatch(productsCard(updateCart));
  };

  const handleIncrement = (id: number) => {
    const updateCart = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          quantity: product.quantity + 1,
        };
      }
      return product;
    });
    localStorage.setItem("carts", JSON.stringify(updateCart));
    setProducts(updateCart);
  };

  const handleDecrement = (id: number) => {
    const existProduct = products.find((product) => product.id === id);
    if (existProduct?.quantity == 1) {
      removeProduct(id);
      toast.success(`Remove this product`);
    } else {
      const updateCart = products.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            quantity: product.quantity - 1,
          };
        }
        return product;
      });
      localStorage.setItem("carts", JSON.stringify(updateCart));
      setProducts(updateCart);
    }
  };

  useEffect(() => {
    const total = products.reduce((acc, item) => {
      return acc + item.quantity * item.price;
    }, 0);
    setTotal(total);
  }, [products]);

  return (
    <Container maxWidth={"xl"} className="mt-24">
      {products.length == 0 ? (
        <Box>
          <Typography variant="h4" className="font-bold">
            Корзина
          </Typography>
          <div className="mt-10 mb-6 flex items-center justify-center">
            <img src="/emptycart.png" alt="empty" />
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="text-center  mb-10"
          >
            <Typography
              variant="h5"
              className="font-bold text-2xl leading-9 mb-3"
              data-sider-select-id="b05d3ac4-ce90-49ef-9677-a69f2f869f6e"
            >
              Внутри пока нет товаров
            </Typography>
            <p className="mb-4">
              Перейдите в раздел с товарами, чтобы оставить заявку
            </p>
            <Link to={"/"}>
              <Button
                sx={{
                  backgroundColor: "#eab308",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginTop: "55px",

                  "&:hover": {
                    backgroundColor: "orange",
                  },
                }}
              >
                <span>
                  <img className="w-[20px]" src="/card.svg" alt="" />
                </span>
                <span
                  className="!text-[12px] text-black"
                  aria-label="Cart link"
                >
                  Перейти в каталог
                </span>
              </Button>
            </Link>
          </Box>
        </Box>
      ) : (
        <Box sx={{ marginTop: "126px" }}>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  margin: "20px 0",
                }}
              >
                <Box
                  sx={{ display: "flex", alignItems: "center", gap: "20px" }}
                >
                  <Typography variant="h5">Корзина</Typography>
                  <Typography variant="body2">
                    <span className="text-gray-400">
                      {products.length} товаров
                    </span>
                  </Typography>
                </Box>
                <div className="cursor-pointer text-[#7fa4c5]">
                  Очистить корзину
                </div>
              </Box>
              {products.map((c) => {
                return (
                  <div
                    key={c.id}
                    className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                  >
                    <div className="relative w-52">
                      <CoustomImages product={c} />
                    </div>
                    <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                      <div className="mt-5 sm:mt-0">
                        <h2 className="text-lg font-bold text-gray-900 line-clamp-1">
                          {c.title}
                        </h2>
                        <p className="mt-1 text-sm text-gray-700 line-clamp-2">
                          {c?.description}
                        </p>

                        <div className="flex items-center text-sm my-4">
                          {/* <p>{c?.rating.rate}</p> */}

                          <p className="text-blue-600 hover:underline cursor-pointer text-[16px] "></p>
                        </div>
                      </div>
                      <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                        <div className="flex items-center border-gray-100">
                          <span
                            onClick={() =>
                              c.quantity < 2 ? "" : handleDecrement(c.id)
                            }
                            className={`${
                              c.quantity < 2
                                ? "opacity-40 cursor-not-allowed"
                                : "opacity-1"
                            } cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50`}
                          >
                            -
                          </span>
                          <input
                            className="h-8 w-8 border bg-white text-center text-xs outline-none"
                            type="number"
                            value={c.quantity}
                            min="1"
                          />
                          <span
                            onClick={() => handleIncrement(c.id)}
                            className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          >
                            {" "}
                            +{" "}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <p className="text-sm">
                            {" "}
                            {(c.price * c.quantity).toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                            onClick={() => removeProduct(c.id)}
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <Box
              className="mt-6 h-full md:w-1/3"
              position={"sticky"}
              top={"105px"}
            >
              <Typography
                variant="body2"
                sx={{ marginBottom: "10px", color: "#9ca3b7" }}
              >
                Способ оплаты
              </Typography>
              <Box className="rounded-lg border bg-white p-6 shadow-md md:mt-0 ">
                <Box className="mb-2 flex justify-between">
                  <Typography variant="body2" sx={{ color: "#9ca3b7" }}>
                    Товары ({products.length})
                    .....................................
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3b7" }}>
                    {total.toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </Typography>
                </Box>
                <Box className="mb-2 flex justify-between">
                  <Typography variant="body2" sx={{ color: "#9ca3b7" }}>
                    Скидка ............................................
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3b7" }}>
                    {(5).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </Typography>
                </Box>
                <Box className="mb-2 flex justify-between">
                  <Typography variant="body2" sx={{ color: "#9ca3b7" }}>
                    Общая сумма доставки ........................
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3b7" }}>
                    $0
                  </Typography>
                </Box>
                <Box className="mb-2 flex justify-between">
                  <Typography variant="body2" sx={{ color: "#9ca3b7" }}>
                    Комиссия за товары ({products.length}) .................
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#9ca3b7" }}>
                    {(total / 6).toLocaleString("en-US", {
                      style: "currency",
                      currency: "USD",
                    })}
                  </Typography>
                </Box>

                <hr className="my-4" />
                <Box className="flex justify-between items-center">
                  <Typography variant="h5" className="text-lg font-bold">
                    Итого
                  </Typography>
                  <div className="">
                    <Typography className="mb-1 text-lg font-bold">
                      {(total - total / 5).toLocaleString("en-US", {
                        style: "currency",
                        currency: "USD",
                      })}
                    </Typography>
                  </div>
                </Box>
                <Button
                  onClick={() => dispatch(openModal(true))}
                  sx={{
                    backgroundColor: "#eab308",
                    marginTop: "20px",
                    borderRadius: "10px",
                    width: "100%",
                    padding: "10px 15px",
                    "&:hover": {
                      backgroundColor: "orange",
                    },
                  }}
                  className="bg-yellow-500"
                  aria-label="Search"
                >
                  Перейти к оформлению
                </Button>
              </Box>
            </Box>
          </div>
        </Box>
      )}
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={modal}
        onClose={() => dispatch(openModal(false))}
      >
        <Box sx={style}>
          <Contact />
        </Box>
      </Modal>
    </Container>
  );
};

export default Card;
