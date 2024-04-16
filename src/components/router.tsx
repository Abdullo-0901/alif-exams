import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { About, Card, Home, Layout, NotFound } from "../components/index";

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
        path: "cart",
        element: <Card />,
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
