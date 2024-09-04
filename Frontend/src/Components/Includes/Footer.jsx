import React from "react";
import { footerImages } from "./includes";

const Footer = () => { 
  return (
    <footer className="h-16 w-full flex justify-evenly items-center">
      {footerImages.map((value, index) => {
        return (
          <div className="h-3/4 border-y border-[#C8CFDF] flex justify-center items-center" key={index}>
            <img src={value} alt="" />
          </div>
        );
      })}
    </footer>
  );
};

export default Footer;
