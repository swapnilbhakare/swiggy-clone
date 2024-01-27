import React from "react";
import image from "../../assets/img/WIP.png";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <section>
      <div className="flex justify-center items-center pt-20">
        <div className="text-center">
          <img
            className="w-[450px] mx-auto"
            src={image}
            alt="work in progress"
          />
          <div className="my-6">
            <h6 className="font-bold text-xl mb-1 text-gray-700">
              Exciting Offers Coming Soon!
            </h6>
            <p className="text-gray-500 text-sm">
              We're whipping up some irresistible deals just for you. Stay tuned
              and get ready for a feast of savings!
            </p>
          </div>
          <Link
            to="/"
            className="bg-orange-500 text-white text-sm font-semibold px-12 py-4"
          >
            EXPLORE MORE RESTAURANTS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Offer;
