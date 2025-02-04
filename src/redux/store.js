import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlide from "./darkmodeSlide.js";

const store = configureStore({
    reducer: {
        darkMode: darkmodeSlide
    }
})

export default store;