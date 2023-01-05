"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  AiOutlineUnorderedList,
  BiMenu,
  GoGift,
  MdOutlineClose,
  MdOutlineMarkEmailUnread,
  MdOutlineReviews,
  MdPersonOutline,
} from "../constants";
import MobileMenu from "./MobileMenu";
const account = [
  {
    title: "My account",
    url: "",
  },
  {
    title: "Inbox",
    url: "",
  },

  {
    title: "Bonuses",
    url: "",
  },
  {
    title: "Reviews",
    url: "",
  },
  {
    title: "Wishlist",
    url: "",
  },
];
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const disableScroll = () => {
    document.body.style.overflowY = "hidden";
  };
  const handleCloseModal = () => {
    const enableScroll = () => {
      document.body.style.overflowY = "scroll";
    };
    enableScroll();
    setIsModalOpen(false);
  };
  const handleMenu = () => {
    setIsModalOpen(true);
    disableScroll();
    console.log("clicked");
  };
  return (
    <nav className="bg-white sticky z-30 top-0">
      <div
        className={` bg-white pt-12 fixed z-30 transition-all duration-300 ease-linear  top-0 bottom-0 ${
          isModalOpen ? "right-0  w-[70%]" : "w-[0%] -right-[999px]"
        } `}
      >
        <div onClick={handleCloseModal} className="absolute top-4 right-6">
          <MdOutlineClose size={26} />
        </div>
        {/* MOBILE MENU NAVIGATION */}
        <div className={`${isModalOpen ? "block" : "hidden"}`}>
          {account.map((item, i) => (
            <Link
              className="flex items-center hover:text-[#2979FF] hover:font-semibold space-x-2 w-[85%] text-xs mb-3 mx-auto"
              key={i.toString()}
              href={item.url}
            >
              {i === 0 ? (
                <MdPersonOutline size={16} />
              ) : i === 1 ? (
                <MdOutlineMarkEmailUnread size={16} />
              ) : i === 2 ? (
                <GoGift size={16} />
              ) : i === 3 ? (
                <MdOutlineReviews size={16} />
              ) : (
                <AiOutlineUnorderedList size={16} />
              )}

              <p>{item.title}</p>
            </Link>
          ))}
        </div>
        {/* MENU DIVIDER */}
        <div className="w-[90%] mx-auto h-[1px] bg-gray-200 my-4" />
        <div
          className={`overflow-y-scroll h-[50%]  ${
            isModalOpen ? "block" : "hidden"
          }`}
        >
          <MobileMenu />
        </div>
        {/* MENU DIVIDER */}
        <div
          className={`w-[90%] mx-auto ${
            isModalOpen ? "block" : "hidden"
          } h-[1px] bg-gray-200 my-4`}
        />
        <div className={`${isModalOpen ? "block" : "hidden"}`}>
          <Link
            href="/vendor"
            className="flex hover:text-[#2979FF] hover:font-semibold cursor-pointer space-x-2 w-[85%] text-xs mb-3 mx-auto"
          >
            Sell on Glide
          </Link>
          <Link
            href="/"
            className="flex hover:text-[#2979FF] hover:font-semibold cursor-pointer space-x-2 w-[85%] text-xs mb-3 mx-auto"
          >
            Contact Us/Get Help
          </Link>
        </div>
      </div>
      {isModalOpen && (
        <div
          onClick={handleCloseModal}
          className="fixed top-0 bottom-0  left-0 right-0 bg-black/50"
        />
      )}
      <div className="flex w-[90%]  sm:w-[78%] mx-auto  items-center py-4 space-x-[20%] sm:space-x-[10%]">
        <div>
          <Link href="/">
            <img src="/logo.svg" alt="Glide logo" />
          </Link>
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
            <div onClick={handleMenu} className="sm:hidden">
              <BiMenu size={24} />
            </div>
          </div>
        </main>
      </div>
    </nav>
  );
};

export default VendorNav;
