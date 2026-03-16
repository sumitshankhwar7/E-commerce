import React from "react";
import arrow_icon from "../assets/breadcrum_arrow.png";

function BreadCrum(props) {
  const { product } = props;
  return (
    <div className="breadcrum flex items-center gap-2 text-[#5e5e5e] text-[16px] mx-[170px] my-[60px]">
      HOME <img src={arrow_icon} alt="" />
      SHOP <img src={arrow_icon} alt="" />
      {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  );
}

export default BreadCrum;
