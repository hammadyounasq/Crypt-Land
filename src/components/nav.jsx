import React, { useState } from "react";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-[#003FDB] text-white py-4 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between">
          {/* Left side navigation items */}
          <div className="flex items-center space-x-8">
            <a href="#" className="text-sm hover:text-gray-200">
              About us
            </a>
            <a href="#" className="text-sm hover:text-gray-200">
              Plateform
            </a>
            <a href="#" className="text-sm hover:text-gray-200">
              Solution
            </a>
            <a href="#" className="text-sm hover:text-gray-200">
              Customer
            </a>
          </div>

          {/* Logo in center */}
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6rounded" src="logo.png" alt="Logo" />
            <span className="text-xl font-semibold">Crypt Land</span>
          </div>

          {/* Right side navigation items */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-sm hover:text-gray-200">
              Price
            </a>
            <a href="#" className="text-sm hover:text-gray-200">
              Contact
            </a>
            <a href="#" className="text-sm hover:text-gray-200">
              Login
            </a>
            <button className="bg-[#A3DC2F] text-black px-4 py-2 rounded-full text-sm transition-colors">
              Sign up
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img className="w-6 h-6rounded" src="logo.png" alt="Logo" />
            <span className="text-xl font-semibold">Crypt Land</span>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-sm hover:text-gray-200">
                About us
              </a>
              <a href="#" className="text-sm hover:text-gray-200">
                Plateform
              </a>
              <a href="#" className="text-sm hover:text-gray-200">
                Solution
              </a>
              <a href="#" className="text-sm hover:text-gray-200">
                Customer
              </a>
              <a href="#" className="text-sm hover:text-gray-200">
                Price
              </a>
              <a href="#" className="text-sm hover:text-gray-200">
                Contact
              </a>
              <a href="#" className="text-sm hover:text-gray-200">
                Login
              </a>
              <button className="bg-[#A3DC2F] text-white px-4 py-2 rounded-full text-sm hover:bg-green-500 transition-colors w-full">
                Sign up
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
