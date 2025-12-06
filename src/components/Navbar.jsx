import { NavLink, Link } from "react-router-dom";

import { AiFillHeart } from "react-icons/ai";
import { navItems } from "../Data/Navitems";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 py-4 bg-white shadow-md">
      {/* Logo */}
      <div className=" cursor-pointer">
        <img src="/wiztec-logo.png" alt="logo" />
      </div>

      {/* Navigation Items */}
      <ul className="flex space-x-6">
        {navItems.map(({ id, label, path }) => (
          <li key={id}>
            <NavLink
              to={path}
              end={path === "/buy"} // Home page like behavior for Buy
              className={({ isActive }) =>
                isActive
                  ? "text-[#6C0443]  font-semibold"
                  : "text-gray-700 hover:text-blue-600"
              }
            >
              {label}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Section: Favorite + Login Button */}
      <div className="flex items-center space-x-6">
        <div className="flex items-center cursor-pointer text-gray-700 hover:text-red-600 transition-colors duration-300">
          <AiFillHeart className="text-2xl mr-1" />
          <span className="font-medium">Favorite</span>
        </div>

        <Link
          to="/login"
          className="bg-[#6C0443] text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
        >
          Login Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
