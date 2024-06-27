import React from "react";
import Carousel from "./Slider";
import Category from "../Category";
import Feature from "../Cards/Feature";

import SaleBanner from "./SaleBanner";

import ProductSlider from "../ProductSection";
import ArticleGrid from "../ArticleGrid";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
// import Article from "../Cards/Article";

const HomePage = () => {
  
  return (
    <React.Fragment>
      <Carousel />
      <main className="mt-6 flex flex-col items-center justify-between md:flex-row">
        <h1 className="text-left font-poppins text-[50px] font-normal leading-[1.1] text-[#141718] md:text-[72px] md:leading-[1.06]">
          Simply Unique <span className="-ml-2 text-[#6c7275]">/</span> <br />{" "}
          Simply Better <span className="-ml-2 text-[#6c7275]">.</span>
        </h1>
        <p className="mt-4 text-left font-inter text-[16px] font-normal leading-[1.63] text-[#6c7275] md:mt-0 md:w-2/5 md:pr-12">
          <b className="text-black">3legant </b>
          is a gift & decorations store based in HCMC, Vietnam. Est since 2019.
        </p>
      </main>
      <Category />
      <Feature />
      
      <section className="flex flex-wrap gap-4">
        <ProductSlider />
      </section>
      <ArticleGrid articles={[]}/>
      <SaleBanner />
      <CallToAction/>
      <Footer/>
    </React.Fragment>
  );
};

export default HomePage;
