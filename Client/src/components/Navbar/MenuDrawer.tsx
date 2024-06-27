// MenuDrawer.tsx
import React from "react";
import { IoMdClose } from "react-icons/io";
import Search from "../../assets/Search.png";
import Basket from "../../assets/Basket.png";
import { FiHeart } from "react-icons/fi";
import fb from "../../assets/Facebook.png";
import yt from "../../assets/Youtube.png";
import insta from "../../assets/Instagram.png";

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: { name: string; href: string }[];
}

const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  navItems,
}) => {
  return (
    <div
      className={`fixed inset-y-0 left-0 z-50 w-10/12 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden`}
    >
      <div className="flex justify-between">
        <h1 className="flex font-poppins text-[24px] font-medium leading-[1]">
          3legant
          <span className="ml-[2px] inline-block h-1 w-1 animate-bounce rounded-full font-poppins text-xl font-bold text-[#6c7275]">
            .
          </span>
        </h1>
        <button
          className="text-[14px] font-medium text-[#6c7275]"
          onClick={onClose}
        >
          <IoMdClose className="h-6 w-6" />
        </button>
      </div>

      <ul className="mt-10 flex flex-col gap-4">
        <div className="relative w-full">
          <img
            src={Search}
            alt="search"
            className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 cursor-pointer"
          />
          <input
            type="search"
            className="w-full rounded-lg border-[1.5px] border-[#6c7275] p-2 pl-10 text-[#6c7275] placeholder-[#6c7275] focus:border-[#38cb89] focus:outline-none"
            placeholder="Search..."
          />
        </div>
        <ul className="mt-10 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="border-b-[1px] border-[#e8ecef] pb-2 font-inter text-[14px] font-[500] text-[#141718]"
            >
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </ul>

      <ul className="mt-10 flex flex-col gap-4">
        <li className="flex flex-row items-center justify-between border-b-[1px] border-[#e8ecef] pb-2 font-inter text-[14px] font-[500] text-[#141718]">
          <a href="">Cart</a>
          <span className="flex flex-row items-center gap-2">
            <img src={Basket} alt="basket" className="h-6 w-6" />
            <p className="h-5 w-5 rounded-full border-black bg-black text-center text-[12px] font-medium text-[#fff]">
              20
            </p>
          </span>
        </li>
        <li className="flex flex-row items-center justify-between border-b-[1px] border-[#e8ecef] pb-2 font-inter text-[14px] font-[500] text-[#141718]">
          <a href="">Wish List</a>
          <span className="flex flex-row items-center gap-2">
            <FiHeart className="h-6 w-6" />
            <p className="h-5 w-5 rounded-full border-black bg-black text-center text-[12px] font-medium text-[#fff]">
              20
            </p>
          </span>
        </li>
      </ul>

      <button className="relative mt-6 flex w-full transform items-center justify-center gap-8 rounded-lg bg-[#141718] py-2.5 font-inter font-medium leading-[1.63] text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#38cb89]">
        Sign Up
      </button>

      <div className="mt-6 flex flex-row gap-x-6 invert filter">
        <img src={fb} alt="facebook" className="h-6 w-6" />
        <img src={insta} alt="instagram" className="h-6 w-6" />
        <img src={yt} alt="youtube" className="h-6 w-6" />
      </div>
    </div>
  );
};

export default MenuDrawer;
