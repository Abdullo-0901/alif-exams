import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const Layout = () => {
  return (
    <section>
      <Navbar />
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </section>
  );
};

export default Layout;
