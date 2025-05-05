import React from "react";

const Hero = () => {
  return (
    <div className=" relative  bg-[#FFFFFF] min-h-screen ">
      <div className="absolute  -z-1 w-full h-[40rem] bg-[#003FDB]"></div>
      {/* Top Section with Title and Search */}
      <div className="relative z-10 bg-transparent p-8">
        <div className="text-center text-white mb-12">
          <h1 className="text-5xl font-bold mb-4">
            The Finance Solutions
            <br />
            For Your Business
          </h1>
          <p className="text-xl mb-8">
            Empower your finance team. The onestop plateform for all financial
            <br />
            management of small and medium-sized business.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto flex bg-white rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email adress"
              className="flex-1 px-6 py-3 outline-none text-gray-700"
            />
            <button className="px-6 py-3 bg-green-400 text-white font-medium hover:bg-green-500 transition-colors">
              Book a Demo
            </button>
          </div>
        </div>

        {/* Dashboard Section */}
        <div className=" rounded-3xl shadow-lg max-w-7xl mx-auto">
          <img src="/herobg.png" alt="Dashboard" className="w-full" />
        </div>

        {/* Bottom Text */}
      </div>
    </div>
  );
};

export default Hero;
