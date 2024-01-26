import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AddProduct, Stats, UpdateProduct } from "./components";
import ProductsList from "./components/ProductsList";
import DashboardLayout from "./pages/DashboardLayout";
import Layout from "./pages/Layout";
import Register from "./pages/Register";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <DashboardLayout />,
        children: [
          { index: true, element: <Stats /> },
          { path: "products", element: <ProductsList /> },
          { path: "add-product", element: <AddProduct /> },
          { path: "update-products/:id", element: <UpdateProduct /> },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
