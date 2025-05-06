// import React from "react";

// const Finances = () => {
//   return (
//     <div className="bg-[#0038FF] rounded-3xl overflow-hidden my-10 mx-4 lg:mx-auto max-w-7xl">
//       <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-4">
//         {/* Left Side - Content */}
//         <div className="text-white pl-5 mb-8 lg:mb-0 lg:max-w-[500px]">
//           <h2 className="text-4xl lg:text-5xl font-bold mb-8">
//             Let's Upgrade your
//             <br />
//             finances experience
//             <br />
//             by using Cryptland
//           </h2>
//           <div className="flex gap-4">
//             <button className="bg-[#A3DC2F] text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
//               Request Demo
//             </button>
//             <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
//               Watch Video
//             </button>
//           </div>
//         </div>

//         {/* Right Side - Image */}
//         <div className="lg:w-[400px] rounded-3xl overflow-hidden">
//           <img
//             src="/background.png"
//             alt="Business professionals"
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Finances;
"use client";

import { motion } from "framer-motion";

const Finances = () => {
  return (
    <div className="bg-[#0038FF] rounded-3xl overflow-hidden my-10 mx-4 lg:mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-4">
        {/* Left Side - Content */}
        <div className="text-white pl-5 mb-8 lg:mb-0 lg:max-w-[500px]">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
          >
            Let's Upgrade your
            <br />
            finances experience
            <br />
            by using Cryptland
          </motion.h2>
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
              ease: "easeOut",
            }}
          >
            <motion.button
              className="bg-[#A3DC2F] text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Request Demo
            </motion.button>
            <motion.button
              className="bg-white text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors"
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Watch Video
            </motion.button>
          </motion.div>
        </div>

        {/* Right Side - Image */}
        <motion.div
          className="lg:w-[400px] rounded-3xl overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
        >
          <motion.img
            src="/background.png"
            alt="Business professionals"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 1.5 },
            }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Finances;
