// // export default Business;
// import React, { useState } from "react";

// const Business = () => {
//   const [isMonthlyToggled, setIsMonthlyToggled] = useState(false);
//   const [isPaymentToggled, setIsPaymentToggled] = useState(false);

//   return (
//     <div className="bg-[#F8F8F8] py-10 sm:py-20 animate-fade-in">
//       <div className="max-w-7xl mx-auto px-4">
//         {/* Heading Section with fade-in and scale animation */}
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-20 animate-fade-in-scale">
//           Boosting Business. Today
//           <br className="hidden sm:block animate-slide-up-delayed" />
//           and Tomorrow.
//         </h2>

//         {/* Content Section with slide-up animation */}
//         <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-12 animate-slide-up">
//           {/* Left Side - Dashboard Preview with hover effects */}
//           <div className="w-full flex flex-col sm:flex-row lg:flex-row items-start lg:items-center gap-4 sm:gap-6 animate-slide-up-delayed">
//             <div className="w-full sm:w-1/2 lg:w-[300px] space-y-4 sm:space-y-6">
//               {/* Expense Card with bounce and hover transition */}
//               <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-bounce-in">
//                 <div className="flex justify-between items-center">
//                   <div className="mr-10 animate-fade-in-delayed">
//                     <p className="text-gray-600 mb-2 animate-slide-up">
//                       Total Expense
//                     </p>
//                     <h3 className="text-xl font-medium animate-scale-in">
//                       $350,240
//                     </h3>
//                   </div>
//                   <div className="w-16 h-16 rounded-full border-4 border-[#A9DE3C] flex items-center justify-center animate-rotate-in">
//                     <span className="text-sm font-medium animate-fade-in">
//                       85%
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               {/* Amount Options with staggered animations */}
//               <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-bounce-in-delayed">
//                 <div className="flex items-center gap-2 animate-slide-up">
//                   <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
//                   <div className="w-2 h-2 bg-green-400 rounded-full animate-scale-in-delayed-2"></div>
//                 </div>
//                 {/* Toggle Header */}
//                 <div className="flex justify-between items-center animate-fade-in-delayed">
//                   <h3 className="text-sm font-semibold animate-slide-up">
//                     Monthly Limit
//                   </h3>
//                   <div
//                     className={`relative w-12 h-6 ${
//                       isMonthlyToggled ? "bg-[#A9DE3C]" : "bg-gray-200"
//                     } rounded-full cursor-pointer transition-colors duration-200 animate-scale-in`}
//                     onClick={() => setIsMonthlyToggled(!isMonthlyToggled)}
//                   >
//                     <div
//                       className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
//                         isMonthlyToggled ? "translate-x-6" : ""
//                       } animate-toggle-slide`}
//                     ></div>
//                   </div>
//                 </div>
//                 {/* Placeholder Bars */}
//                 <div className="space-y-4 animate-slide-up-delayed">
//                   <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
//                   <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide-delayed"></div>
//                   <div className="h-2 bg-gray-100 rounded-full w-3/4 animate-bar-slide-delayed-2"></div>
//                 </div>
//                 {/* Amount Buttons */}
//                 <div className="flex justify-between items-center text-[10px] animate-fade-in-delayed">
//                   <span className="pr-1 animate-scale-in">$500</span>
//                   <span className="pr-1 animate-scale-in-delayed">$600</span>
//                   <span className="px-1 py-1 mr-1 bg-[#A9DE3C] text-black rounded-full animate-bounce-in">
//                     $700
//                   </span>
//                   <span className="pr-1 animate-scale-in-delayed-2">$800</span>
//                   <span className="pr-1 animate-scale-in-delayed-3">Other</span>
//                 </div>
//                 {/* Online Payment Section */}
//                 <div className="pt-6 border-t animate-slide-up-delayed">
//                   <div className="flex justify-between items-center mb-4 animate-fade-in-delayed">
//                     <h3 className="text-sm font-normal animate-slide-up">
//                       Online Payment
//                     </h3>
//                     <div
//                       className={`relative w-12 h-6 ${
//                         isPaymentToggled ? "bg-[#A9DE3C]" : "bg-gray-200"
//                       } rounded-full cursor-pointer transition-colors duration-200 animate-scale-in`}
//                       onClick={() => setIsPaymentToggled(!isPaymentToggled)}
//                     >
//                       <div
//                         className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
//                           isPaymentToggled ? "translate-x-6" : ""
//                         } animate-toggle-slide`}
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="space-y-4 animate-slide-up-delayed">
//                     <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
//                     <div className="h-2 bg-gray-100 rounded-full w-1/2 animate-bar-slide-delayed"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Graph Section with vibrant SVG animations */}
//             <div className="w-full sm:w-1/2 lg:w-[300px] bg-white rounded-xl shadow-lg p-2 sm:p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-bounce-in-delayed">
//               <div className="flex items-center gap-2 mb-6 animate-slide-up">
//                 <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
//                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-scale-in-delayed-2"></div>
//               </div>
//               <h3 className="text-sm font-normal mb-2 animate-fade-in">
//                 Monthly Limit
//               </h3>
//               <div className="relative h-40 mb-4 animate-slide-up-delayed">
//                 <svg className="absolute inset-0 w-full h-full animate-svg-draw">
//                   <path
//                     className="animate-path-draw"
//                     d="M0,120 L40,80 L80,100 L120,40 L160,140 L200,100 L240,80 L280,60 L320,20 L360,40"
//                     fill="none"
//                     stroke="#2563EB"
//                     strokeWidth="2"
//                   />
//                   <path
//                     className="animate-path-draw-delayed"
//                     d="M0,140 L40,120 L80,130 L120,110 L160,120 L200,130 L240,120 L280,100 L320,80 L360,100"
//                     fill="none"
//                     stroke="#9CA3AF"
//                     strokeWidth="2"
//                     strokeDasharray="4"
//                   />
//                 </svg>
//               </div>
//               <div className="flex justify-between text-[10px] text-gray-500 mb-6 animate-fade-in-delayed">
//                 <span className="pr-1 animate-scale-in">01:00PM</span>
//                 <span className="pr-1 animate-scale-in-delayed">02:00PM</span>
//                 <span className="pr-1 animate-scale-in-delayed-2">03:00PM</span>
//                 <span className="pr-1 animate-scale-in-delayed-3">04:00PM</span>
//                 <span className="pr-1 animate-scale-in-delayed-4">05:00PM</span>
//               </div>
//               <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
//             </div>
//           </div>
//           {/* Right Side - Text Content with vibrant animations */}
//           <div className="w-full lg:w-[800px] mt-8 lg:mt-0 animate-fade-in-scale">
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up">
//               Optimise expense
//               <br className="hidden sm:block animate-slide-up-delayed" />
//               Management as a team
//             </h3>
//             <p className="text-gray-600 mb-6 sm:mb-8 max-w-[480px] text-sm sm:text-base animate-fade-in-delayed">
//               Bring harmony to team expenses with budget limits and real-time
//               monitoring. Freedom for your staff. Peace of mind for you.
//             </p>
//             <button className="w-full sm:w-auto bg-[#A3DC2F] text-black px-6 py-3 rounded-full hover:bg-[#8CC22A] transition-all duration-300 hover:scale-105 animate-bounce-in">
//               Explore more
//             </button>
//           </div>
//         </div>

