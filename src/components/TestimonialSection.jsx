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

      <h1 className="mt-6 text-white text-3xl md:text-5xl font-extrabold text-center leading-tight">
        Trusted by Creators <br /> & Proven by Results.
      </h1>

      <p className="text-gray-200 text-center max-w-xl mt-4 px-4 text-sm md:text-base">
        See how others grow with Growhubs — real stories, real success.
      </p>

      <div className="relative w-full mt-16 overflow-hidden">
        <div className="flex gap-10 animate-marquee">
          {[...cards, ...cards].map((c, i) => (
            <div
              key={i}
              className="
                bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row 
                overflow-hidden border border-gray-100
                min-w-[280px]  md:min-w-[550px] lg:min-w-[650px]
                w-[280px]  md:w-[550px] lg:w-[650px]
              "
            >
              {/* Left Video Thumbnail */}
              <div className="relative w-full md:w-1/2 h-48 md:h-auto">
                <img
                  src="/testimonialImage.jpg"
                  className="w-full h-full object-cover"
                  alt="video thumbnail"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-14 h-14 sm:w-20 sm:h-20 bg-white bg-opacity-80 rounded-full shadow-xl flex items-center justify-center backdrop-blur-md">
                    <FaPlay className="w-7 h-7 md:w-12 md:h-12 text-pink-500" />
                  </button>
                </div>
              </div>

              {/* Right Content */}
              <div className="p-6 md:p-10 w-full">
                <div className="flex items-center flex-wrap gap-4">
                  <img
                    src="/testimonialImage.jpg"
                    className="w-12 h-12 md:w-14 sm:h-14 rounded-full"
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

                  <div className="mx-auto md:ml-auto flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <IoIosStarHalf
                        key={i}
                        className="w-4 h-4  text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 flex-wrap justify-center mt-5">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Content Creator
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Youtuber
                  </span>
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                    Growth Expert
                  </span>
                </div>

                <p className="mt-7 text-gray-700 leading-relaxed text-sm md:text-[15px]">
                  I recently had the opportunity to use the platform, and I must
                  say, the feature that allows you to set your own commission is
                  a game changer!
                </p>

                <div className="mt-8">
                  <p className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                    $2M
                  </p>
                  <p className="text-gray-500 text-xs md:text-sm font-semibold tracking-wide">
                    EARNED IN HELENUIL
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
