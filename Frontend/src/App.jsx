import { BrowserRouter, Routes, Route } from "react-router-dom"; 
import User from "./Components/User/User/User";
import CreateUser from "./Components/User/CreateUser/CreateUser";
import UpdateUser from "./Components/User/UpdateUser/UpdateUser";
import Login from "./Components/Login/Login";
import Signup from "./Components/Signup/Signup";
import Home from "./Components/Home/Home";

function App() { 

  return (
    <div className="font-sans w-screen h-screen flex justify-center items-center flex-col font-semibold text-slate-600 bg-gray-900">
      <BrowserRouter> 
          <Routes>  
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} /> 
          </Routes>  
      </BrowserRouter>
    </div>
  )
}

export default App
