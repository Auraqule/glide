"use client";

import React from "react";
type Iprops = {
  setSelectedTabId: any;
};
const VendorTab2 = ({ setSelectedTabId }: Iprops) => {
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
          placeholder="Business name"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Select Category of business"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Address 1"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="City / Town"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Where are you shipping from?"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Who referred you to Glide? (email if any)"
        />

        <button
          className="px-[25px] mt-10 text-white w-full py-3 rounded-[30px] border bg-primaryBlue"
          type="submit"
        >
          Continue
        </button>
        <div className="flex items-center mx-auto space-x-4">
          <input className="inline-block w-5 h-5" type="checkbox" />
          <p>I have read and accepted the E-Contract Glide Nigeria</p>
        </div>
      </form>
    </div>
  );
};

export default VendorTab2;
