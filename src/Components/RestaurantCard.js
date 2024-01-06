import React from "react";
import { IMG_CDN_URL } from "../config";
import { MdStars } from "react-icons/md";

const RestaurantCard = ({ restaurant }) => {
  const cuisinesText = restaurant.cuisines.join(", ");

  return (
    <div className="relative w-full md:w-70 md:h-auto mx-auto bg-white overflow-hidden transition-all duration-300 ease-in-out transform hover:scale-95 font-sans">
      <div className="relative">
        <img
          className="w-full h-48 md:h-36 object-cover rounded-2xl transition-all duration-300 ease-in-out"
          src={`${IMG_CDN_URL}/${restaurant.cloudinaryImageId}`}
          alt={restaurant.name}
        />
        <span className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black to-transparent text-white p-2 font-bold">
          {restaurant.aggregatedDiscountInfoV3.header +
            " " +
            restaurant.aggregatedDiscountInfoV3.subHeader}
        </span>
      </div>
      <div className="p-4">
        <h2 className="font-bold text-lg md:text-xl mb-2 capitalize">
          {restaurant.name}
        </h2>
        <h6 className="flex items-center font-bold whitespace-nowrap">
          <MdStars className="text-green-500 text-lg font-bold mr-1" />{" "}
          {restaurant.avgRating} {restaurant.sla.deliveryTime}mins
        </h6>
        <p className="from-neutral-400 text-light text-xs md:text-sm truncate">
          {cuisinesText}
        </p>
        <p className="from-neutral-400 text-light text-xs md:text-sm">
          {restaurant.areaName}
        </p>
      </div>
    </div>
  );
};

export default RestaurantCard;
