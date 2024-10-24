import React from "react";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CiFaceMeh } from "react-icons/ci";

const NotFound: React.FC = ():JSX.Element => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <h1 className="text-heading-2 flex-center">
        <CiFaceMeh className="font-[500] mt-2" />
        ppsy
      </h1>
      <motion.div className="flex-col-center h-full w-full bg-white text-center">
        <div className="flex-center text-heading-2 mb-4 w-full gap-2 text-[150px] font-bold text-[#141718] md:gap-4 md:text-[200px]">
          <h1 className="">4</h1>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 24 24"
            className=" "
          >
            <motion.path
              d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
              fill="none"
              stroke="#141718"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "loop",
                repeatDelay: 1,
              }}
            />
            <motion.line
              x1="8"
              y1="23"
              x2="8"
              y2="21"
              stroke="#38cb89"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ y2: 23 }}
              animate={{ y2: 21 }}
              transition={{
                duration: 0.5,
                delay: 2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2.5,
              }}
            />
            <motion.line
              x1="20"
              y1="23"
              x2="20"
              y2="21"
              stroke="#38cb89"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ y2: 23 }}
              animate={{ y2: 21 }}
              transition={{
                duration: 0.5,
                delay: 2.2,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2.5,
              }}
            />

            <motion.line
              x1="1"
              y1="9"
              x2="23"
              y2="9"
              stroke="#38cb89"
              strokeWidth="2"
              strokeLinecap="round"
              initial={{ x2: 1 }}
              animate={{ x2: 23 }}
              transition={{
                duration: 1,
                delay: 3,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2,
              }}
            />
          </motion.svg>
          <h1>4</h1>
        </div>

        <p className="mb-8 text-xl">Looks like this page is out of stock!</p>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <a href="/" className="btn-primary py-4">
            Back to Home
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
