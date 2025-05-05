import React from "react";

const Finances = () => {
  return (
    <div className="bg-[#0038FF] rounded-3xl overflow-hidden my-10 mx-4 lg:mx-auto max-w-7xl">
      <div className="flex flex-col lg:flex-row items-center justify-between p-8 lg:p-4">
        {/* Left Side - Content */}
        <div className="text-white pl-5 mb-8 lg:mb-0 lg:max-w-[500px]">
          <h2 className="text-4xl lg:text-5xl font-bold mb-8">
            Let's Upgrade your
            <br />
            finances experience
            <br />
            by using Cryptland
          </h2>
          <div className="flex gap-4">
            <button className="bg-[#A3DC2F] text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
              Request Demo
            </button>
            <button className="bg-white text-black px-6 py-3 rounded-full hover:bg-opacity-90 transition-colors">
              Watch Video
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="lg:w-[400px] rounded-3xl overflow-hidden">
          <img
            src="/background.png"
            alt="Business professionals"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Finances;
