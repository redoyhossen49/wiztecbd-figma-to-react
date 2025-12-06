import { FaPlay } from "react-icons/fa";
import { IoIosStarHalf } from "react-icons/io";

export default function TestimonialSection() {
  const cards = [1, 2, 3, 4];

  return (
    <div className="w-full min-h-screen bg-[linear-gradient(135deg,#2A0019_0%,#3C4C5AD4_100%)] flex flex-col items-center pb-28 overflow-hidden">
      <div className="pt-20" />

      <span className="bg-[#D946EF] text-xs font-semibold px-5 py-1 rounded-full tracking-wide">
        TESTIMONIALS
      </span>

      <h1 className="mt-6 text-white text-4xl md:text-5xl font-extrabold text-center leading-tight">
        Trusted by Creators <br /> & Proven by Results.
      </h1>

      <p className="text-gray-200 text-center max-w-xl mt-4">
        See how others grow with Growhubs — real stories, real success.
      </p>

      {/* Marquee Wrapper */}
      <div className="relative w-full  mt-16 overflow-hidden">
        <div className="flex gap-10 animate-marquee">
          {[...cards, ...cards].map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-gray-100"
            >
              {/* Left Video Thumbnail */}
              <div className="relative w-full">
                <img
                  src="/testimonialImage.jpg"
                  className="w-full h-full object-cover"
                  alt="video thumbnail"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-white bg-opacity-80 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md">
                    <FaPlay className="w-12 h-12 text-pink-500" />
                  </button>
                </div>
              </div>

              {/* Right Content */}
              <div className="p-10  w-full">
                <div className="flex items-center gap-4">
                  <img
                    src="/testimonialImage.jpg"
                    className="w-14 h-14 rounded-full"
                    alt="profile"
                  />

                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      Iva Ryan
                    </h3>
                    <p className="text-sm text-gray-500">
                      Marketing manager at Adobe
                    </p>
                  </div>

                  <div className="ml-auto flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <IoIosStarHalf
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap mt-5">
                  <span className="bg-gray-100 px-4 py-1 rounded-full text-sm font-medium">
                    Content Creator
                  </span>
                  <span className="bg-gray-100 px-4 py-1 rounded-full text-sm font-medium">
                    Youtuber
                  </span>
                  <span className="bg-gray-100 px-4 py-1 rounded-full text-sm font-medium">
                    Growth Expert
                  </span>
                </div>

                <p className="mt-7 text-gray-700 leading-relaxed text-[15px]">
                  I recently had the opportunity to use the platform, and I must
                  say, the feature that allows you to set your own commission is
                  a game changer!
                </p>

                <div className="mt-8">
                  <p className="text-4xl font-extrabold text-gray-900">$2M</p>
                  <p className="text-gray-500 text-sm font-semibold tracking-wide">
                    EARNED IN HELENUIL
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Animation CSS */}
      <style>{`
  .animate-marquee {
    display: flex;
    width: calc(650px * 8 + 80px);
    animation: marquee 22s linear infinite;
  }

  .animate-marquee:hover {
    animation-play-state: paused;
  }

  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
`}</style>
    </div>
  );
}
