import { createSlice } from "@reduxjs/toolkit";

const restaurantSlice = createSlice({
  name: "restaurants",
  initialState: {
    category: null,
    allRestaurants: null,
    filteredRestaurants: null,
    loading: false,
    error: null,
    restaurant: null,
    restaurantMenu: null,
  },
  reducers: {
    setAllRestaurants: (state, action) => {
      state.allRestaurants = action.payload;
      state.loading = false;
    },
    setFilteredRestaurants: (state, action) => {
      state.filteredRestaurants = Array.isArray(action.payload)
        ? action.payload
        : [];
    },

    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    setRestaurant: (state, action) => {
      state.restaurant = action.payload;
    },
    setRestaurantMenu: (state, action) => {
      state.restaurantMenu = action.payload;
    },
    setRecommended: (state, action) => {
      state.recommended = action.payload;
    },
  },
});

export const {
  setAllRestaurants,
  setFilteredRestaurants,
  setCategory,
  setLoading,
  setError,
  setRestaurant,
  setRestaurantMenu,
} = restaurantSlice.actions;

export const selectAllRestaurants = (state) => state.restaurants.allRestaurants;
export const selectFilteredRestaurants = (state) =>
  state.restaurants.filteredRestaurants;
export const selectLoading = (state) => state.restaurants.loading;

export const selectError = (state) => state.restaurants.error;
export const selectRestaurant = (state) => state.restaurants.restaurant;
export const selectRestaurantMenu = (state) => state.restaurants.restaurantMenu;
export default restaurantSlice.reducer;
