"use client";

import React from "react";
type Iprops = {
  setIsRegComplete: any;
  setSelectedTabId: any;
};
const VendorTab3 = ({ setIsRegComplete, setSelectedTabId }: Iprops) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSelectedTabId((prev: number) => prev + 1);
    setIsRegComplete(true);
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
          placeholder="Account Name"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Select bank"
        />
        <input
          className="px-[25px] w-full py-3 rounded-[6px] border outline-green-500 border-[#000066]/50"
          type="text"
          placeholder="Enter Account number"
        />

        <button
          className="px-[25px] mt-10 text-white w-full py-3 rounded-[30px] border bg-primaryBlue"
          type="submit"
        >
          Complete
        </button>
      </form>
    </div>
  );
};

export default VendorTab3;
