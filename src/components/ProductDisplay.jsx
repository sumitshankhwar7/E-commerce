import React, { useContext } from "react";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../context/ShopContext";

function ProductDisplay(props) {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
  return (
    <div className="flex mx-[120px] my-10 gap-16">
      {/* LEFT SIDE */}
      <div className="flex gap-5">
        {/* SMALL IMAGES */}
        <div className="flex flex-col gap-4">
          <img
            src={product.image}
            alt=""
            className="h-[120px] w-[100px] object-cover  cursor-pointer"
          />
          <img
            src={product.image}
            alt=""
            className="h-[120px] w-[100px] object-cover cursor-pointer"
          />
          <img
            src={product.image}
            alt=""
            className="h-[120px] w-[100px] object-cover  cursor-pointer"
          />
          <img
            src={product.image}
            alt=""
            className="h-[120px] w-[100px] object-cover  cursor-pointer"
          />
        </div>

        {/* MAIN IMAGE */}
        <div className="w-[500px] h-[620px] ">
          <img
            src={product.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col max-w-[500px]">
        <h1 className="text-4xl font-semibold text-gray-800">{product.name}</h1>

        {/* STAR */}
        <div className="flex items-center gap-1 mt-3">
          <img src={star_icon} className="w-5" alt="" />
          <img src={star_icon} className="w-5" alt="" />
          <img src={star_icon} className="w-5" alt="" />
          <img src={star_icon} className="w-5" alt="" />
          <img src={star_dull_icon} className="w-5" alt="" />
          <p className="ml-2 text-gray-500">(22)</p>
        </div>

        {/* PRICE */}
        <div className="flex gap-6 mt-5 text-2xl font-semibold">
          <div className="text-gray-400 line-through">${product.old_price}</div>
          <div className="text-red-500">${product.new_price}</div>
        </div>

        {/* DESCRIPTION */}
        <p className="mt-5 text-gray-600">
          A lightweight, usually knitted pullover shirt, close-fitting and
          comfortable for everyday wear.
        </p>

        {/* SIZE */}
        <div className="mt-6">
          <h2 className="font-semibold text-lg text-gray-700">Select Size</h2>

          <div className="flex gap-4 mt-3">
            <div className="border px-5 py-2 cursor-pointer hover:bg-gray-100">
              S
            </div>
            <div className="border px-5 py-2 cursor-pointer hover:bg-gray-100">
              M
            </div>
            <div className="border px-5 py-2 cursor-pointer hover:bg-gray-100">
              L
            </div>
            <div className="border px-5 py-2 cursor-pointer hover:bg-gray-100">
              XL
            </div>
            <div className="border px-5 py-2 cursor-pointer hover:bg-gray-100">
              XXL
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          className="mt-8 bg-red-500 text-white px-8 py-3 w-[220px] font-semibold hover:bg-red-600 transition"
          onClick={() => {
            addToCart(product.id);
          }}
        >
          ADD TO CART
        </button>

        {/* CATEGORY */}
        <p className="mt-6 text-gray-600">
          <span className="font-semibold text-gray-800">Category :</span> Women,
          T-Shirt, Crop Top
        </p>

        <p className="text-gray-600">
          <span className="font-semibold text-gray-800">Tags :</span> Modern,
          Latest
        </p>
      </div>
    </div>
  );
}

export default ProductDisplay;
