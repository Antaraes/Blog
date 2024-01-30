import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  accessToken: "",
  refreshToken: "",
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    addAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    addRefreshToken: (state, action) => {
      state.refreshToken = action.payload;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.refreshToken = null;
      state.accessToken = null;
    },
  },
});
export const { addUser, addAccessToken, addRefreshToken, logout } = userSlice.actions;
export default userSlice.reducer;
