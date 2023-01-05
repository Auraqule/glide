"use client";
import React, { useState } from "react";
import { Product as ProductType } from "../../../../typings";
import {
  AiOutlineHeart,
  MdOutlineStar,
  MdOutlineStarHalf,
} from "../../../../constants";
import { ProductInfoTab, RelatedProducts } from "../../../../components";

type PageProps = {
  params: {
    slug: string;
  };
};

/* const fetchProduct = async (slug: string) => {
  const res = await fetch(`https://fakestoreapi.com/products/${slug}`);
  const product: ProductType = await res.json();
  return product;
}; */
const data = {
  id: 6,
  title: "Solid Gold Petite Micropave ",
  price: 168,
  description:
    "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.",
  category: "jewelery",
  image:
    "https://media.istockphoto.com/id/1213744517/photo/man-watching-television.jpg?s=612x612&w=0&k=20&c=wiAQP4yuvvtMVvGjzW-PWv4QkC18Wgn_5LcgsShpzIA=",
  rating: { rate: 3.9, count: 70 },
};
const extraDisplays = [
  {
    id: "image1",
    img: "https://media.istockphoto.com/id/1213744517/photo/man-watching-television.jpg?s=612x612&w=0&k=20&c=wiAQP4yuvvtMVvGjzW-PWv4QkC18Wgn_5LcgsShpzIA=",
  },
  {
    id: "image2",
    img: "https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "image",
    img: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHZ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "image4",
    img: "https://media.istockphoto.com/id/1276609901/photo/the-gamer-girl-playing-video-games.jpg?s=612x612&w=0&k=20&c=23SXUSqFx7ulScEM2hvAZMzyIKox9Eosq-Nxzyff5t0=",
  },
];
const moreInfo = [
  "α9 Gen5 AI Processor with AI Picture Pro & AI 4K Upscaling",
  "Pixel Dimming, Perfect Black, 100% Color Fidelity & Color Volume",
  "Hands-free Voice Control, Always Ready",
  "Dolby Vision IQ with Precision Detail, Dolby Atmos, Filmmaker Mode",
  "Eye Comfort Display: Low-Blue Light, Flicker-Free",
];
const variations = [
  "106 cm (42)",
  "121 cm (48)",
  "139 cm (55)",
  "164 cm (65)",
  "196 cm (77)",
  "210 cm (83)",
];

