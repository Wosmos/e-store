// Product.tsx
import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { FaHeart, FaStar, FaStarHalfAlt } from "react-icons/fa";

interface ProductProps {
  isNew?: boolean;
  discount?: number;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
}

const Product: React.FC<ProductProps> = ({
  isNew,
  discount,
  image,
  name,
  price,
  originalPrice,
  rating,
}) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaStar key={i} className="text-gray-300" />);
      }
    }

    return stars;
  };

  return (
    <section className="flex flex-col">
      <div className="group flex w-[230px] flex-col overflow-hidden rounded-lg bg-[#f3f5f7] shadow-sm sm:w-[260px]">
        <div className="relative h-[310px] overflow-hidden rounded-lg p-4 sm:h-[350px]">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="absolute left-0 right-0 top-0 flex flex-row items-start justify-between p-2">
            {isNew && (
              <span className="flex w-16 items-center justify-center gap-2 rounded bg-white py-1 text-left font-inter text-[16px] font-bold leading-[1]">
                New
              </span>
            )}
            <button
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[16px] text-[#6c7275] shadow-md transition-all duration-300 hover:scale-105"
              onClick={toggleFavorite}
            >
              {isFavorite ? (
                <FaHeart className="animate-pop text-red-500" />
              ) : (
                <FiHeart />
              )}
            </button>
          </div>
          {discount && (
            <div className="absolute left-2 top-12 flex w-16 flex-row items-center justify-center gap-2 rounded bg-[#38cb89] py-1 font-inter text-[16px] font-bold leading-[1] text-[#fefefe]">
              -{discount}%
            </div>
          )}
          <button className="absolute bottom-4 left-4 right-4 flex flex-row items-center justify-center gap-1 rounded-lg bg-[#141718] p-2 px-6 text-white opacity-0 shadow-md shadow-black/10 transition-all duration-300 hover:scale-105 hover:bg-[#38cb89] group-hover:opacity-100">
            Add to cart
          </button>
        </div>
      </div>

      <div className="pt-3">
        <div className="mb-1 flex items-center text-[14px]">
          {renderStars(rating)}
          <span className="ml-1 text-[14px] text-[#6c7275]">({rating})</span>
        </div>
        <h2 className="mb-1 font-inter text-lg font-semibold">{name}</h2>
        <div className="flex items-center justify-between text-[14px]">
          <div>
            <span className="font-inter font-[600] text-[#141718]">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="ml-2 font-inter text-sm text-[#6c7275] line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
