import { createBrowserRouter } from "react-router-dom";

//import App from "./pages/App";

//import Error from "./pages/Error";
import Login from "./pages/Login";
import Home from "./pages/Home"
import Product from "./pages/Product"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
 // { path: "/", element: <App />, errorElement: <Error /> },
  //{ path: "/:id", element: <App /> },
  { path: "/login", element: <Login /> },
  { path: "/", element: <Home /> },
  { path: "/product", element: <Product /> },
  { path: "/profile", element: <Profile /> },
  {path: "/sign-up", element: <SignUp />},
  {path: "/product-detail", element: <ProductDetail />}
]);

export default router;