const Product = ({ params: { slug } }: PageProps) => {
  /*  const product = await fetchProduct(slug);
  const { title, description, image, price, rating } = product;
  console.log(product); */

  const { title, description, image, price, rating } = data;
  const [mainImage, setMainImage] = useState(image);
  const [selectedVariantID, setSelectedVariantID] = useState<string | number>(
    ""
  );

  return (
    <section className="">
      <div className="w-full sm:w-[80%] mx-auto bg-white pb-2 sm:pt-8 mt-[2px] sm:mt-8 ">
        <main className="flex flex-col sm:flex-row items-center px-6 gap-x-20  ">
          {/* LEFT PRODUCT IMAGE DISPLAY */}

          <div className=" w-full sm:w-[45%]  ">
            {/* SCREEN */}
            <div className="w-full flex justify-center items-center sm:h-[402px]">
              <img
                className="object-contain w-full h-full"
                src={mainImage}
                alt={title}
              />
            </div>
            {/* MINI DESCRIPTION */}
            <div className=" mt-3 mb-4 sm:mb-10 text-[#6F6F6F] font-light text-[15px]">
              <p>{title}</p>
            </div>
            {/* OTHER PRODUCT VIEWS/DISPLAYS */}

            <div className="flex space-x-1 sm:space-x-2 items-center">
              {extraDisplays.map((item) => (
                <div
                  onMouseEnter={() => setMainImage(item.img)}
                  key={item.id}
                  className={`w-[140px] rounded  border-[2px] ${
                    item.img === mainImage && "border-green-500"
                  }  bg-gray-200 h-[60px] sm:h-[80px]`}
                >
                  <img
                    className="w-full h-full object-cover rounded"
                    src={item.img}
                    placeholder="blur"
                    alt="tv"
                  />
                </div>
              ))}
            </div>
          </div>
          {/* RIGHT PRODUCT DESCRIPTION */}
          <div className="w-full mt-4 sm:mt-0">
            {/* SUB INFO */}
            <div className="flex flex-col space-y-2">
              <p className="text-sm text-[#191919]">
                <span className="font-bold pr-1">Brand:</span>
                LG
              </p>
              <p className="text-sm text-[#191919]">
                <span className="font-bold pr-1">Model:</span>
                OLED42C2PSA
              </p>
              <p className="text-sm text-[#191919]">
                <span className="font-bold pr-1">Availability:</span>
                Only 2 in Stock
              </p>
            </div>
            <div></div>
            <p className="font-bold text-2xl mt-3 mb-4 text-[#191919]">
              LG C2 42 (106cm) 4K Smart OLED evo TV | WebOS | Cinema HDR
            </p>
            {/* STARS RATING */}
            <div className="flex items-center mt-6 mb-4 space-x-[1px] ">
              {[1, 2, 3, 4, 5].map((item, i) => (
                <div key={i}>
                  {i <= 3 ? (
                    <MdOutlineStar size={22} color="#FB8200" />
                  ) : (
                    <MdOutlineStarHalf size={22} color="#FB8200" />
                  )}
                </div>
              ))}
            </div>
            {/* MORE LISTED DESCRIPTIONS */}
            <div>
              {moreInfo.map((text, i) => (
                <div
                  key={i.toString()}
                  className="mb-2 text-[#191919]  text-sm  flex items-center space-x-2"
                >
                  <div className="bg-[#191919] rounded-full h-2 w-2" />
                  <p>{text}</p>
                </div>
              ))}
            </div>
            {/* PRODUCT VARRIATIONS E.G SIZE | COLOR  */}
            <div className="mt-6 mb-4">
              <div className="bg-[#F0F0F0]  h-[1px] w-full" />
              <div className="grid grid-cols-3 text-sm sm:text-base gap-2 my-6">
                {variations.map((variant, i) => (
                  <div
                    onClick={() => setSelectedVariantID(i)}
                    key={i.toString()}
                    className={`border-[1px] cursor-pointer ${
                      selectedVariantID === i && "bg-primaryBlue text-white"
                    } h-[40px] grid place-content-center border-primaryBlue `}
                  >
                    {variant}
                  </div>
                ))}
              </div>
              <div className="bg-[#F0F0F0] h-[1px] w-full" />
            </div>
            {/* ADD TO CART */}
            <div>
              <div>
                <p className="text-sm text-[#191919]">
                  USD(incl. of all taxes)
                </p>
                <div className="flex space-x-2 items-center">
                  <p className="text-[#191919] text-2xl">$600.72</p>
                  <p className="text-[#D9D9D9] self-end text-lg">$800.00</p>
                </div>
              </div>

              {/* CART BUTTONS */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-5 items-center">
                <div className=" grid grid-cols-3 h-10 sm:h-[50px] w-full border-[#F0F0F0] border-[1px] sm:text-xl items-center divide-x-[1px] divide-[#f0f0f0] ">
                  <div className=" h-full hover:bg-[#00CCFF] cursor-pointer grid place-content-center">
                    <p>-</p>
                  </div>
                  <div className=" h-full hover:bg-[#00CCFF] cursor-pointer grid place-content-center">
                    <p>1</p>
                  </div>
                  <div className=" h-full hover:bg-[#00CCFF] cursor-pointer grid place-content-center">
                    <p>+</p>
                  </div>
                </div>
                {/* BUY NOW BUTTON */}
                <button className="h-full hover:bg-[#00CCFF] font-medium bg-primaryBlue text-white text-xs sm:text-sm">
                  Buy Now
                </button>
                {/* ADD TO CART BUTTON */}
                <button className="h-full hover:bg-green-600 hover:text-white font-medium border-primaryBlue hover:border-0 border-[1px] text-primaryBlue text-xs sm:text-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* PRODUCT MORE INFO TAB || DESCRIPTION | SPECIFICATION | REVIEWS */}
        <div className="py-16">
          <ProductInfoTab />
        </div>
        {/* RELATED PRODUCTS */}
        <div className=" w-full pt-8  ">
          <p className="text-[#191919] text-center font-medium text-lg mb-10">
            Related Products
          </p>
          <div className="">
            <RelatedProducts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
