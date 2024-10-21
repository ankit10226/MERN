import { createBrowserRouter } from "react-router-dom";
import Index from "../../Pages/Index/Index";
import Signup from "../../Pages/Signup/Signup"; 
import Login from "../../Pages/Login/Login";
import NotFound from "../NotFound/NotFound";
import Home from "../../Pages/Home/Home";
import ToDoList from "../../Components/ToDoList/ToDoList";
import Form from "../../Pages/Form/Form";

const router = createBrowserRouter([
  {
    path: "/index",
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
    path: "/todolist",
    element: <ToDoList />,
  },
  {
    path: "/",
    element: <Form />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  
]);

export default router;
