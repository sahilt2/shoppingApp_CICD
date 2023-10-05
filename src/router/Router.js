import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import ProductsList from "../ProductsList";
import Test from "../Test";
import Cart from "../Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage/>,
    },
    {
      path: "/test",
      element: <Test/>,
    },
    {
      path: "/products",
      element: <ProductsList/>,
    },
    {
      path: "/cart",
      element: <Cart/>,
    },
  ]);

export default router;