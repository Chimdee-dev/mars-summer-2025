// Signup.jsx
import React, { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";




export default function Signup() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(emailRef.current.value, passwordRef.current.value);
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
                    Sign Up
                </h1>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-900">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                        />
                    </div>

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
                            minLength="8"
                            placeholder="********"
                            className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-full bg-[#0f172a] text-white font-medium hover:bg-[#1e293b] transition"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-1 h-px bg-gray-200"></div>
                    <span className="px-4 text-sm text-gray-500">OR</span>
                    <div className="flex-1 h-px bg-gray-200"></div>
                </div>

                {/* Login Link */}
                <p className="text-center text-sm text-gray-600">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-500 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
}
