// import React from "react";

// const Price = () => {
//   return (
//     <div className="bg-[#F2F4F5] py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-6">Find the right plan</h2>
//           <p className="text-gray-600 max-w-2xl mx-auto text-center">
//             Invest in your company's future with our comprehensive financial
//             solution. Contact us for pricing details and see how we can help you
//             streamline your finances and reach your business goals.
//           </p>
//         </div>

//         {/* Pricing Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//           {/* Basic Plan */}
//           <div className="bg-white rounded-3xl p-8  min-h-[600px] flex flex-col">
//             <h3 className="text-xl font-medium mb-4">Basic</h3>
//             <div className="text-5xl font-bold mb-8">$0</div>
//             <div className="text-sm text-gray-500 mb-6">
//               Get a professional website designed according to your needs.
//             </div>
//             <div className="space-y-6 flex-grow">
//               <p className="text-gray-600">Get a fully designed Website.</p>
//               <p className="text-gray-600">Webflow Development</p>
//               <p className="text-gray-600">Limited Support</p>
//             </div>
//             <button className="w-full border border-black rounded-full py-4 mt-8 hover:bg-black hover:text-white transition-colors">
//               Select Plan
//             </button>
//           </div>

//           {/* Pro Plan */}
//           <div className="bg-white rounded-3xl p-8  min-h-[600px] flex flex-col">
//             <h3 className="text-xl font-medium mb-4 text-[#A9DE3C]">Pro</h3>
//             <div className="text-5xl font-bold mb-8">$499</div>
//             <div className="text-sm text-gray-500 mb-6">
//               Get a professional website designed according to your needs.
//             </div>
//             <div className="space-y-6 flex-grow">
//               <p className="text-gray-600">Get a fully designed Website.</p>
//               <p className="text-gray-600">Webflow Development</p>
//               <p className="text-gray-600">Limited Support</p>
//               <p className="text-gray-600">Get a fully designed Website</p>
//               <p className="text-gray-600">Webflow Development</p>
//               <p className="text-gray-600">24/7 Support system</p>
//             </div>
//             <button className="w-full border border-black rounded-full py-4 mt-8 hover:bg-black hover:text-white transition-colors">
//               Select Plan
//             </button>
//           </div>

