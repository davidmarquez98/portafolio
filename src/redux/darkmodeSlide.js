import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: "light" };

const modeSlide = createSlice({
    name: "mode",
    initialState,
    reducers: {
        changeMode: (state) => { state.value = state.value === "light" ? "dark" : "light" }
    }
});

export const { changeMode } = modeSlide.actions;
export default modeSlide.reducer;