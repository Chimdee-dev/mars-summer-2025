import React from 'react';
import { CiSearch } from "react-icons/ci";

export const Body = () => {
    return (
        <div className='w-screen lg:w-[1296px]'>
            <div className="mt-10 flex flex-col md:flex-row h-auto md:h-[560px] rounded-xl bg-gray-100 overflow-hidden md:w-full w-screen">

                {/* Left content */}
                <div className="w-full md:w-[500px] flex flex-col justify-center items-start p-6 md:pl-20 space-y-6">
                    {/* Starting Price */}
                    <div className="text-gray-600 text-lg md:text-xl font-medium font-['Poppins'] leading-6 md:leading-7">
                        100% Original Products
                    </div>

                    {/* Heading */}
                    <div className="text-gray-900 text-2xl md:text-4xl font-semibold font-['Poppins'] leading-snug md:leading-tight">
                        The All New Fashion <br className="hidden md:block" /> Collection Items
                    </div>

                    <div className="text-gray-600 text-base md:text-xl font-medium font-['Poppins'] leading-6 md:leading-7">
                        Starting from: $59.99
                    </div>

                    {/* Button */}
                    <button className="flex items-center text-white text-sm md:text-base px-5 md:px-6 py-3 md:py-4 bg-gray-900 rounded-full shadow-lg hover:bg-blue-800 transition duration-300 ease-in-out">
                        Shop now
                        <CiSearch className="ml-2 md:ml-3 w-4 h-4 md:w-6 md:h-6" />
                    </button>
                </div>

                {/* Right image */}
                <div
                    className="w-full md:w-[800px] h-[300px] md:h-[560px] bg-cover bg-center bg-no-repeat rounded-b-xl md:rounded-r-xl md:rounded-b-none"
                    style={{ backgroundImage: "url('images/bg-image (1).png')" }}
                ></div>
            </div>
        </div>
    );
};
