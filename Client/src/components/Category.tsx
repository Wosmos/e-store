import React from 'react';

import {CategoryItemProps} from "../constants/interfaces"

const CategoryItem: React.FC<CategoryItemProps> = ({ title, backgroundImage, className }) => {
  return (
    <div
      className={`flex flex-col justify-end gap-3 bg-cover bg-center p-8 md:p-12 ${className}`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="font-poppins text-[34px] font-[500] leading-[1.12]">
        {title}
      </h1>
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
        <hr className="mt-[1px] h-[2px] w-20 bg-[#000000] opacity-100 md:mt-[1.5px]" />
      </div>
    </div>
  );
};

const Category: React.FC = () => {
  const categories = [
    {
      title: "Living Room",
      backgroundImage: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      className: "row-span-4 md:row-span-2"
    },
    {
      title: "Bedroom",
      backgroundImage: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Kitchen",
      backgroundImage: "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section className="mt-10 grid h-screen grid-cols-1 gap-4 md:gap-6 md:h-[664px] md:grid-cols-2">
      {categories.map((category, index) => (
        <CategoryItem
          key={index}
          title={category.title}
          backgroundImage={category.backgroundImage}
          className={category.className}
        />
      ))}
    </section>
  );
};

export default Category;