import React from "react";
import logo from "../../assets/images/logo2.png";
import Button from "../UI/Button/Button";
import { navItems } from "./includes";

const Navbar = () => {
  return (
    <nav className="h-16 w-full flex">
      <div className="h-full w-1/6 flex items-center justify-start">
        <img src={logo} alt="logo" className="h-full" />
      </div>
      <div className="h-full w-4/6 flex items-center justify-center">
        <ul className="h-3/4 w-3/4 border-y border-[#C8CFDF] text-[#191C21] font-semibold flex justify-evenly items-center">
          {navItems.map((item, index) => (               
              <li key={index} className="flex justify-center items-center"><span className="border border-[#613FB7] rounded-full h-1 w-1 inline-block font-semibold mr-1"></span> {item}</li> 
          ))}
        </ul>
      </div>
      <div className="h-full w-1/6 flex items-center justify-between">
        <Button className="rounded-md h-1/2 w-20 text-[#232732] font-semibold my-2 cursor-pointer">
          Sign Up
        </Button>
        <Button className="rounded-md h-1/2 w-20 border border-[#6143BD] text-[#6143BD] font-semibold my-2 cursor-pointer hover:bg-[#6143BD] hover:text-white ease-linear duration-300">
          Login
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
