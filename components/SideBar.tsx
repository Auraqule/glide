"use client";
import React, { useState } from "react";
import {
  BiCategory,
  IoGameControllerOutline,
  IoWatchOutline,
  GiClothes,
  GiSewedShell,
  HiOutlineLightBulb,
  HiOutlineBuildingOffice2,
  MdComputer,
  CiCircleMore,
  FaBaby,
  BiDumbbell,
  BiStore,
  BsPhone,
} from "../constants";
const sideData = [
  {
    title: "Stores",
    url: "",
  },
  {
    title: "Fashion",
    url: "",
  },
  {
    title: "Phones & Telecommunications",
    url: "",
  },
  {
    title: "Electronics",
    url: "",
  },
  {
    title: "Baby Products",
    url: "",
  },
  {
    title: "Gaming",
    url: "",
  },
  {
    title: "Computing & Gadgets",
    url: "",
  },
  {
    title: "Jewelry & Watches",
    url: "",
  },
  {
    title: "Health & Beauty",
    url: "",
  },
  {
    title: "Office & Homes",
    url: "",
  },
  {
    title: "Sports & Fitness",
    url: "",
  },
  {
    title: "Others",
    url: "",
  },
];
const SideBar = () => {
  return (
    <aside className="w-[240px] ">
      <div className="flex space-x-2 text-[#000066] items-center">
        <BiCategory size={16} />
        <p>Categories</p>
      </div>
      <div className="flex cursor-pointer mt-5 flex-col space-y-4 text-xs">
        {sideData.map((item, i) => (
          <div
            key={i}
            className="flex hover:text-[#2979FF] hover:font-semibold items-center space-x-2"
          >
            {i === 0 ? (
              <BiStore size={16} color="" />
            ) : i === 1 ? (
              <GiClothes size={16} color="" />
            ) : i === 2 ? (
              <BsPhone size={16} color="" />
            ) : i === 3 ? (
              <HiOutlineLightBulb size={16} color="" />
            ) : i === 4 ? (
              <FaBaby size={16} color="" />
            ) : i === 5 ? (
              <IoGameControllerOutline size={16} color="" />
            ) : i === 6 ? (
              <MdComputer size={16} color="" />
            ) : i === 7 ? (
              <IoWatchOutline size={16} color="" />
            ) : i === 8 ? (
              <GiSewedShell size={16} color="" />
            ) : i === 9 ? (
              <HiOutlineBuildingOffice2 size={16} color="" />
            ) : i === 10 ? (
              <BiDumbbell size={16} color="" />
            ) : (
              <CiCircleMore size={16} color="" />
            )}

            <p className="hover:text-[#2979FF]">{item.title}</p>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default SideBar;