//         {/* Second Content Section with enhanced animations */}
//         <div className="flex flex-col lg:flex-row items-stretch lg:items-center pt-12 sm:pt-20 lg:pt-[8rem] gap-8 lg:gap-12 animate-slide-up-delayed">
//           {/* Left Side - Content with staggered animations */}
//           <div className="w-full order-2 lg:order-1 animate-fade-in-delayed">
//             <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-slide-up">
//               Real-time accounting
//               <br className="hidden sm:block animate-slide-up-delayed" />
//               at your fingertips.
//             </h3>
//             <p className="text-gray-600 mb-6 sm:mb-8 max-w-[480px] text-sm sm:text-base animate-fade-in-delayed">
//               Take the pain out of book keeping! Wave goodbye to mountains of
//               paperwork and endless email reminders. There's now a new way of
//               accounting.
//             </p>
//             <button className="w-full sm:w-auto bg-[#A3DC2F] text-black px-6 py-3 rounded-full hover:bg-[#8CC22A] transition-all duration-300 hover:scale-105 animate-bounce-in">
//               Explore more
//             </button>
//           </div>

//           {/* Right Side - Invoice Preview with vibrant animations */}
//           <div className="w-full lg:w-[640px] flex flex-col sm:flex-row items-start lg:items-center gap-4 sm:gap-6 order-1 lg:order-2 animate-slide-up-delayed">
//             <div className="w-full sm:w-1/2 lg:w-[300px] bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2 animate-bounce-in">
//               <div className="flex items-center gap-2 animate-slide-up">
//                 <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
//                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-scale-in-delayed-2"></div>
//               </div>
//               <div className="flex justify-between items-center py-3 animate-fade-in-delayed">
//                 <h3 className="text-xl font-semibold animate-scale-in">
//                   $3453.00
//                 </h3>
//               </div>
//               <div className="h-[2px] bg-[#D8D8D8] rounded-full w-full animate-bar-slide"></div>
//               {/* Placeholder Bars */}
//               <div className="space-y-2 py-3 animate-slide-up-delayed">
//                 <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
//                 <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide-delayed"></div>
//                 <div className="h-2 bg-gray-100 rounded-full w-3/4 animate-bar-slide-delayed-2"></div>
//               </div>
//               {/* User Review */}
//               <div className="flex items-center gap-3 my-8 animate-fade-in-delayed">
//                 <div className="w-10 h-10 bg-gray-200 rounded-full animate-rotate-in">
//                   <img src="/Pic.png" alt="User" className="animate-scale-in" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium animate-slide-up">
//                     Ashley Cooper
//                   </h4>
//                   <div className="flex text-yellow-400 animate-fade-in">
//                     ★★★★★
//                   </div>
//                 </div>
//               </div>
//               {/* Amount Buttons */}
//               <div className="flex justify-between items-center text-[10px] animate-fade-in-delayed">
//                 <span className="pr-1 animate-scale-in">$500</span>
//                 <span className="pr-1 animate-scale-in-delayed">$600</span>
//                 <span className="px-1 py-1 mr-1 bg-[#A9DE3C] text-black rounded-full animate-bounce-in">
//                   $700
//                 </span>
//                 <span className="pr-1 animate-scale-in-delayed-2">$800</span>
//                 <span className="pr-1 animate-scale-in-delayed-3">Other</span>
//               </div>
//               <div className="flex items-center justify-between animate-slide-up-delayed">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center animate-rotate-in">
//                     <img
//                       src="/icon.png"
//                       alt="File"
//                       className="w-3 h-3 animate-scale-in"
//                     />
//                   </div>
//                   <div className="flex flex-col items-start gap-3">
//                     <span className="text-[10px] animate-fade-in">
//                       finance_recipt_download.Pdf
//                     </span>
//                     <div className="h-2 bg-gray-100 rounded-full w-3/4 animate-bar-slide"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:w-[300px] space-y-6 animate-bounce-in-delayed">
//               <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-lg p-6 animate-bounce-in">
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-6 animate-fade-in-delayed">
//                   <h3 className="text-[12px] font-medium animate-slide-up">
//                     MonthlyInvoice
//                   </h3>
//                   <div className="flex gap-1 animate-slide-up-delayed">
//                     <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
//                     <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
//                     <div className="w-2 h-2 bg-[#A9DE3C] rounded-full animate-scale-in-delayed-2"></div>
//                   </div>
//                 </div>
//                 {/* File List */}
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg animate-slide-up">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-white text-sm animate-rotate-in">
//                         <img
//                           src="/Component.png"
//                           alt="File"
//                           className="w-5 h-5 animate-scale-in"
//                         />
//                       </div>
//                       <span className="text-sm animate-fade-in">
//                         John Client_download.Pdf
//                       </span>
//                     </div>
//                     <button className="text-gray-400 text-lg animate-scale-in">
//                       ⋮
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg animate-slide-up-delayed">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm animate-rotate-in">
//                         <img
//                           src="/Component.png"
//                           alt="File"
//                           className="w-5 h-5 animate-scale-in"
//                         />
//                       </div>
//                       <span className="text-sm animate-fade-in">
//                         Michele Leos_download.Pdf
//                       </span>
//                     </div>
//                     <button className="text-gray-400 text-lg animate-scale-in">
//                       ⋮
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg animate-slide-up-delayed-2">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-[#A3DC2F] rounded-full flex items-center justify-center text-white text-sm animate-rotate-in">
//                         <img
//                           src="/Component.png"
//                           alt="File"
//                           className="w-5 h-5 animate-scale-in"
//                         />
//                       </div>
//                       <span className="text-sm animate-fade-in">
//                         John Smith_download.Pdf
//                       </span>
//                     </div>
//                     <button className="text-gray-400 text-lg animate-scale-in">
//                       ⋮
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-lg p-6 animate-bounce-in-delayed">
//                 <div className="flex items-center justify-between animate-fade-in-delayed">
//                   <div className="flex items-center gap-2">
//                     <img
//                       src="/Figma.png"
//                       alt="Figma"
//                       className="w-8 h-8 animate-rotate-in"
//                     />
//                     <img
//                       src="/Sk.png"
//                       alt="Sketch"
//                       className="w-8 h-8 animate-rotate-in-delayed"
//                     />
//                   </div>
//                   <button className="px-6 py-2 bg-[#A3DC2F] text-black rounded-full text-sm font-medium hover:bg-[#8CC22A] transition-all duration-300 hover:scale-105 animate-bounce-in">
//                     Exports
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Business;
//---------------------
// import React, { useState } from "react";

