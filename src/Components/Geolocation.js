import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { LocationShimmer } from "./UI/Shimmer.js";
import Modal from "./UI/Modal.js";
import SearchLocation from "./SearchLocaton";
import useGeoLocation from "../utils/useGeoLocation.js";
import { useGeolocationModal } from "../utils/ModalContext.js";
import { useDispatch, useSelector } from "react-redux";
import { setLocation } from "../Store/locationSlice.js";
const Geolocation = () => {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location.location);
  const error = useSelector((state) => state.location.error);

  const { isModalOpen, openModal, closeModal } = useGeolocationModal();

  const { truncatedArea } = useGeoLocation();

  const handleLocationClick = () => {
    openModal(
      <SearchLocation
        setLocation={(location) => dispatch(setLocation(location))}
        closeModal={closeModal}
      />
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
        <Modal
          direction="left"
          height="100vh"
          onClose={closeModal}
          flexCenter="items-center"
        >
          <SearchLocation
            setLocation={(location) => dispatch(setLocation(location))}
            closeModal={closeModal}
          />
        </Modal>
      )}
    </div>
  );
};

export default Geolocation;
