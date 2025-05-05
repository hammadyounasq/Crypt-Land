import React from "react";

const Company = () => {
  return (
    <div className="pt-20 bg-white">
      <div className=" mx-auto px-0">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Working with world class partners.
          </h2>
          <p className="text-4xl font-bold mb-4">We're partner first!</p>
        </div>

        {/* Partners Logo Section */}
        <div className="bg-black  py-12">
          <div className="flex flex-wrap justify-center items-center gap-12">
            <img src="/c1.png" alt="Cambrian" className="h-8" />
            <img src="/c2.png" alt="Commvault" className="h-8" />
            <img src="/c3.png" alt="Crompton" className="h-8" />
            <img src="/c4.png" alt="Seclock" className="h-8" />
            <img src="/c5.png" alt="Software" className="h-8" />
            <img src="/c6.png" alt="Aumni" className="h-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
