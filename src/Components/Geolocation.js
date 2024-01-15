import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { LocationShimmer } from "./Shimmer";
import Modal from "./Modal/Modal";
import SearchLocation from "./SearchLocaton";
import useGeoLocation from "../utils/useGeoLocation.js";
import { useModal } from "../utils/ModalContext.js";

const Geolocation = () => {
  const { isModalOpen, openModal, closeModal, modalContent } = useModal();
  const { truncatedArea, error, location, setLocation } = useGeoLocation();

  const handleLocationClick = () => {
    openModal(
      <SearchLocation closeModal={closeModal} setLocation={setLocation} />
    );
  };

  return (
    <div>
      {error ? (
        <p>
          <LocationShimmer />
        </p>
      ) : location ? (
        <p
          onClick={handleLocationClick}
          className="flex items-center justify-center ml-4 transition duration-300 cursor-pointer group"
        >
          <span className="font-bold text-gray-600 text-base underline mr-2 transition duration-300  ease-in-out group-hover:text-orange-500">
            {location.city}
          </span>
          <span className="text-gray-500 text-xs ">{truncatedArea}</span>
          <RiArrowDownSLine className="text-orange-500 text-2xl font-bold" />
        </p>
      ) : (
        <LocationShimmer />
      )}

      {isModalOpen && (
        <Modal onClose={closeModal} direction="left" height="100vh">
          <SearchLocation closeModal={closeModal} setLocation={setLocation} />
        </Modal>
      )}
    </div>
  );
};

export default Geolocation;
