import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlusG,
  faFacebookF,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Login() {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);

  const handleSignUpClick = () => {
    setIsSignUpVisible(true);
  };

  const handleSignInClick = () => {
    setIsSignUpVisible(false);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-300 to-blue-200">
      <div className="relative w-full max-w-4xl h-[500px] bg-white rounded-xl shadow-lg overflow-hidden flex">
        {/* Sign In Form */}
        <div
          className={`w-1/2 h-full bg-white flex flex-col justify-center items-center px-10 transition-all duration-700 ${
            isSignUpVisible ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <h1 className="text-3xl font-bold mb-6">Sign In</h1>
          <div className="flex space-x-3 mb-6">
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span className="text-sm mb-4">or use your email to sign in</span>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
          />
          <a href="#" className="text-sm text-purple-600 mb-4">
            Forgot Your Password?
          </a>
          <button className="bg-purple-600 text-white py-2 px-6 rounded-full">
            Sign In
          </button>
        </div>

        {/* Sign Up Form */}
        <div
          className={`w-1/2 h-full bg-white flex flex-col justify-center items-center px-10 transition-all duration-700 ${
            isSignUpVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <h1 className="text-3xl font-bold mb-6">Create Account</h1>
          <div className="flex space-x-3 mb-6">
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="p-2 border rounded-full">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span className="text-sm mb-4">
            or use your email for registration
          </span>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 mb-4 border rounded-lg bg-gray-200"
          />
          <button className="bg-purple-600 text-white py-2 px-6 rounded-full">
            Sign Up
          </button>
        </div>

        {/* Overlapping Div */}
        <div
          className={`absolute right-0 top-0 w-1/2 h-full bg-purple-700 flex flex-col items-center justify-center transition-transform duration-700 ${
            isSignUpVisible ? "-translate-x-full" : "translate-x-0"
          }`}
          style={{ zIndex: 10 }}
        >
          <h1 className="text-3xl font-bold mb-6 text-white">
            {isSignUpVisible ? "Welcome Back!" : "Hello, Friend!"}
          </h1>
          <p className="mb-4 text-white">
            {isSignUpVisible
              ? "Sign in to continue your journey!"
              : "Don't have an account? Sign up and join us."}
          </p>
          <button
            className="bg-transparent border-white border py-2 px-6 rounded-full"
            onClick={isSignUpVisible ? handleSignInClick : handleSignUpClick}
          >
            {isSignUpVisible ? "Sign In" : "Sign Up"}
          </button>
        </div>
      </div>
    </div>
  );
}
