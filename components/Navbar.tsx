"use client";
import React from "react";
import Search from "./Search";
import { BiMenu, MdOutlineShoppingCart } from "../constants";
import Link from "next/link";
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
      <div className="flex w-[92%] sm:w-[90%] md:w-[100%] xl:w-[78%]   mx-auto  items-center py-4 space-x-[5%] sm:space-x-[6%]">
        <div className="md:hidden">
          <BiMenu size={24} />
        </div>
        <div className="">
          <img src="/logo.svg" alt="Glide logo" />
        </div>
        <div className="hidden md:flex items-center space-x-8 text-gray-600  ">
          <Link
            href="/vendor"
            className="cursor-pointer hover:text-secondaryBlue"
          >
            {DATA[0].title}
          </Link>
          <p className="cursor-pointer  hover:text-secondaryBlue">
            {DATA[1].title}
          </p>
        </div>
        <div className="hidden md:block ">
          <Search />
        </div>
        <div className="flex space-x-6 md:space-x-8 text-sm font-semibold  items-center">
          <button className="ring-[1px] hover:bg-[#00CCFF]/75 rounded px-4 py-1  text-primaryBlue ring-[#00CCFF]/75">
            {DATA[2].title}
          </button>
          <div className="md:hidden">
            <MdOutlineShoppingCart size={24} />
          </div>
          <button className="hidden md:block bg-white shadow-md hover:bg-primaryBlue hover:text-white rounded px-4 py-[5px] text-primaryBlue ring-lightBlue">
            {DATA[3].title}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
