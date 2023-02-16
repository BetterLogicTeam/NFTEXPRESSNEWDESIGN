import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: true,
};

export const UserAuth = createSlice({
  name: "UserAuth",
  initialState,
  reducers: {

  },
});

// export const { UpdateMobileMenu } = MobileSlice.actions;

export default UserAuth.reducer;
