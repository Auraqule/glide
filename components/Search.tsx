"use client";
import React from "react";

const Search = () => {
  return (
    <div className="flex-1">
      <form className="w-full h-10  px-4 rounded-[99px] bg-[#EDEDF0] ">
        <input
          className="w-full text-gray-600 caret-blue-300 bg-transparent h-full rounded-[99px] outline-none border-none"
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  );
};

export default Search;
