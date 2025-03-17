import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlide from "./darkmodeSlide.js";

const store = configureStore({
    reducer: {
        mode: darkmodeSlide
    }
})

export default store;