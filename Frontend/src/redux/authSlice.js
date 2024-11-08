import { createSlice } from "@reduxjs/toolkit";
import { startTransition } from "react";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { setLoading, setUser } = authSlice.actions;
export default authSlice.reducer;