// const Business = () => {
//   const [isMonthlyToggled, setIsMonthlyToggled] = useState(false);
//   const [isPaymentToggled, setIsPaymentToggled] = useState(false);

//   return (
//     <div className=" bg-[#F8F8F8] py-10 sm:py-20 animate-fade-in overflow-hidden">
//       <div className="max-w-7xl mx-auto pt-[5rem] px-4">
//         {/* Heading Section with fade-in and scale animation */}
//         <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-20 animate-fade-in-scale">
//           Boosting Business. Today
//           <br className="hidden sm:block animate-slide-up-delayed" />
//           and Tomorrow.
//         </h2>

//         {/* Content Section with slide-up animation */}
//         <div className=" relative flex flex-col lg:flex-row items-stretch lg:items-center gap-8 lg:gap-12 animate-slide-up">
//           <div className=" absolute bottom-[-12.50rem] right-[-10rem] w-full h-full ">
//             <img src="/left.png" className="" />
//           </div>
//           {/* Left Side - Dashboard Preview with hover effects */}
//           <div className="w-full flex flex-col sm:flex-row lg:flex-row items-start lg:items-center gap-4 sm:gap-6 animate-slide-up-delayed">
//             <div className="w-full sm:w-1/2 lg:w-[300px] space-y-4 sm:space-y-6">
//               {/* Expense Card with bounce and hover transition */}
//               <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-bounce-in">
//                 <div className="flex justify-between items-center">
//                   <div className="mr-10 animate-fade-in-delayed">
//                     <p className="text-gray-600 mb-2 animate-slide-up">
//                       Total Expense
//                     </p>
//                     <h3 className="text-xl font-medium animate-scale-in">
//                       $350,240
//                     </h3>
//                   </div>
//                   <div className="w-16 h-16 rounded-full border-4 border-[#A9DE3C] flex items-center justify-center animate-rotate-in">
//                     <span className="text-sm font-medium animate-fade-in">
//                       85%
//                     </span>
//                   </div>
//                 </div>
//               </div>
//               {/* Amount Options with staggered animations */}
//               <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-bounce-in-delayed">
//                 <div className="flex items-center gap-2 animate-slide-up">
//                   <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
//                   <div className="w-2 h-2 bg-green-400 rounded-full animate-scale-in-delayed-2"></div>
//                 </div>
//                 {/* Toggle Header */}
//                 <div className="flex justify-between items-center animate-fade-in-delayed">
//                   <h3 className="text-sm font-semibold animate-slide-up">
//                     Monthly Limit
//                   </h3>
//                   <div
//                     className={`relative w-12 h-6 ${
//                       isMonthlyToggled ? "bg-[#A9DE3C]" : "bg-gray-200"
//                     } rounded-full cursor-pointer transition-colors duration-200 animate-scale-in`}
//                     onClick={() => setIsMonthlyToggled(!isMonthlyToggled)}
//                   >
//                     <div
//                       className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
//                         isMonthlyToggled ? "translate-x-6" : ""
//                       } animate-toggle-slide`}
//                     ></div>
//                   </div>
//                 </div>
//                 {/* Placeholder Bars */}
//                 <div className="space-y-4 animate-slide-up-delayed">
//                   <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
//                   <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide-delayed"></div>
//                   <div className="h-2 bg-gray-100 rounded-full w-3/4 animate-bar-slide-delayed-2"></div>
//                 </div>
//                 {/* Amount Buttons */}
//                 <div className="flex justify-between items-center text-[10px] animate-fade-in-delayed">
//                   <span className="pr-1 animate-scale-in">$500</span>
//                   <span className="pr-1 animate-scale-in-delayed">$600</span>
//                   <span className="px-1 py-1 mr-1 bg-[#A9DE3C] text-black rounded-full animate-bounce-in">
//                     $700
//                   </span>
//                   <span className="pr-1 animate-scale-in-delayed-2">$800</span>
//                   <span className="pr-1 animate-scale-in-delayed-3">Other</span>
//                 </div>
//                 {/* Online Payment Section */}
//                 <div className="pt-6 border-t animate-slide-up-delayed">
//                   <div className="flex justify-between items-center mb-4 animate-fade-in-delayed">
//                     <h3 className="text-sm font-normal animate-slide-up">
//                       Online Payment
//                     </h3>
//                     <div
//                       className={`relative w-12 h-6 ${
//                         isPaymentToggled ? "bg-[#A9DE3C]" : "bg-gray-200"
//                       } rounded-full cursor-pointer transition-colors duration-200 animate-scale-in`}
//                       onClick={() => setIsPaymentToggled(!isPaymentToggled)}
//                     >
//                       <div
//                         className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
//                           isPaymentToggled ? "translate-x-6" : ""
//                         } animate-toggle-slide`}
//                         Ah
//                       ></div>
//                     </div>
//                   </div>
//                   <div className="space-y-4 animate-slide-up-delayed">
//                     <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
//                     <div className="h-2 bg-gray-100 rounded-full w-1/2 animate-bar-slide-delayed"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             {/* Graph Section with vibrant SVG animations */}
//             <div className="w-full sm:w-1/2 lg:w-[300px] bg-white rounded-xl shadow-lg p-2 sm:p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-bounce-in-delayed">
//               <div className="flex items-center gap-2 mb-6 animate-slide-up">
//                 <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
//                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-scale-in-delayed-2"></div>
//               </div>
//               <h3 className="text-sm font-normal mb-2 animate-fade-in">
//                 Monthly Limit
//               </h3>
//               <div className="relative h-40 mb-4 animate-slide-up-delayed">
//                 <svg className="absolute inset-0 w-full h-full animate-svg-draw">
//                   <path
//                     className="animate-path-draw"
//                     d="M0,120 L40,80 L80,100 L120,40 L160,140 L200,100 L240,80 L280,60 L320,20 L360,40"
//                     fill="none"
//                     stroke="#2563EB"
//                     strokeWidth="2"
//                   />
//                   <path
//                     className="animate-path-draw-delayed"
//                     d="M0,140 L40,120 L80,130 L120,110 L160,120 L200,130 L240,120 L280,100 L320,80 L360,100"
//                     fill="none"
//                     stroke="#9CA3AF"
//                     strokeWidth="2"
//                     strokeDasharray="4"
//                   />
//                 </svg>
//               </div>
//               <div className="flex justify-between text-[10px] text-gray-500 mb-6 animate-fade-in-delayed">
//                 <span className="pr-1 animate-scale-in">01:00PM</span>
//                 <span className="pr-1 animate-scale-in-delayed">02:00PM</span>
//                 <span className="pr-1 animate-scale-in-delayed-2">03:00PM</span>
//                 <span className="pr-1 animate-scale-in-delayed-3">04:00PM</span>
//                 <span className="pr-1 animate-scale-in-delayed-4">05:00PM</span>
//               </div>
//               <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
//             </div>
//           </div>
//           {/* Right Side - Text Content with vibrant animations */}
//           <div className="w-full lg:w-[800px] mt-8 lg:mt-0 animate-fade-in-scale">
//             <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 animate-slide-up">
//               Optimise expense
//               <br className="hidden sm:block animate-slide-up-delayed" />
//               Management as a team
//             </h3>
//             <p className="text-gray-600 mb-6 sm:mb-8 max-w-[480px] text-sm sm:text-base animate-fade-in-delayed">
//               Bring harmony to team expenses with budget limits and real-time
//               monitoring. Freedom for your staff. Peace of mind for you.
//             </p>
//             <button className="w-full sm:w-auto bg-[#A3DC2F] text-black px-6 py-3 rounded-full hover:bg-[#8CC22A] transition-all duration-300 hover:scale-105 animate-bounce-in">
//               Explore more
//             </button>
//           </div>
//         </div>

