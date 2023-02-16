import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  SingleNFT: {},
};

export const NFTSlice = createSlice({
  name: "SingleNFT",
  initialState,
  reducers: {
    SetSingleNFT: (state, action) => {
      state.SingleNFT = action.payload;
    },
  },
});

export const { SetSingleNFT } = NFTSlice.actions;

export default NFTSlice.reducer;
