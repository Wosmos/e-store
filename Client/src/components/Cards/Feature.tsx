import React from "react";
import Delivery from "../../assets/Delivery.png"; // Adjust this import path
import Call from "../../assets/Call.png";
import Money from "../../assets/Money.png";
import Lock from "../../assets/Lock.png";

interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start justify-center gap-2 bg-[#f3f5f7] p-6 transition-shadow duration-300 ease-in-out">
    <img src={icon} alt="" className="h-12 w-12" />
    <h2 className="font-poppins text-[18px] font-[500] leading-[1.4] text-[#141718] sm:text-[20px]">
      {title}
    </h2>
    <p className="font-poppins text-[12px] leading-[1.71] text-[#6c7275] sm:text-[14px]">
      {description}
    </p>
  </div>
);

const FeatureSection: React.FC = () => {
  const features: FeatureProps[] = [
    { icon: Delivery, title: "Free Shipping", description: "Order above $200" },
    {
      icon: Money,
      title: "Money-Back Guarantee",
      description: "30 days return policy",
    },
    {
      icon: Lock,
      title: "Secure Payments",
      description: "Secured by Stripe",
    },
    { icon: Call, title: "24/7 Support", description: "Call us anytime" },
  ];

  return (
    <section className="my-12 grid w-full grid-cols-2 gap-4 md:grid-cols-4">
      {features.map((feature, index) => (
        <Feature key={index} {...feature} />
      ))}
    </section>
  );
};

export default FeatureSection;
