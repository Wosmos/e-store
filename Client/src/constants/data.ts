import productImg from "../assets/Top.png";
import Delivery from "../assets/Delivery.png"; // Adjust this import path
import Call from "../assets/Call.png";
import Money from "../assets/Money.png";
import Lock from "../assets/Lock.png";
import Mail from "../assets/Mail.png";
import Store from "../assets/Store.png";

import {
  ArticleProps,
  FeatureProps,
  MainSectionProps,
  ProductData,
  SaleBannerProps,
} from "../constants/interfaces";
import BannerImg from "../assets/Banner.png";
import productBackgroundImage from "../assets/Top.png";

export const features: FeatureProps[] = [
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

export const contact: FeatureProps[] = [
  {
    icon: Store,
    title: "Address",
    description: "234 Hai Trieu, Ho Chi Minh City, Viet Nam",
  },
  {
    icon: Call,
    title: "Contact Us",
    description: "+92 306 224 8224",
  },
  {
    icon: Mail,
    title: "Email",
    description: "theWosmo@gmail.com",
  },
];

export const categories = [
  {
    title: "Living Room",
    backgroundImage:
      "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    className: "row-span-4 md:row-span-2",
  },
  {
    title: "Bedroom",
    backgroundImage:
      "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    title: "Kitchen",
    backgroundImage:
      "https://images.pexels.com/photos/4352247/pexels-photo-4352247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
];
export const slides = [
  "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  "https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
];
export const articles: ArticleProps[] = [
  {
    imageSrc: productBackgroundImage,
    imageAlt: "Article 1",
    title: "Article 1 Title",
    linkText: "Read More",
    linkHref: "/article1",
  },
  {
    imageSrc: productBackgroundImage,
    imageAlt: "Article 2",
    title: "Article 2 Title",

    linkText: "Read More",
    linkHref: "/article2",
  },
  {
    imageSrc: productBackgroundImage,
    imageAlt: "Article 2",
    title: "Article 2 Title",

    linkText: "Read More",
    linkHref: "/article2",
  },
  // Add more articles as needed
];

export const products: ProductData[] = [
  {
    id: 1,
    isNew: true,
    discount: 5,
    image: productImg,
    name: "Product 1",
    price: 10,
    originalPrice: 15,
    rating: 4.5,
  },
  {
    id: 2,
    isNew: false,
    discount: 10,
    image: productImg,
    name: "Product 2",
    price: 20,
    originalPrice: 25,
    rating: 4.0,
  },
  {
    id: 3,
    isNew: true,
    discount: 15,
    image: productImg,
    name: "Product 3",
    price: 30,
    originalPrice: 35,
    rating: 4.8,
  },
  {
    id: 4,
    isNew: true,
    discount: 20,
    image: productImg,
    name: "Product 4",
    price: 40,
    originalPrice: 45,
    rating: 4.2,
  },
  {
    id: 5,
    isNew: true,
    discount: 25,
    image: productImg,
    name: "Product 5",
    price: 50,
    originalPrice: 55,
    rating: 4.7,
  },
  {
    id: 6,
    isNew: false,
    discount: 30,
    image: productImg,
    name: "Product 6",
    price: 60,
    originalPrice: 65,
    rating: 4.6,
  },
];
export const mainSectionData: MainSectionProps = {
  heading: "Simply Unique",
  subheading: "Simply Better",
  highlight: "3legant",
  description:
    "is a gift & decorations store based in HCMC, Vietnam. Est since 2019.",
};

export const saleBannerData: SaleBannerProps = {
  saleEndDate: "2024-07-31T23:59:59",
  bannerImage: BannerImg,
  promotionText: "Promotion",
  title: "Hurry Up",
  description:
    "It's more affordable than ever to give every room in your home a stylish makeover",
  discountPercentage: 40,
  linkText: "Shop Now",
  linkHref: "/Shop",
};
