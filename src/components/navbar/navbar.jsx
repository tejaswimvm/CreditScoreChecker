import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="bg-white border-b shadow-sm w-full sticky top-0 z-50">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left - Logo & Title */}
          <div className="flex items-center gap-4">
            <Link href="/">
              <span className="text-lg font-semibold text-gray-800">
                Livet.in
              </span>
            </Link>
          </div>

          {/* Right - Powered By CRIF */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-500">Powered by</span>
            {/* <img
              src="https://images.livemint.com/img/2019/10/25/1600x900/live_mint_logo_1572001076410.png"
              alt="MVM Logo"
              className="h-5 w-auto"
            /> */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
