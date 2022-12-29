"use client";
import React from "react";
import Search from "./Search";
const DATA = [
  {
    title: " Sell on Glide",
    url: "",
  },
  {
    title: " Register",
    url: "",
  },
  {
    title: "Sign in",
    url: "",
  },
  {
    title: " My cart",
    url: "",
  },
];

const Navbar = () => {
  return (
    <nav className="bg-white sticky top-0">
      <div className="flex w-[78%] mx-auto  items-center py-4 space-x-[6%]">
        <div>
          <img src="/logo.svg" alt="Glide logo" />
        </div>
        <div className="flex items-center space-x-8 text-gray-600  ">
          <p className="cursor-pointer hover:text-secondaryBlue">
            {DATA[0].title}
          </p>
          <p className="cursor-pointer  hover:text-secondaryBlue">
            {DATA[1].title}
          </p>
        </div>
        <Search />
        <div className="flex space-x-8 text-sm font-semibold  items-center">
          <button className="ring-[1px] hover:bg-[#00CCFF]/75 rounded px-4 py-1  text-primaryBlue ring-[#00CCFF]/75">
            {DATA[2].title}
          </button>
          <button className="bg-white shadow-md hover:bg-primaryBlue hover:text-white rounded px-4 py-[5px] text-primaryBlue ring-lightBlue">
            {DATA[3].title}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
