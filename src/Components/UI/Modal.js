import React from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";
import { useAuthModal, useGeolocationModal } from "../../utils/ModalContext";

const Backdrop = ({ onClose, closeModal }) => (
  <div
    onClick={() => {
      console.log("Backdrop clicked");
      onClose && onClose();
      closeModal && closeModal();
    }}
    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20 cursor-pointer transition-transform duration-300 ease-in-out"
  ></div>
);

const Modal = ({
  onClose,
  children,
  direction = "left",
  width = "40%",
  flexCenter,
  height = "auto",
  rightSideCloseButtonPositon,
}) => {
  const { closeModal: closeAuthModal } = useAuthModal();
  const { closeModal: closeGeolocationModal } = useGeolocationModal();

  const getTransformStyle = () => {
    if (direction === "left") {
      return "translateX(-80%)";
    } else if (direction === "right") {
      return "translateX(80%)";
    }
  };

  return createPortal(
    <>
      <Backdrop
        onClose={onClose}
        closeModal={closeAuthModal || closeGeolocationModal}
      />
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20  transition-transform duration-300 ease-in-out">
        <div
          className={`flex  ${flexCenter}  flex-col bg-white p-6 shadow-lg z-20 overflow-y-auto`}
          style={{
            width,
            height,
            transform: getTransformStyle(),
          }}
        >
          <div>
            <button
              className={`absolute top-0 ${
                rightSideCloseButtonPositon
                  ? rightSideCloseButtonPositon
                  : "left-24"
              } mt-4 mr-4 text-black py-2 px-4 $`}
              onClick={onClose || closeAuthModal || closeGeolocationModal}
            >
              <MdOutlineClose className="text-2xl" />
            </button>
          </div>
          <div className="mt-10  transition-transform duration-300 ease-in-out">
            {children}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
