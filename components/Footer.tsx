"use client";
import React from "react";
import {
  TiSocialTwitter,
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialYoutube,
} from "../constants";
const data = [
  { title: "SITE MAP" },
  { title: "PRIVACY" },
  { title: "TERMS" },
  { title: "USER CONTENT PERMISSION TERMS" },
  { title: "MAKEUP.COM" },
  { title: "SKINCARE.COM" },
];

const Footer = () => {
  return (
    <footer className="text-white pt-14 pb-5 mt-[100px] bg-primaryBlue w-full">
      <div className="grid grid-cols-5 gap-4 px-20">
        {/* ---------------COL 1---------- */}
        <div className="col-span-2">
          <p className="font-bold text-4xl">Don't miss out</p>
          <p className="mt-6 mb-8">
            Sign up for the latest beauty news,product samples and cupons
          </p>
          <div className="flex items-center w-[90%] space-x-10">
            <div className="w-1/2">
              <p className="mb-4">EMAIL ADDRESS*</p>
              <div className="py-3 px-4 bg-white h-[48px] tex-sm text-[#806D6D]">
                Enter your email address
              </div>
            </div>
            <div className="w-1/2">
              <p className="mb-4">BIRTHDAY*</p>
              <div className="py-3 px-4 bg-white h-[48px] tex-sm text-[#806D6D]">
                MM/DD/YYYY
              </div>
            </div>
          </div>
          <button className="py-3 px-4 my-8 bg-[#00CCFF]/75 text-center w-[90%] tex-sm text-white">
            SIGN UP
          </button>
          <div className="text-xs font-bold text-white my-9">
            <p>
              This site is intended for us consumers.by signing up,you
              undarstand and agree that your data will be collected and used
              subject to our us policy and terms of use.
            </p>
            <p className="text-xs mt-9">*Required information</p>
          </div>
          {/* --------------SOCIALS---------------------- */}
          <div className="flex text-white space-x-4">
            <div className=" hover:text-[#00CCFF]/75">
              <TiSocialTwitter size={28} />
            </div>
            <div className=" hover:text-[#00CCFF]/75">
              <TiSocialFacebook size={28} />
            </div>
            <div className=" hover:text-[#00CCFF]/75">
              <TiSocialLinkedin size={28} />
            </div>
            <div className=" hover:text-[#00CCFF]/75">
              <TiSocialInstagram size={28} />
            </div>
            <div className=" hover:text-[#00CCFF]/75">
              <TiSocialYoutube size={28} />
            </div>
          </div>
        </div>
        {/* -----------------COL-2------------------- */}
        <div className="text-bold">
          <h2 className="text-xl mb-6">COMPANY</h2>
          <p className="mb-6">About</p>
          <p className="mb-6">Experts and Spokesmodel</p>
        </div>
        {/* -----------------COL-3------------------- */}
        <div className="text-bold">
          <h2 className="text-xl mb-6">CUSTOMER SERVICE</h2>
          <p className="mb-6">Contact us</p>
          <p className="mb-6">My account</p>
          <p className="mb-6">Store locator</p>
          <p className="mb-6">Redeem rewards</p>
        </div>
        {/* -----------------COL-4------------------- */}
        <div className="text-bold">
          <h2 className="text-xl mb-6">MORE TO EXPLORE</h2>
          <p className="mb-6">Beauty magazine</p>
          <p className="mb-6">Tools and consulations</p>
          <p className="mb-6">Offers</p>
          <p className="mb-6">Others</p>
        </div>
      </div>
      <div className="w-full h-[.8px] mt-16 text-xs bg-white" />
      <div className="w-[90%] mt-9 mb-8 mx-auto flex justify-between">
        <div className="flex items-center text-xs space-x-8">
          {data.map((item, i) => (
            <p key={i + "_key"}>{item.title}</p>
          ))}
        </div>
        <div className="space-x-10 items-center flex text-xs">
          <p className="text-[#9F9191] ">@ 2023 GLIDE MARKETPLACE</p>
          <p>BACK TO TOP</p>
        </div>
      </div>
      <div className="bg-[#736262] mb-6 w-full h-[.5px]" />
      <div>
        <p className="text-xs text-center">
          This site is intended for us consumers.cookes and related technology
          are used for advertising.To learn more, visit glide and our privacy
          policy.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
