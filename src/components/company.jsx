// import React from "react";

// const Company = () => {
//   return (
//     <div className="pt-20 bg-white">
//       <div className=" mx-auto px-0">
//         {/* Heading Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Working with world class partners.
//           </h2>
//           <p className="text-4xl font-bold mb-4">We're partner first!</p>
//         </div>

//         {/* Partners Logo Section */}
//         <div className="bg-black  py-12">
//           <div className="flex flex-wrap justify-center items-center gap-12">
//             <img src="/c1.png" alt="Cambrian" className="h-8" />
//             <img src="/c2.png" alt="Commvault" className="h-8" />
//             <img src="/c3.png" alt="Crompton" className="h-8" />
//             <img src="/c4.png" alt="Seclock" className="h-8" />
//             <img src="/c5.png" alt="Software" className="h-8" />
//             <img src="/c6.png" alt="Aumni" className="h-8" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Company;
"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const Company = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Trigger animations when component comes into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const subHeadingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.3,
        ease: "easeOut",
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="lg:pt-20 md:pt-0 sm:pt-0 pt-0 bg-white overflow-hidden"
      ref={ref}
    >
      <div className="mx-auto px-0">
        {/* Heading Section with animations */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-4"
            initial="hidden"
            animate={controls}
            variants={headingVariants}
          >
            Working with world class partners.
          </motion.h2>

          <motion.p
            className="text-4xl font-bold mb-4"
            initial="hidden"
            animate={controls}
            variants={subHeadingVariants}
          >
            We're partner first!
          </motion.p>
        </div>

        {/* Partners Logo Section with animations - keeping original structure */}
        <motion.div
          className="bg-black py-12 relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Animated background gradient */}
          {/* <motion.div
            className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              ease: "linear",
            }}
          /> */}

          {/* Single row of logos - keeping original structure */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-12 relative z-10"
            initial="hidden"
            animate={controls}
            variants={containerVariants}
          >
            <motion.img
              src="/c1.png"
              alt="Cambrian"
              className="h-8"
              variants={logoVariants}
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.2)",
                transition: { duration: 0.3 },
              }}
            />
            <motion.img
              src="/c2.png"
              alt="Commvault"
              className="h-8"
              variants={logoVariants}
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.2)",
                transition: { duration: 0.3 },
              }}
            />
            <motion.img
              src="/c3.png"
              alt="Crompton"
              className="h-8"
              variants={logoVariants}
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.2)",
                transition: { duration: 0.3 },
              }}
            />
            <motion.img
              src="/c4.png"
              alt="Seclock"
              className="h-8"
              variants={logoVariants}
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.2)",
                transition: { duration: 0.3 },
              }}
            />
            <motion.img
              src="/c5.png"
              alt="Software"
              className="h-8"
              variants={logoVariants}
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.2)",
                transition: { duration: 0.3 },
              }}
            />
            <motion.img
              src="/c6.png"
              alt="Aumni"
              className="h-8"
              variants={logoVariants}
              whileHover={{
                scale: 1.1,
                filter: "brightness(1.2)",
                transition: { duration: 0.3 },
              }}
            />
          </motion.div>

          {/* Animated light streaks - keeping these as requested */}
          {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-full opacity-30"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: 0,
                }}
                animate={{
                  x: ["-100%", "100%"],
                }}
                transition={{
                  duration: Math.random() * 3 + 5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div> */}
        </motion.div>
      </div>
    </div>
  );
};

export default Company;
