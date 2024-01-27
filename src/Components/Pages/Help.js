import React from "react";
import image from "../../assets/img/WIP.png";
import { Link } from "react-router-dom";

const Help = () => {
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
              Assistance in the Making!
            </h6>
            <p className="text-gray-500 text-sm">
              Our developer team is crafting a seamless help experience for you.
              We appreciate your patience and look forward to assisting you
              better soon!
            </p>
          </div>
          <Link
            to="/"
            className="bg-orange-500 text-white text-sm font-semibold px-12 py-4"
          >
            EXPLORE MORE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Help;
