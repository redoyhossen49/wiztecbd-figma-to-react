import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaPhoneAlt } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

export default function LoginPage() {
  const navigate = useNavigate();

  // form states
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailForm, setShowEmailForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // validation error states
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = () => {
    setError("");
    setSuccess("");

    // email validation
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email");
      return;
    }

    // password validation
    if (!password.trim()) {
      setError("Password is required");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // If valid → show success message
    setSuccess("Login Successful!");

    // Redirect after 1.5 seconds
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  return (
    <div className="flex h-screen max-w-5xl mx-auto bg-white">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col justify-center  gap-3 text-center px-10 md:px-20">
        {/* Logo */}
        <div>
          <img
            src="/wiztec-logo.png"
            alt="logo"
            className="mx-auto"
            height={30}
            width={177}
          />
        </div>

        <div>
          <p className="text-black font-semibold text-4xl">
            {showEmailForm ? "Welcome Back" : "Create New Account"}
          </p>

          <p className="text-black font-medium   mb-6">
            Let's login to grab amazing deal
          </p>
        </div>

        {/* Success message */}
        {success && (
          <p className="text-green-600 text-center font-semibold mb-4">
            {success}
          </p>
        )}

        {/* Error message */}
        {error && (
          <p className="text-red-600 text-center font-semibold mb-4">{error}</p>
        )}

        {/* Social Buttons */}
        <button className="w-full border text-[#42526D] font-medium p-3 rounded-lg mb-4 flex items-center justify-center gap-2 bg-white shadow-sm">
          <span>
            <FcGoogle />
          </span>
          Continue with Google
        </button>

        <button className="w-full border text-[#42526D] font-medium p-3 rounded-lg mb-4 flex items-center justify-center gap-2 bg-white shadow-sm">
          <span>
            <FaApple />
          </span>
          Continue with Apple
        </button>

        {/* Email/Phone Button */}
        {!showEmailForm && (
          <button
            onClick={() => setShowEmailForm(true)}
            className="w-full border text-[#42526D] font-medium p-3 rounded-lg mb-2 flex items-center justify-center gap-2 bg-white shadow-sm"
          >
            <span>
              <FaPhoneAlt />
            </span>
            Continue with Email/Phone
          </button>
        )}

        {/* Email & Password Form */}
        {showEmailForm && (
          <div className="mt-4">
            <div className="flex items-center mb-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-400 select-none">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <input
              type="email"
              className="w-full border rounded-lg p-3 mb-4 bg-gray-50 shadow-sm"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border rounded-lg p-3 bg-gray-50 shadow-sm pr-10" // pr-10 to make space for icon
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {/* Icon on the right */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                tabIndex={-1} // so tab skip button
              >
                {showPassword ? (
                  <AiFillEyeInvisible size={24} />
                ) : (
                  <AiFillEye size={24} />
                )}
              </button>
            </div>

            {/* Remember  */}
            <div className="flex justify-between items-center my-3 text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-[#59344F]" /> Remember
                me
              </label>
              <span className="text-[#59344F] cursor-pointer">
                Forgot Password?
              </span>
            </div>

            {/* Login button */}
            <button
              onClick={handleLogin}
              className="w-full bg-[#6C0443] text-white p-3 rounded-lg mt-2 "
            >
              Login
            </button>
          </div>
        )}

        <p className="mt-6 text-sm text-center text-gray-600">
          Don't have an account?
          <span className="text-[#59344F] font-medium cursor-pointer">
            Sign Up
          </span>
        </p>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex w-1/2 items-center justify-center p-10">
        <div className="rounded-3xl overflow-hidden ">
          <img
            src="/login image.jfif"
            alt="Login Visual"
            className="object-cover h-full w-full rounded-[0px] [clip-path:polygon(0%_15%,0%_0%,15%_0%,85%_0%,100%_0%,100%_15%,100%_85%,100%_100%,85%_100%,15%_100%,0%_100%,0%_85%)]"
          />
        </div>
      </div>
    </div>
  );
}
