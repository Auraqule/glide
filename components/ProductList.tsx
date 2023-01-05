import { Product } from "../typings";
import { AiOutlineHeart, MdOutlineStar, MdOutlineStarHalf } from "../constants";
import Ads from "./Ads";
import MiniInfo from "./MiniInfo";
import Link from "next/link";
const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  return products;
};
const Card = ({
  item: {
    id,
    title,
    description,
    image,
    price,
    rating: { rate },
  },
}: any) => {
  return (
    <Link
      href={`/product/${id}`}
      className="px-4 pb-2 flex hover:shadow-xl cursor-pointer flex-col items-center "
    >
      <img
        className="w-[190px] h-[190px] object-contain"
        src={image}
        alt={title}
        placeholder="blur"
      />
      <p className="text-sm mt-3 capitalize ">{description.slice(0, 80)}</p>
      <div className="self-start flex justify-between">
        <p className="text-lg font-bold my-2">${price}</p>
      </div>
      <p className="text-xs self-start text-[#787885] mb-2">{title}</p>
      <div className="flex justify-between w-full  items-center">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-[1px] ">
            {[1, 2, 3, 4, 5].map((item, i) => (
              <div key={i}>
                {i <= 3 ? (
                  <MdOutlineStar size={14} color="#FB8200" />
                ) : (
                  <MdOutlineStarHalf size={14} color="#FB8200" />
                )}
              </div>
            ))}
          </div>
          <p className="text-xs text-[#787885]">{rate}</p>
        </div>
        <div className="text-xs flex items-center space-x-[2px]  text-secondaryBlue py-[2px] px-1 ring-[1px] rounded ring-[#9DC2FF]">
          <AiOutlineHeart size={12} color="#2979FF" />
          <p className="">watch</p>
        </div>
      </div>
    </Link>
  );
};
const ProductList = async () => {
  const products = await getProducts();
  return (
    <section>
      <main className="flex-1">
        <Ads />
        <div
          style={{
            boxShadow: "0px -3px 9px -3px rgba(0,0,0,0.1)",
          }}
          className="text-darkText rounded-lg px-4 grid py-4 gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  bg-white"
        >
          {products.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </main>
      <MiniInfo />
    </section>
  );
};

export default ProductList;
