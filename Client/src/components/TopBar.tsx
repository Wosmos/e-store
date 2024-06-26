import { useState } from "react";
import { IoMdClose } from "react-icons/io"; // Import the close icon
import Img from "../assets/SaleTicket.png";

const TopBar = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <section className="sticky left-0 top-0 z-50 flex h-10 w-full items-center justify-center bg-[#f3f5f7] py-2">
      <main className="flex h-full w-full items-center justify-center gap-3 px-4 font-inter">
        <div className="flex items-center gap-2">
          <img src={Img} alt="Sale Ticket" className="h-6 w-6" />
          <p className="text-[12px] md:text-[14px] font-bold text-[#343839]">
            30% off store-wide - Limited time!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex flex-col">
            <a
              href=""
              className="group inline-flex items-center text-[14px] text-[#377dff]"
            >
              <span className="peer">Shop Now</span>
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 peer-hover:translate-x-1">
                &rarr;
              </span>
            </a>
            <hr className="mt-[1px] md:mt-[1.5px] h-[1px] md:h-[2px] bg-[#377dff] opacity-100" />
          </div>
          <button
            onClick={handleClose}
            className=" text-[#343839] hover:text-[#000]"
          >
            <IoMdClose className="h-4 md:h-6" />
          </button>
        </div>
      </main>
    </section>
  );
};

export default TopBar;
