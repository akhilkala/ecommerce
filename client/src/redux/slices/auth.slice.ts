import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: true,
  },
  reducers: {
    login: (state, action) => {},
    register: (state, action) => {},
    logout: (state, action) => {},
  },
});

export const { login } = authSlice.actions;

export default authSlice.reducer;
