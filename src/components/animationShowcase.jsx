// "use client";

// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   ArrowRight,
//   BarChart3,
//   CreditCard,
//   DollarSign,
//   LineChart,
//   PieChart,
//   Wallet,
// } from "lucide-react";

// export default function AnimationShowcase() {
//   const [activeSection, setActiveSection] = useState("dashboard");
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isToggled, setIsToggled] = useState(false);
//   const [chartData, setChartData] = useState([35, 55, 22, 80, 40, 65, 30]);

//   // Animate chart data every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setChartData([
//         Math.floor(Math.random() * 70) + 10,
//         Math.floor(Math.random() * 70) + 10,
//         Math.floor(Math.random() * 70) + 10,
//         Math.floor(Math.random() * 70) + 10,
//         Math.floor(Math.random() * 70) + 10,
//         Math.floor(Math.random() * 70) + 10,
//         Math.floor(Math.random() * 70) + 10,
//       ]);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const sections = [
//     { id: "dashboard", label: "Dashboard", icon: <BarChart3 /> },
//     { id: "expenses", label: "Expenses", icon: <DollarSign /> },
//     { id: "payments", label: "Payments", icon: <CreditCard /> },
//     { id: "analytics", label: "Analytics", icon: <LineChart /> },
//   ];

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-4 md:p-8 flex items-center justify-center">
//       <motion.div
//         className="w-full max-w-5xl bg-white rounded-2xl shadow-xl overflow-hidden"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
//       >
//         <div className="flex flex-col md:flex-row h-[600px]">
//           {/* Sidebar */}
//           <motion.div
//             className="w-full md:w-64 bg-gradient-to-b from-indigo-500 to-purple-600 text-white p-6"
//             initial={{ x: -50, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{ delay: 0.2, duration: 0.5 }}
//           >
//             <motion.div
//               className="flex items-center gap-3 mb-10"
//               initial={{ y: -20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.4, duration: 0.5 }}
//             >
//               <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
//                 <Wallet className="w-5 h-5" />
//               </div>
//               <h1 className="text-xl font-bold">FinMotion</h1>
//             </motion.div>

//             <nav>
//               <ul className="space-y-1">
//                 {sections.map((section, index) => (
//                   <motion.li
//                     key={section.id}
//                     initial={{ x: -50, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
//                   >
//                     <button
//                       onClick={() => setActiveSection(section.id)}
//                       className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
//                         activeSection === section.id
//                           ? "bg-white/20 font-medium"
//                           : "hover:bg-white/10"
//                       }`}
//                     >
//                       <motion.div
//                         initial={{ scale: 1 }}
//                         animate={{
//                           scale: activeSection === section.id ? [1, 1.2, 1] : 1,
//                         }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         {section.icon}
//                       </motion.div>
//                       <span>{section.label}</span>

//                       {activeSection === section.id && (
//                         <motion.div
//                           className="w-1.5 h-1.5 rounded-full bg-white ml-auto"
//                           layoutId="activeIndicator"
//                           transition={{
//                             type: "spring",
//                             stiffness: 300,
//                             damping: 30,
//                           }}
//                         />
//                       )}
//                     </button>
//                   </motion.li>
//                 ))}
//               </ul>
//             </nav>

//             <motion.div
//               className="mt-auto pt-6"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 0.9, duration: 0.5 }}
//             >
//               <div className="text-sm text-white/70">
//                 <p>Premium Account</p>
//                 <p className="font-medium text-white mt-1">
//                   Active until Dec 2023
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>

//           {/* Main Content */}
//           <div className="flex-1 overflow-auto p-6">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={activeSection}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="h-full"
//               >
//                 {activeSection === "dashboard" && (
//                   <DashboardContent
//                     isExpanded={isExpanded}
//                     setIsExpanded={setIsExpanded}
//                     chartData={chartData}
//                   />
//                 )}

//                 {activeSection === "expenses" && (
//                   <ExpensesContent
//                     isToggled={isToggled}
//                     setIsToggled={setIsToggled}
//                   />
//                 )}

//                 {activeSection === "payments" && <PaymentsContent />}

//                 {activeSection === "analytics" && (
//                   <AnalyticsContent chartData={chartData} />
//                 )}
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function DashboardContent({ isExpanded, setIsExpanded, chartData }) {
//   return (
//     <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <motion.h2
//           className="text-2xl font-bold"
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.4 }}
//         >
//           Dashboard Overview
//         </motion.h2>

