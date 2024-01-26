import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartLayout from "./UI/CartLayout";
import { calculateTotalPrice } from "../utils/helper.js";
import { IMG_CDN_URL } from "../config.js";
import { addItem, removeItem } from "../Store/cartSlice";
const CartItems = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const totalPrice = calculateTotalPrice();
  const items = cartItems.map((item) => item);

  const restaurantDetails =
    cartItems.length > 0 ? cartItems[0].restaurantDetails : null;

  const deliveryFee = restaurantDetails?.feeDetails?.totalFee || 0;
  const platformFee = 5;
  const gst = Math.round((0.08 / 100) * totalPrice);

  const totalAmount = totalPrice + deliveryFee + platformFee + gst;

  const handleAddClick = (item) => {
    dispatch(addItem({ item, restaurantDetails: restaurantDetails }));
  };

  const handleRemoveClick = (item) => {
    dispatch(removeItem({ item, restaurantDetails: restaurantDetails }));
  };

  return (
    <>
      <CartLayout className="w-[370px] p-4">
        <div>
          <div className="flex items-center z-20 shadow-sm">
            <img
              src={`${IMG_CDN_URL}/${restaurantDetails?.cloudinaryImageId}`}
              className="size-12"
            />
            <div className="border-b-4 py-2 ml-2 border-black">
              <h5>{restaurantDetails?.name}</h5>
              <span className="text-xs">{restaurantDetails?.locality}</span>
            </div>
          </div>
          <div className="mt-2 h-72 px-1  overflow-y-auto">
            <ul>
              {cartItems.map((item) => (
                <li
                  key={item?.item?.id}
                  className="flex justify-between items-center my-5 h-8 "
                >
                  <div className="flex items-center">
                    <div>
                      <span
                        className={`inline-flex items-center justify-center w-3 h-3 border-2 ${
                          item?.item?.isVeg
                            ? "border-green-600"
                            : "border-red-700"
                        }`}
                      >
                        <span
                          className={`block w-1 h-1 rounded-full ${
                            item?.item?.isVeg ? "bg-green-600" : "bg-red-700"
                          }`}
                        ></span>
                      </span>
                    </div>

                    <p className="text-xs ml-2  inline-block w-[150px]">
                      {item?.item?.name}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <span className="text-xs inline-block bg-white px-2 py-1 text-green-500 border">
                      <button
                        onClick={() => handleRemoveClick(item?.item)}
                        className="cursor-pointer text-gray-400"
                      >
                        -
                      </button>
                      <span className="px-3">{item.count}</span>
                      <button
                        onClick={() => handleAddClick(item?.item)}
                        className="cursor-pointer"
                      >
                        +
                      </button>
                    </span>
                    <span className="ml-2 inline-block text-xs">
                      ₹
                      {item?.item?.price
                        ? item?.item?.price / 100
                        : item?.item?.defaultPrice / 100}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="my-4 flex items-center justify-center">
              <input
                type="text"
                className="w-full text-xs py-3 px-4 outline-none bg-[#f9f9f9]"
                placeholder="Any suggestions? we will pass it on..."
              />
            </div>
            <div className="mt-3">
              <div className="flex text-sm">
                <p>Bill Details </p>
              </div>
              <div className="border-b">
                <div className="flex items-center justify-between text-xs pt-2">
                  <span>Item Total</span> <span>₹ {totalPrice / 100}</span>{" "}
                </div>
                <div className="flex items-center justify-between text-xs py-2">
                  <span>
                    Delivery Fee |{" "}
                    {restaurantDetails?.sla?.lastMileTravelString}
                  </span>
                  <span>₹ {deliveryFee / 100}</span>
                </div>
              </div>
              <div className="border-b-2 border-black">
                <div className="flex items-center justify-between text-xs pt-2">
                  <span>Delivery Tip</span>
                  <span className="text-orange-500">Add tip</span>
                </div>
                <div className="flex items-center justify-between text-xs pt-2">
                  <span> Platform fee</span>
                  <span>
                    <span>₹ {platformFee}</span>
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs py-2">
                  <span> GST and Restaurant Charges </span>
                  <span>
                    <span>₹{gst}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex shadow-sm mt-2 px-3 font-semibold items-center justify-between py-2 uppercase z-20">
            <span>To Pay</span>
            <span>₹{totalAmount / 100}</span>
          </div>
        </div>
      </CartLayout>
    </>
  );
};

export default CartItems;
