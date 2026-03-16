import React from "react";
import new_collection from "../assets/new_collections";
import Item from "./Item";

function RelatedProducts() {
  return (
    <div className="my-20 mx-[120px]">
      {/* HEADING */}
      <h1 className="text-3xl font-semibold text-gray-800 text-center">
        NEW COLLECTIONS
      </h1>

      <hr className="w-32 h-[3px] bg-gray-800 mx-auto mt-3 border-none" />

      {/* PRODUCTS GRID */}
      <div className="grid grid-cols-3 gap-8 mt-12">
        {new_collection.map((item, i) => {
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

export default RelatedProducts;
