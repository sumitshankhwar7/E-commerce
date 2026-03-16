import React from "react";
import { Link } from "react-router";

function Item(props) {
  return (
    <div className="item w-87.5 hover:scale-102 transform duration-200">
      <Link to={`/product/${props.id}`}>
        <img onClick={window.scrollTo(0, 0)} src={props.image} alt="" />
      </Link>
      <p className="m-1.5">{props.name}</p>
      <div className="item-price flex gap-5">
        <div className="new-price text-[#374151] text-[18px]">
          ${props.new_price}
        </div>
        <div className="old-price text-[#8c8c8c] text-[18px] line-through">
          ${props.old_price}
        </div>
      </div>
    </div>
  );
}

export default Item;
