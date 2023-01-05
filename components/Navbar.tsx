"use client";
import React, { useState } from "react";
import Search from "./Search";
import {
  AiOutlineUnorderedList,
  BiMenu,
  BiStore,
  GoGift,
  MdOutlineClose,
  MdOutlineMarkEmailUnread,
  MdOutlineReviews,
  MdOutlineShoppingCart,
  MdPersonOutline,
} from "../constants";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
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
const Navbar = () => {
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
    <nav className="bg-white sticky  top-0">
      <div
        className={` bg-white pt-12 fixed z-30 transition-all duration-300 ease-linear  top-0 bottom-0 ${
          isModalOpen ? "left-0  w-[70%]" : "w-[0%]"
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

      <div className="flex w-[92%] sm:w-[90%] md:w-[100%] xl:w-[78%]   mx-auto justify-between items-center py-4  sm:space-x-[6%]">
        <div onClick={handleMenu} className="md:hidden -mr-[8%]">
          <BiMenu size={24} />
        </div>
        <Link href="/" className="">
          <img src="/logo.svg" alt="Glide logo" />
        </Link>
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
