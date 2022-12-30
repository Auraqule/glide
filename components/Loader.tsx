"use client";
import React from "react";

const Loader = () => {
  return (
    <div className="absolute bg-black/50 top-0 flex justify-center items-center bottom-0 left-0 right-0">
      <img className="animate-bounce w-40" src="/logo.svg" alt="" />
    </div>
  );
};

export default Loader;
