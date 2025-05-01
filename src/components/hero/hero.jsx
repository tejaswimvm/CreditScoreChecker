"use client"
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const videoRef = useRef(null);
  const [step, setStep] = useState(1);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("+91 ");
  const [dob, setDob] = useState("");
  const [location, setLocation] = useState("");
  const [income, setIncome] = useState("");

  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
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
    <section className="bg-gradient-to-br from-gray-50 to-white py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-10">
          <div className="space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight text-center lg:text-left">
              Check your credit report for <span className="text-blue-600">FREE</span>
            </h1>
            <p className="text-lg text-gray-600 text-center lg:text-left">
              Checking won’t affect your credit score.
            </p>

            <div className="w-full sm:w-[500px] h-64 sm:h-72 rounded-xl overflow-hidden shadow-inner mx-auto lg:mx-0">
              <video
                ref={videoRef}
                src="/video/meter.mp4"
                autoPlay
                muted
                playsInline
                onEnded={() => videoRef.current?.pause()}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-gray-800 text-center lg:text-left">
                Track Credit Score to
              </h2>
              <ul className="space-y-3">
                {["Improve your Credit Health", "Identify Inaccuracies", "Do Better Planning", "Access your monthly free credit report", "Monitor changes, track credit health effortlessly."].map((text, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-gray-700">
                    <img
                      src="https://www.livemint.com/lm-img/pf/img/green_check_icon.svg"
                      alt="check icon"
                      className="h-5 w-5 mt-1 shrink-0"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feature Boxes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {["Detailed Report", "Easy Access", "Safe & Secure"].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-100 shadow-sm p-4 rounded-xl text-center text-sm font-medium text-gray-700 hover:shadow-md transition"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 bg-white p-6 sm:p-8 md:p-10 rounded-3xl shadow-lg space-y-6 border border-gray-100">
          {step === 1 && (
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">Enter Personal Details</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Checking won't affect your credit score
                </p>
              </div>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name as per PAN card<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address (Optional)
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Mobile Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  maxLength={14}
                  inputMode="numeric"
                  value={mobileNo}
                  onChange={(e) => setMobileNo(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-all focus:ring-2 focus:ring-blue-400"
              >
                Click Next
              </button>
            </form>
          )}

          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-gray-800">More Details</h3>
                <p className="text-sm text-gray-500 mt-1">To generate your credit score</p>
              </div>

              <div>
                <label htmlFor="dob" className="block text-sm font-medium text-gray-700">
                  Date of Birth<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="dob"
                  required
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="location"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="income" className="block text-sm font-medium text-gray-700">
                  Annual Income (₹)<span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  id="income"
                  required
                  value={income}
                  onChange={(e) => setIncome(e.target.value)}
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              {/* Consent Checkbox */}
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 accent-blue-600"
                />
                <p>
                  I agree to share my details and authorise HT Digital Streams to access my CRIF High Mark credit report.
                  <button
                    type="button"
                    className="text-blue-600 hover:underline ml-1"
                  >
                    Read More
                  </button>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition-all focus:ring-2 focus:ring-green-400"
              >
                Generate Credit Score
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
