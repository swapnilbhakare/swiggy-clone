import React, { useState } from "react";
import { IMG_CDN_URL } from "../config.js";
import { Link } from "react-router-dom";
const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isReferralCode, setIsReferralCode] = useState(false);

  const toggleMode = () => {
    setIsReferralCode(false);
    setIsLogin((prevMode) => !prevMode);
  };
  const toogleReferral = () => {
    setIsReferralCode((prevMode) => !prevMode);
  };

  return (
    <div className="mt-2">
      <div className="flex  items-center ">
        <div className="flex-1 relative">
          <h2 className="text-2xl font-semibold mb-2">
            {isLogin ? "Login" : "Sign up"}
          </h2>
          <span className="inline-block text-sm mb-3">
            or
            <span
              onClick={toggleMode}
              className="text-orange-500 cursor-pointer"
            >
              {" "}
              {isLogin ? "create an account" : "login to your account"}
            </span>
          </span>
          <span className="absolute inline-block  left-0 bottom-[-3px] w-10 h-[2px] bg-black"></span>
        </div>
        <div className="flex-1">
          <img
            className="w-28 "
            src={`${IMG_CDN_URL}/Image-login_btpq7r`}
            alt=""
          />
        </div>
      </div>
      <div>
        <form>
          {isLogin ? (
            <div class="relative mt-10 ">
              <input
                type="number"
                id="phone_number"
                class="block px-5 py-5 w-80 text-base text-gray-900 dark:bg-gray-700  border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-none peer"
                placeholder=" "
              />
              <label
                for="phone_number"
                class="absolute text-base mb-3 px-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
              >
                Phone number
              </label>
            </div>
          ) : (
            <div>
              <div class="relative mt-10 ">
                <input
                  type="number"
                  id="phone_number"
                  class="block  px-5 py-5 w-80 text-base text-gray-900 dark:bg-gray-700  border-[1px] border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-none peer"
                  placeholder=" "
                />
                <label
                  for="phone_number"
                  class="absolute mb-3 text-base px-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Phone number
                </label>
              </div>
              <div class="relative ">
                <input
                  type="text"
                  id="fullname"
                  class="block  px-5 py-5 w-80 text-base text-gray-900 dark:bg-gray-700  border-[1px] border-gray-300 border-t-0 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-600 focus:outline-none focus:ring-0 focus:border-gray-none peer"
                  placeholder=" "
                />
                <label
                  for="fullname"
                  class="absolute mb-3 text-base px-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-gray-600 peer-focus:dark:text-gray-500-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Name
                </label>
              </div>
              <div class="relative ">
                <input
                  type="email"
                  id="email"
                  class="block  px-5 py-5 w-80 text-base text-gray-900 dark:bg-gray-700  border-[1px] border-gray-300 border-t-0  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-none peer"
                  placeholder=" "
                />
                <label
                  for="email"
                  class="absolute mb-3 text-base px-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-gray-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >
                  Email
                </label>
              </div>

              {isReferralCode ? (
                <div class="relative ">
                  <input
                    type="referral_code"
                    id="text"
                    class="block  px-5 py-5 w-80 text-base text-gray-900 dark:bg-gray-700  border-[1px] border-gray-300 border-t-0  appearance-none dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-gray-none peer"
                    placeholder=" "
                  />
                  <label
                    for="referral_code"
                    class="absolute mb-3 text-base px-3 text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-5 scale-75 top-6 z-10 origin-[0] start-2.5 peer-focus:text-gray-500 peer-focus:dark:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >
                    Referral code
                  </label>
                </div>
              ) : (
                <button
                  onClick={toogleReferral}
                  className="inline-block my-3 text-blue-500"
                >
                  Have a referral code?
                </button>
              )}
            </div>
          )}

          <button className="w-80 mt-4 bg-orange-500 text-white p-4 uppercase  hover:bg-orange-600 transition ">
            {isLogin ? "Login" : "Continue"}
          </button>
          <p className="text-xs w-80 text-gray-600 mt-1">
            By clicking on Login, I accept the{" "}
            <Link>
              <span className="text-black">Terms & Conditions</span> &
              <span className="text-black"> Privacy Policy</span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Auth;
