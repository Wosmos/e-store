// src/ArticleGrid.tsx
import React from "react";
import Article, { ArticleProps } from "./Cards/Article";

import productBackgroundImage from "../assets/Top.png";

interface ArticleGridProps {
  articles: ArticleProps[];
}

const articles: ArticleProps[] = [
  {
    imageSrc:  productBackgroundImage , 
    imageAlt: "Article 1",
    title: "Article 1 Title",
    linkText: "Read More",
    linkHref: "/article1",
  },
  {
    imageSrc:  productBackgroundImage , 
    imageAlt: "Article 2",
    title: "Article 2 Title",

    linkText: "Read More",
    linkHref: "/article2",
  },
  {
    imageSrc: productBackgroundImage , 
    imageAlt: "Article 2",
    title: "Article 2 Title",

    linkText: "Read More",
    linkHref: "/article2",
  },
  // Add more articles as needed
];

const ArticleGrid: React.FC<ArticleGridProps> = () => {
  return (
    <React.Fragment>
      <div className="mb-[40px] mt-40 flex w-full flex-row items-center justify-between md:mt-[80px]">
        <h1 className="font-poppins text-[34px] font-[500] leading-[1.1] text-[#000] md:text-[40px]">
          Articles
        </h1>
        <div className="flex flex-col">
          <a
            href=""
            className="group inline-flex items-center text-[14px] font-[500] leading-[1.75] text-[#141718] md:text-[16px]"
          >
            <span className="peer">More Articles</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 peer-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <hr className="mt-[1px]  w-28 bg-[#141718] md:mt-[1.5px] h-[2px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 gap-y-6">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </React.Fragment>
  );
};

export default ArticleGrid;