//         <motion.button
//           className="px-4 py-2 bg-purple-100 text-purple-600 rounded-lg font-medium flex items-center gap-2 hover:bg-purple-200 transition-colors"
//           initial={{ opacity: 0, x: 20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.4, delay: 0.1 }}
//           whileHover={{ scale: 1.05 }}
//           whileTap={{ scale: 0.95 }}
//         >
//           <span>View Reports</span>
//           <ArrowRight className="w-4 h-4" />
//         </motion.button>
//       </div>

//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-3 gap-4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         {[
//           {
//             title: "Total Balance",
//             value: "$24,563.00",
//             color: "from-blue-500 to-cyan-400",
//           },
//           {
//             title: "Monthly Spending",
//             value: "$3,242.00",
//             color: "from-amber-500 to-orange-400",
//           },
//           {
//             title: "Savings Rate",
//             value: "32.5%",
//             color: "from-emerald-500 to-green-400",
//           },
//         ].map((card, index) => (
//           <motion.div
//             key={card.title}
//             className={`bg-gradient-to-r ${card.color} rounded-xl p-5 text-white shadow-lg`}
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
//             whileHover={{ y: -5, transition: { duration: 0.2 } }}
//           >
//             <p className="text-white/80 font-medium">{card.title}</p>
//             <p className="text-2xl font-bold mt-2">{card.value}</p>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         className="bg-gray-50 rounded-xl p-6 mt-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//       >
//         <div className="flex items-center justify-between mb-6">
//           <h3 className="font-medium">Weekly Activity</h3>
//           <button
//             onClick={() => setIsExpanded(!isExpanded)}
//             className="text-sm text-purple-600 font-medium"
//           >
//             {isExpanded ? "Show Less" : "Show More"}
//           </button>
//         </div>

//         <div className="h-[180px] flex items-end justify-between gap-2">
//           {chartData.map((value, index) => (
//             <motion.div
//               key={index}
//               className="relative flex-1 bg-gradient-to-t from-violet-600 to-purple-400 rounded-t-md"
//               initial={{ height: 0 }}
//               animate={{ height: `${value}%` }}
//               transition={{
//                 duration: 0.6,
//                 ease: [0.34, 1.56, 0.64, 1],
//                 delay: 0.1 * index,
//               }}
//             >
//               <motion.div
//                 className="absolute -top-8 left-1/2 -translate-x-1/2 bg-purple-700 text-white text-xs px-2 py-1 rounded opacity-0"
//                 animate={{
//                   opacity: isExpanded ? 1 : 0,
//                   y: isExpanded ? 0 : 10,
//                 }}
//                 transition={{ duration: 0.3, delay: 0.1 * index }}
//               >
//                 {value}%
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           className="grid grid-cols-7 mt-2"
//           animate={{
//             height: isExpanded ? "auto" : 20,
//             opacity: isExpanded ? 1 : 0.7,
//           }}
//           transition={{ duration: 0.3 }}
//         >
//           {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
//             <div key={day} className="text-xs text-center text-gray-500">
//               {day}
//             </div>
//           ))}
//         </motion.div>

//         <AnimatePresence>
//           {isExpanded && (
//             <motion.div
//               className="mt-6 pt-6 border-t"
//               initial={{ opacity: 0, height: 0 }}
//               animate={{ opacity: 1, height: "auto" }}
//               exit={{ opacity: 0, height: 0 }}
//               transition={{ duration: 0.3 }}
//             >
//               <h4 className="font-medium mb-3">Activity Details</h4>
//               <div className="space-y-3">
//                 {[
//                   { day: "Monday", value: chartData[0], transactions: 12 },
//                   { day: "Wednesday", value: chartData[2], transactions: 8 },
//                   { day: "Friday", value: chartData[4], transactions: 15 },
//                 ].map((item) => (
//                   <motion.div
//                     key={item.day}
//                     className="flex items-center justify-between p-3 bg-white rounded-lg shadow-sm"
//                     initial={{ x: -10, opacity: 0 }}
//                     animate={{ x: 0, opacity: 1 }}
//                     transition={{ duration: 0.3 }}
//                     whileHover={{ x: 5 }}
//                   >
//                     <div>
//                       <p className="font-medium">{item.day}</p>
//                       <p className="text-sm text-gray-500">
//                         {item.transactions} transactions
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="font-medium">{item.value}%</p>
//                       <p className="text-sm text-gray-500">Activity</p>
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.div>
//     </div>
//   );
// }

