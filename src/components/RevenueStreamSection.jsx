import React, { useState } from "react";
import { FiChevronRight } from "react-icons/fi";

export default function RevenueStreamSection() {
  const tabs = [
    "Courses",
    "Communities",
    "Coaching & Consulting",
    "Merchandise",
    "Podcasts",
    "Events",
    "Brokerage",
  ];

  const [active, setActive] = useState("Courses");

  return (
    <section
      className="w-full min-h-screen bg-[linear-gradient(180deg,#F7EFFF_0%,#F4D9FF_40%,#FFFFFF_100%)]
 pb-20 relative overflow-hidden"
    >
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[500px] bg-[#ffd6ff] blur-[200px] opacity-60" />

      <div className="max-w-6xl mx-auto px-6 pt-20 relative z-10">
        {/* Badge */}
        <div className="flex justify-center">
          <div
            className="px-4 py-1 rounded-full bg-[linear-gradient(135deg,#FCC3FF_0%,#F75EFF_100%)]
  text-xs font-semibold tracking-wider shadow-sm"
          >
            DIVERSIFY REVENUE STREAM
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-center text-4xl md:text-5xl font-extrabold mt-6 text-[#1A1A1A] leading-tight">
          Maximise earnings with <br />
          <span className="text-[#000]">limitless revenue streams.</span>
        </h1>

        {/* Description */}
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto text-[15px]">
          Create and sell courses, consulting services, and communities – with
          Zero marketing cost and a built-in sales network.
        </p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-5 py-2 rounded-full text-[14px] font-medium transition-all shadow-sm
                ${
                  active === t
                    ? "bg-[#000] text-white shadow-lg"
                    : "bg-white text-black border border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              {t}
            </button>
          ))}
        </div>

        {/* Main Card Container */}
        <div
          className="
    mt-14 relative grid grid-cols-1 lg:grid-cols-2
    bg-[linear-gradient(135deg,#4A0E5B_0%,#8A3C7C_40%,#B37BA4_80%)]
    rounded-[45px] rounded-tl-[50%_100%] rounded-bl-[50%_100%]
    overflow-hidden shadow-2xl
  "
        >
          {/* Left Text Section */}
          <div className="relative p-14 flex flex-col justify-center text-white">
            <div className="relative z-10 pr-10">
              <h2 className="text-3xl font-bold mb-4">Courses</h2>

              <p className="text-sm text-white/90 leading-relaxed">
                Turn your knowledge into structured, sellable products. Build
                online, drip, academic, or challenge-based courses with built-in
                tools for gamification, accountability, and engagement.
              </p>

              <p className="text-sm text-white/90 mt-4">
                Every course is optimized to deliver value and generate
                recurring income.
              </p>

              <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full w-max hover:bg-gray-100 transition shadow-md">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex items-center justify-center p-5">
            <div className="w-full h-full rounded-l-[50%] overflow-hidden">
              <img src="/revenue.png" className="w-full h-full object-cover" />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-40 right-28 bg-white shadow-xl rounded-2xl px-5 py-4 flex items-center gap-5">
              <div>
                <p className="text-xs text-gray-400">Lady Denton</p>
                <p className="text-sm font-semibold">Awesome MBE</p>
              </div>

              <button
                className=" 
              bg-blue-600 text-white px-4 py-2 rounded-full text-sm flex items-center gap-1 shadow-md"
              >
                Subscribe for $50/mo <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
