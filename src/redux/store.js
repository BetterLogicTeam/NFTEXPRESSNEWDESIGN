import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import MobileSlice from "./Slices/MobileSlice";
import NFTSlice from "./Slices/NFTSlice";
import UserAuth from "./Slices/UserAuth";


const reducer = combineReducers({
  mobile: MobileSlice,
  nft: NFTSlice,
  UserAuth: UserAuth,

});
export const store = configureStore({
  reducer,
});
