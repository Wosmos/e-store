import React from "react";
import Carousel from "./Slider";
import Category from "../Category";
import Feature from "../Cards/Feature";
import SaleBanner from "./SaleBanner";
import ProductSlider from "../ProductSection";
import ArticleGrid from "../ArticleGrid";
import CallToAction from "../CallToAction";
import Footer from "../Footer";
import MainSection from "./Heading";
import Practice from "../practice";
// import Article from "../Cards/Article";

const HomePage = () => {
  return (
    <React.Fragment>
      <Carousel />

      <section className="px-6 md:px-8">
        <MainSection
          heading="Simply Unique"
          subheading="Simply Better"
          highlight="3legant"
          description="is a gift & decorations store based in HCMC, Vietnam. Est since 2019."
        />
        <Category />
      </section>
      <section className="px-2 md:px-4">
        <ProductSlider />
      </section>
      <section className="px-6 md:px-8">
        <Feature />
      </section>
      <SaleBanner />
      <section className="px-6 md:px-8">
        <ArticleGrid articles={[]} />
      </section>
      <CallToAction />
      <Practice/>
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
