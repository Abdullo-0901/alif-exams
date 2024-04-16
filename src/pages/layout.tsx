import HomeIcon from "@mui/icons-material/Home";
import { Container } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <section>
      <Navbar />
      <Container maxWidth="xl">
        <Outlet />

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
