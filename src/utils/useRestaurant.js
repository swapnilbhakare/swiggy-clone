import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../config";
const useRestaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);
  const [restaurantMenu, setRestaurantMenu] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();

    setRestaurant(json?.data?.cards[0]?.card?.card?.info);
    setRestaurantMenu(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[4]?.card
        ?.card?.itemCards
    );
  }
  return [restaurant, restaurantMenu];
};
export default useRestaurant;
