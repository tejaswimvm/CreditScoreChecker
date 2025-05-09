"use client";

import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { useRouter } from "next/navigation";
import { FaShieldAlt } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";

const Hero = () => {
  const videoRef = useRef(null);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("+91 ");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [income, setIncome] = useState("");
  const router = useRouter();

  useEffect(() => {
    videoRef.current?.play();
  }, []);

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, mobileNo, dob, location, income };

    try {
      const response = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        router.push("/done");
      } else {
        console.error("Submission failed");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 space-y-4">
          <h1 className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight">
            Check your credit report for{" "}
            <span className="text-blue-600">FREE</span>
          </h1>

          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 w-full h-48 sm:h-56 md:h-64">
            <video
              ref={videoRef}
              src="/video/meter.mp4"
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          <p className="text-lg text-gray-700">
            Quickly access your monthly credit report without impacting your
            credit score.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {["Detailed Report", "Easy Access", "Safe & Secure"].map(
              (item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white rounded-2xl shadow hover:shadow-xl transform hover:-translate-y-1 transition-all text-center"
                >
                  <FaShieldAlt className="mx-auto mb-4 h-8 w-8 text-blue-500" />
                  <h3 className="text-sm font-semibold text-gray-800">
                    {item}
                  </h3>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 rounded-3xl shadow-lg text-black">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            {step === 1 ? "Know Your Score" : "Additional Info"}
          </h2>

          {step === 1 ? (
            <form onSubmit={handleNext} className="space-y-6">
              <div>
                <label className="block mb-2">
                  Full Name as per your Pancard{" "}
                  <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Mobile No.</label>
                <input
                  type="tel"
                  placeholder="+91 12345 67890"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl shadow hover:bg-blue-700 transition"
              >
                Get Your Score
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2">Date of Birth</label>
                <input
                  type="date"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Location</label>
                <input
                  type="text"
                  placeholder="City, State"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
                  required
                />
              </div>
              <div>
                <label className="block mb-2">Monthly Income</label>
                <input
                  type="text"
                  placeholder="e.g., ₹50,000"
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-200 placeholder-gray-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white font-medium rounded-xl shadow hover:bg-green-700 transition"
              >
                Submit
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden mt-12 px-4">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={24}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div className="p-6 bg-white rounded-2xl shadow text-center">
              <h1 className="text-2xl font-bold">
                Check your credit report for{" "}
                <span className="text-blue-600">FREE</span>
              </h1>
              <p className="mt-4 text-gray-600">
                Checking won’t affect your credit score.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="p-6 bg-white rounded-2xl shadow">
              <h2 className="text-xl font-semibold text-center">
                Track Credit Score To
              </h2>
              <ul className="mt-4 space-y-2">
                {[
                  "Improve your Credit Health",
                  "Identify Inaccuracies",
                  "Do Better Planning",
                  "Access monthly free report",
                  "Monitor changes effortlessly",
                ].map((txt, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <FaShieldAlt className="h-5 w-5 text-blue-500" />
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Hero;
