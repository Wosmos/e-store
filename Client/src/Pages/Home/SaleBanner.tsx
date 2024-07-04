import React, { useState, useEffect, useCallback } from "react";
import LinkWithArrow from "../../components/Link";
import { SaleBannerProps, TimerBoxProps } from "../../constants/interfaces";

const SaleBanner: React.FC<SaleBannerProps> = ({
  saleEndDate,
  bannerImage,
  promotionText,
  title,
  description,
  discountPercentage,
  linkText,
  linkHref,
}) : JSX.Element => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const endDate = saleEndDate ? new Date(saleEndDate).getTime() : 0;

  const calculateTimeLeft = useCallback(() => {
    const now = new Date().getTime();
    const difference = endDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, [endDate]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const TimerBox: React.FC<TimerBoxProps> = ({ value, label }) => (
    <div className="flex flex-col items-start justify-center">
      <div className="mb-1 mr-4 rounded-sm bg-white px-2 py-1 text-2xl font-bold text-[#377dff] shadow-md md:text-3xl">
        {value.toString().padStart(2, "0")}
      </div>
      <span className="ml-1 text-[10px] uppercase text-[#141718]">{label}</span>
    </div>
  );

  return (
    <div className="relative w-full overflow-hidden">
      <section className="absolute left-0 right-0 flex w-screen flex-col md:flex-row">
        <div className="relative h-[367px] w-full overflow-hidden md:h-[532px] md:w-1/2">
          <img
            src={bannerImage}
            alt="Banner Img"
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div className="flex w-full flex-col justify-center gap-4 bg-[#f3f5f7] px-[32px] pb-16 text-left md:w-1/2 md:px-[72px]">
          <h2 className="mt-12 font-inter text-[16px] font-bold leading-[1] text-[#377dff] md:mt-0">
            {promotionText}
          </h2>

          <h1 className="font-poppins text-[34px] font-[500] leading-[1.1] text-[#141718] md:text-[40px]">
            {title} {discountPercentage}% Off
          </h1>
          <p className="font-inter text-[16px] font-normal leading-[1.6] text-[#141718] md:text-[20px]">
            {description}
          </p>
          {/* Countdown Timer */}
          <div className="flex flex-col gap-4">
            <h3 className="font-inter text-[16px] font-normal leading-[1] text-[#141718] md:mt-0">
              Sale Ends In:
            </h3>
            <div className="flex justify-start">
              <TimerBox value={timeLeft.days} label="Days" />
              <TimerBox value={timeLeft.hours} label="Hours" />
              <TimerBox value={timeLeft.minutes} label="Minutes" />
              <TimerBox value={timeLeft.seconds} label="Seconds" />
            </div>
          </div>
          <LinkWithArrow
            text={linkText}
            href={linkHref}
            textColor="text-[#141718]"
            lineColor="bg-[#141718]"
            arrowDirection="right"
          />
        </div>
      </section>
    </div>
  );
};

export default SaleBanner;