//         {/* Second Content Section with enhanced animations */}
//         <div className="  flex flex-col lg:flex-row items-stretch lg:items-center pt-12 sm:pt-20 lg:pt-[8rem] gap-8 lg:gap-12 animate-fade-in-scale">
//           {/* Left Side - Content with staggered animations */}
//           <div className="w-full order-2 lg:order-1 animate-fade-in-delayed">
//             <h3 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 animate-slide-up">
//               Real-time accounting
//               <br className="hidden sm:block animate-slide-up-delayed" />
//               at your fingertips.
//             </h3>
//             <p className="text-gray-600 mb-6 sm:mb-8 max-w-[480px] text-sm sm:text-base animate-fade-in-delayed">
//               Take the pain out of book keeping! Wave goodbye to mountains of
//               paperwork and endless email reminders. There's now a new way of
//               accounting.
//             </p>
//             <button className="w-full sm:w-auto bg-[#A3DC2F] text-black px-6 py-3 rounded-full hover:bg-[#8CC22A] transition-all duration-300 hover:scale-105 animate-bounce-in">
//               Explore more
//             </button>
//           </div>

//           {/* Right Side - Invoice Preview with vibrant animations */}
//           <div className="relative  w-full lg:w-[640px] flex flex-col sm:flex-row items-start lg:items-center gap-4 sm:gap-6 order-1 lg:order-2 animate-fade-in-scale">
//             <div className=" absolute -z-0 bottom-[-16rem] left-[-5rem] w-full h-full ">
//               <img src="/right.png" className="" />
//             </div>
//             <div className="z-0  w-full sm:w-1/2 lg:w-[300px] bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2 animate-bounce-in">
//               <div className="flex items-center gap-2 animate-slide-up">
//                 <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
//                 <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
//                 <div className="w-2 h-2 bg-green-400 rounded-full animate-scale-in-delayed-2"></div>
//               </div>
//               <div className="flex items-center justify-between py-3 animate-fade-in-delayed">
//                 <h3 className="text-xl font-semibold animate-scale-in">
//                   $3453.00
//                 </h3>
//               </div>
//               <div className="h-[2px] bg-[#D8D8D8] rounded-full w-full animate-bar-slide"></div>
//               {/* Placeholder Bars */}
//               <div className="space-y-2 py-3 animate-slide-up-delayed">
//                 <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
//                 <div className="h-2 bg-gray-100 rounded-full w-full animate-bar-slide-delayed"></div>
//                 <div className="h-2 bg-gray-100 rounded-full w-3/4 animate-bar-slide-delayed-2"></div>
//               </div>
//               {/* User Review */}
//               <div className="flex items-center gap-3 my-8 animate-fade-in-delayed">
//                 <div className="w-10 h-10 bg-gray-200 rounded-full animate-rotate-in">
//                   <img src="/Pic.png" alt="User" className="animate-scale-in" />
//                 </div>
//                 <div>
//                   <h4 className="font-medium animate-slide-up">
//                     Ashley Cooper
//                   </h4>
//                   <div className="flex text-yellow-400 animate-fade-in">
//                     ★★★★★
//                   </div>
//                 </div>
//               </div>
//               {/* Amount Buttons */}
//               <div className="flex justify-between items-center text-[10px] animate-fade-in-delayed">
//                 <span className="pr-1 animate-scale-in">$500</span>
//                 <span className="pr-1 animate-scale-in-delayed">$600</span>
//                 <span className="px-1 py-1 mr-1 bg-[#A9DE3C] text-black rounded-full animate-bounce-in">
//                   $700
//                 </span>
//                 <span className="pr-1 animate-scale-in-delayed-2">$800</span>
//                 <span className="pr-1 animate-scale-in-delayed-3">Other</span>
//               </div>
//               <div className="flex items-center justify-between animate-slide-up-delayed">
//                 <div className="flex items-center gap-3">
//                   <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center animate-rotate-in">
//                     <img
//                       src="/icon.png"
//                       alt="File"
//                       className="w-3 h-3 animate-scale-in"
//                     />
//                   </div>
//                   <div className="flex flex-col items-start gap-3">
//                     <span className="text-[10px] animate-fade-in">
//                       finance_recipt_download.Pdf
//                     </span>
//                     <div className="h-2 bg-gray-100 rounded-full w-3/4 animate-bar-slide"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="w-full lg:w-[300px] space-y-6 animate-bounce-in-delayed">
//               <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-lg p-6 animate-bounce-in">
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-6 animate-fade-in-delayed">
//                   <h3 className="text-[12px] font-medium animate-slide-up">
//                     MonthlyInvoice
//                   </h3>
//                   <div className="flex gap-1 animate-slide-up-delayed">
//                     <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
//                     <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
//                     <div className="w-2 h-2 bg-[#A9DE3C] rounded-full animate-scale-in-delayed-2"></div>
//                   </div>
//                 </div>
//                 {/* File List */}
//                 <div className="space-y-4">
//                   <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg animate-slide-up">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-pink-400 rounded-full flex items-center justify-center text-white text-sm animate-rotate-in">
//                         <img
//                           src="/Component.png"
//                           alt="File"
//                           className="w-5 h-5 animate-scale-in"
//                         />
//                       </div>
//                       <span className="text-sm animate-fade-in">
//                         John Client_download.Pdf
//                       </span>
//                     </div>
//                     <button className="text-gray-400 text-lg animate-scale-in">
//                       ⋮
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg animate-slide-up-delayed">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm animate-rotate-in">
//                         <img
//                           src="/Component.png"
//                           alt="File"
//                           className="w-5 h-5 animate-scale-in"
//                         />
//                       </div>
//                       <span className="text-sm animate-fade-in">
//                         Michele Leos_download.Pdf
//                       </span>
//                     </div>
//                     <button className="text-gray-400 text-lg animate-scale-in">
//                       ⋮
//                     </button>
//                   </div>
//                   <div className="flex items-center justify-between bg-gray-50 p-3 rounded-lg animate-slide-up-delayed-2">
//                     <div className="flex items-center gap-3">
//                       <div className="w-8 h-8 bg-[#A3DC2F] rounded-full flex items-center justify-center text-white text-sm animate-rotate-in">
//                         <img
//                           src="/Component.png"
//                           alt="File"
//                           className="w-5 h-5 animate-scale-in"
//                         />
//                       </div>
//                       <span className="text-sm animate-fade-in">
//                         John Smith_download.Pdf
//                       </span>
//                     </div>
//                     <button className="text-gray-400 text-lg animate-scale-in">
//                       ⋮
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-lg p-6 animate-bounce-in-delayed">
//                 <div className="flex items-center justify-between animate-fade-in-delayed">
//                   <div className="flex items-center gap-2">
//                     <img
//                       src="/Figma.png"
//                       alt="Figma"
//                       className="w-8 h-8 animate-rotate-in"
//                     />
//                     <img
//                       src="/Sk.png"
//                       alt="Sketch"
//                       className="w-8 h-8 animate-rotate-in-delayed"
//                     />
//                   </div>
//                   <button className="px-6 py-2 bg-[#A3DC2F] text-black rounded-full text-sm font-medium hover:bg-[#8CC22A] transition-all duration-300 hover:scale-105 animate-bounce-in">
//                     Exports
//                   </button>
//                 </div>
//               </div>
//               <div className=" w-[5rem] h-[5rem] ">
//                 <img src="/arrow.png" className="" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Business;
"use client";

