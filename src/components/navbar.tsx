import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../interfaces";

function Navbar() {
  const [products, setProducts] = React.useState<ProductType[]>(
    JSON.parse(localStorage.getItem("carts") as string) || []
  );
  useEffect(() => {
    const handleAddToCart: EventListener = (event) => {
      const newProduct = (event as CustomEvent).detail as
        | ProductType
        | undefined;
      if (newProduct) {
        setProducts((prevProducts) => [...prevProducts, newProduct]);
      }
    };

    window.addEventListener("addToCart", handleAddToCart);

    return () => {
      window.removeEventListener("addToCart", handleAddToCart);
    };
  }, []);

  return (
    <AppBar color="default" position="fixed">
      <Container maxWidth="xl">
        <Box>
          <Toolbar
            sx={{
              display: {
                md: "flex",
                gap: "7px",
                justifyContent: "space-between",
                alignItems: "center",
              },
            }}
          >
            <Link to={"/"}>
              <img className="w-[100px]" src="/logo.svg" alt="" />
            </Link>

            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  gap: "10px",
                  alignItems: "center",
                },
                justifyContent: "flex-end",
              }}
            >
              <Box className="relative flex items-center overflow-hidden sm:w-[90%] md:w-[40%] pr-[60px]">
                <input
                  type="search"
                  placeholder="Название товар или артакул"
                  className="w-full border-gray-400 border-2 border-r-0 rounded-[5px_0_0_5px]    outline-yellow-500 h-[35px] p-[0_20px] "
                />
                <Button
                  sx={{
                    position: "absolute",
                    right: "0",
                    backgroundColor: "#eab308",
                    height: "35px",
                    borderRadius: "0px 5px 5px 0px",

                    "&:hover": {
                      backgroundColor: "orange",
                    },
                  }}
                  className="bg-yellow-500"
                  aria-label="Search"
                >
                  <img src="/search.svg" alt="" />
                </Button>
              </Box>

              <Link
                className=" items-center sm:hidden md:inline-flex justify-center 
                 rounded-lg outline-none focus:outline-none  bg-transparent hover:text-yellow-500 active:text-yellow-600 py-2 px-3 text-sm flex-col text-smx text-gray-500 relative mt-0.5 !gap-0 !p-0 "
                aria-label="Cart"
                to="/cart"
              >
                <Badge badgeContent={products.length} color="warning">
                  <span>
                    <img className="w-[20px]" src="/card.svg" alt="" />
                  </span>
                </Badge>
                <span className="text-[12px]" aria-label="Cart link">
                  Корзина
                </span>
              </Link>
            </Box>
          </Toolbar>
        </Box>
      </Container>
    </AppBar>
  );
}
export default Navbar;
