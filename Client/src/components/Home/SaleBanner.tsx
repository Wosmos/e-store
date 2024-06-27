import React from "react";
import BannerImg from "../../assets/Banner.png";
const SaleBanner = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="relative h-[367px] w-full overflow-hidden md:h-[532px] md:w-1/2">
        <img
          src={BannerImg}
          alt="Banner Img"
          className="h-full w-full object-cover object-center "
        />
      </div>
      <div className="flex w-full flex-col justify-center text-left gap-4 bg-[#f3f5f7] px-[32px] md:px-[72px] md:w-1/2">
        <h2 className="mt-12 md:mt-0 font-inter text-[16px] font-bold leading-[1] text-[#377dff]">
          SALE UP TO 35% OFF
        </h2>
        <h1 className="font-poppins text-[34px] md:text-[40px] font-[500] leading-[1.1] text-[#141718]">
          HUNDREDS of <br /> New lower prices!
        </h1>
        <p className="font-inter text-[16px] md:text-[20px] font-normal leading-[1.6] text-[#141718]">
          It’s more affordable than ever to give every room in your home a
          stylish makeover
        </p>
        <div className="flex flex-col">
          <a
            href=""
            className="group inline-flex items-center text-[14px] text-[#000000]"
          >
            <span className="peer">Shop Now</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 peer-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <hr className="mt-[1px] h-[1px] w-20 bg-[#000000] opacity-100 md:mt-[1.5px] md:h-[2px]" />
        </div>
      </div>
    </section>
  );
};

export default SaleBanner;
