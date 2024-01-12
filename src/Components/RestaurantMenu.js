import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

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

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="flex">
      <div>
        <h1>{restaurant?.name}</h1>
        <h3>{restaurant?.areaName}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.costForTwoMessage}</h3>
        <p>{restaurant?.avgRating} stars</p>
        <img src={`${IMG_CDN_URL}${restaurant?.cloudinaryImageId}`} />
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
