import { useSelector, useDispatch } from "react-redux";
import CartLayout from "../UI/CartLayout";
import { IMG_CDN_URL } from "../../config";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  console.log(cartItems);
  const handleAddClick = () => {
    dispatch(addItem(cartItems));
  };

  const handleRemoveClick = () => {
    dispatch(removeItem(cartItems));
  };

  return (
    <div className=" bg-[#e9ecee] w-full h-svh">
      <div className="pt-44 flex justify-around mx-7  ">
        <div className="flex-auto">
          <div>
            <CartLayout className=" px-10 py-7">
              <div className="flex  justify-between items-center">
                <div>
                  <div>
                    <h6 className="font-semibold text-xl">Account</h6>
                    <p className="text-sm text-gray-500">
                      To place your order now, log in to your existing account
                      or sign up.
                    </p>
                  </div>
                  <div className="mt-6 flex justify-around">
                    <button className=" text-green-500 border border-green-500 px-10 py-2">
                      <p className="text-xs">Have an account?</p>
                      <p className="uppercase text-sm font-semibold">Log In</p>
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
          <div>
            <CartLayout className=" px-10 py-7">
              <div>
                <h6 className="font-semibold text-lg">Delivery address</h6>
                <p></p>
              </div>
            </CartLayout>
          </div>
          <div>
            <CartLayout className=" px-10 py-7">
              <div>
                <h6 className="font-semibold text-lg">Payment</h6>
                <p></p>
              </div>
            </CartLayout>
          </div>
        </div>
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
                  {cartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-center my-5 h-8 "
                    >
                      <div className="flex items-center">
                        <div>
                          <span
                            className={`inline-flex items-center justify-center w-3 h-3 border-2 ${
                              item?.isVeg
                                ? "border-green-600"
                                : "border-red-700"
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
                          ₹
                          {item.price
                            ? item?.price / 100
                            : item.defaultPrice / 100}
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
      </div>
    </div>
  );
};

export default Cart;
