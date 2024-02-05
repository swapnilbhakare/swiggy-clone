import { useSelector } from "react-redux";

export const searchData = (searchInput, restaurants) => {
  if (!searchInput) return restaurants;

  const lowercaseSearchInput = searchInput.toLowerCase();
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(lowercaseSearchInput)
  );
};

export const calculateTotalPrice = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.reduce((total, item) => {
    const price = item?.item?.price || item?.item?.defaultPrice || 0;
    return total + item?.count * price;
  }, 0);
};

export const calculateTotalQuantity = () => {
  const cartItems = useSelector((store) => store?.cart?.items);

  return cartItems.reduce((total, item) => total + item?.count, 0);
};

export const generateOTP = (length) => {
  const digits = "0123456789";
  let OTP = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * digits.length);
    OTP += digits[randomIndex];
  }
  return OTP;
};
