import { createBrowserRouter } from "react-router-dom";

//import App from "./pages/App";

//import Error from "./pages/Error";
import Login from "./pages/Login/Login";
import Product from "./pages/Product/Product";
import Profile from "./pages/Profile/Profile";
import SignUp from "./pages/SignUp/SignUp";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Home2 from "./pages/Home/index";
import NewProduct from "./pages/NewProduct/index";
import ProductPayment from "./pages/ProductPayment/ProductPayment";

import PrivateElement from "./Components/privateElement";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <Error /> },
  //{ path: "/:id", element: <App /> },
  // {path: "/home2", element: <Home2 />},
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home2 /> },
  { path: "/product", element: <Product /> },
  {
    path: "product-payment",
    element: (
      <PrivateElement allowedRoles={[1]}>
        <ProductPayment />
      </PrivateElement>
    ),
  },
  { path: "/add-product", element: <NewProduct /> },
  {
    path: "/profile",
    element: (
      <PrivateElement allowedRoles={[1]}>
        <Profile />
      </PrivateElement>
    ),
  },
  { path: "/sign-up", element: <SignUp /> },
  {
    path: "/product-detail",
    element: (
      <PrivateElement>
        <ProductDetail />
      </PrivateElement>
    ),
  },
]);

export default router;
