import React, { useState } from "react";
import Search from "../assets/Search.png";
import Profile from "../assets/Profile.png";
import Basket from "../assets/Basket.png";
import { LuMenu } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { FiHeart } from "react-icons/fi";

const Navbar = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Shop", href: "#" },
    { name: "Product", href: "#" },
    { name: "Contact Us", href: "#" },
  ];

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <section className="fixed left-0 z-50 w-full bg-white shadow-sm">
      <div className="flex h-12 w-full flex-row items-center justify-between px-4">
        <h1 className="flex font-poppins text-[24px] font-medium leading-[1]">
          <LuMenu
            className="mr-1 cursor-pointer md:hidden"
            onClick={toggleDrawer}
          />
          3legant
          <span className="ml-[2px] inline-block h-1 w-1 animate-bounce rounded-full font-poppins text-xl font-bold text-[#6c7275]">
            .
          </span>
        </h1>
        <nav>
          <ul className="hidden flex-row gap-10 md:flex">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="text-[14px] text-[#6c7275] hover:scale-105 hover:font-[500] hover:text-[#141718]"
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <nav className="flex flex-row items-center gap-4">
          <ul className="hidden flex-row gap-4 md:flex">
            <div className="relative">
              <div
                className={`transition-all duration-300 ${
                  searchOpen ? "w-52" : "w-6"
                } overflow-hidden`}
              >
                {searchOpen ? (
                  <div className="relative flex items-center">
                    <img src={Search} alt="search" className="mr-2 h-6 w-6" />
                    <input
                      type="search"
                      className="w-full rounded-lg border-[1.5px] border-[#6c7275] p-2 text-[#6c7275] placeholder-[#6c7275] focus:border-[#38cb89] focus:outline-none"
                      placeholder="Search..."
                      autoFocus
                    />
                  </div>
                ) : (
                  <img
                    src={Search}
                    alt="search"
                    className="h-6 w-6 cursor-pointer"
                    onClick={toggleSearch}
                  />
                )}
              </div>
              {searchOpen && (
                <button
                  className="absolute right-2 top-2 text-[#38cb89] hover:text-[#141718]"
                  onClick={toggleSearch}
                >
                  &#x2715; {/* Close icon */}
                </button>
              )}
            </div>
          </ul>
          <img src={Profile} alt="profile" className="h-6 w-6" />
          <ul>
            <button
              type="button"
              className="relative -ml-2 inline-flex items-center rounded-lg bg-transparent p-3 text-center text-sm font-medium text-white focus:outline-none"
            >
              <img className="h-6 w-6 text-black" src={Basket} alt="basket" />
              <div className="absolute right-[6px] top-[6px] flex h-4 w-4 items-center justify-center rounded-full bg-black text-[8px] font-bold text-white">
                20
              </div>
            </button>
          </ul>
        </nav>
      </div>

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-10/12 transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } md:hidden`}
      >
        {/* 1st row */}
        <div className="flex justify-between">
          <h1 className="flex font-poppins text-[24px] font-medium leading-[1]">
            3legant
            <span className="ml-[2px] inline-block h-1 w-1 animate-bounce rounded-full font-poppins text-xl font-bold text-[#6c7275]">
              .
            </span>
          </h1>
          <button
            className="text-[14px] font-medium text-[#6c7275]"
            onClick={toggleDrawer}
          >
            <IoMdClose className="h-6 w-6" />
          </button>
        </div>

        {/* 2nd row */}
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
        <div className="h-1/6"></div>
        {/* change mt */}
        <ul className="flex flex-col gap-4">
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
        <ul className="mt-3 flex flex-row gap-6 py-[2px]">
          <a href="">
            {" "}
            <FaInstagram className="h-6 w-6" />
          </a>

          <a href="">
            {" "}
            <FaSquareFacebook className="h-6 w-6" />
          </a>

          <a href="">
            <FaLinkedin className="h-6 w-6" />
          </a>
        </ul>
      </div>

      {/* Backdrop */}
      {drawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
    </section>
  );
};

export default Navbar;
