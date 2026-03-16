import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";

function CartItems() {
  const { all_product, cartItems, removeToCart, getTotalCartAmount } =
    useContext(ShopContext);

  return (
    <div className="mx-[120px] my-16">
      {/* HEADER */}
      <div className="grid grid-cols-6 items-center text-gray-700 font-semibold text-lg">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr className="my-4" />
      {/* PRODUCTS */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-6 items-center py-4">
                <img
                  src={e.image}
                  alt=""
                  className="w-[70px] h-[90px] object-cover"
                />

                <p className="text-gray-700">{e.name}</p>

                <p className="text-gray-700">${e.new_price}</p>

                <button className="border px-4 py-1 w-[60px]">
                  {cartItems[e.id]}
                </button>

                <p className="text-gray-700">
                  ${e.new_price * cartItems[e.id]}
                </p>

                <img
                  src={remove_icon}
                  alt=""
                  className="w-5 cursor-pointer"
                  onClick={() => removeToCart(e.id)}
                />
              </div>

              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="flex justify-between gap-20 mx-[120px] my-20">
        {/* CART TOTAL */}
        <div className="w-[400px]">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6">
            Cart Total
          </h1>

          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <p>Subtotal</p>
              <p>${0}</p>
            </div>

            <hr />

            <div className="flex justify-between text-gray-600">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>

            <hr />

            <div className="flex justify-between font-semibold text-lg text-gray-800">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <button className="mt-8 w-full bg-red-500 text-white py-3 font-semibold hover:bg-red-600 transition">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* PROMO CODE */}
        <div className="w-[400px]">
          <p className="text-gray-600 mb-4">
            If you have a promo code, enter it here
          </p>

          <div className="flex border">
            <input
              type="text"
              placeholder="Promo code"
              className="flex-1 px-4 py-3 outline-none"
            />

            <button className="bg-black text-white px-6">SUBMIT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItems;
