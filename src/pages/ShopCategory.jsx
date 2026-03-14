import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../assets/dropdown_icon.png";
import Item from "../components/Item";

function ShopCategory(props) {
  const { all_product } = useContext(ShopContext);

  return (
    <div className="w-[90%] mx-auto">
      <img src={props.banner} alt="" className="w-full mt-5" />

      <div className="flex justify-between items-center my-5">
        <p>
          <span className="font-semibold">Showing 1-12</span> out of 36 products
        </p>

        <div className="flex items-center gap-2 border border-gray-300 px-3 py-1 rounded-full cursor-pointer">
          Short by
          <img src={dropdown_icon} alt="" className="w-3" />
        </div>
      </div>

      <div
        className="grid grid-cols-4 gap-5
                      lg:grid-cols-3
                      md:grid-cols-2
                      sm:grid-cols-1"
      >
        {all_product.map((item) => {
          if (props.category === item.category) {
            return (
              <Item
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="w-48 mx-auto mt-10 mb-10 py-3 text-center border border-gray-400 rounded-full cursor-pointer hover:bg-black hover:text-white transition">
        Explore More
      </div>
    </div>
  );
}

export default ShopCategory;
