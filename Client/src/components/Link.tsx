import React from "react";
// import { Link } from "react-router-dom";

interface LinkWithArrowProps {
  text: string;
  href: string;
  textColor?: string;
  lineColor?: string;
  arrowDirection?: "left" | "right";
}

const LinkWithArrow: React.FC<LinkWithArrowProps> = ({
  text,
  href,
  textColor = "text-black",
  lineColor = "bg-black",
  arrowDirection = "right",
}) => {
  const arrowClass = arrowDirection === "left" ? "rotate-180" : "";

  return (
    <a href={href} className={`group inline-flex items-center ${textColor}`}>
      <span className="relative">
        {text}
        <span
          className={`absolute bottom-0 left-0 h-[2px] w-0 ${lineColor} transition-all duration-300 group-hover:w-full`}
        ></span>
      </span>
      <span
        className={`ml-2 inline-block transform transition-transform duration-300 group-hover:translate-x-1 ${arrowClass}`}
      >
        &rarr;
      </span>
    </a>
  );
};

export default LinkWithArrow;
