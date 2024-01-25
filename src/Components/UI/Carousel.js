import React, { useState } from "react";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import { IMG_CDN_URL } from "../../config";

const Carousel = ({ category }) => {
  const itemsPerClick = 3.5; // Number of items to show per click
  const minItemsToShow = 6; // Minimum number of items to show on the screen
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextClicked, setNextClicked] = useState(false);

  const next = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + itemsPerClick) % category?.length;
      setNextClicked(true);
      return newIndex;
    });
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex =
        (prevIndex - itemsPerClick + category?.length) % category.length;
      setNextClicked(false);
      return newIndex;
    });
  };

  const itemWidth = 200;

  return (
    <div className="my-carousel overflow-hidden mx-auto max-w-6xl relative">
      <div className="flex items-center justify-between mb-4">
        <h5 className="text-lg font-bold mr-4">What's on your mind?</h5>
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
              currentIndex + itemsPerClick >= category?.length ||
              currentIndex + minItemsToShow >= category?.length
                ? "pointer-events-none opacity-50"
                : ""
            }`}
            onClick={next}
            disabled={
              currentIndex + itemsPerClick >= category?.length ||
              currentIndex + minItemsToShow >= category?.length
            }
          >
            <GrFormNextLink />
          </button>
        </div>
      </div>
      <div
        className="flex transition-transform duration-500 ease-in-out overflow-x-auto"
        style={{
          width: `${category?.length * itemWidth}px`,
          transform: `translateX(-${currentIndex * itemWidth}px)`,
        }}
      >
        {category?.map((item, index) => (
          <img
            key={index}
            src={IMG_CDN_URL + item?.imageId}
            alt={`Carousel Item ${index + 1}`}
            className="my-carousel-item w-full mr-10 overflow-auto rounded-full"
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
