import React, { useState, useEffect } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";


const Carousel = () => {
  const slides = [
    "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/220749/pexels-photo-220749.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: React.SetStateAction<number>) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      {/* Carousel wrapper */}
      <div className="relative h-[304px] overflow-hidden md:h-[536px] ">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute h-full w-full transition-opacity duration-700 ease-in-out ${
              index === activeSlide ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
          >
            <img
              src={slide}
              className="absolute block h-full w-full object-cover object-center"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>

      {/* Slider indicators */}
      <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`h-2 w-2 rounded-full ${
              index === activeSlide ? "bg-white" : "bg-white/50"
            }`}
            aria-current={index === activeSlide}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      {/* Slider controls */}
      <button
        type="button"
        className="group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={prevSlide}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-white">
          <IoMdArrowBack className="m-2 text-[18px] text-black" />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={nextSlide}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 group-hover:bg-gray-300 group-focus:outline-none group-focus:ring-4 group-focus:ring-white">
          <IoMdArrowForward className="m-2 text-[18px]" />
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
