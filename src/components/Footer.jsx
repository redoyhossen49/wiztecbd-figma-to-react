import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaAt,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      className="
      relative w-full h-[700px] md:h-[500px] bg-[#1C0F1E] rounded-t-[40px] overflow-hidden 
      pt-8 md:pt-16 px-6
    "
    >
      {/* Top Section */}
      <div
        className="
    max-w-6xl mx-auto 
    grid 
    grid-cols-1 sm:grid-cols-2 md:grid-cols-3
    gap-10 md:gap-16 
    text-center md:text-left
    z-10 relative
  "
      >
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">About Us</h3>
          <ul className="space-y-3 text-[15px] text-white/70">
            <li>Resources</li>
            <li>Company</li>
            <li>Property</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <p className="text-[15px] text-white/70">hello abc@gmail.com</p>
          <p className="text-[15px] text-white/70 mt-2">+012233455667</p>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
          <div className="flex justify-center md:justify-start items-center flex-wrap gap-4 text-white text-2xl">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaWhatsapp />
            <FaAt />
            <FaTiktok />
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div
        className="
        max-w-6xl mx-auto text-center md:text-right 
       mt-8 md:mt-0  text-sm text-white/60 
      "
      >
        © 2025 Havenix. All rights reserved.
      </div>

      {/* Background Large Text */}
      <h1
        className="
          absolute bottom-0 left-1/2 -translate-x-1/2 
          text-[100px] sm:text-[150px] md:text-[200px] lg:text-[300px]
          font-bold text-white/10 
          whitespace-nowrap select-none pointer-events-none leading-none
        "
      >
        WiztecBD
      </h1>
    </footer>
  );
}
