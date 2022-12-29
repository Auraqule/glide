"use client";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen justify-center  items-center">
      <div className="w-[90%] max-w-[480px] p-5 pb-8 bg-white shadow-md rounded-md">
        <div>
          <img src="/logo.svg" alt="" />
        </div>
        <div className="px-4 mt-8">
          <h1 className="text-gray-600">Welcome 🖐,</h1>
          <p className="text-xl text-primaryBlue font-semibold my-4">
            Congratulations!!!, you have successfully created an account with
            Glide.
          </p>
          <p className="italic text-gray-600">
            Kindly keep in touch, as further informations will be communicated
            through with you via the email you registered with.
          </p>
          <p className="mt-6 text-secondaryBlue font-medium">Glide Cares 😊.</p>
          <p className="mt-2">Thanks.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
