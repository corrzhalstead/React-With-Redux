import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
import pilotsReducer from "../redux/pilotsSlice";

export default configureStore({
  reducer: {
    pilots: pilotsReducer,
  },
});
