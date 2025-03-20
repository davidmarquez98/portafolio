import { configureStore } from "@reduxjs/toolkit";
import darkmodeSlide from "./darkmodeSlide.js";
import appSlide from "./appSlide.js";

const store = configureStore({
    reducer: {
        mode: darkmodeSlide,
        showApp: appSlide
    }
})

export default store;