import { useSelector, useDispatch } from "react-redux";
import CartLayout from "../UI/CartLayout";
import { IMG_CDN_URL } from "../../config";
import CartItems from "../CartItems.js";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/img/empty-cart.png";
import { GoHome } from "react-icons/go";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const isAuthenticated = useSelector((store) => store.auth.isAuthenticated);
  const user = useSelector((store) => store.auth.user);
  const location = useSelector((state) => state.location.location);
  const error = useSelector((state) => state.location.error);
  const [selectLocation, setSelectLocation] = useState(false);
  const isCartEmpty = cartItems.length === 0;
  console.log(location);
  const handleLocationSelect = () => {
    setSelectLocation((prevState) => !prevState);
  };
  return (
    <>
      {isCartEmpty ? (
        <div className="flex justify-center items-center pt-20">
          <div className="text-center">
            <img
              className="w-[400px] mx-auto"
              src={emptyCart}
              alt="Empty Cart"
            />
            <div className="my-6">
              <h6 className="font-bold text-xl mb-1 text-gray-700 ">
                Your Cart is Empty
              </h6>
              <p className="text-gray-500 text-sm ">
                You can go to home page to view more restaurants
              </p>
            </div>
            <Link
              to="/"
              className="bg-orange-500 text-white text-sm font-semibold px-12  py-4"
            >
              SEE RESTAURANTS NEAR YOU
            </Link>
          </div>
        </div>
      ) : (
        <div className=" bg-[#e9ecee] w-full h-svh">
          <div className="pt-44 flex justify-around mx-7  ">
            <div className="flex-auto">
              {!isAuthenticated && (
                <div>
                  <CartLayout className=" px-10 py-7">
                    <div className="flex  justify-between items-center">
                      <div>
                        <div>
                          <h6 className="font-semibold text-xl">Account</h6>
                          <p className="text-sm text-gray-500">
                            To place your order now, log in to your existing
                            account or sign up.
                          </p>
                        </div>
                        <div className="mt-6 flex justify-around">
                          <button className=" text-green-500 border border-green-500 px-10 py-2">
                            <p className="text-xs">Have an account?</p>
                            <p className="uppercase text-sm font-semibold">
                              Log In
                            </p>
                          </button>
                          <button className=" bg-green-500 text-white border  border-green-500 px-10 py-2">
                            <p className="text-xs">New to Swiggy?</p>
                            <p className="uppercase text-sm  font-semibold">
                              Sign Up
                            </p>
                          </button>
                        </div>
                      </div>
                      <div>
                        <img
                          className="w-28 "
                          src={`${IMG_CDN_URL}/Image-login_btpq7r`}
                          alt=""
                        />
                      </div>
                    </div>
                  </CartLayout>
                </div>
              )}
              <div>
                <CartLayout className=" px-10 py-7">
                  {isAuthenticated ? (
                    <div>
                      <div>
                        {selectLocation ? (
                          <div className="flex items-center cursor-pointer justify-between">
                            <h6
                              onClick={handleLocationSelect}
                              className="font-semibold  text-lg flex items-center "
                            >
                              Delivery address
                              <FaCheckCircle className="ml-2 text-green-500" />
                            </h6>
                            <button className="uppercase text-orange-500">
                              Change
                            </button>
                          </div>
                        ) : (
                          <>
                            <h6 className="font-semibold  text-lg">
                              Select delivery address
                            </h6>
                            <p className="text-gray-500 text-sm">
                              You have a saved address in this location
                            </p>
                          </>
                        )}
                      </div>
                      {selectLocation ? (
                        <div onClick={handleLocationSelect} className="ml-2">
                          <h6 className="cursor-pointer font-semibold text-gray-600">
                            Home
                          </h6>
                          <p className="text-xs">{location?.area}</p>
                          <div className="mt-5">
                            <p className="uppercase mb-5 text-gray-600">
                              25 Mins
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div
                          onClick={handleLocationSelect}
                          className="cursor-pointer p-5 mt-5 flex  w-60 h-48 shadow-sm border"
                        >
                          <div>
                            <GoHome className="text-2xl" />
                          </div>
                          <div className="ml-2">
                            <h6 className="font-semibold text-gray-600">
                              Home
                            </h6>
                            <p className="text-xs">{location?.area}</p>
                            <div className="mt-5">
                              <p className="uppercase mb-5 text-gray-600">
                                25 Mins
                              </p>
                              <button className="bg-green-500 px-3 py-2 text-sm text-white">
                                DELIVER HERE
                              </button>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <h6 className="font-semibold text-gray-600 text-lg">
                        Delivery address
                      </h6>
                    </div>
                  )}
                </CartLayout>
              </div>
              <div>
                <CartLayout className=" px-10 py-7">
                  {isAuthenticated && selectLocation ? (
                    <div>
                      <h6 className="font-semibold mb-5 text-lg text-gray-500">
                        Payment
                      </h6>
                      <button className="text-white uppercase w-full py-3 bg-green-500">
                        Proceed to pay
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h6 className="font-semibold text-lg text-gray-500">
                        Payment
                      </h6>
                    </div>
                  )}
                </CartLayout>
              </div>
            </div>
            <div>
              <CartItems />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