// function ExpensesContent({ isToggled, setIsToggled }) {
//   return (
//     <div className="space-y-6">
//       <motion.h2
//         className="text-2xl font-bold"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         Expense Management
//       </motion.h2>

//       <motion.div
//         className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl p-6 text-white"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <div className="flex justify-between items-start">
//           <div>
//             <p className="text-white/80">Total Expenses</p>
//             <p className="text-3xl font-bold mt-1">$12,628.00</p>
//             <p className="text-sm text-white/70 mt-2">+12.5% from last month</p>
//           </div>

//           <motion.div
//             className="w-16 h-16 rounded-full border-4 border-white/30 flex items-center justify-center"
//             initial={{ rotate: 0 }}
//             animate={{ rotate: 360 }}
//             transition={{ duration: 2, ease: "easeInOut", repeat: 0 }}
//           >
//             <span className="text-sm font-medium">78%</span>
//           </motion.div>
//         </div>
//       </motion.div>

//       <motion.div
//         className="bg-white rounded-xl shadow-md p-6"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//       >
//         <div className="flex justify-between items-center mb-6">
//           <h3 className="font-medium">Monthly Limit</h3>

//           <motion.div
//             className={`relative w-12 h-6 ${
//               isToggled ? "bg-purple-500" : "bg-gray-200"
//             } rounded-full cursor-pointer`}
//             onClick={() => setIsToggled(!isToggled)}
//             whileTap={{ scale: 0.95 }}
//           >
//             <motion.div
//               className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full"
//               animate={{ x: isToggled ? 24 : 0 }}
//               transition={{ type: "spring", stiffness: 500, damping: 30 }}
//             />
//           </motion.div>
//         </div>

//         <div className="space-y-4">
//           <div className="space-y-2">
//             <div className="flex justify-between text-sm">
//               <span>Current spending</span>
//               <span className="font-medium">$8,532 / $15,000</span>
//             </div>
//             <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
//               <motion.div
//                 className="h-full bg-purple-500 rounded-full"
//                 initial={{ width: "0%" }}
//                 animate={{ width: "56%" }}
//                 transition={{ duration: 1, delay: 0.5 }}
//               />
//             </div>
//           </div>

//           <AnimatePresence>
//             {isToggled && (
//               <motion.div
//                 className="space-y-4 pt-4 border-t"
//                 initial={{ opacity: 0, height: 0 }}
//                 animate={{ opacity: 1, height: "auto" }}
//                 exit={{ opacity: 0, height: 0 }}
//                 transition={{ duration: 0.3 }}
//               >
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span>Food & Dining</span>
//                     <span className="font-medium">$2,125</span>
//                   </div>
//                   <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
//                     <motion.div
//                       className="h-full bg-emerald-500 rounded-full"
//                       initial={{ width: "0%" }}
//                       animate={{ width: "35%" }}
//                       transition={{ duration: 0.8, delay: 0.2 }}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span>Transportation</span>
//                     <span className="font-medium">$1,840</span>
//                   </div>
//                   <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
//                     <motion.div
//                       className="h-full bg-blue-500 rounded-full"
//                       initial={{ width: "0%" }}
//                       animate={{ width: "28%" }}
//                       transition={{ duration: 0.8, delay: 0.3 }}
//                     />
//                   </div>
//                 </div>

//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span>Entertainment</span>
//                     <span className="font-medium">$3,340</span>
//                   </div>
//                   <div className="h-2 bg-gray-100 rounded-full w-full overflow-hidden">
//                     <motion.div
//                       className="h-full bg-amber-500 rounded-full"
//                       initial={{ width: "0%" }}
//                       animate={{ width: "42%" }}
//                       transition={{ duration: 0.8, delay: 0.4 }}
//                     />
//                   </div>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         <motion.div
//           className="flex justify-between items-center mt-8 pt-4 border-t"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5, delay: 0.6 }}
//         >
//           <span className="text-sm text-gray-500">Suggested monthly limit</span>

//           <div className="flex gap-2">
//             {["$10k", "$15k", "$20k", "$25k"].map((amount, index) => (
//               <motion.button
//                 key={amount}
//                 className={`px-3 py-1 text-xs rounded-full ${
//                   amount === "$15k"
//                     ? "bg-purple-500 text-white"
//                     : "bg-gray-100 text-gray-700 hover:bg-gray-200"
//                 }`}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {amount}
//               </motion.button>
//             ))}
//           </div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// function PaymentsContent() {
//   const [selectedCard, setSelectedCard] = useState(0);

