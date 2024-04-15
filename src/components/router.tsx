import { Home } from "@mui/icons-material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "../pages/about";
import Layout from "../pages/layout";
import NotFound from "../pages/not-foud";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "product/:id",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
