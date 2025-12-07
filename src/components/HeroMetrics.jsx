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
    <div className="w-full">
      <section className="relative overflow-hidden bg-[#2A0019] text-white">
        <div
          className="absolute inset-0 opacity-90 pointer-events-none"
          style={{
            background:
              "radial-gradient(900px 450px at 10% 10%, rgba(155,48,255,0.25), transparent 40%), radial-gradient(700px 350px at 90% 20%, rgba(100,100,255,0.18), transparent 50%), linear-gradient(180deg, #0c0110, #150616)",
          }}
        />

        {/* Floating dots */}
        <div className="absolute top-10 right-20 w-2 h-2 rounded-full bg-white/40 blur-sm animate-marquee" />
        <div className="absolute top-40 left-20 w-2 h-2 rounded-full bg-white/40 blur-sm" />
        <div className="absolute bottom-32 right-32 w-2 h-2 rounded-full bg-white/40 blur-sm" />

        {/* MAIN CONTAINER */}
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 md:px-10 pt-20 pb-24">
          <div className="flex justify-center">
            <span className="px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wide">
              Build for you
            </span>
          </div>

          {/* HEADINGS */}
          <div className="mt-10 text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-white to-[#A5C5DD] bg-clip-text text-transparent leading-tight drop-shadow-xl">
              Built for Creators.
              <br />
              Powered for Profit
            </h1>

            <p className="mt-4 text-white/70 text-sm sm:text-base">
              Create and sell courses, consulting services, and communities —
              with zero marketing cost.
            </p>

            {/* Email Input */}
            <div className="mt-8 flex justify-center">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0 w-full max-w-xl bg-white/10 border border-white/20 backdrop-blur-sm p-2 rounded-full">
                <input
                  type="email"
                  placeholder="Enter Your Email Here"
                  className="flex-1 bg-transparent text-white placeholder-white/60 outline-none px-3 text-sm"
                />
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-5 py-2 rounded-full text-sm font-semibold hover:brightness-110 transition-all text-white w-full sm:w-auto">
                  Start for Free
                  <p className="text-[11px] opacity-80">
                    No Credit Card Required
                  </p>
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
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-3 mb-6">
                <h3 className="font-semibold text-lg">
                  Sell from day one - even with zero audience
                </h3>
                <button className="px-4 py-2 rounded-full text-sm border border-white/20 hover:bg-white/10 transition">
                  Open calculator
                </button>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {metrics.map((m, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition"
                  >
                    <p className="text-xs text-white/70">{m.title}</p>
                    <p className="text-3xl font-extrabold mt-1">{m.value}</p>
                    <p className="text-xs text-white/60 mt-1">{m.note}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 overflow-hidden rounded-lg">
                <div className="bg-[#FFF3D8] text-[#695F4C] text-[20px] py-2">
                  <div className="whitespace-nowrap flex gap-10 text-sm animate-marquee">
                    <span className="flex items-center gap-2">
                      <span className="px-2 rounded text-xs">
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

      {/* Bottom Logos Section */}
      <div className="bg-white/40 pt-12 ">
        <p className=" text-xs md:text-lg text-[#5D5D5D] text-center tracking-[0.15em] px-4">
          TRUSTED BY +10,000 CONSULTANTS & ORGANISATIONS
        </p>

        <div className="w-full bg-[#F6F5F5] mt-8 rounded-2xl border border-white/10 px-4 py-6">
          <div
            className="flex  justify-between items-center gap-6 "
            style={{ animation: "marquee 18s linear infinite" }}
          >
            <img
              src="/logos/54c9ce1ef0637f28593ac1d55f402690088d2dc4.png"
              className="h-8 opacity-40"
            />
            <img
              src="/logos/7fe6bf71a0a5ac86af279c912eceb4aca81702c0.png"
              className="h-8 opacity-30"
            />
            <img
              src="/logos/f1c04b1549bac5d771007796afb52dbdfa9d88d2.png"
              className="h-8 opacity-40"
            />
            <img src="/logos/Frame 2147224211.png" className="h-8 opacity-60" />
            <img src="/logos/Group 1321314945.png" className="h-8 opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
}
