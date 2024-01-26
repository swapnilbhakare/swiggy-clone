import { createSlice } from "@reduxjs/toolkit";

const setUserDataInLocalStorage = (user) => {
  localStorage.setItem("user", JSON.stringify(user));
};
const initialState = {
  isAuthenticated: false,
  user: null,
  isReferralCode: false,
};
const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      localStorage.removeItem("user");
    },
    signup: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      setUserDataInLocalStorage(action.payload);
    },
    setReferralCode: (state, action) => {
      state.isReferralCode = action.payload;
    },
  },
});
export const { login, logout, signup, setReferralCode } = authSlice.actions;
export default authSlice.reducer;
