import React from "react";

export interface ArticleProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  linkText: string;
  linkHref: string;
}

const Article: React.FC<ArticleProps> = ({
  imageSrc,
  imageAlt,
  title,
  linkText,
  linkHref,
}) => {
  return (
    <article className="flex flex-col">
      <div className="relative h-[284px] w-full overflow-hidden md:h-[325px]">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
      <h2 className="mb-2 mt-4 font-poppins text-[20px] font-[500] leading-[1.4] text-[#23262f] md:mt-6">
        {title}
      </h2>
      <div className="flex flex-col">
        <a
          href={linkHref}
          className="group inline-flex items-center text-[14px] text-[#000000]"
        >
          <span className="peer">{linkText}</span>
          <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 peer-hover:translate-x-1">
            &rarr;
          </span>
        </a>
        <hr className="mt-[1px] h-[2px] w-20 bg-[#000000] opacity-100 md:mt-[1.5px]" />
      </div>
    </article>
  );
};

export default Article;
