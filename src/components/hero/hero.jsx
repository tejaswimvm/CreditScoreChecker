"use client";
import React, { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, ShieldCheck } from "lucide-react";

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
    <section className="bg-white text-neutral-900 py-16 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 font-sans">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 space-y-10 animate-fade-in">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-center lg:text-left">
              Check your credit report for{" "}
              <span className="text-blue-600">FREE</span>
            </h1>
            <p className="text-lg text-neutral-600 text-center lg:text-left">
              Checking won’t affect your credit score.
            </p>

            <div className="w-full sm:w-[500px] h-64 sm:h-72 rounded-xl overflow-hidden shadow-lg mx-auto lg:mx-0 border">
              <video
                ref={videoRef}
                src="/video/meter.mp4"
                
                muted
              
                playsInline
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold text-neutral-800 text-center lg:text-left">
                Track Credit Score to
              </h2>
              <ul className="space-y-3">
                {[
                  "Improve your Credit Health",
                  "Identify Inaccuracies",
                  "Do Better Planning",
                  "Access your monthly free credit report",
                  "Monitor changes, track credit health effortlessly.",
                ].map((text, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base text-neutral-700"
                  >
                    <img
                      src="https://www.livemint.com/lm-img/pf/img/green_check_icon.svg"
                      alt="check"
                      className="h-5 w-5 mt-1 shrink-0"
                    />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8">
            {["Detailed Report", "Easy Access", "Safe & Secure"].map((item) => (
              <div
                key={item}
                className="bg-white border border-gray-200 shadow p-4 rounded-xl text-center text-sm font-medium text-neutral-700 hover:shadow-md transition"
              >
                <div className="flex justify-center mb-1">
                  <ShieldCheck className="h-5 w-5 text-blue-500" />
                </div>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 bg-white p-8 md:p-10 rounded-3xl shadow-xl space-y-6 border border-gray-100 animate-slide-up">
          {step === 1 ? (
            <form onSubmit={handleNext} className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">
                  Enter Personal Details
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Checking won't affect your credit score
                </p>
              </div>

              <InputField
                label="Full Name as per PAN card"
                required
                value={name}
                onChange={setName}
              />
              <InputField
                label="Email Address (Optional)"
                type="email"
                value={email}
                onChange={setEmail}
              />
              <InputField
                label="Mobile Number"
                type="tel"
                required
                maxLength={14}
                value={mobileNo}
                onChange={setMobileNo}
              />

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition focus:ring-2 focus:ring-blue-400"
              >
                Click Next <ArrowRight size={18} />
              </button>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <h3 className="text-2xl font-bold text-neutral-800">
                  More Details
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  To generate your credit score
                </p>
              </div>

              <InputField
                label="Date of Birth"
                type="date"
                required
                value={dob}
                onChange={setDob}
              />
              <InputField
                label="Location"
                required
                value={location}
                onChange={setLocation}
              />
              <InputField
                label="Annual Income (₹)"
                type="number"
                required
                value={income}
                onChange={setIncome}
              />

              <div className="flex items-start gap-2 text-sm text-neutral-600">
                <input
                  type="checkbox"
                  defaultChecked
                  className="mt-1 accent-blue-600"
                />
                <p>
                  I agree to share my details and authorize HT Digital Streams to
                  access my CRIF High Mark credit report.
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
                className="w-full bg-green-600 text-white font-semibold py-3 rounded-lg hover:bg-green-700 transition focus:ring-2 focus:ring-green-400"
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

const InputField = ({
  label,
  type = "text",
  required = false,
  value,
  onChange,
  maxLength,
}) => (
  <div>
    <label className="block text-sm font-medium text-neutral-700">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
    <input
      type={type}
      required={required}
      maxLength={maxLength}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none bg-white text-black"
    />
  </div>
);

export default Hero;
