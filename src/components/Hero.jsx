import React from "react";
import hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_img from "../assets/hero_image.png";

function Hero() {
  return (
    <div className="hero min-h-screen flex items-center bg-amber-100 ">
      {/* LEFT */}
      <div className="left flex-1 flex flex-col justify-center gap-6 pl-40 leading-[1.1]">
        <h2 className="text-gray-900 text-2xl font-bold">NEW ARRIVAL ONLY</h2>

        <div>
          <div className="flex items-center gap-5">
            <p className="text-gray-900 text-7xl font-bold">New</p>
            <img src={hand_icon} alt="" className="w-12" />
          </div>

          <p className="text-gray-900 text-7xl font-bold">Collections</p>

          <p className="text-gray-900 text-7xl font-bold">for everyone</p>
        </div>

        {/* BUTTON */}

        <div className="flex items-center gap-3 w-fit px-8 py-4 rounded-full bg-red-500 text-white text-lg cursor-pointer hover:bg-red-600 transition">
          <span>Latest Collection</span>

          <img src={arrow_icon} alt="" className="w-5" />
        </div>
      </div>

      {/* RIGHT */}

      <div className="right flex-1 flex justify-center items-center">
        <img src={hero_img} alt="" className="max-h-[600px] object-contain" />
      </div>
    </div>
  );
}

export default Hero;
