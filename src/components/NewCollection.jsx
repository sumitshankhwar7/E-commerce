import React from "react";
import new_collection from "../assets/new_collections";
import Item from "./Item";

function NewCollection() {
  return (
    <div className="new-collection flex flex-col items-center gap-2.5 h-auto mb-[100px]">
      <h1 className="text-4xl font-semibold text-gray-900">NEW COLLECTIONS</h1>

      <hr className="w-24 h-1 bg-gray-800 rounded-full mt-3" />

      <div className="collection mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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

export default NewCollection;
