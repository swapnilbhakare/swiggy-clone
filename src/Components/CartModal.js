// CartModal.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RiShoppingBag3Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  calculateTotalPrice,
  calculateTotalQuantity,
} from "../utils/helper.js";

const CartModal = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const totalPrice = calculateTotalPrice();
  const totalQuantity = calculateTotalQuantity();

  return (
    <div className="max-w-3xl mx-auto font-bold text-white fixed bottom-1 left-0 right-0 px-3 py-4 bg-[#60b246] border-t border-green-500 z-10">
      <div className="flex justify-between items-center">
        <div>
          <span>
            {totalQuantity} {totalQuantity > 1 ? "Items" : "Item"} | ₹
            {totalPrice / 100}
          </span>
        </div>

        <div>
          <Link
            to="/cart"
            className="uppercase flex justify-around items-center font-semibold"
          >
            View Cart <RiShoppingBag3Line className="ml-2 text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
