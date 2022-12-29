"use client";
import React, { useState } from "react";
import {
  VendorRegComplete,
  VendorTab1,
  VendorTab2,
  VendorTab3,
} from "../../../components";

const Vendor = () => {
  const [selectedTabId, setSelectedTabId] = useState(0);
  const [isRegComplete, setIsRegComplete] = useState(false);
  return (
    <section className="w-[80%] mx-auto ">
      <div className="mt-16 w-[50%] mx-auto pb-16">
        <p className="text-primaryBlue font-bold text-2xl mt">
          {selectedTabId === 0
            ? "Seller Account Information"
            : selectedTabId === 1
            ? "Busines Information"
            : selectedTabId === 2
            ? "Bank Account Information"
            : "Account in review"}
        </p>
        <div className="grid grid-cols-3 gap-2 mb-10">
          {["1", "2", "3"].map((item, i) => (
            <div
              onClick={() => {
                setIsRegComplete(false);
                setSelectedTabId(i);
              }}
              className={`h-2 mt-4  ${
                selectedTabId === i
                  ? "bg-primaryBlue"
                  : isRegComplete
                  ? "bg-green-500"
                  : "bg-[#D9D9D9]"
              } rounded-sm `}
            />
          ))}
        </div>
        {/* ---- */}
        {selectedTabId === 0 ? (
          <VendorTab1 setSelectedTabId={setSelectedTabId} />
        ) : selectedTabId === 1 ? (
          <VendorTab2 setSelectedTabId={setSelectedTabId} />
        ) : selectedTabId === 2 ? (
          <VendorTab3
            setIsRegComplete={setIsRegComplete}
            setSelectedTabId={setSelectedTabId}
          />
        ) : null}
        {isRegComplete && <VendorRegComplete />}
      </div>
    </section>
  );
};

export default Vendor;
