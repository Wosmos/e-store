import React from "react";
import { MdOutlineMail } from "react-icons/md";
import  right  from "../assets/Top.png";
const CallToAction = () => {
  return (
    <section className="flex h-[360px] w-full flex-row bg-[#f2f4f6]">
      <img
        src={right}
        alt="right img"
        className="hidden h-auto w-full object-contain md:block"
      />

      <main className="flex w-full flex-col items-center justify-center gap-2">
        <h1 className="font-poppins text-[34px] font-[500] leading-[1.1] md:text-[40px]">
          Join Our Newsletter
        </h1>
        <p className="font-inter text-[14px] font-normal leading-[1.6] text-[#141718] md:text-[18px]">
          Sign up for deals, new products and promotions
        </p>
        <div className="relative h-11 w-[300px] md:w-[490px]">
          <span className="text-blue-gray-700 absolute left-0 top-1/2 -translate-y-1/2 transform font-inter text-[16px] font-[500] leading-[1.75]">
            <MdOutlineMail className="mt-2 h-6 w-8" />
          </span>
          <input
            placeholder="Email address"
            className="border-blue-gray-200 text-blue-gray-700 disabled:bg-blue-gray-50 peer h-full w-full border-b bg-transparent pb-1.5 pl-10 pr-20 pt-4 font-inter text-[16px] font-[500] leading-[1.75] outline outline-0 transition-all focus:border-gray-900 focus:outline-0 disabled:border-0"
          />
          <button className="text-blue-gray-700 absolute right-0 top-1/2 -translate-y-1/2 transform font-inter text-[16px] font-[500] leading-[1.75]">
            Sign up
          </button>
          <label className="after:content[' '] peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 pointer-events-none absolute -top-2.5 left-0 flex h-full w-full select-none !overflow-visible truncate text-sm font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:leading-tight peer-focus:text-sm peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent"></label>
        </div>
      </main>
      <img
        src={right}
        alt="left img"
        className="hidden h-auto w-full object-contain md:block"
      />
    </section>
  );
};

export default CallToAction;
