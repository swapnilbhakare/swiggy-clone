import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const [restaurant, restaurantMenu] = useRestaurant(resId);

  if (!restaurant) {
    return <Shimmer />;
  }
  return (
    <div className="menu">
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
            Array.isArray(restaurantMenu) && // Check if restaurantMenu is not null and is an array
            restaurantMenu.map((item) => (
              <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