import { useState } from "react";

const Business = () => {
  const [isMonthlyToggled, setIsMonthlyToggled] = useState(false);
  const [isPaymentToggled, setIsPaymentToggled] = useState(false);

  return (
    <div className="bg-[#F8F8F8] py-6 sm:py-10 md:py-16 lg:py-20 animate-fade-in overflow-hidden">
      <div className="max-w-7xl mx-auto pt-8 sm:pt-12 md:pt-16 lg:pt-[5rem] px-4 sm:px-6 lg:px-8">
        {/* Heading Section with fade-in and scale animation */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 sm:mb-10 md:mb-16 lg:mb-20 animate-fade-in-scale">
          Boosting Business. Today
          <br className="hidden sm:block animate-slide-up-delayed" />
          and Tomorrow.
        </h2>

        {/* Content Section with slide-up animation */}
        <div className="relative flex flex-col lg:flex-row items-stretch lg:items-center gap-6 md:gap-8 lg:gap-12 animate-slide-up">
          <div className="absolute bottom-[-12.50rem] right-[-10rem] w-full h-full hidden md:block">
            <img
              src="/left.png"
              className="max-w-full h-auto"
              alt="Decorative element"
            />
          </div>
          {/* Left Side - Dashboard Preview with hover effects */}
          <div className="w-full flex flex-col sm:flex-row lg:flex-row items-start lg:items-center gap-4 sm:gap-6 animate-slide-up-delayed">
            <div className="w-full sm:w-1/2 lg:w-[300px] space-y-4 sm:space-y-6">
              {/* Expense Card with bounce and hover transition */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-bounce-in">
                <div className="flex justify-between items-center">
                  <div className="mr-4 sm:mr-10 animate-fade-in-delayed">
                    <p className="text-sm sm:text-base text-gray-600 mb-2 animate-slide-up">
                      Total Expense
                    </p>
                    <h3 className="text-lg sm:text-xl font-medium animate-scale-in">
                      $350,240
                    </h3>
                  </div>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-[#A9DE3C] flex items-center justify-center animate-rotate-in">
                    <span className="text-xs sm:text-sm font-medium animate-fade-in">
                      85%
                    </span>
                  </div>
                </div>
              </div>
              {/* Amount Options with staggered animations */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 space-y-2 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-bounce-in-delayed">
                <div className="flex items-center gap-2 animate-slide-up">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-scale-in-delayed-2"></div>
                </div>
                {/* Toggle Header */}
                <div className="flex justify-between items-center animate-fade-in-delayed">
                  <h3 className="text-xs sm:text-sm font-semibold animate-slide-up">
                    Monthly Limit
                  </h3>
                  <div
                    className={`relative w-10 sm:w-12 h-5 sm:h-6 ${
                      isMonthlyToggled ? "bg-[#A9DE3C]" : "bg-gray-200"
                    } rounded-full cursor-pointer transition-colors duration-200 animate-scale-in`}
                    onClick={() => setIsMonthlyToggled(!isMonthlyToggled)}
                  >
                    <div
                      className={`absolute top-1 left-1 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                        isMonthlyToggled ? "translate-x-5 sm:translate-x-6" : ""
                      } animate-toggle-slide`}
                    ></div>
                  </div>
                </div>
                {/* Placeholder Bars */}
                <div className="space-y-3 sm:space-y-4 animate-slide-up-delayed">
                  <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
                  <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-full animate-bar-slide-delayed"></div>
                  <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-3/4 animate-bar-slide-delayed-2"></div>
                </div>
                {/* Amount Buttons */}
                <div className="flex justify-between items-center text-[8px] sm:text-[10px] animate-fade-in-delayed">
                  <span className="pr-1 animate-scale-in">$500</span>
                  <span className="pr-1 animate-scale-in-delayed">$600</span>
                  <span className="px-1 py-0.5 sm:py-1 mr-1 bg-[#A9DE3C] text-black rounded-full animate-bounce-in">
                    $700
                  </span>
                  <span className="pr-1 animate-scale-in-delayed-2">$800</span>
                  <span className="pr-1 animate-scale-in-delayed-3">Other</span>
                </div>
                {/* Online Payment Section */}
                <div className="pt-4 sm:pt-6 border-t animate-slide-up-delayed">
                  <div className="flex justify-between items-center mb-3 sm:mb-4 animate-fade-in-delayed">
                    <h3 className="text-xs sm:text-sm font-normal animate-slide-up">
                      Online Payment
                    </h3>
                    <div
                      className={`relative w-10 sm:w-12 h-5 sm:h-6 ${
                        isPaymentToggled ? "bg-[#A9DE3C]" : "bg-gray-200"
                      } rounded-full cursor-pointer transition-colors duration-200 animate-scale-in`}
                      onClick={() => setIsPaymentToggled(!isPaymentToggled)}
                    >
                      <div
                        className={`absolute top-1 left-1 w-3 sm:w-4 h-3 sm:h-4 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                          isPaymentToggled
                            ? "translate-x-5 sm:translate-x-6"
                            : ""
                        } animate-toggle-slide`}
                      ></div>
                    </div>
                  </div>
                  <div className="space-y-3 sm:space-y-4 animate-slide-up-delayed">
                    <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
                    <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-1/2 animate-bar-slide-delayed"></div>
                  </div>
                </div>
              </div>
            </div>
            {/* Graph Section with vibrant SVG animations */}
            <div className="w-full sm:w-1/2 lg:w-[300px] bg-white rounded-xl shadow-lg p-2 sm:p-4 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl animate-bounce-in-delayed">
              <div className="flex items-center gap-2 mb-4 sm:mb-6 animate-slide-up">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-scale-in-delayed-2"></div>
              </div>
              <h3 className="text-xs sm:text-sm font-normal mb-2 animate-fade-in">
                Monthly Limit
              </h3>
              <div className="relative h-32 sm:h-40 mb-3 sm:mb-4 animate-slide-up-delayed">
                <svg className="absolute inset-0 w-full h-full animate-svg-draw">
                  <path
                    className="animate-path-draw"
                    d="M0,120 L40,80 L80,100 L120,40 L160,140 L200,100 L240,80 L280,60 L320,20 L360,40"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="2"
                  />
                  <path
                    className="animate-path-draw-delayed"
                    d="M0,140 L40,120 L80,130 L120,110 L160,120 L200,130 L240,120 L280,100 L320,80 L360,100"
                    fill="none"
                    stroke="#9CA3AF"
                    strokeWidth="2"
                    strokeDasharray="4"
                  />
                </svg>
              </div>
              <div className="flex justify-between text-[8px] sm:text-[10px] text-gray-500 mb-4 sm:mb-6 animate-fade-in-delayed">
                <span className="pr-1 animate-scale-in">01:00PM</span>
                <span className="pr-1 animate-scale-in-delayed">02:00PM</span>
                <span className="pr-1 animate-scale-in-delayed-2">03:00PM</span>
                <span className="pr-1 animate-scale-in-delayed-3">04:00PM</span>
                <span className="pr-1 animate-scale-in-delayed-4">05:00PM</span>
              </div>
              <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
            </div>
          </div>
          {/* Right Side - Text Content with vibrant animations */}
          <div className="w-full lg:w-[800px] mt-6 sm:mt-8 lg:mt-0 animate-fade-in-scale">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6 animate-slide-up">
              Optimise expense
              <br className="hidden sm:block animate-slide-up-delayed" />
              Management as a team
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-[480px] text-sm sm:text-base animate-fade-in-delayed">
              Bring harmony to team expenses with budget limits and real-time
              monitoring. Freedom for your staff. Peace of mind for you.
            </p>
            <button className="w-full sm:w-auto bg-[#A3DC2F] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#8CC22A] transition-all duration-300 hover:scale-105 animate-bounce-in">
              Explore more
            </button>
          </div>
        </div>

        {/* Second Content Section with enhanced animations */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center pt-10 sm:pt-16 md:pt-20 lg:pt-[8rem] gap-6 sm:gap-8 lg:gap-12 animate-fade-in-scale">
          {/* Left Side - Content with staggered animations */}
          <div className="w-full order-2 lg:order-1 animate-fade-in-delayed">
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 animate-slide-up">
              Real-time accounting
              <br className="hidden sm:block animate-slide-up-delayed" />
              at your fingertips.
            </h3>
            <p className="text-gray-600 mb-4 sm:mb-6 md:mb-8 max-w-[480px] text-sm sm:text-base animate-fade-in-delayed">
              Take the pain out of book keeping! Wave goodbye to mountains of
              paperwork and endless email reminders. There's now a new way of
              accounting.
            </p>
            <button className="w-full sm:w-auto bg-[#A3DC2F] text-black px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-[#8CC22A] transition-all duration-300 hover:scale-105 animate-bounce-in">
              Explore more
            </button>
          </div>

          {/* Right Side - Invoice Preview with vibrant animations */}
          <div className="relative w-full lg:w-[640px] flex flex-col sm:flex-row items-start lg:items-center gap-4 sm:gap-6 order-1 lg:order-2 animate-fade-in-scale">
            <div className="absolute -z-0 bottom-[-16rem] left-[-5rem] w-full h-full hidden md:block">
              <img
                src="/right.png"
                className="max-w-full h-auto"
                alt="Decorative element"
              />
            </div>
            <div className="z-0 w-full sm:w-1/2 lg:w-[300px] bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 space-y-2 animate-bounce-in">
              <div className="flex items-center gap-2 animate-slide-up">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
                <div className="w-2 h-2 bg-green-400 rounded-full animate-scale-in-delayed-2"></div>
              </div>
              <div className="flex items-center justify-between py-2 sm:py-3 animate-fade-in-delayed">
                <h3 className="text-lg sm:text-xl font-semibold animate-scale-in">
                  $3453.00
                </h3>
              </div>
              <div className="h-[2px] bg-[#D8D8D8] rounded-full w-full animate-bar-slide"></div>
              {/* Placeholder Bars */}
              <div className="space-y-2 py-2 sm:py-3 animate-slide-up-delayed">
                <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-full animate-bar-slide"></div>
                <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-full animate-bar-slide-delayed"></div>
                <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-3/4 animate-bar-slide-delayed-2"></div>
              </div>
              {/* User Review */}
              <div className="flex items-center gap-3 my-4 sm:my-8 animate-fade-in-delayed">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-200 rounded-full animate-rotate-in">
                  <img
                    src="/Pic.png"
                    alt="User"
                    className="w-full h-full rounded-full animate-scale-in"
                  />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-medium animate-slide-up">
                    Ashley Cooper
                  </h4>
                  <div className="flex text-yellow-400 text-xs sm:text-sm animate-fade-in">
                    ★★★★★
                  </div>
                </div>
              </div>
              {/* Amount Buttons */}
              <div className="flex justify-between items-center text-[8px] sm:text-[10px] animate-fade-in-delayed">
                <span className="pr-1 animate-scale-in">$500</span>
                <span className="pr-1 animate-scale-in-delayed">$600</span>
                <span className="px-1 py-0.5 sm:py-1 mr-1 bg-[#A9DE3C] text-black rounded-full animate-bounce-in">
                  $700
                </span>
                <span className="pr-1 animate-scale-in-delayed-2">$800</span>
                <span className="pr-1 animate-scale-in-delayed-3">Other</span>
              </div>
              <div className="flex items-center justify-between animate-slide-up-delayed">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gray-200 rounded-full flex items-center justify-center animate-rotate-in">
                    <img
                      src="/icon.png"
                      alt="File"
                      className="w-2 h-2 sm:w-3 sm:h-3 animate-scale-in"
                    />
                  </div>
                  <div className="flex flex-col items-start gap-2 sm:gap-3">
                    <span className="text-[8px] sm:text-[10px] animate-fade-in">
                      finance_recipt_download.Pdf
                    </span>
                    <div className="h-1.5 sm:h-2 bg-gray-100 rounded-full w-3/4 animate-bar-slide"></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-[300px] space-y-4 sm:space-y-6 animate-bounce-in-delayed">
              <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-lg p-4 sm:p-6 animate-bounce-in">
                {/* Header */}
                <div className="flex items-center justify-between mb-4 sm:mb-6 animate-fade-in-delayed">
                  <h3 className="text-[10px] sm:text-[12px] font-medium animate-slide-up">
                    MonthlyInvoice
                  </h3>
                  <div className="flex gap-1 animate-slide-up-delayed">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-scale-in"></div>
                    <div className="w-2 h-2 bg-blue-500 rounded-full animate-scale-in-delayed"></div>
                    <div className="w-2 h-2 bg-[#A9DE3C] rounded-full animate-scale-in-delayed-2"></div>
                  </div>
                </div>
                {/* File List */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between bg-gray-50 p-2 sm:p-3 rounded-lg animate-slide-up">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-pink-400 rounded-full flex items-center justify-center text-white animate-rotate-in">
                        <img
                          src="/Component.png"
                          alt="File"
                          className="w-4 h-4 sm:w-5 sm:h-5 animate-scale-in"
                        />
                      </div>
                      <span className="text-xs sm:text-sm animate-fade-in">
                        John Client_download.Pdf
                      </span>
                    </div>
                    <button className="text-gray-400 text-base sm:text-lg animate-scale-in">
                      ⋮
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-2 sm:p-3 rounded-lg animate-slide-up-delayed">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white animate-rotate-in">
                        <img
                          src="/Component.png"
                          alt="File"
                          className="w-4 h-4 sm:w-5 sm:h-5 animate-scale-in"
                        />
                      </div>
                      <span className="text-xs sm:text-sm animate-fade-in">
                        Michele Leos_download.Pdf
                      </span>
                    </div>
                    <button className="text-gray-400 text-base sm:text-lg animate-scale-in">
                      ⋮
                    </button>
                  </div>
                  <div className="flex items-center justify-between bg-gray-50 p-2 sm:p-3 rounded-lg animate-slide-up-delayed-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#A3DC2F] rounded-full flex items-center justify-center text-white animate-rotate-in">
                        <img
                          src="/Component.png"
                          alt="File"
                          className="w-4 h-4 sm:w-5 sm:h-5 animate-scale-in"
                        />
                      </div>
                      <span className="text-xs sm:text-sm animate-fade-in">
                        John Smith_download.Pdf
                      </span>
                    </div>
                    <button className="text-gray-400 text-base sm:text-lg animate-scale-in">
                      ⋮
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[300px] bg-white rounded-xl shadow-lg p-4 sm:p-6 animate-bounce-in-delayed">
                <div className="flex items-center justify-between animate-fade-in-delayed">
                  <div className="flex items-center gap-2">
                    <img
                      src="/Figma.png"
                      alt="Figma"
                      className="w-6 h-6 sm:w-8 sm:h-8 animate-rotate-in"
                    />
                    <img
                      src="/Sk.png"
                      alt="Sketch"
                      className="w-6 h-6 sm:w-8 sm:h-8 animate-rotate-in-delayed"
                    />
                  </div>
                  <button className="px-4 sm:px-6 py-1.5 sm:py-2 bg-[#A3DC2F] text-black rounded-full text-xs sm:text-sm font-medium hover:bg-[#8CC22A] transition-all duration-300 hover:scale-105 animate-bounce-in">
                    Exports
                  </button>
                </div>
              </div>
              <div className="w-[3rem] h-[3rem] sm:w-[5rem] sm:h-[5rem] mx-auto sm:mx-0">
                <img src="/arrow.png" className="w-full h-auto" alt="Arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
