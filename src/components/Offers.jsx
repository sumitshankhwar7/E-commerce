import React from "react";
import exclusive_img from "../assets/exclusive_image.png";

function Offers() {
  return (
    <div className="offers max-w-7xl h-auto flex mx-auto px-35 py-0 mb-20 mt-20 bg-amber-500">
      <div className="left flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-gray-900 text-7xl font-bold">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-gray-900 text-7xl font-bold">
          Offers For You
        </h1>
        <p className="text-[#171717] text-[22px]">
          ONLY ON BEST SELLERS PRODUCTS
        </p>
        <button className="w-[282px] h-[70px] rounded-4xl bg-red-500 border-none text-white text-[22px]  mt-8  cursor-pointer">
          Check Now
        </button>
      </div>
      <div className="right  flex items-center justify-end ">
        <img src={exclusive_img} alt="" />
      </div>
    </div>
  );
}

export default Offers;
