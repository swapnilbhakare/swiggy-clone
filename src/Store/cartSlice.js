import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },

  reducers: {
    addItem: (state, action) => {
      const { item, restaurantDetails } = action.payload;

      if (state.items.length > 0) {
        const existingRestaurantDetails = state.items[0].restaurantDetails;

        if (
          !existingRestaurantDetails ||
          existingRestaurantDetails.id !== restaurantDetails?.id
        ) {
          state.items = [];
          state.count = 0;
        }
      }

      const existingItem = state.items.find(
        (cartItem) => cartItem.item.id === item.id
      );

      if (existingItem) {
        existingItem.count += 1;
        state.count += 1;
      } else {
        state.items.push({ item, count: 1, restaurantDetails });
        state.count += 1;
      }
    },

    removeItem: (state, action) => {
      const itemIdToRemove = action.payload.item.id;

      const itemToRemoveIndex = state.items.findIndex(
        (cartItem) => cartItem.item.id === itemIdToRemove
      );

      if (itemToRemoveIndex !== -1) {
        const itemToRemove = state.items[itemToRemoveIndex];

        if (itemToRemove.count > 1) {
          itemToRemove.count -= 1;
        } else {
          state.items.splice(itemToRemoveIndex, 1);
        }

        state.count -= 1;

        if (state.count < 1) {
          state.items = [];
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
