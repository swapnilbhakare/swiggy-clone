import React from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";

const Backdrop = ({ onClose }) => (
  <div
    onClick={() => onClose}
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
  const modalRoot = document.getElementById("modal-root");

  const getTransformStyle = () => {
    if (direction === "left") {
      return "translateX(-80%)";
    } else if (direction === "right") {
      return "translateX(80%)";
    }
  };

  return createPortal(
    <>
      <Backdrop onClose={onClose} />
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
              onClick={onClose}
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
    modalRoot
  );
};

export default Modal;
