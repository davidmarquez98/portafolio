import { createSlice } from "@reduxjs/toolkit"

const initialState = { isActivated: false };

const darkmodeSlide = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        changeMode: (state) => { state.isActivated = !state.isActivated }
    }
});

export const { changeMode } = darkmodeSlide.actions;
export default darkmodeSlide.reducer;