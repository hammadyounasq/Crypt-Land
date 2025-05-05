import React from "react";

const Price = () => {
  return (
    <div className="bg-[#F2F4F5] py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Find the right plan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-center">
            Invest in your company's future with our comprehensive financial
            solution. Contact us for pricing details and see how we can help you
            streamline your finances and reach your business goals.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-3xl p-8  min-h-[600px] flex flex-col">
            <h3 className="text-xl font-medium mb-4">Basic</h3>
            <div className="text-5xl font-bold mb-8">$0</div>
            <div className="text-sm text-gray-500 mb-6">
              Get a professional website designed according to your needs.
            </div>
            <div className="space-y-6 flex-grow">
              <p className="text-gray-600">Get a fully designed Website.</p>
              <p className="text-gray-600">Webflow Development</p>
              <p className="text-gray-600">Limited Support</p>
            </div>
            <button className="w-full border border-black rounded-full py-4 mt-8 hover:bg-black hover:text-white transition-colors">
              Select Plan
            </button>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-3xl p-8  min-h-[600px] flex flex-col">
            <h3 className="text-xl font-medium mb-4 text-[#A9DE3C]">Pro</h3>
            <div className="text-5xl font-bold mb-8">$499</div>
            <div className="text-sm text-gray-500 mb-6">
              Get a professional website designed according to your needs.
            </div>
            <div className="space-y-6 flex-grow">
              <p className="text-gray-600">Get a fully designed Website.</p>
              <p className="text-gray-600">Webflow Development</p>
              <p className="text-gray-600">Limited Support</p>
              <p className="text-gray-600">Get a fully designed Website</p>
              <p className="text-gray-600">Webflow Development</p>
              <p className="text-gray-600">24/7 Support system</p>
            </div>
            <button className="w-full border border-black rounded-full py-4 mt-8 hover:bg-black hover:text-white transition-colors">
              Select Plan
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-white rounded-3xl p-8  min-h-[600px] flex flex-col">
            <h3 className="text-xl font-medium mb-4 text-[#A9DE3C]">
              Enterprise
            </h3>
            <div className="text-5xl font-bold mb-8">$999</div>
            <div className="text-sm text-gray-500 mb-6">
              Get a professional website designed according to your needs.
            </div>
            <div className="space-y-6 flex-grow">
              <p className="text-gray-600">Get a fully designed Website.</p>
              <p className="text-gray-600">Webflow Development</p>
              <p className="text-gray-600">Limited Support</p>
              <p className="text-gray-600">Get a fully designed Website</p>
              <p className="text-gray-600">Get a fully designed Website</p>
              <p className="text-gray-600">Limited Support</p>
              <p className="text-gray-600">Get a fully designed Website</p>
              <p className="text-gray-600">24/7 Support system</p>
            </div>
            <button className="w-full bg-[#A9DE3C] text-white rounded-full py-4 mt-8 hover:bg-opacity-90 transition-colors">
              Contact us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
