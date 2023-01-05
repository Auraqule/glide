"use client";
import React from "react";
import { BiMenu } from "../constants";

const DATA = [
  {
    title: " User Manual",
    url: "",
  },
  {
    title: " Help Center",
    url: "",
  },
  {
    title: "Sign Up",
    url: "",
  },
  {
    title: "Seller Log in",
    url: "",
  },
];

const VendorNav = () => {
  return (
    <nav className="bg-white sticky z-30 top-0">
      <div className="flex w-[90%]  sm:w-[78%] mx-auto  items-center py-4 space-x-[20%] sm:space-x-[10%]">
        <div>
          <img src="/logo.svg" alt="Glide logo" />
        </div>
        <main className="flex w-full justify-between">
          <div className=" hidden sm:flex items-center space-x-8 text-gray-600  ">
            <p className="cursor-pointer hover:text-secondaryBlue">
              {DATA[0].title}
            </p>
            <p className="cursor-pointer  hover:text-secondaryBlue">
              {DATA[1].title}
            </p>
          </div>
          <div className="flex w-full sm:w-auto justify-between sm:justify-start sm:space-x-8 text-sm font-semibold  items-center">
            <button className="hidden sm:block ring-[1px] hover:bg-[#00CCFF]/75 rounded px-4 py-1  text-primaryBlue ring-[#00CCFF]/75">
              {DATA[2].title}
            </button>
            <button className="bg-white shadow-md hover:bg-primaryBlue hover:text-white rounded px-4 py-[5px] text-primaryBlue ring-lightBlue">
              {DATA[3].title}
            </button>
            <div className="sm:hidden">
              <BiMenu size={24} />
            </div>
          </div>
        </main>
      </div>
    </nav>
  );
};

export default VendorNav;
