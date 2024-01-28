import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import restaurantReducer from "./restaurantSlice";
import authReducer from "./authSlice";
import locationReducer from "./locationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartSlice,
    restaurants: restaurantReducer,
    location: locationReducer,
  },
});

export default store;

// notes
/**
 * create stoe
 * - configureStote() -RTK
 * - <Provider my store to app
 * - <Provider store={store}> - import from react-redux
 *
 * Slice
 * -RTK createSlice({
 *      name:"",
 *      initialState:
 *      reducers:{
 *              addItem:(state,action)=>{state=action.payload}
 * }
 *
 * })
 *
 * export const {addItem}=cartSlice.actions;
 * export default cartSlice.reducer
 *
 * put that slice into store
 * -{
 *  reducer:{
 *      cart:cartSlice,
 *      user:userSlice,
 * }
 * }
 * **/
