// ProductSlider.tsx
import React, { useRef, useEffect, useState } from "react";
import Product from "./Cards/Product";
import productImg from "../assets/Top.png";

interface ProductData {
  id: number;
  isNew?: boolean;
  discount?: number;
  image: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
}

const ProductSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollbarRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const products: ProductData[] = [
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
      isNew: false,
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

  useEffect(() => {
    const slider = sliderRef.current;
    const scrollbar = scrollbarRef.current;
    if (!slider || !scrollbar) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        slider.scrollLeft += e.deltaX;
      }
    };

    const updateScrollbarPosition = () => {
      if (slider && scrollbar) {
        const scrollPercentage =
          (slider.scrollLeft / (slider.scrollWidth - slider.clientWidth)) * 100;
        scrollbar.style.left = `${scrollPercentage}%`;
      }
    };

    slider.addEventListener("wheel", handleWheel, { passive: false });
    slider.addEventListener("scroll", updateScrollbarPosition);

    return () => {
      slider.removeEventListener("wheel", handleWheel);
      slider.removeEventListener("scroll", updateScrollbarPosition);
    };
  }, []);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollbarRef.current!.offsetLeft);
    setScrollLeft(sliderRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current!.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed
    sliderRef.current!.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <React.Fragment>
      <div className="px-4 mb-[40px] mt-40 flex w-full flex-row items-center justify-between md:mt-[80px]">
        <h1 className="font-poppins text-[34px] font-[500] leading-[1.1] text-[#000] md:text-[40px]">
          New <br /> Arivals
        </h1>
        <div className="flex flex-col">
          <a
            href=""
            className="group inline-flex items-center text-[14px] font-[500] leading-[1.75] text-[#141718] md:text-[16px]"
          >
            <span className="peer">More Product</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 peer-hover:translate-x-1">
              &rarr;
            </span>
          </a>
          <hr className="mt-[1px] h-[2px] w-28 bg-[#141718] md:mt-[1.5px]" />
        </div>
      </div>
      <div className="relative w-full overflow-hidden p-4">
        <div
          ref={sliderRef}
          className="scrollbar-hide flex space-x-4 overflow-x-auto pb-6"
          style={{ scrollBehavior: "smooth" }}
        >
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0">
              <Product {...product} />
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-4 right-4 hidden h-1 overflow-hidden rounded-full bg-[#e8ecef] md:flex">
          <div
            ref={scrollbarRef}
            className="duration-600 absolute h-full w-1/2 cursor-pointer rounded-full bg-[#343839] transition-all"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          ></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProductSlider;
