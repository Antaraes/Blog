import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: {},
  isLoading: false,
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blog = action.payload;
    },
    startLoading: (state) => {
      state.isLoading = true;
    },
    endLoading: (state) => {
      state.isLoading = false;
    },
  },
});

export const { addBlog, startLoading, endLoading } = blogSlice.actions;
export default blogSlice.reducer;
