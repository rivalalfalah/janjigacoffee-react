import { createBrowserRouter } from "react-router-dom";

//import App from "./pages/App";

//import Error from "./pages/Error";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";

import PrivateElement from "./Components/privateElement";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <Error /> },
  //{ path: "/:id", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  {
    path: "/profile",
    element: (
      <PrivateElement>
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
