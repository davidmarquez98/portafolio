import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: true};

const appSlide = createSlice({
    name: "app",
    initialState,
    reducers: {
        changeShowApp: (state) => { 
            state.value = !state.value;
        }
    }
});

export const { changeShowApp } = appSlide.actions;
export default appSlide.reducer;