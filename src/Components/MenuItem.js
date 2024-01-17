import React from "react";

const MenuItem = ({ item, IMG_CDN_URL, isVegOnly, addFoodItem }) => {
  const isVeg = item?.card?.info?.isVeg === 1;

  if (isVegOnly && !isVeg) {
    return null;
  }

  return (
    <li className="border-t flex justify-between py-8">
      <div className="flex justify-between flex-col flex-1">
        <span
          className={`inline-flex items-center justify-center w-4 h-4  border-2 ${
            isVeg ? "border-green-600" : "border-red-700"
          }`}
        >
          <span
            className={`block w-2 h-2 rounded-full ${
              isVeg ? "bg-green-600" : "bg-red-700 "
            }`}
          ></span>
        </span>
        <h3> {item?.card?.info?.name}</h3>
        <h2 className="text-sm font-extralight">
          ₹{" "}
          {item?.card?.info?.price / 100 ||
            item?.card?.info?.defaultPrice / 100}
        </h2>
        <p className="text-xs text-gray-400">{item?.card?.info?.description}</p>
      </div>

      <div className="relative">
        <img
          src={`${IMG_CDN_URL}/${item?.card?.info?.imageId}`}
          alt={item?.card?.info?.name}
          className="w-[118px] h-[96px] object-cover rounded"
        />

        <button
          className="absolute bottom-0 left-1/2 bg-white transform -translate-x-1/2 px-8 py-2 shadow-md text-green-500 text-xs font-semibold uppercase border rounded-sm hover:shadow-lg"
          onClick={() => addFoodItem(item?.card?.info)}
        >
          Add
        </button>
      </div>
    </li>
  );
};

export default MenuItem;
