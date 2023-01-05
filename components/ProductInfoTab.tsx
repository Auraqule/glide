"use client";
import React, { useState } from "react";

const productInfoTab = [
  {
    title: "Description",
    info: `Desc-The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.
  
      
      *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
      **65C2 Stand model is at a minimum 39% lighter than the C1 series.
      ***The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
      ****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.More
      ...
      
      `,
  },
  {
    title: "Specification",
    info: `Spec-The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.
  
  
      *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
      **65C2 Stand model is at a minimum 39% lighter than the C1 series.
      ***The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
      ****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.More
      ...
      
      `,
  },
  {
    title: "Reviews",
    info: `Rev-The LG C2 42 (106cm) 4K Smart OLED evo TV is the best all-around OLED TV we've tested. Although all OLEDs deliver similar fantastic picture quality, this one stands out for its value because it has many gaming-oriented features that are great for gamers.
  
      *Only 65G2 is shown in the image for example purposes. All 2022 LG OLED models feature eco-friendly packaging.
      **65C2 Stand model is at a minimum 39% lighter than the C1 series.
      ***The 'Reducing CO2' footprint label applies to 65C2 only. All other C2 models feature a 'CO2 Measured' label.
      ****UL ECV certification based on TV frame and back cover. Percentage of recycled content varies by model and size.More
      ...
      
      `,
  },
];

const ProductInfoTab = ({}) => {
  const [selectedTab, setSelectedTab] = useState("Description");
  return (
    <div>
      <div className="flex items-center font-medium w-[85%] sm:w-[50%] mx-auto justify-between">
        {productInfoTab.map((d) => (
          <div
            onClick={() => setSelectedTab(d.title)}
            className={`cursor-pointer relative ${
              selectedTab === d.title &&
              "before:absolute before:-bottom-[25px] before:left-0 before:right-0 before:bg-[#00CCFF] before:h-[2px]"
            }  `}
            key={d.title}
          >
            {/* TAB NAMES */}
            <p>{d.title}</p>
          </div>
        ))}
      </div>
      <div className="h-[1px] bg-[#F0F0F0] mt-6 mb-7 w-[80%] mx-auto" />
      {/* TAB INFO */}
      <div className="w-[90%] sm:w-[70%]  mx-auto">
        <p>
          {
            productInfoTab[
              `${
                selectedTab === "Description"
                  ? 0
                  : selectedTab === "Specification"
                  ? 1
                  : 2
              }`
            ].info
          }
        </p>
      </div>
    </div>
  );
};

export default ProductInfoTab;
