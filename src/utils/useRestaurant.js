import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRestaurant, setRestaurantMenu } from "../Store/restaurantSlice.js";
import { FETCH_MENU_URL } from "../config";

const useRestaurant = (resId) => {
  const dispatch = useDispatch();

  async function getRestaurantInfo() {
    try {
      const data = await fetch(FETCH_MENU_URL + resId);
      const json = await data.json();

      dispatch(setRestaurant(json?.data?.cards[0]?.card?.card?.info));
      dispatch(
        setRestaurantMenu(
          json?.data?.cards[2]?.groupedCard?.cardGroupMap.REGULAR?.cards[4]
            ?.card?.card?.itemCards
        )
      );
    } catch (error) {
      console.error("Error fetching restaurant information:", error);
    }
  }

  useEffect(() => {
    getRestaurantInfo();
  }, [resId, dispatch]);

  return { getRestaurantInfo };
};

export default useRestaurant;
