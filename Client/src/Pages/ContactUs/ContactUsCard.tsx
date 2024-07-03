import React from 'react'

const ContactUsCard = () => {
  return (
    <section className="flex flex-col items-start justify-center gap-2 bg-[#f3f5f7] p-6 transition-shadow duration-300 ease-in-out">
      <img src={icon} alt="" className="h-12 w-12" />
      <h2 className="font-poppins text-[18px] font-[500] leading-[1.4] text-[#141718] sm:text-[20px]">
        {title}
      </h2>
      <p className="font-poppins text-[12px] leading-[1.71] text-[#6c7275] sm:text-[14px]">
        {description}
      </p>
    </section>
  );
}

export default ContactUsCard
