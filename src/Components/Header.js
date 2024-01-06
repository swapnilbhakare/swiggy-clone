import React, { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { IoSearch } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoHelpBuoyOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { BsBox2 } from "react-icons/bs";
import { LOGO } from "../config";
import Geolocation from "./Geolocation";

const Title = () => (
  <Link
    to="/"
    className="transition-transform duration-300 ease-in-out transform hover:scale-105 font-sans"
  >
    {LOGO}
  </Link>
);

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const isOnline = useOnline();
  const value = 42;

  return (
    <div className="h-20 flex px-5 justify-around items-center bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="flex items-center justify-between ml-6">
        <Title />
        <Geolocation />
      </div>
      <div>
        <ul className="flex space-x-4">
          <li className="flex items-center pr-7 font-normal text-lg text-gray-600 hover:text-orange-500 transition duration-300 ease-in-out">
            {" "}
            <button className=" flex items-center">
              <IoSearch className="mr-2" />
              <span>Search</span>
            </button>
          </li>

          <li className="flex items-center pr-7 font-normal text-base text-gray-600 hover:text-orange-500 transition duration-300 ease-in-out">
            <BiSolidOffer className="mr-2" />
            <Link to="/offer" className="relative">
              <span>Offers</span>
              <span className="absolute uppercase top-0 right-0 mt-[-3px] text-orange-500 text-xs transform translate-x-full">
                New
              </span>
            </Link>
          </li>

          <li className="flex items-center pr-7 font-normal text-base text-gray-600 hover:text-orange-500 transition duration-300 ease-in-out">
            <IoHelpBuoyOutline className="mr-2 flex items-center" />
            <Link to="/offer">Help</Link>
          </li>

          <li className="flex items-center pr-7 font-normal text-base text-gray-600 hover:text-orange-500 transition duration-300 ease-in-out">
            <FaRegUser className="mr-1" />
            <button>Sign In</button>
          </li>

          <li className="flex items-center font-normal text-base text-gray-600 hover:text-orange-500 transition duration-300 ease-in-out">
            <BsBox2 className="mr-2">{value}</BsBox2>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
