import React from "react";

import {MainSectionProps} from "../../constants/interfaces";


const MainSection: React.FC<MainSectionProps> = ({
  heading,
  subheading,
  description,
  highlight,
}): JSX.Element => {
  return (
    <main className="mt-6 flex flex-col items-center justify-between md:flex-row">
      <h1 className="text-left font-poppins font-[500] text-[48px] leading-[1.1] text-[#141718] md:text-[72px] md:leading-[1.06]">
        {heading} <span className="-ml-2 text-[#6c7275]">/</span> <br />{" "}
        {subheading} <span className="-ml-2 text-[#6c7275]">.</span>
      </h1>
      <p className="mt-4 text-left font-inter text-[16px] font-normal leading-[1.63] text-[#6c7275] md:mt-0 md:w-2/5 md:pr-12">
        <b className="text-black">{highlight}</b> {description}
      </p>
    </main>
  );
};

export default MainSection;
