import {
  FaFacebookF,
  FaXTwitter,
  FaInstagram,
  FaWhatsapp,
  FaGoogle,
  FaTiktok,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="w-full bg-[#2A0E32] text-white pt-16 pb-6 rounded-t-3xl">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Resoures</li>
            <li>Company</li>
            <li>Property</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p className="text-sm text-gray-300">hello.abc@gmail.com</p>
          <p className="text-sm text-gray-300 mt-2">+012233455667</p>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex items-center space-x-4 text-xl text-gray-200">
            <FaFacebookF />
            <FaXTwitter />
            <FaInstagram />
            <FaWhatsapp />
            <FaGoogle />
            <FaTiktok />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto px-6 mt-10 relative">
        <p className="text-xs text-gray-400 absolute right-0">
          © 2025 Havenik. All rights reserved.
        </p>

        <h1 className="text-[80px] md:text-[140px] font-bold text-white/20 mt-6 select-none">
          WiztecBD
        </h1>
      </div>
    </footer>
  );
}
