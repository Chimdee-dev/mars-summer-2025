import React from 'react'
import { RiShoppingCart2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

export const Header = () => {
  return (
    <nav className="flex flex-col md:flex-row md:justify-between items-center m-4 md:m-10 gap-4">
      {/* Logo */}
      <div>
        <img src="images/logo.svg" alt="logo" className="w-[120px] md:w-[150px]" />
      </div>

      {/* Search */}
      <div className="flex items-center border border-gray-400 rounded-3xl p-2 w-full md:w-[400px]">
        <CiSearch className="w-6 h-6 mr-2" />
        <input
          className="w-full outline-none text-sm md:text-base"
          type="text"
          placeholder="Search in products"
        />
      </div>

      {/* Icons */}
      <div className="flex">
        <button className="w-[24px] h-[24px]">
          <FaRegUser />
        </button>
        <button className="w-[24px] h-[24px] ml-5">
          <RiShoppingCart2Line />
        </button>
      </div>
    </nav>
  )
}