//           {/* Enterprise Plan */}
//           <div className="bg-white rounded-3xl p-8  min-h-[600px] flex flex-col">
//             <h3 className="text-xl font-medium mb-4 text-[#A9DE3C]">
//               Enterprise
//             </h3>
//             <div className="text-5xl font-bold mb-8">$999</div>
//             <div className="text-sm text-gray-500 mb-6">
//               Get a professional website designed according to your needs.
//             </div>
//             <div className="space-y-6 flex-grow">
//               <p className="text-gray-600">Get a fully designed Website.</p>
//               <p className="text-gray-600">Webflow Development</p>
//               <p className="text-gray-600">Limited Support</p>
//               <p className="text-gray-600">Get a fully designed Website</p>
//               <p className="text-gray-600">Get a fully designed Website</p>
//               <p className="text-gray-600">Limited Support</p>
//               <p className="text-gray-600">Get a fully designed Website</p>
//               <p className="text-gray-600">24/7 Support system</p>
//             </div>
//             <button className="w-full bg-[#A9DE3C] text-white rounded-full py-4 mt-8 hover:bg-opacity-90 transition-colors">
//               Contact us
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Price;
"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const AnimatedPrice = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Animation variants
  const headingVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.2, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.3 + i * 0.2,
        ease: "easeOut",
      },
    }),
  };

  const priceVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.4, ease: "easeOut" },
    },
  };

  const featureVariants = {
    hidden: { opacity: 0 },
    visible: (i) => ({
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.5 + i * 0.1,
      },
    }),
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.6 },
    },
    hover: {
      scale: 1.03,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.98,
      transition: { duration: 0.1 },
    },
  };

  return (
    <div className="bg-[#F2F4F5] py-20" ref={ref}>
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section with animations */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl font-bold mb-6"
            initial="hidden"
            animate={controls}
            variants={headingVariants}
          >
            Find the right plan
          </motion.h2>
          <motion.p
            className="text-gray-600 max-w-2xl mx-auto text-center"
            initial="hidden"
            animate={controls}
            variants={paragraphVariants}
          >
            Invest in your company's future with our comprehensive financial
            solution. Contact us for pricing details and see how we can help you
            streamline your finances and reach your business goals.
          </motion.p>
        </div>

        {/* Pricing Cards with animations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <motion.div
            className="bg-white rounded-3xl p-8 min-h-[600px] flex flex-col"
            initial="hidden"
            animate={controls}
            custom={0}
            variants={cardVariants}
          >
            <h3 className="text-xl font-medium mb-4">Basic</h3>
            <motion.div
              className="text-5xl font-bold mb-8"
              variants={priceVariants}
              initial="hidden"
              animate={controls}
            >
              $0
            </motion.div>
            <div className="text-sm text-gray-500 mb-6">
              Get a professional website designed according to your needs.
            </div>
            <div className="space-y-6 flex-grow">
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={0}
              >
                Get a fully designed Website.
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={1}
              >
                Webflow Development
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={2}
              >
                Limited Support
              </motion.p>
            </div>
            <motion.button
              className="w-full border border-black rounded-full py-4 mt-8 hover:bg-black hover:text-white transition-colors"
              variants={buttonVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              whileTap="tap"
            >
              Select Plan
            </motion.button>
          </motion.div>

          {/* Pro Plan */}
          <motion.div
            className="bg-white rounded-3xl p-8 min-h-[600px] flex flex-col"
            initial="hidden"
            animate={controls}
            custom={1}
            variants={cardVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-[#A9DE3C]">Pro</h3>
            <motion.div
              className="text-5xl font-bold mb-8"
              variants={priceVariants}
              initial="hidden"
              animate={controls}
            >
              $499
            </motion.div>
            <div className="text-sm text-gray-500 mb-6">
              Get a professional website designed according to your needs.
            </div>
            <div className="space-y-6 flex-grow">
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={0}
              >
                Get a fully designed Website.
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={1}
              >
                Webflow Development
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={2}
              >
                Limited Support
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={3}
              >
                Get a fully designed Website
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={4}
              >
                Webflow Development
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={5}
              >
                24/7 Support system
              </motion.p>
            </div>
            <motion.button
              className="w-full border border-black rounded-full py-4 mt-8 hover:bg-black hover:text-white transition-colors"
              variants={buttonVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              whileTap="tap"
            >
              Select Plan
            </motion.button>
          </motion.div>

          {/* Enterprise Plan */}
          <motion.div
            className="bg-white rounded-3xl p-8 min-h-[600px] flex flex-col"
            initial="hidden"
            animate={controls}
            custom={2}
            variants={cardVariants}
          >
            <h3 className="text-xl font-medium mb-4 text-[#A9DE3C]">
              Enterprise
            </h3>
            <motion.div
              className="text-5xl font-bold mb-8"
              variants={priceVariants}
              initial="hidden"
              animate={controls}
            >
              $999
            </motion.div>
            <div className="text-sm text-gray-500 mb-6">
              Get a professional website designed according to your needs.
            </div>
            <div className="space-y-6 flex-grow">
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={0}
              >
                Get a fully designed Website.
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={1}
              >
                Webflow Development
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={2}
              >
                Limited Support
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={3}
              >
                Get a fully designed Website
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={4}
              >
                Get a fully designed Website
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={5}
              >
                Limited Support
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={6}
              >
                Get a fully designed Website
              </motion.p>
              <motion.p
                className="text-gray-600"
                variants={featureVariants}
                initial="hidden"
                animate={controls}
                custom={7}
              >
                24/7 Support system
              </motion.p>
            </div>
            <motion.button
              className="w-full bg-[#A3DC2F] text-black rounded-full py-4 mt-8 hover:bg-opacity-90 transition-colors"
              variants={buttonVariants}
              initial="hidden"
              animate={controls}
              whileHover="hover"
              whileTap="tap"
            >
              Contact us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AnimatedPrice;
