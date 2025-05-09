"use client";

import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 mb-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Section - Message */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Thank you for generating your credit score!
          </h1>
          <p className="text-lg text-gray-600">
            We will contact you shortly to deliver your credit score.
          </p>
        </div>

        {/* Right Section - Video */}
        <div className="w-full lg:w-1/2 rounded-xl overflow-hidden shadow-inner mx-auto">
          <video
            src="/video/meter.mp4"
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      {/* Button to Go Back */}
      <div className="mt-8 text-center">
        <Link href={"/"}>
          <button
            // Use router.push to navigate
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-all"
          >
            Go Back to Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default page;
