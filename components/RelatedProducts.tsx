"use client";
import React from "react";
import { AiOutlineHeart } from "../constants";

const related = [
  {
    id: "0",
    img: "https://media.istockphoto.com/id/1321115829/photo/video-on-demand-tv-streaming-multimedia.jpg?b=1&s=170667a&w=0&k=20&c=v5jTLxOkzTHo1UpesEzyiWQNmssySd949njaddHFxj0=",
    title: "Sony BRAVIA XR Android Tv",
    price: "$800.22",
    inSock: true,
    initialPrice: "$1000.66",
  },
  {
    id: "1",
    img: "https://media.istockphoto.com/id/1350949720/photo/mock-up-wall-mounted-tv-with-cabinet-and-armchair-on-white-wall-background.jpg?b=1&s=170667a&w=0&k=20&c=Ij2dNNjkP6AbtvUbBeav-yF3ci2A-Kv_hRNCGR5y-sY=",
    title: "Mi P1 Smart Android HD TV",
    price: "$400.00",
    inSock: true,
    // initialPrice : "$1000.66"
  },
  {
    id: "2",
    img: "https://media.istockphoto.com/id/1339901431/photo/a-young-mother-and-her-boy-and-a-girl-spending-quality-time-together-at-home-watching-tv.jpg?b=1&s=170667a&w=0&k=20&c=v-dMsDSSYv9jguEAkQpw_fLnLegpdWf19AgiNnuYcb0=",
    title: "Konka OLED Android Tv",
    price: "$700.00",
    inSock: true,
    // initialPrice : "$1000.66"
  },
  {
    id: "3",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "TCL Roku Android Tv",
    price: "$800.00",
    inSock: false,

    // initialPrice : "$1000.66"
  },
  {
    id: "4",
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "TCL Roku Android Tv",
    price: "$800.00",
    inSock: false,

    // initialPrice : "$1000.66"
  },
  {
    id: "5",
    img: "https://media.istockphoto.com/id/1408422160/photo/close-up-on-mans-hands-at-home-sitting-on-a-couch-in-stylish-loft-apartment-and-playing.jpg?s=612x612&w=0&k=20&c=s6hfGUuq8i1mzcvwSrLjWs4JF-6nnEOmst5DyOgXCO0=",
    title: "TCL Roku Android Tv",
    price: "$800.00",
    inSock: false,

    // initialPrice : "$1000.66"
  },
  {
    id: "6",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "TCL Roku Android Tv",
    price: "$800.00",
    inSock: false,

    // initialPrice : "$1000.66"
  },
  {
    id: "7",
    img: "https://media.istockphoto.com/id/1305224879/photo/hispanic-man-having-fun-and-enjoying-a-videogame.jpg?s=612x612&w=0&k=20&c=JNFg-z-7iz0El_KlJxJSxw-VEEEIMN5dM8tVC7k1NqM=",
    title: "TCL Roku Android Tv",
    price: "$800.00",
    inSock: false,

    // initialPrice : "$1000.66"
  },
];
const RelatedProducts = () => {
  return (
    <div className="flex px-1 space-x-1 scrollbar-hide snap-x  overflow-x-scroll  items-center">
      {related.map((d, i) => (
        <div
          key={i.toString()}
          className="min-w-[236px] scroll-mx-1 relative snap-start bg-[#F1F1F1] h-[290px]"
        >
          <img
            src={d.img}
            alt={d.title}
            placeholder="blur"
            className="w-full h-1/2 object-cover"
          />
          <div className="absolute hover:text-green-500 text-[#E73C17] top-3 right-3 bg-gray-50/50 backdrop-blur-sm rounded-full h-8 w-8  grid place-content-center">
            <AiOutlineHeart size={18} />
          </div>
          <div className="w-[80%] mt-4 mx-auto">
            <div className="text-[#191919] text-sm text-center">{d.title}</div>
            <div className="text-[#191919] mt-1 font-semibold text-sm text-center">
              {d.price}{" "}
              <span className="text-[#D9D9D9] pl-2">{d.initialPrice}</span>
            </div>
            <div className="py-[6px] cursor-pointer hover:bg-primaryBlue hover:text-white mt-5 text-center border-primaryBlue border-[1px] text-[#6F6F6F] text-sm">
              Add to Cart
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedProducts;
