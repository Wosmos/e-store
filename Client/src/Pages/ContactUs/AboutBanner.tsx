// import React, { useState, useEffect, useCallback } from "react";
import LinkWithArrow from "../../components/Link";
import { SaleBannerProps } from "../../constants/interfaces";

const AboutBanner: React.FC<SaleBannerProps> = ({
  bannerImage,
  title,
  description,
  linkText,
  linkHref,
}) => {
  const [firstPart, secondPart] = description.split("{<br/>}");
  return (
    <section className="flex flex-col md:flex-row">
      <div className="relative h-[367px] w-full overflow-hidden md:h-[532px] md:w-1/2">
        <img
          src={bannerImage}
          alt="Banner Img"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="flex w-full flex-col justify-center gap-4 bg-[#f3f5f7] px-[32px] pb-16 text-left md:w-1/2 md:px-[72px]">
        <h1 className="mt-12 font-poppins text-[34px] font-[500] leading-[1.1] text-[#141718] md:mt-0 md:text-[40px]">
          {title}
        </h1>
        <p className="text-body-1 -mb-4">
          <span dangerouslySetInnerHTML={{ __html: firstPart }} />
          <br />
          <span dangerouslySetInnerHTML={{ __html: secondPart }} />
        </p>

        <LinkWithArrow
          text={linkText}
          href={linkHref}
          textColor="text-[#141718]"
          lineColor="bg-[#141718]"
          arrowDirection="right"
        />
      </div>
    </section>
  );
};

export default AboutBanner;
