import React from "react";
import fb from "../assets/Facebook.png";
import yt from "../assets/Youtube.png";
import insta from "../assets/Instagram.png";

const Footer = () => {
  return (
    <section className="flex flex-col bg-[#141718] px-8 text-[#fefefe]">
      <div className="mt-12 flex flex-col items-center justify-between md:flex-row">
        <div className="mb-10 flex flex-col items-center justify-center gap-4 md:mb-0 md:flex-row">
          <h1 className="flex font-poppins text-[24px] font-medium leading-[1]">
            3legant
            <span className="ml-[2px] inline-block h-1 w-1 animate-bounce rounded-full font-poppins text-xl font-bold text-[#6c7275]">
              .
            </span>
          </h1>
          <div className="mx-8 hidden h-6 w-[1px] rounded-full bg-[#6c7275] md:block" />
          <div className="block h-[1px] w-6 rounded-full bg-[#6c7275] md:hidden" />
          <h2 className="font-inter text-[14px] font-normal leading-[1.7] text-[#e8ecef]">
            Gift & Decoration Store
          </h2>
        </div>
        <ul className="flex flex-col items-center justify-center gap-8 font-inter text-[14px] font-normal leading-[1.7] md:flex-row md:gap-10">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Shop</a>
          </li>
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <hr className="mb-5 mt-10 block h-[1px] rounded-full bg-[#ffffff]" />

      <div className="flex w-full flex-col items-center md:mb-12 md:mt-4 md:flex-row-reverse md:justify-between">
        <div className="mb-8 flex flex-row gap-x-6 md:mb-0">
          <img
            src={fb}
            alt="facebook"
            className="h-6 w-6 hover:scale-110 hover:cursor-pointer"
          />
          <img
            src={insta}
            alt="instagram"
            className="h-6 w-6 hover:scale-110 hover:cursor-pointer"
          />
          <img
            src={yt}
            alt="youtube"
            className="h-6 w-6 hover:scale-110 hover:cursor-pointer"
          />
        </div>
        {/* <div className="flex-flow">hi</div> */}
        <div className="flex-2 mb-7 flex flex-row items-center justify-between gap-x-7 font-poppins text-[12px] font-[600] leading-[1.6] md:mb-0 md:mr-[600px]">
          <p>Privacy Policy</p>
          <p>Term of Use</p>
        </div>
        <p className="flex-2 mb-20 flex flex-row font-poppins text-[12px] font-normal leading-[1.6] md:mb-0">
          copyright © 2024 3legant. All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
