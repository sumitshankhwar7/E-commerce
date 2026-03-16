import React, { useContext, useState } from "react";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
  const [menu, setMenue] = useState("Shope");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar flex justify-around p-4 shadow-2xl">
      <div className="nav-logo flex items-center gap-2.5">
        <img src={logo} alt="" />
        <p className="text-[#171717] text-4xl font-bold">SHOPPER</p>
      </div>
      <ul className="nav-menu flex items-center gap-12 text-[#626262] text-[16px] font-semibold">
        <li
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setMenue("Shop");
          }}
        >
          <Link to={"/"}>Shop</Link>
          {menu === "Shop" ? (
            <hr className="border-none w-[80%] h-1 rounded-xl bg-red-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setMenue("Men");
          }}
        >
          <Link to={"/mens"}>Men</Link>
          {menu === "Men" ? (
            <hr className="border-none w-[80%] h-1 rounded-xl bg-red-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setMenue("Womens");
          }}
        >
          <Link to={"/womens"}>Womens</Link>
          {menu === "Womens" ? (
            <hr className="border-none w-[80%] h-1 rounded-xl bg-red-500" />
          ) : (
            <></>
          )}
        </li>
        <li
          className="flex flex-col items-center gap-1 cursor-pointer"
          onClick={() => {
            setMenue("Kids");
          }}
        >
          <Link to={"/kids"}>Kids</Link>
          {menu === "Kids" ? (
            <hr className="border-none w-[80%] h-1 rounded-xl bg-red-500" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <div className="nav-login-cart flex items-center gap-11">
        <Link to={"/login"}>
          <button
            className="w-39.25 h-14.5 border border-[#7a7a7a] rounded-4xl text-xl text-[#515151]
        bg-white cursor-pointer active:scale-95 active:bg-[#f3f3f3] transition"
          >
            Login
          </button>
        </Link>
        <Link to={"/cart"}>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count w-6 h-6 flex items-center justify-center -mt-9 -ml-14 rounded-full bg-red-500 text-white text-sm">
          {getTotalCartItems()}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
