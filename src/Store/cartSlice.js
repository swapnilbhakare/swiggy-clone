import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    count: 0,
  },

  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.count += 1;
        state.count += 1;
      } else {
        state.items.push({ ...action.payload, count: 1 });
        state.count += 1;
      }
    },
    removeItem: (state, action) => {
      const itemToRemoveIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemToRemoveIndex !== -1) {
        const itemToRemove = state.items[itemToRemoveIndex];
        if (itemToRemove.count > 1) {
          itemToRemove.count -= 1;
        } else {
          state.items.splice(itemToRemoveIndex, 1);
        }
        state.count -= 1;
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
