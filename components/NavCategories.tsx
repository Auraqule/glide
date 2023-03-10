"use client";
import { useState } from "react";
import {
  GiKnifeFork,
  TbHanger,
  MdLocalMovies,
  HiMusicalNote,
  BiDumbbell,
  FaBone,
  FaBabyCarriage,
  GoTelescope,
  ImLeaf,
  AiOutlineThunderbolt,
  GiNuclear,
} from "../constants";
const DATA = [
  {
    title: "Clothing and Shoes",
  },
  {
    title: "Entertainment",
  },
  {
    title: "Music",
  },
  {
    title: "Sport and Lifestyle",
  },
  {
    title: "Pets",
  },
  {
    title: "Kitchen Accessories",
  },
  {
    title: "Travel Equipment",
  },
  {
    title: "Garden",
  },
  {
    title: "Elecrical Tools",
  },
  {
    title: "Mother Care",
  },
  {
    title: "Toys and Entertainment",
  },
];
const NavCategories = () => {
  const [selectedId, setSelectedId] = useState<string>("");
  return (
    <div className="flex mt-2 sm:mt-4  sm:mb-4 w-[90%]   sm:w-[78%] overflow-x-scroll scrollbar-hide mx-auto  justify-center space-x-2">
      {DATA.map((item, i) => (
        <div
          onClick={() => setSelectedId(`${i}_key`)}
          className={`flex ${
            i === 0 && "ml-[39rem] sm:ml-0"
          } flex-col scroll-m-8 items-center p-2 text-center  hover:text-[#2979FF]  rounded-[10px] cursor-pointer ${
            selectedId === i + "_key"
              ? "bg-blue-100 text-[#2979FF]"
              : "text-gray-500"
          }  space-y-1`}
          key={`${i}_key`}
        >
          {i === 0 ? (
            <TbHanger />
          ) : i === 1 ? (
            <MdLocalMovies />
          ) : i === 2 ? (
            <HiMusicalNote />
          ) : i === 3 ? (
            <BiDumbbell />
          ) : i === 4 ? (
            <FaBone />
          ) : i === 5 ? (
            <GiKnifeFork />
          ) : i === 6 ? (
            <GoTelescope />
          ) : i === 7 ? (
            <ImLeaf />
          ) : i === 8 ? (
            <AiOutlineThunderbolt />
          ) : i === 9 ? (
            <FaBabyCarriage />
          ) : (
            <GiNuclear />
          )}
          <p
            className={`text-xs min-w-[60px] hover:text-[#2979FF] ${
              selectedId === i + "_key" ? "text-[#2979FF]" : "text-gray-500"
            } `}
          >
            {item.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default NavCategories;
