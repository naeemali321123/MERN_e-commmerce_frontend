import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
  status: "idle",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userData: (state, {payload}) => {
      state.userData = {...payload, isAuth: true}
      console.log("current User Data ",state);
    },
  },
});

export const { userData } = authSlice.actions;

export default authSlice.reducer;
