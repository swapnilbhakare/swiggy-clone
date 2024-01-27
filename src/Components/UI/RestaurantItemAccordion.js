import React, { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const RestaurantItemAccordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(true);
  const toggleAccordion = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="border-t-[15px]   border-[whitesmoke]  mb-2">
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer transition-all duration-300"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg capitalize font-semibold">{title}</h2>
        <>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</>
      </div>
      {isOpen && <div className="p-4 ">{children}</div>}
    </div>
  );
};

export default RestaurantItemAccordion;
