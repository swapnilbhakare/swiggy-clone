import React, { createContext, useContext, useState } from "react";

const AuthModalContext = createContext();
const GeolocationModalContext = createContext();

export const AuthModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <AuthModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, modalContent }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};

export const GeolocationModalProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  return (
    <GeolocationModalContext.Provider
      value={{ isModalOpen, openModal, closeModal, modalContent }}
    >
      {children}
    </GeolocationModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) {
    throw new Error("useAuthModal must be used within an AuthModalProvider");
  }
  return context;
};
export const useGeolocationModal = () => {
  const context = useContext(GeolocationModalContext);
  if (!context) {
    throw new Error(
      "useGeolocationModal must be used within a GeolocationModalProvider"
    );
  }
  return context;
};
