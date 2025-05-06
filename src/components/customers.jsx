// import React from "react";

// const Customers = () => {
//   const testimonials = [
//     {
//       text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
//       name: "Ashley Cooper",
//       avatar: "/Pic.png",
//     },
//     {
//       text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.",
//       name: "Noah Jack",
//       avatar: "/p1.png",
//     },
//     {
//       text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
//       name: "Ashley Cooper",
//       avatar: "/p2.png",
//     },
//     {
//       text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
//       name: "Gabrile Jackson",
//       avatar: "/p3.png",
//     },
//     {
//       text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.",
//       name: "Ashley Cooper",
//       avatar: "/p4.png",
//     },
//     {
//       text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
//       name: "William Leo",
//       avatar: "/Pic.png",
//     },
//   ];

//   return (
//     // <div className="bg-[#F2F4F5] py-20">
//     <div className="bg-[#F2F4F5] py-20">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-5xl font-bold mb-6">What our customers say</h2>
//           <p className="text-gray-600 max-w-3xl mx-auto text-center">
//             "Thank you for your trust in Crypt Land! We are grateful for your
//             feedback and are committed to providing the best [products/services
//             offered]. Read what our clients have to say about their experience
//             with us.
//           </p>
//         </div>

//         {/* Testimonials Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {testimonials.map((testimonial, index) => (
//             <div
//               key={index}
//               className={`bg-[#FFFFFF] rounded-3xl p-8 flex flex-col justify-between ${
//                 index === 1
//                   ? "min-h-[200px]" // Second testimonial (shorter)
//                   : index === 4
//                   ? "min-h-[360px]" // Fifth testimonial (longer)
//                   : "min-h-[280px]" // Default height for others
//               }`}
//             >
//               <p
//                 className={`text-gray-600 text-sm leading-relaxed ${
//                   index === 1
//                     ? "line-clamp-3" // Limit lines for second testimonial
//                     : index === 4
//                     ? "line-clamp-none" // No limit for fifth testimonial
//                     : "line-clamp-6" // Default line limit for others
//                 }`}
//               >
//                 {testimonial.text}
//               </p>
//               <div className="flex items-center gap-3 mt-6">
//                 <img
//                   src={testimonial.avatar}
//                   alt={testimonial.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-medium text-base">{testimonial.name}</h4>
//                   <div className="flex text-yellow-400 text-sm">
//                     {"★".repeat(5)}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Customers;
"use client";
import { motion } from "framer-motion";

const Customers = () => {
  const testimonials = [
    {
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
      name: "Ashley Cooper",
      avatar: "/Pic.png",
    },
    {
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.",
      name: "Noah Jack",
      avatar: "/p1.png",
    },
    {
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
      name: "Ashley Cooper",
      avatar: "/p2.png",
    },
    {
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
      name: "Gabrile Jackson",
      avatar: "/p3.png",
    },
    {
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch.",
      name: "Ashley Cooper",
      avatar: "/p4.png",
    },
    {
      text: "Teamollo delivered the site with inthe timeline as they requested. Inthe end, the client found a 50% increase in traffic with in days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.",
      name: "William Leo",
      avatar: "/Pic.png",
    },
  ];

  return (
    <div className="bg-[#F2F4F5] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold mb-6">What our customers say</h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-center">
            "Thank you for your trust in Crypt Land! We are grateful for your
            feedback and are committed to providing the best [products/services
            offered]. Read what our clients have to say about their experience
            with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 flex flex-col justify-between"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeInOut",
              }}
            >
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-base">{testimonial.name}</h4>
                  <div className="flex text-yellow-400 text-sm">{"★★★★★"}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Customers;
