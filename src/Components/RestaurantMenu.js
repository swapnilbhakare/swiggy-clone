import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoMdStar, IoIosBicycle } from "react-icons/io";

import { IMG_CDN_URL } from "../config";
import { Shimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../Store/cartSlice";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, restaurantMenu] = useRestaurant(resId);
  const dispatch = useDispatch();
  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };
  console.log(restaurantMenu);
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
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>

        {/* <img src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`} /> */}
      </div>
      <div>
        <ul>
          {restaurantMenu &&
            Array.isArray(restaurantMenu) &&
            restaurantMenu.map((item) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name}
                <button
                  className="p-1 m-5 bg-green-300"
                  onClick={() => addFoodItem(item?.card?.info)}
                >
                  Add
                </button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
