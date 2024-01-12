import React from "react";
import { createPortal } from "react-dom";
import { MdOutlineClose } from "react-icons/md";

const Backdrop = ({ onClose }) => (
  <div
    className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-20 cursor-pointer"
    onClick={onClose}
  ></div>
);

const Modal = ({
  onClose,
  children,
  direction = "left",
  width = "30%",
  height = "auto",
}) => {
  const modalRoot = document.getElementById("modal-root");

  const getTransformStyle = () => {
    if (direction === "left") {
      return "translateX(-120%)";
    } else if (direction === "right") {
      return "translateX(-120%)";
    }

    return "translateX(0%)";
  };

  return createPortal(
    <>
      <Backdrop onClose={onClose} />
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-20">
        <div
          className="flex justify-center  flex-row bg-white p-6 shadow-lg z-20"
          style={{
            width,
            height,
            transform: getTransformStyle(),
          }}
        >
          <div>
            <button
              className="absolute top-0 left-16 mt-4 mr-4 text-black py-2 px-4"
              onClick={onClose}
            >
              <MdOutlineClose className="text-2xl" />
            </button>
          </div>
          <div className="mt-10">{children}</div>
        </div>
      </div>
    </>,
    modalRoot
  );
};

export default Modal;
