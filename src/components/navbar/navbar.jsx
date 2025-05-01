import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-sm w-full sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo & Title */}
          <div className="flex items-center gap-4">
            <img
              src="https://www.livemint.com/lm-img/livemint-logo-v2.svg"
              alt="Mint Logo"
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold text-gray-800">
              Credit Score Checker
            </span>
          </div>

          {/* Right - Powered By CRIF */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Powered by</span>
            <img
              src="https://www.livemint.com/lm-img/pf/img/crif/crif-logo.png"
              alt="CRIF Logo"
              className="h-5 w-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
