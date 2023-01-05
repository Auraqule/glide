"use client";

import React from "react";
import { IoEyeOffOutline } from "react-icons/io5";
type Iprops = {
  setSelectedTabId: any;
};
const VendorTab1 = ({ setSelectedTabId }: Iprops) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSelectedTabId((prev: number) => prev + 1);
  };
  return (
    <div>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-full  space-y-10 text-[#787885]"
      >
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Shop Name"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Select Category (Individual, Business Entity or Company)"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Seller First and Last Name"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Seller Phone number"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Additional Phone number"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="email"
          placeholder="Email address"
        />
        <div className="px-[25px] flex items-center justify-between focus-within:border-[1.6px] focus-within:border-green-500 w-full py-3 bg-white rounded-[6px] border outline-green-500 border-[#000066]/50">
          <input
            className=" w-full pr-3 outline-none"
            type="password"
            placeholder="Password"
          />
          <IoEyeOffOutline size={24} />
        </div>
        <button
          className="px-[25px] mt-10 text-white w-full py-3 rounded-[20px] sm:rounded-[30px] border bg-primaryBlue"
          type="submit"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default VendorTab1;
