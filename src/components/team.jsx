import React from "react";

const Team = () => {
  return (
    <div className="bg-black text-white py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Modern Companies are
            <br className="hidden sm:block" />
            built on Capital.
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base px-4">
            we provide software for the financial and operational needs of
            today's founders so they can get back to doing what they do
            best-building!
          </p>
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Benjamin McDonald */}
          <div className="group">
            <div className="h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1A1A1A] transition-transform duration-300 group-hover:scale-[0.98]">
              <img
                src="/avater2.png"
                alt="Benjamin McDonald"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-white">
                Benjamin McDonald
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">Founder, CEO</p>
            </div>
          </div>

          {/* Jett Yagan */}
          <div className="group">
            <div className="h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1A1A1A] transition-transform duration-300 group-hover:scale-[0.98]">
              <img
                src="/avater1.png"
                alt="Jett Yagan"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-white">
                Jett Yagan
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">Founder, CEO</p>
            </div>
          </div>

          {/* Layla Cramp */}
          <div className="group">
            <div className="h-[400px] sm:h-[450px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[#1A1A1A] transition-transform duration-300 group-hover:scale-[0.98]">
              <img
                src="/avater3.png"
                alt="Layla Cramp"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="text-lg sm:text-xl font-medium text-white">
                Layla Cramp
              </h3>
              <p className="text-gray-500 text-xs sm:text-sm">Founder, CEO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
