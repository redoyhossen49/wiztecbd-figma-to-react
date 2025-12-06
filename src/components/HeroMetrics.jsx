import React from "react";

export default function HeroMetrics() {
  const metrics = [
    {
      title: "CO-SELLERS IN NETWORK",
      value: "21,500+",
      note: "People who can co-promote",
    },
    {
      title: "EXPECTED BUYERS / MONTH",
      value: "86",
      note: "With zero personal audience",
    },
    {
      title: "EST. MRR AT US$9/MO",
      value: "US$774",
      note: "From membership sales",
    },
    {
      title: "EARN W/O A PRODUCT",
      value: "US$300",
      note: "Just by co-selling",
    },
  ];

  return (
    <div>
      <section
        className="relative overflow-hidden  bg-[#2A0019]
] text-white"
      >
        {/* Animations */}
        <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes floaty {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

        {/* Glow Background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-90"
          style={{
            background:
              "radial-gradient(900px 450px at 10% 10%, rgba(155,48,255,0.25), transparent 40%), radial-gradient(700px 350px at 90% 20%, rgba(100,100,255,0.18), transparent 50%), linear-gradient(180deg, #0c0110, #150616)",
          }}
        />

        {/* Small glowing dots */}
        <div className="absolute top-16 left-10 w-2 h-2 rounded-full bg-white/50 blur-sm animate-pulse" />
        <div className="absolute top-32 right-32 w-1.5 h-1.5 rounded-full bg-white/40 blur-sm" />
        <div className="absolute bottom-40 left-40 w-1.5 h-1.5 rounded-full bg-white/40 blur-[1px]" />
        <div className="absolute right-20 top-10 w-2 h-2 rounded-full bg-white/50 blur-sm" />

        {/* MAIN CONTAINER */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-10 pt-20 pb-24">
          {/* Top Row */}
          <div className="flex items-center justify-center">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold tracking-wider uppercase">
              Build for you
            </span>
          </div>

          {/* Headings */}
          <div className="mt-10 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#A5C5DD] drop-shadow-[0_6px_16px_rgba(0,0,0,0.5)]">
              Built for Creators.
              <br />
              Powered for Profit
            </h1>

            <p className="mt-4 text-white/75 text-sm sm:text-base">
              Create and sell courses, consulting services, and communities —
              with zero marketing cost.
            </p>

            {/* Email Input */}
            <div className="mt-8 flex justify-center">
              <div className="flex items-center w-full max-w-xl bg-white/10 border border-white/20 backdrop-blur-sm p-1 rounded-full shadow">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="flex-1 bg-transparent text-white placeholder-white/60 outline-none px-2 text-sm"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 text-[#E7F4FD] rounded-full text-sm font-semibold hover:brightness-110 transition-all">
                  Start for Free
                  <p className="text-[12px]">No Credit Card Required</p>
                </button>
              </div>
            </div>

            <p className="mt-2 text-xs text-white/50">
              By proceeding you agree to our Platform terms & Privacy Notice
            </p>
          </div>

          {/* METRICS CARD */}
          <div className="mt-16 max-w-4xl mx-auto">
            <div className="relative p-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md shadow-2xl">
              {/* Floating Avatar */}
              <div
                className="absolute -top-7 left-1/2 -translate-x-1/2"
                style={{ animation: "floaty 4s ease-in-out infinite" }}
              ></div>

              <div className="flex justify-between items-center mb-6">
                <h3 className="font-semibold text-lg">
                  Sell from day one - even with zero audience
                </h3>
                <button className="px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/10 transition">
                  Open calculator
                </button>
              </div>

              {/* METRICS GRID */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl  border border-white/10 backdrop-blur-sm hover:bg-white/20 transition"
                  >
                    <p className="text-xs text-white/70">{m.title}</p>
                    <p className="text-3xl font-extrabold mt-1">{m.value}</p>
                    <p className="text-xs text-white/60 mt-1">{m.note}</p>
                  </div>
                ))}
              </div>

              {/* MARQUEE */}
              <div className="mt-6 overflow-hidden rounded-lg">
                <div className="bg-[#FFF3D8] text-[#695F4C] text-[20px] py-2">
                  <div
                    className="whitespace-nowrap flex gap-10 text-sm items-center"
                    style={{
                      animation: "marquee 18s linear infinite",
                      display: "inline-flex",
                    }}
                  >
                    <span className="flex items-center gap-2">
                      <span className="px-2 py-1  rounded text-xs">
                        Unlike Kajabi, Teachable, or Skool,
                      </span>
                      Growhubs helps you find and convert clients inside the
                      platform so you can sell from day one without paying for
                      ads.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Bottom note */}
      <div className="  bg-white/50   pt-12">
        <p className="text-lg text-[#5D5D5D] text-center  tracking-[0.2em]">
          TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
        </p>
        <div className="w-full bg-[#F6F5F5]  mt-8 rounded-2xl border border-white/10 px-6 py-4">
          <div
            className="flex flex-wrap justify-between items-center mx-4"
            style={{
              animation: "marquee 18s linear infinite",
              display: "flex",
            }}
          >
            <img
              src="/logos/54c9ce1ef0637f28593ac1d55f402690088d2dc4.png"
              className="h-8 opacity-30 "
            />

            <img
              src="/logos/7fe6bf71a0a5ac86af279c912eceb4aca81702c0.png"
              className="h-8 opacity-20 "
            />

            <img
              src="/logos/f1c04b1549bac5d771007796afb52dbdfa9d88d2.png"
              className="h-8 opacity-30 "
            />

            <img
              src="/logos/Frame 2147224211.png"
              className="h-8 opacity-50 "
            />

            <img
              src="/logos/Group 1321314945.png"
              className="h-8 opacity-50 "
            />
            <img src="/logos/Frame 2147224211.png" className="h-8 opacity-50" />
            <img
              src="/logos/7fe6bf71a0a5ac86af279c912eceb4aca81702c0.png"
              className="h-8 opacity-20 "
            />
            <img src="/logos/Group 1321314945.png" className="h-8 opacity-50" />
          </div>
        </div>
      </div>
    </div>
  );
}
