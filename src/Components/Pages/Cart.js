import { useSelector } from "react-redux";
import CartLayout from "../UI/CartLayout";
import { IMG_CDN_URL } from "../../config";
import CartItems from "../CartItems.js";
import { Link } from "react-router-dom";
import emptyCart from "../../assets/img/empty-cart.png";
const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const isCartEmpty = cartItems.length === 0;

  return (
    <>
      {isCartEmpty ? (
        <div className="flex justify-center items-center pt-20">
          <div className="text-center">
            <img
              className="w-[400px] mx-auto"
              src={emptyCart}
              alt="Empty Cart"
            />
            <div className="my-6">
              <h6 className="font-bold text-xl mb-1 text-gray-700 ">
                Your Cart is Empty
              </h6>
              <p className="text-gray-500 text-sm ">
                You can go to home page to view more restaurants
              </p>
            </div>
            <Link
              to="/"
              className="bg-orange-500 text-white text-sm font-semibold px-12  py-4"
            >
              SEE RESTAURANTS NEAR YOU
            </Link>
          </div>
        </div>
      ) : (
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
                          To place your order now, log in to your existing
                          account or sign up.
                        </p>
                      </div>
                      <div className="mt-6 flex justify-around">
                        <button className=" text-green-500 border border-green-500 px-10 py-2">
                          <p className="text-xs">Have an account?</p>
                          <p className="uppercase text-sm font-semibold">
                            Log In
                          </p>
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
              <CartItems />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
