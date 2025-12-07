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
    <section className="w-full min-h-screen bg-[linear-gradient(180deg,#F7EFFF_0%,#F4D9FF_40%,#FFFFFF_100%)] pb-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] md:w-[1100px] h-[350px] md:h-[500px] bg-[#ffd6ff] blur-[180px] opacity-60" />

      <div className="max-w-6xl mx-auto px-4  pt-20 relative z-10">
        <div className="flex justify-center">
          <div className="px-4 py-1 rounded-full bg-[linear-gradient(135deg,#FCC3FF_0%,#F75EFF_100%)] text-xs font-semibold tracking-wider shadow-sm">
            DIVERSIFY REVENUE STREAM
          </div>
        </div>

        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mt-6 text-[#1A1A1A] leading-tight">
          Maximise earnings with <br />
          <span className="text-[#000]">limitless revenue streams.</span>
        </h1>

        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-[15px]">
          Create and sell courses, consulting services, and communities – with
          Zero marketing cost and a built-in sales network.
        </p>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-10">
          {tabs.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`px-4 sm:px-5 py-2 rounded-full text-[13px] sm:text-[14px] font-medium transition-all shadow-sm
                ${
                  active === t
                    ? "bg-[#000] text-white shadow-lg"
                    : "bg-white text-black border border-gray-300 hover:bg-gray-50"
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
          mt-12 relative grid grid-cols-1 lg:grid-cols-2
          bg-[linear-gradient(135deg,#4A0E5B_0%,#8A3C7C_40%,#B37BA4_80%)]
          rounded-[35px] lg:rounded-tl-[50%_100%] lg:rounded-bl-[50%_100%]
          overflow-hidden shadow-2xl"
        >
          {/* Left Section */}
          <div className="relative p-8  md:p-14 flex flex-col justify-center text-white">
            <div className="relative z-10 pr-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 ">Courses</h2>

              <p className="text-sm md:text-[15px] text-white/90 leading-relaxed">
                Turn your knowledge into structured, sellable products. Build
                online, drip, academic, or challenge-based courses with built-in
                tools for gamification, accountability, and engagement.
              </p>

              <p className="text-sm md:text-[15px] text-white/90 mt-4">
                Every course is optimized to deliver value and generate
                recurring income.
              </p>

              <button className="mt-6 px-5 py-3 bg-white text-black font-semibold rounded-full w-max hover:bg-gray-100 transition shadow-md text-sm">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="relative flex items-center justify-center p-4 md:p-5">
            <div className="w-full h-[240px]  md:h-full rounded-lg lg:rounded-l-[50%] overflow-hidden">
              <img src="/revenue.png" className="w-full h-full object-cover" />
            </div>

            <div
              className="
              absolute 
              bottom-10 md:bottom-20 lg:bottom-36 
              right-4 md:right-12 lg:right-20
              bg-white shadow-xl rounded-2xl p-4 py-4 
              flex items-center gap-3  border border-gray-100
              w-[200px] w-auto"
            >
              <div>
                <p className="text-[10px] sm:text-xs text-gray-400">
                  Lady Denton
                </p>
                <p className="text-sm font-semibold">Awesome MBE</p>
              </div>

              <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-sm flex items-center gap-1 shadow-md">
                Subscribe $50/mo <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
