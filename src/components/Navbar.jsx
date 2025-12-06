import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { HiMenu, HiX } from "react-icons/hi";
import { navItems } from "../Data/Navitems";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      {/* BLOCK WITH CENTERED NAV & PROPER PADDING */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4  lg:px-6 py-4">
        {/* Logo Left */}
        <Link to="/" className="cursor-pointer">
          <img src="/wiztec-logo.png" alt="logo" className="h-10" />
        </Link>

        {/* CENTER MENU — DESKTOP ONLY */}
        <ul className="hidden lg:flex space-x-10 absolute left-1/2 transform -translate-x-1/2">
          {navItems.map(({ id, label, path }) => (
            <li key={id}>
              <NavLink
                to={path}
                end={path === "/buy"}
                className={({ isActive }) =>
                  `font-medium transition ${
                    isActive
                      ? "text-[#6C0443]"
                      : "text-gray-700 hover:text-[#6C0443]"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* RIGHT SECTION */}
        <div className="hidden lg:flex items-center space-x-8">
          <button className="flex items-center text-gray-700 hover:text-red-600 transition">
            <AiFillHeart className="text-2xl mr-1" />
            <span className="font-medium">Favorite</span>
          </button>

          <Link
            to="/"
            className="bg-[#6C0443] text-white px-6 py-2 rounded-full hover:bg-[#500234] transition"
          >
            Login Now
          </Link>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="lg:hidden text-3xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {open && (
        <div className="lg:hidden bg-white shadow-inner">
          <div className="px-6 py-4 space-y-6">
            {/* MOBILE MENU ITEMS */}
            <ul className="flex flex-col space-y-3 text-center">
              {navItems.map(({ id, label, path }) => (
                <li key={id}>
                  <NavLink
                    to={path}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block font-medium transition ${
                        isActive
                          ? "text-[#6C0443]"
                          : "text-gray-700 hover:text-[#6C0443]"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* FAVORITE + LOGIN — MOBILE */}
            <div className="flex flex-col items-center space-y-4">
              <button className="flex items-center text-gray-700 hover:text-red-600 transition">
                <AiFillHeart className="text-2xl mr-2" />
                <span className="font-medium">Favorite</span>
              </button>

              <Link
                to="/"
                className="bg-[#6C0443] text-white px-6 py-2 rounded-full hover:bg-[#500234] transition"
              >
                Login Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
