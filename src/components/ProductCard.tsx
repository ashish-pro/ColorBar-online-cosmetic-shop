import React from "react";
import Image from "next/image";
import {
  AiFillStar,
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineStar,
} from "react-icons/ai";

interface Iproduct {
  id: number;
  img: string;
  name: string;
  price: number;
  sale: boolean | undefined;
}
const ProductCard = ({ id, img, name, price, sale, }: Iproduct) => {
  const getRating = () => {
    const randomNumber = (min: number, max: number) => {
      return Math.ceil(Math.random() * (max - min) + min);
    };
    switch (randomNumber(0, 5)) {
      case 0:
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 1:
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );

      case 2:
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className="flex justify-center text-accent pt-4 pb-2">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );

      default:
        return <div></div>;
    }
  };

  return (
    <div className="gropu cursor-pointer">
      <div className="relative">
        <Image
          className="w-full"
          height={1142}
          width={1000}
          src={img}
          alt={name}
        />
        {sale && (
          <div
            className="bg-red-600 inline-block absolute top-0 left-0 text-white
            text-[14px] rounded-md px-2 py-[2px] m-4"
          >
            SALE!
          </div>
        )}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#00000050] opacity-0 transition-opacity duration-500
            group-hover:opacity-100 cursor-pointer "
        >
          <div className="absolute bottom-0 mb-4 left-[50%] flex gap-2">
            <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
              <AiOutlineHeart />
            </div>
            <div className="bg-white w-[50px] h-[50px] text-[26px] grid place-items-center">
              <AiOutlineShoppingCart />
            </div>
          </div>
        </div>
      </div>
      {getRating()}
      <h2 className="font-medium pb-3 hover:text-accent">{name}</h2>
      <p className="text-gray-600 font-light">${price}.00</p>
    </div>
  );
};

export default ProductCard;
