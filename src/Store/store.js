import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
const store = configureStore({
  reducer: {
    cart: cartSlice,
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
