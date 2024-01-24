import React from "react";
import CartLayout from "./UI/CartLayout";
import { useSelector, useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config.js";
const CartItems = () => {
  const dispatch = useDispatch();
  const CartItems = useSelector((store) => store.cart.items);

  const cartItems = useSelector((store) => store.cart.items);

  const cartMenu = cartItems.map((info) => {
    return info.menuItem;
  });

  const cartRestaurantDetails = cartItems.map((info) => {
    return info.restaurantDetails;
  });
  console.log(CartItems);

  const handleAddClick = () => {
    dispatch(addItem(CartItems));
  };

  const handleRemoveClick = () => {
    dispatch(removeItem(CartItems));
  };
  return (
    <>
      <div>
        <CartLayout className="w-[370px]  p-4">
          <div>
            <div className="flex items-center z-20">
              <img
                src={`${IMG_CDN_URL}/Image-login_btpq7r`}
                className="size-12"
              />
              <div className="border-b-4 py-2 ml-2 border-black">
                <h5>Priya</h5>
                <span className="text-xs">Location</span>
              </div>
            </div>
            <div className="mt-2 h-72 px-1  overflow-y-auto">
              <ul>
                {cartMenu?.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center my-5 h-8 "
                  >
                    <div className="flex items-center">
                      <div>
                        <span
                          className={`inline-flex items-center justify-center w-3 h-3 border-2 ${
                            item?.isVeg ? "border-green-600" : "border-red-700"
                          }`}
                        >
                          <span
                            className={`block w-1 h-1 rounded-full ${
                              item?.isVeg ? "bg-green-600" : "bg-red-700"
                            }`}
                          ></span>
                        </span>
                      </div>

                      <p className="text-xs ml-2 inline-block w-[150px]">
                        {item.name}
                      </p>
                    </div>

                    <div className="flex items-center">
                      <span className="text-xs inline-block bg-white px-2 py-1 text-green-500 border">
                        <button className="cursor-pointer text-gray-400">
                          -
                        </button>
                        <span className="px-3">1</span>
                        <button className="cursor-pointer">+</button>
                      </span>
                      <span className="ml-2 inline-block text-xs">
                        ₹{item.price / 100}
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
                    <span>Item Total</span> <span>₹500</span>{" "}
                  </div>
                  <div className="flex items-center justify-between text-xs py-2">
                    <span> Delivery Fee | 2.1 kms</span> <span>₹35</span>
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
                      <span>₹</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs py-2">
                    <span> GST and Restaurant Charges </span>
                    <span>
                      <span>₹50.96</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-2 px-3 font-semibold items-center justify-between py-2 uppercase z-20">
              <span>To Pay</span>
              <span>₹500</span>
            </div>
          </div>
        </CartLayout>
      </div>
    </>
  );
};

export default CartItems;
