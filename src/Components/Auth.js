import React, { useEffect } from "react";
import { IMG_CDN_URL } from "../config.js";
import { Link } from "react-router-dom";
import InputField from "./UI/InputField.js";

import useAuth from "../utils/useAuth.js";
import { useSelector } from "react-redux";

const Auth = () => {
  const {
    isLogin,
    phone,
    name,
    email,
    loginStep,
    referralCode,
    enteredOTP,
    signupStep,
    setPhone,
    setName,
    setEmail,
    setReferralCode,
    setEnteredOTP,
    toggleMode,
    toogleReferral,
    handleSubmit,
    showReferralCode,
  } = useAuth();

  return (
    <div className="mt-2">
      <div className="flex items-center">
        <div className="flex-1 relative">
          <h2 className="text-2xl font-semibold mb-2">
            {(isLogin && loginStep === 2) || (!isLogin && signupStep === 2)
              ? "Enter OTP"
              : isLogin
              ? "Login"
              : "Sign up"}
          </h2>
          {(isLogin && loginStep === 2) || (!isLogin && signupStep === 2) ? (
            <>
              <span className="inline-block text-sm mb-3">
                <span>We've sent an OTP to your phone number.</span>
              </span>
            </>
          ) : (
            <>
              <span className="inline-block text-sm mb-3">
                or{" "}
                <span
                  onClick={toggleMode}
                  className="text-orange-500 cursor-pointer"
                >
                  {isLogin ? "create an account" : "login to your account"}
                </span>
              </span>
            </>
          )}
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
        <form onSubmit={handleSubmit}>
          {isLogin ? (
            <>
              {loginStep === 1 && (
                <InputField
                  type="number"
                  id="phone_number"
                  label="Phone number"
                  value={phone}
                  classes="mt-10"
                  onChange={(e) => setPhone(e.target.value)}
                  max="10"
                />
              )}
              {loginStep === 2 && (
                <InputField
                  classes="mt-10"
                  id="otp"
                  type="number"
                  label="OTP"
                  value={enteredOTP}
                  onChange={(e) => setEnteredOTP(e.target.value)}
                />
              )}
            </>
          ) : (
            <>
              {signupStep === 1 && (
                <>
                  <InputField
                    type="tel"
                    classes="mt-10"
                    id="phone_number"
                    label="Phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <InputField
                    id="fullname"
                    type="text"
                    label="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <InputField
                    id="email"
                    type="email"
                    label="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  {showReferralCode ? (
                    <InputField
                      id="referral_code"
                      type="text"
                      label="Referral code"
                      value={referralCode}
                      onChange={(e) => setReferralCode(e.target.value)}
                    />
                  ) : (
                    <button
                      onClick={toogleReferral}
                      className="inline-block my-3 text-blue-500"
                    >
                      Have a referral code?
                    </button>
                  )}
                </>
              )}
              {signupStep === 2 && (
                <InputField
                  classes="mt-10"
                  id="otp"
                  type="number"
                  label="OTP"
                  value={enteredOTP}
                  onChange={(e) => setEnteredOTP(e.target.value)}
                />
              )}
            </>
          )}

          <button
            type="submit"
            className="w-80 mt-4 bg-orange-500 text-white p-4 uppercase hover:bg-orange-600 transition"
          >
            {(isLogin && loginStep === 2) || (!isLogin && signupStep === 2)
              ? "VERIFY OTP"
              : isLogin
              ? "Login"
              : "Sign up"}
          </button>
          {loginStep !== 2 && (
            <p className="text-xs w-80 text-gray-600 mt-1">
              By clicking on Login, I accept the{" "}
              <Link>
                <span className="text-black">Terms & Conditions</span> &
                <span className="text-black"> Privacy Policy</span>
              </Link>
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Auth;
