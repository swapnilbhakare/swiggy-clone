import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoMdStar, IoIosBicycle } from "react-icons/io";
import { BiSolidPieChartAlt } from "react-icons/bi";
import { HiOutlineCurrencyRupee } from "react-icons/hi2";
import CartModal from "./CartModal.js";

import { Shimmer } from "./UI/Shimmer";
import { addItem } from "../Store/cartSlice.js";
import {
  selectRestaurant,
  selectRestaurantMenu,
  selectLoading,
} from "../Store/restaurantSlice.js";
import { IMG_CDN_URL } from "../config";
import MenuItem from "./MenuItem";
import useRestaurant from "../utils/useRestaurant.js";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { getRestaurantInfo } = useRestaurant(resId);
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);

  const [isVegOnly, setIsVegOnly] = useState(false);
  const restaurant = useSelector(selectRestaurant);
  const restaurantMenu = useSelector(selectRestaurantMenu);
  const handleVegToggle = () => {
    setIsVegOnly(!isVegOnly);
  };

  const cartItems = useSelector((store) => store.cart.items);

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  useEffect(() => {
    if (!loading) {
      getRestaurantInfo();
    }
  }, [dispatch, resId, loading]);

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="max-w-3xl mx-auto mt-36">
      <div className="">
        <div className="flex justify-between border-b border-dashed ">
          <div>
            <h1 className="font-semibold mb-3 text-lg">{restaurant?.name}</h1>
            <h3 className="text-gray-400 text-xs mb-2">
              {restaurant?.cuisines.join(",")}
            </h3>
            <h3 className="text-gray-400 text-xs mb-2">
              {restaurant?.areaName},{restaurant?.sla?.lastMileTravel} km
            </h3>
            <h3 className="flex text-gray-400 text-xs my-4">
              <IoIosBicycle className="text-[17px] mr-2" />{" "}
              <span>{restaurant?.feeDetails?.message} </span>
            </h3>
          </div>
          <div>
            <p className="flex flex-col p-2 items-center justify-center font-medium border rounded-md">
              <span className="flex items-center pb-2 justify-center font-bold border-b text-green-700">
                <IoMdStar className="font-" />
                <span>{restaurant?.avgRating}</span>
              </span>
              <span className="text-xs   pt-2 text-gray-400">
                {restaurant?.totalRatingsString}
              </span>
            </p>
          </div>
        </div>
        <div className="">
          <p className="flex items-center mt-4 font-bold text-gray-700">
            <span className="flex">
              <BiSolidPieChartAlt className="mr-2 text-xl" />{" "}
              {restaurant?.sla.deliveryTime} MINS
            </span>
            <span className="flex">
              <HiOutlineCurrencyRupee className="text-xl mx-2" />
              {restaurant?.costForTwoMessage}
            </span>
          </p>
          <div>
            <div className="flex items-center my-5">
              <span className="mr-2 font-semibold text-gray-700">Veg only</span>
              <button
                className={`relative inline-flex items-center   h-4 rounded-sm w-8 focus:outline-none transition-colors ease-in-out duration-200 ${
                  isVegOnly ? "bg-green-600" : "bg-gray-300"
                }`}
                data-testid="toggle-switch"
                role="switch"
                aria-checked={isVegOnly}
                aria-label="Veg Only"
                onClick={handleVegToggle}
              >
                <span
                  className={`${
                    isVegOnly ? "translate-x-4" : "translate-x-0"
                  }  flex items-center justify-center w-3.5 h-3.5 transition-transform transform bg-white rounded-sm`}
                >
                  <span
                    className={
                      isVegOnly
                        ? "inline-block w-2 h-2 transition-transform transform bg-green-600 rounded-full"
                        : "inline-block w-2 h-2 transition-transform transform rounded-full"
                    }
                  ></span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <ul>
          {restaurantMenu &&
            Array.isArray(restaurantMenu) &&
            restaurantMenu.map((item) => (
              <MenuItem
                key={item?.card?.info?.id}
                item={item}
                IMG_CDN_URL={IMG_CDN_URL}
                isVegOnly={isVegOnly}
                addFoodItem={addFoodItem}
              />
            ))}
        </ul>
      </div>
      {cartItems.length > 0 && <CartModal />}
    </div>
  );
};

export default RestaurantMenu;
