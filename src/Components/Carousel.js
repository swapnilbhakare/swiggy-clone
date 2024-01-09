import React, { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { IMG_CDN_URL } from "../config";

const Carousel = ({ bestOffer }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextClicked, setNextClicked] = useState(false);

  const next = () => {
    if (!nextClicked) {
      setCurrentIndex((prevIndex) =>
        prevIndex < bestOffer.length - 1 ? prevIndex + 1 : prevIndex
      );
      setNextClicked(true);
    }
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
    setNextClicked(false);
  };

  const itemWidth = 500;
  const carouselContentWidth = bestOffer.length * itemWidth;

  return (
    <div className="my-carousel overflow-hidden mx-auto max-w-6xl ">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-bold mr-4">Best offers for you</h5>
        <div className="flex items-center space-x-2 ml-auto">
          <button
            className={`bg-white-smoke rounded-full p-2 ${
              currentIndex === 0 ? "pointer-events-none opacity-50" : ""
            }`}
            onClick={prev}
            disabled={currentIndex === 0}
          >
            <GrFormPreviousLink />
          </button>
          <button
            className={`bg-white-smoke rounded-full p-2 ${
              nextClicked || currentIndex === bestOffer.length - 1
                ? "pointer-events-none opacity-50"
                : ""
            }`}
            onClick={next}
            disabled={nextClicked || currentIndex === bestOffer.length - 1}
          >
            <GrFormNextLink />
          </button>
        </div>
      </div>
      <div
        className="my-carousel-content flex overflow-x-auto transition-transform duration-500 ease-in-out"
        style={{
          width: `${carouselContentWidth}px`,
          transform: `translateX(-${currentIndex * itemWidth}px)`,
        }}
      >
        {bestOffer.map((item, index) => (
          <img
            key={index}
            src={IMG_CDN_URL + item.imageId}
            alt={`Carousel Item ${index + 1}`}
            className="my-carousel-item flex w-500 h-56 mr-10 overflow-hidden"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
