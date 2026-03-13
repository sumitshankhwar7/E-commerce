import React from "react";

function NewsLetter() {
  return (
    <div className="new-leter w-7xl h-[50vh] flex flex-col justify-center items-center mx-auto px-[140px] mb-[150px] bg-blue-300  gap-[30px]">
      <h1 className="text-[#454545] text-gray-900 text-5xl font-bold">
        Get Exclusive Offers On Your Email
      </h1>
      <p className="text-[#454545] text-2xl">
        Subscribe to our newletter and stay updated
      </p>
      <div className="flex justify-center items-center bg-white w-[750px] h-[70px] rounded-[80px] border border-[#e3e3e3] ">
        <input
          type="text"
          placeholder="Your Email id"
          className="w-[500px] h-[50px] p-[10px] ml-[30px] border-none text-[#616161] text-[16px] "
        />
        <button className="w-53 h-17.5 rounded-[80px] bg-black text-white text-[16px] cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default NewsLetter;
