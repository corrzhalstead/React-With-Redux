import {createSlice} from "@reduxjs/toolkit";

//Uses Imer Library for immutability
export const counterSlice = createSlice({
    name:"counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        addInputAmount: (state, action) => {
            state.value += action.payload;
    },
    },
});


export const selectCount = state => state.counter.value;
export const {increment, decrement, addInputAmount} = counterSlice.actions;

export default counterSlice.reducer;