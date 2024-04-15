import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import { Box, Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

const Layout = () => {
  return (
    <section>
      <Navbar />
      <Container maxWidth="xl">
        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box
            sx={{
              marginTop: "150px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <aside className="flex flex-col">
              <h1 className="mb-2">Цена</h1>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <input
                  type="text"
                  placeholder="от 10$"
                  className=" border-gray-400 border-[1px] text-[14px]  rounded-[5px]    outline-yellow-500  w-[100px] p-[2px_6px]"
                />
                <input
                  type="text"
                  placeholder="до 550$"
                  className=" border-gray-400 border-[1px]  text-[14px] rounded-[5px]    outline-yellow-500  w-[100px] p-[2px_6px]"
                />
              </Box>
            </aside>
            <aside className="flex flex-col">
              <h1 className="mb-2 mt-5">Бренд</h1>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <input
                  type="text"
                  placeholder="от 10$"
                  className=" border-gray-400 border-[1px] text-[14px]  rounded-[5px]    outline-yellow-500  w-[100px] p-[2px_6px]"
                />
                <input
                  type="text"
                  placeholder="до 550$"
                  className=" border-gray-400 border-[1px]  text-[14px] rounded-[5px]    outline-yellow-500  w-[100px] p-[2px_6px]"
                />
              </Box>
            </aside>
          </Box>
          <Outlet />
        </Box>
        <footer className="flex justify-between items-center">
          <Link to={"/"}>
            <HomeIcon />
          </Link>
          <Link
            className=" items-center sm:hidden md:inline-flex justify-center 
                 rounded-lg outline-none focus:outline-none  bg-transparent hover:text-yellow-500 active:text-yellow-600 py-2 px-3 text-sm flex-col text-smx text-gray-500 relative mt-0.5 !gap-0 !p-0 "
            aria-label="Cart"
            to="/cart"
          >
            <span>
              <img className="w-[20px]" src="/card.svg" alt="" />
            </span>
            <span className="text-[12px]" aria-label="Cart link">
              Корзина
            </span>
          </Link>
        </footer>
      </Container>
    </section>
  );
};

export default Layout;
