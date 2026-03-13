import React from "react";
import data_product from "../assets/data";
import Item from "./Item";

function Popular() {
  return (
    <div className="popular  flex flex-col items-center gap-2.5 h-screen">
      <h1 className="text-[#171717] text-5xl font-semibold mt-9">
        POPULAR IN WOMEN
      </h1>
      <hr className="w-50 h-1.5 rounded-md bg-[#252525]" />
      <div className="popular-items mt-12.5 flex gap-7.5  ">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Popular;
