import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from 'react-icons/fa';
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();
    try {
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/');
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      navigate('/');
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-sm p-8">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Login
        </h1>

        {/* Form */}
        <form onSubmit={handleEmailLogin} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Email
            </label>
            <input
              type="email" ref={emailRef} required
              placeholder="example@example.com"
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-900">
              Password
            </label>
            <input
              type="password" ref={passwordRef} required
              className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-full bg-[#0f172a] text-white font-medium hover:bg-[#1e293b] transition"
          >
            Continue
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-sm text-gray-500">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>


        <button onClick={handleGoogleLogin} className="w-full flex items-center justify-center py-2 px-4 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors duration-200 space-x-2">
          <FaGoogle />
          <span>Sign in with Google</span>
        </button>

        {/* Divider */}
        
        {/* Signup Link */}
        <p className="text-center text-sm mt-4 text-gray-600">
          New user?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}
