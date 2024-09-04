import { createBrowserRouter } from "react-router-dom";
import Index from "../../Pages/Index/Index";
import Signup from "../../Pages/Signup/Signup"; 
import Login from "../../Pages/Login/Login";
import NotFound from "../NotFound/NotFound";
import Home from "../../Pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
