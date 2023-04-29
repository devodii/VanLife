import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./car/carslice";

export const store = configureStore({
    reducer: {
        car: carReducer
    }
})