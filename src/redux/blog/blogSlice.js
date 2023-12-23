import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  blog: {},
};

const blogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    addBlog: (state, action) => {
      state.blog = action.payload;
    },
  },
});

export default blogSlice.reducer;
