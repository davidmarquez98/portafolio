import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlide from "./darkmodeSlide.js";

const store = configureStore({
    reducer: {
        darmkmode: darkmodeSlide
    }
})

export default store;