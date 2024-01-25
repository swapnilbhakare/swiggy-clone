import { useSelector } from "react-redux";

export const searchData = (searchInput, restaurants) => {
  return restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
};

export const calculateTotalPrice = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.reduce((total, item) => {
    const price = item.item.price || item.item.defaultPrice || 0;
    return total + item.count * price;
  }, 0);
};

export const calculateTotalQuantity = () => {
  const cartItems = useSelector((store) => store.cart.items);

  return cartItems.reduce((total, item) => total + item.count, 0);
};
