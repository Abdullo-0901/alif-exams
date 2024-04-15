import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <section>
      <Navbar />
      <Outlet />
    </section>
  );
};

export default Layout;
