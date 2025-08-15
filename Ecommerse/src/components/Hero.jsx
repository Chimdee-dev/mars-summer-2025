import React from 'react'
import { CiSearch } from "react-icons/ci";

export const Hero = () => {
    return (
        <div>
            <div
                className="flex h-[400px] md:h-[560px] items-center bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: 'url(images/hero-bg.png)' }}
            >
                <div className="p-6 md:p-20 max-w-full">
                    {/* Subtitle */}
                    <div className="text-gray-600 text-base md:text-xl font-['Poppins'] leading-6 md:leading-7 mb-4">
                        Starting from: $49.99
                    </div>
                    {/* Title */}
                    <div className=" w-full text-gray-900 text-3xl md:text-[50px] font-semibold font-['Poppins'] leading-9 md:leading-[72px] mb-6">
                        Exclusive collection <br className="hidden md:block" /> for everyone
                    </div>

                    {/* Button */}
                    <button className="flex items-center gap-2 text-white text-sm md:text-base px-4 md:px-6 py-3 md:py-5 bg-gray-900 rounded-full shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.10)] hover:bg-blue-800 transition duration-300 ease-in-out">
                        Explore now
                        <CiSearch className="w-4 h-4 md:w-6 md:h-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}