//   const cards = [
//     { type: "Visa", last4: "4242", color: "from-blue-600 to-blue-400" },
//     { type: "Mastercard", last4: "8353", color: "from-red-600 to-orange-400" },
//     { type: "Amex", last4: "7890", color: "from-green-600 to-emerald-400" },
//   ];

//   return (
//     <div className="space-y-6">
//       <motion.h2
//         className="text-2xl font-bold"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         Payment Methods
//       </motion.h2>

//       <motion.div
//         className="relative h-48"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             className={`absolute w-full h-44 rounded-xl bg-gradient-to-r ${card.color} p-6 flex flex-col justify-between text-white shadow-lg`}
//             initial={{
//               rotateY: 0,
//               scale: 0.9,
//               y: index * 20,
//               zIndex: cards.length - index,
//             }}
//             animate={{
//               rotateY: selectedCard === index ? [0, -10, 0] : 0,
//               scale: selectedCard === index ? 1 : 0.9,
//               y: selectedCard === index ? 0 : (index - selectedCard) * 20,
//               zIndex:
//                 selectedCard === index
//                   ? cards.length
//                   : cards.length - Math.abs(selectedCard - index),
//             }}
//             transition={{ duration: 0.5 }}
//             onClick={() => setSelectedCard(index)}
//             style={{ transformStyle: "preserve-3d" }}
//             whileHover={{ scale: selectedCard === index ? 1.02 : 0.92 }}
//           >
//             <div>
//               <p className="text-white/80 font-medium">{card.type}</p>
//               <p className="text-xl font-bold mt-1">
//                 •••• •••• •••• {card.last4}
//               </p>
//             </div>

//             <div className="flex justify-between items-end">
//               <div>
//                 <p className="text-white/70 text-xs">Valid thru</p>
//                 <p className="font-medium">12/25</p>
//               </div>

//               <motion.div
//                 className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center"
//                 animate={{ rotate: selectedCard === index ? 360 : 0 }}
//                 transition={{ duration: 1, delay: 0.2 }}
//               >
//                 <span className="text-sm font-bold">
//                   {card.type.substring(0, 1)}
//                 </span>
//               </motion.div>
//             </div>
//           </motion.div>
//         ))}
//       </motion.div>

//       <motion.div
//         className="bg-white rounded-xl shadow-md p-6 mt-8"
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.4 }}
//       >
//         <h3 className="font-medium mb-4">Recent Transactions</h3>

//         <div className="space-y-4">
//           {[
//             {
//               name: "Netflix Subscription",
//               amount: "$12.99",
//               date: "Today",
//               icon: "🎬",
//             },
//             {
//               name: "Grocery Store",
//               amount: "$64.75",
//               date: "Yesterday",
//               icon: "🛒",
//             },
//             {
//               name: "Gas Station",
//               amount: "$45.50",
//               date: "May 2",
//               icon: "⛽",
//             },
//             { name: "Restaurant", amount: "$32.80", date: "May 1", icon: "🍔" },
//           ].map((transaction, index) => (
//             <motion.div
//               key={transaction.name}
//               className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
//               initial={{ x: -20, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
//               whileHover={{ x: 5, backgroundColor: "#f5f3ff" }}
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-lg">
//                   {transaction.icon}
//                 </div>
//                 <div>
//                   <p className="font-medium">{transaction.name}</p>
//                   <p className="text-xs text-gray-500">{transaction.date}</p>
//                 </div>
//               </div>
//               <p className="font-medium">{transaction.amount}</p>
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </div>
//   );
// }

// function AnalyticsContent({ chartData }) {
//   return (
//     <div className="space-y-6">
//       <motion.h2
//         className="text-2xl font-bold"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.4 }}
//       >
//         Financial Analytics
//       </motion.h2>

//       <motion.div
//         className="grid grid-cols-1 md:grid-cols-2 gap-6"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.2 }}
//       >
//         <div className="bg-white rounded-xl shadow-md p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="font-medium">Spending by Category</h3>
//             <PieChart className="w-5 h-5 text-purple-500" />
//           </div>

