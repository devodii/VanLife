import { createSlice } from "@reduxjs/toolkit";

export const CarSlice =  createSlice({
    name: "car",
    initialState: {
        cars: ["Model X", "Model S", "Model Z", "Accessories"]
    },
    reducers: {
    Add:(state) => {state.cars.push("ndn")}   
    }
})

export const selectCars = state => state.car.cars
export const {Add} = CarSlice.actions
export default CarSlice.reducer