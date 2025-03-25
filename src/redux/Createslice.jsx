import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: {
    video: null, // Store a single video object instead of an array
  },
  reducers: {
    setVideo: (state, action) => {
      state.video = action.payload; // Directly store the video object
    },
  },
});

export const { setVideo } = videoSlice.actions;
export default videoSlice.reducer;
