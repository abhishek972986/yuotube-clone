import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./Createslice"; // Import the reducer, not the slice

const store = configureStore({
  reducer: {
    video: videoReducer, // Use a meaningful key instead of "user"
  },
});

export default store;
