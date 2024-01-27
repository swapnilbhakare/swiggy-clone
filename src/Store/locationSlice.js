import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  error: null,
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});
export const { setLocation, setError } = locationSlice.actions;
export default locationSlice.reducer;
