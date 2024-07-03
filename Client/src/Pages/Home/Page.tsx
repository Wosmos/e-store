import React from "react";
import Carousel from "./Slider";
import Category from "../../components/Category";
import Feature from "../../components/Cards/Feature";
import SaleBanner from "./SaleBanner";
import ProductSlider from "../../components/ProductSection";
import ArticleGrid from "../../components/ArticleGrid";
import CallToAction from "../../components/CallToAction";
import Footer from "../../components/Footer";
import MainSection from "./Heading";
import Practice from "../../components/practice";
import bannerImage from "../../assets/Banner.png";
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
      <SaleBanner
        saleEndDate="2023-01-01T00:00:00.000Z"
        promotionText="Promotion"
        discountPercentage={40}
        bannerImage={bannerImage}
        title={"Hundred of New lower prices"}
        description={"It's more affordable to buy from us"}
        linkText={"Shop Now"}
        linkHref={"/"}
      />
      <section className="px-6 md:px-8">
        <ArticleGrid articles={[]} />
      </section>
      <CallToAction />
      <Practice />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
