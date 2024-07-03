import React from "react";
import About from "./About";
import AboutBanner from "./AboutBanner";
import FeatureSection from "../../components/Cards/Feature";

import Footer from "../../components/Footer";
import BannerImage from "../../assets/Banner.png";
import ContactUsSection from "../../components/Cards/ContactUs";
import EmailForm from "./EmailForm";
const ContactUs = () => {
  return (
    <section className="flex w-full flex-col">
      <section className="section-padding">
        <About />
      </section>
      <AboutBanner
        bannerImage={BannerImage}
        title={"About Us"}
        description="3legant is a gift &amp; decorations store based in HCMC, Vietnam. Est since 2019. {<br/>} Our customer service is always prepared to support you 24/7"
        linkText={"Shop Now"}
        linkHref={"/"}
      />
      <section className="section-padding">
        <ContactUsSection />
      </section>
      <section className="section-padding">
        {" "}
        <EmailForm />
      </section>

      <div className="section-padding bg-[#f3f5f7]">
        <FeatureSection />
      </div>
      <Footer />
    </section>
  );
};

export default ContactUs;
