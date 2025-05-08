// import React from "react";

// const Hero = () => {
//   return (
//     <div className=" relative  bg-[#FFFFFF] min-h-screen ">
//       <div className="absolute  -z-1 w-full h-[40rem] bg-[#003FDB]"></div>
//       {/* Top Section with Title and Search */}
//       <div className="relative z-10 bg-transparent p-8">
//         <div className="text-center text-white mb-12">
//           <h1 className="text-6xl font-bold mb-4">
//             The Finance Solutions
//             <br />
//             For Your Business
//           </h1>
//           <p className="text-xl mb-8">
//             Empower your finance team. The onestop plateform for all financial
//             <br />
//             management of small and medium-sized business.
//           </p>

//           {/* Search Bar */}
//           <div className="max-w-xl mx-auto flex bg-white rounded-full overflow-hidden shadow-md ">
//             <input
//               type="email"
//               placeholder="Enter your email adress"
//               className="flex-1 px-8 py-4 outline-none text-gray-600 text-lg"
//             />
//             <button className="mx-1 my-1 px-8 py-4 rounded-full bg-[#A3DC2F] text-black font-semibold transition-colors">
//               Book a Demo
//             </button>
//           </div>
//         </div>

//         {/* Dashboard Section */}
//         <div className=" rounded-3xl shadow-lg max-w-7xl mx-auto">
//           <img src="/herobg.png" alt="Dashboard" className="w-full" />
//         </div>

//         {/* Bottom Text */}
//       </div>
//     </div>
//   );
// };

// export default Hero;
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative bg-[#FFFFFF] overflow-hidden">
      {/* Background with animated gradient */}
      <motion.div
        className="absolute -z-1 w-full lg:h-[50rem] md:h-[40rem] sm:h-[40rem]  h-[40rem] bg-[#003FDB]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Top Section with Title and Search */}
      <div className="relative z-10 bg-transparent p-8">
        <div className="text-center text-white mb-12">
          <motion.h1
            className=" lg:text-6xl md:text-6xl  sm:text-5xl text-5xl   font-bold mb-4"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.2,
              duration: 0.8,
            }}
          >
            The Finance Solutions
            <br />
            For Your Business
          </motion.h1>

          <motion.p
            className="text-xl mb-8"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 50,
              delay: 0.4,
              duration: 0.8,
            }}
          >
            Empower your finance team. The onestop plateform for all financial
            <br />
            management of small and medium-sized business.
          </motion.p>

          {/* Search Bar with animation */}
          <div className="w-full p-0 flex justify-center items-center">
            <div className="w-full max-w-xl bg-white rounded-full overflow-hidden shadow-md flex flex-row lg:flex-row sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 text-gray-600 text-sm sm:text-base sm:text-[5px]  lg:text-[1rem]  text-[7px] outline-none"
              />
              <button className="  lg:my-1 md:my-1 my-1 mx-1 sm:mt-0 sm:ml-2 px-4 py-3 rounded-full bg-[#A3DC2F] text-black font-medium text-sm text-[7px] sm:text-base whitespace-nowrap">
                Book a Demo
              </button>
            </div>
          </div>

          {/* <div
            className="max-w-lg mx-auto flex bg-white rounded-full overflow-hidden shadow-md"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              delay: 0.6,
              duration: 0.5,
            }}
          >
            <input
              type="email"
              placeholder="Enter your email adress"
              className="flex-1 px-8 py-4 outline-none text-gray-600 text-md"
            />
            <button
              className=" mx-1 my-1 px-8 py-3 rounded-full bg-[#A3DC2F] text-black font-semibold transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              Book a Demo
            </button>
          </div> */}
        </div>

        {/* Dashboard Section with floating animation */}
        <motion.div
          className="lg:rounded-3xl sm:rounded-2xl  shadow-lg max-w-7xl mx-auto "
          initial={{ y: 100, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            x: mousePosition.x * -20,
            y: mousePosition.y * -20,
          }}
          transition={{
            type: "spring",
            stiffness: 50,
            delay: 0.8,
            duration: 0.8,
          }}
        >
          <motion.img
            src="/herobg.png"
            alt="Dashboard"
            className="w-full"
            whileInView={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
          />
        </motion.div>
      </div>

      {/* Animated notification elements */}
      {/* <motion.div
        className="absolute bottom-20 right-20 bg-white p-4 rounded-lg shadow-lg z-20"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
          <p className="text-gray-800 text-sm">New feature available!</p>
        </div>
      </motion.div> */}

      {/* <motion.div
        className="absolute top-20 left-20 bg-white p-4 rounded-lg shadow-lg z-20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
          <p className="text-gray-800 text-sm">Financial insights updated</p>
        </div>
      </motion.div> */}
    </div>
  );
};

export default Hero;
