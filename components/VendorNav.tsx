"use client";
import React from "react";
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
    <nav className="bg-white sticky top-0">
      <div className="flex w-[78%] mx-auto  items-center py-4 space-x-[10%]">
        <div>
          <img src="/logo.svg" alt="Glide logo" />
        </div>
        <main className="flex w-full justify-between">
          <div className="flex items-center space-x-8 text-gray-600  ">
            <p className="cursor-pointer hover:text-secondaryBlue">
              {DATA[0].title}
            </p>
            <p className="cursor-pointer  hover:text-secondaryBlue">
              {DATA[1].title}
            </p>
          </div>
          <div className="flex space-x-8 text-sm font-semibold  items-center">
            <button className="ring-[1px] hover:bg-[#00CCFF]/75 rounded px-4 py-1  text-primaryBlue ring-[#00CCFF]/75">
              {DATA[2].title}
            </button>
            <button className="bg-white shadow-md hover:bg-primaryBlue hover:text-white rounded px-4 py-[5px] text-primaryBlue ring-lightBlue">
              {DATA[3].title}
            </button>
          </div>
        </main>
      </div>
    </nav>
  );
};

export default VendorNav;