//           <div className="relative h-48 flex items-center justify-center">
//             {[
//               { percent: 35, color: "#8b5cf6", label: "Housing" },
//               { percent: 25, color: "#ec4899", label: "Food" },
//               { percent: 20, color: "#3b82f6", label: "Transport" },
//               { percent: 15, color: "#10b981", label: "Entertainment" },
//               { percent: 5, color: "#f59e0b", label: "Other" },
//             ].map((segment, index) => {
//               const rotation =
//                 index === 0
//                   ? 0
//                   : [0, ...Array(index).keys()].reduce(
//                       (sum, i) =>
//                         sum +
//                         ([...Array(index).keys()][i] === undefined
//                           ? 0
//                           : 3.6 *
//                             [
//                               { percent: 35 },
//                               { percent: 25 },
//                               { percent: 20 },
//                               { percent: 15 },
//                               { percent: 5 },
//                             ][i].percent),
//                       0
//                     );

//               return (
//                 <motion.div
//                   key={segment.label}
//                   className="absolute w-32 h-32 rounded-full"
//                   style={{
//                     background: `conic-gradient(${segment.color} 0% ${
//                       segment.percent * 3.6
//                     }deg, transparent ${segment.percent * 3.6}deg 360deg)`,
//                     transform: `rotate(${rotation}deg)`,
//                   }}
//                   initial={{ opacity: 0, scale: 0 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
//                 />
//               );
//             })}

//             <motion.div
//               className="absolute w-20 h-20 bg-white rounded-full flex items-center justify-center"
//               initial={{ scale: 0 }}
//               animate={{ scale: 1 }}
//               transition={{ duration: 0.3, delay: 0.8 }}
//             >
//               <span className="text-sm font-medium">100%</span>
//             </motion.div>
//           </div>

//           <div className="grid grid-cols-2 gap-2 mt-4">
//             {[
//               { label: "Housing", color: "#8b5cf6", percent: "35%" },
//               { label: "Food", color: "#ec4899", percent: "25%" },
//               { label: "Transport", color: "#3b82f6", percent: "20%" },
//               { label: "Entertainment", color: "#10b981", percent: "15%" },
//             ].map((item, index) => (
//               <motion.div
//                 key={item.label}
//                 className="flex items-center gap-2"
//                 initial={{ opacity: 0, x: -10 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
//               >
//                 <div
//                   className="w-3 h-3 rounded-full"
//                   style={{ backgroundColor: item.color }}
//                 />
//                 <div className="text-sm">
//                   <span className="font-medium">{item.label}</span>
//                   <span className="text-gray-500 ml-1">({item.percent})</span>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         <div className="bg-white rounded-xl shadow-md p-6">
//           <div className="flex items-center justify-between mb-6">
//             <h3 className="font-medium">Income vs Expenses</h3>
//             <LineChart className="w-5 h-5 text-purple-500" />
//           </div>

//           <div className="h-48 flex items-end justify-between gap-2">
//             {[
//               { month: "Jan", income: 65, expense: 45 },
//               { month: "Feb", income: 70, expense: 50 },
//               { month: "Mar", income: 60, expense: 55 },
//               { month: "Apr", income: 80, expense: 60 },
//               { month: "May", income: 75, expense: 65 },
//               { month: "Jun", income: 90, expense: 70 },
//             ].map((item, index) => (
//               <div
//                 key={item.month}
//                 className="flex-1 flex flex-col items-center gap-1"
//               >
//                 <div className="w-full flex flex-col items-center gap-1">
//                   <motion.div
//                     className="w-full bg-purple-400 rounded-t-sm"
//                     initial={{ height: 0 }}
//                     animate={{ height: `${item.income}%` }}
//                     transition={{
//                       duration: 0.6,
//                       ease: [0.34, 1.56, 0.64, 1],
//                       delay: 0.1 * index,
//                     }}
//                   />
//                   <motion.div
//                     className="w-full bg-pink-400 rounded-t-sm"
//                     initial={{ height: 0 }}
//                     animate={{ height: `${item.expense}%` }}
//                     transition={{
//                       duration: 0.6,
//                       ease: [0.34, 1.56, 0.64, 1],
//                       delay: 0.2 + 0.1 * index,
//                     }}
//                   />
//                 </div>
//                 <span className="text-xs text-gray-500 mt-1">{item.month}</span>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center gap-6 mt-4">
//             <motion.div
//               className="flex items-center gap-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3, delay: 1.2 }}
//             >
//               <div className="w-3 h-3 rounded-full bg-purple-400" />
//               <span className="text-sm">Income</span>
//             </motion.div>

//             <motion.div
//               className="flex items-center gap-2"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.3, delay: 1.3 }}
//             >
//               <div className="w-3 h-3 rounded-full bg-pink-400" />
//               <span className="text-sm">Expenses</span>
//             </motion.div>
//           </div>
//         </div>
//       </motion.div>
//     </div>
//   );
// }
