import React from "react";

function DiscriptionBox() {
  return (
    <div className="mx-[120px] my-16">
      {/* NAVIGATION */}
      <div className="flex">
        <div className="px-6 py-3 border font-semibold cursor-pointer bg-white">
          Description
        </div>

        <div className="px-6 py-3 border border-l-0 text-gray-500 cursor-pointer">
          Reviews (122)
        </div>
      </div>

      {/* DESCRIPTION CONTENT */}
      <div className="border p-8 text-gray-600 leading-relaxed">
        <p>
          An e-commerce website is an online platform that facilitates buying
          and selling of products or services over the internet. It showcases a
          virtual marketplace where businesses and individuals display their
          products and customers can browse, select, and purchase items easily.
        </p>

        <p className="mt-4">
          These websites provide a seamless shopping experience with features
          like product listings, reviews, payment gateways, and order tracking,
          making online shopping convenient and efficient.
        </p>
      </div>
    </div>
  );
}

export default DiscriptionBox;
