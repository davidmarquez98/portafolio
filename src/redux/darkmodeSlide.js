import { createSlice } from "@reduxjs/toolkit"

const initialState = { value: "light" };

const modeSlide = createSlice({
    name: "mode",
    initialState,
    reducers: {
        changeMode: (state) => { 
            state.value = state.value === "light" ? "dark" : "light";

            if (state.value === "dark") {
                document.body.classList.remove("light");
                document.body.classList.add("dark");
            } else {
                document.body.classList.remove("light");
                document.body.classList.add("dark");
            }
         }
    }
});

export const { changeMode } = modeSlide.actions;
export default modeSlide.reducer;