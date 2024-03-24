import { configureStore } from "@reduxjs/toolkit"
import ApplicationReducer from "./slices/application/ApplicationSlice"
import HousingProgramReducer from "./slices/housing_program/HousingProgramSlice"

const store = configureStore({
    reducer: {
        application: ApplicationReducer,
        housing_program: HousingProgramReducer
    }
})

export { store }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch