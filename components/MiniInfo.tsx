"use client";
import React from "react";
import { GiReceiveMoney, GoCreditCard, MdSecurity } from "../constants";

const MiniInfo = () => {
  return (
    <div className="grid my-8 justify-center gap-2 md:gap-4 grid-cols-1 md:grid-cols-3 w-full">
      <div className="px-4  rounded-md flex flex-col items-center py-6 text-center bg-[#EDEDF0]">
        <GiReceiveMoney size={24} color="#2979FF" />
        <p className="font-bold mt-4">Great value</p>
        <p className="text-sm">
          We offer competitive prices on over 100 million items.
        </p>
      </div>
      <div className="px-4  rounded-md flex flex-col items-center py-6 text-center bg-[#EDEDF0]">
        <GoCreditCard size={24} color="#FF3366" />
        <p className="font-bold mt-4">Safe payment</p>
        <p className="text-sm">
          Pay with the world’s most popular and secure payment methods.
        </p>
      </div>
      <div className="px-4 rounded-md flex flex-col items-center py-6 text-center bg-[#EDEDF0]">
        <MdSecurity size={24} color="#0DAB76" />
        <p className="font-bold mt-4">Shop with confidence</p>
        <p className="text-sm">
          Our Buyer Protection policy covers your entire purchase journey.
        </p>
      </div>
    </div>
  );
};

export default MiniInfo;
