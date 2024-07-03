// src/ArticleGrid.tsx
import React from "react";
import Article from "./Cards/Article";
import { articles } from "../constants/data";
import { ArticleGridProps } from "../constants/interfaces";

const ArticleGrid: React.FC<ArticleGridProps> = () => {
  return (
    <section className="mb-20">
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
          <hr className="mt-[1px] h-[2px] w-28 bg-[#141718] md:mt-[1.5px]" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 gap-y-6 md:grid-cols-3">
        {articles.map((article, index) => (
          <Article key={index} {...article} />
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;
