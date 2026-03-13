import React from "react";
import footer_logo from "../assets/logo_big.png";
import instagram_icon from "../assets/instagram_icon.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";

function Footer() {
  return (
    <div className="footer flex flex-col justify-center items-center gap-[50px] border border-slate-900">
      <div className="footer-logo flex items-center gap-[20px]">
        <img src={footer_logo} alt="" />
        <p className="text-[#383838] text-[45px] font-bold">SHOOPER</p>
      </div>
      <ul className="footer-link flex gap-[50px] text-[#252525] text-[20px]">
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
      <div className="footer-social-icon flex gap-[20px]">
        <div className="footer-icon-container p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icon-container p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icon-container p-2.5 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      <div className="footer-copyright flex justify-center items-center gap-[30px] w-full mb-[30px] text-[#1a1a1a] text-[20px]">
        <hr className="w-[80%] border-none rounded-[10px] h-[3px] bg-[#c7c7c7]" />
        <p>Copyright @ 2026 - All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
