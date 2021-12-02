import { configureStore} from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
import pilotsReducer from "../pilots-redux/pilotsSlice"


export default configureStore({
    reducer: {
        pilots : pilotsReducer,
    },
});