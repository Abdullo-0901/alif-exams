import { Box, Button, Container, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { ProductType } from "../interfaces";

const Card = () => {
  const [total, setTotal] = React.useState<number>(0);
  const [products, setProducts] = React.useState<ProductType[]>(
    JSON.parse(localStorage.getItem("carts") as string) || []
  );

  const removeProduct = (id: number) => {
    const updateCart = products.filter((product) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(updateCart));
    setProducts(updateCart);
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
      toast(`Remove this product`);
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
        <h1>Hello</h1>
      )}
    </Container>
  );
};

export default Card;
