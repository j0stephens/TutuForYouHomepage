import React from "react";
import logo from "../Assets/logo2.png";
import { AiOutlineMenu } from "react-icons/ai";

const Logo = () => {
  return (
    <div className="flex items-end pt-1">
      <div className="mx-auto pl-2 pt-2 md:flex md:justify-center">
        <img className="w-[150px] md:w-[175px] hover:cursor-pointer" src={logo} alt="/" />
      </div>
      <div className="md:hidden text-[#bfa26a] px-2 hover:cursor-pointer hover:text-[#d7c4a1]">
        <AiOutlineMenu size={30} />
      </div>
    </div>
  );
};

export default Logo;
