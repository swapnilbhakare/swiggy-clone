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
import { useSelector } from "react-redux";
import Modal from "./Modal/Modal";
import Auth from "./Auth";

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
  const cartItems = useSelector((store) => store.cart.items);
  const [isSignInModalOpen, setSignInModalOpen] = useState(false);

  return (
    <div className="h-20 flex px-5 justify-around items-center bg-white fixed w-full top-0 z-10 shadow-lg md:shadow-lg lg:shadow-lg">
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
            <button onClick={() => setSignInModalOpen(true)}>Sign In</button>
          </li>
          {isSignInModalOpen && (
            <Modal
              onClose={() => setSignInModalOpen(false)}
              direction="right"
              height="100vh"
            >
              <Auth />
            </Modal>
          )}

          <li className="relative flex items-center font-normal text-base text-gray-600 hover:text-orange-500 transition duration-300 ease-in-out">
            <BsBox2 className="mr-2"></BsBox2>
            <span className="absolute top-0 text-orange-500 left-4 h-2 w-2 flex items-center justify-center rounded-full">
              {cartItems.length}
            </span>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;