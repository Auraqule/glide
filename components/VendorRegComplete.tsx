"use client";
import React from "react";

const VendorRegComplete = () => {
  return (
    <div className="mt-10 font-semibold">
      <p className="text-lg">Thank you for signing up with us!</p>
      <p className="text-sm">We have sent a verification email to you.</p>
      <button
        className="px-[25px] hover:bg-primaryBlue hover:text-white mt-10 text-[#19191D] w-full py-3 rounded-[20px] sm:rounded-[30px] border border-primaryBlue bg-transparent"
        type="submit"
      >
        Click here to request a new verification email.
      </button>
    </div>
  );
};

export default VendorRegComplete;
